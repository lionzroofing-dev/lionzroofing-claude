"use client";

import { useState, useRef, useEffect, useCallback, memo } from "react";
import { ChevronLeft, ChevronRight, Wrench, Play, Loader2 } from "lucide-react";
import { reels } from "@/data/reels";

type Reel = (typeof reels)[0];

/* ─── Shared video ref registry — lives outside React so it's always stable ─── */
const videoRegistry: Record<string, HTMLVideoElement | null> = {};

/* ─── ReelCard — memoised so it only re-renders when its own props change ─── */
const ReelCard = memo(function ReelCard({
  reel,
  width,
  height,
  isCenter,
  isPlaying,
  isLoading,
  thumb,
  onPlay,
  onVideoStarted,
}: {
  reel: Reel;
  width: number;
  height: number;
  isCenter: boolean;
  isPlaying: boolean;
  isLoading: boolean;
  thumb: string | undefined;
  onPlay: (id: string) => void;
  onVideoStarted: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const registerRef = useCallback((el: HTMLVideoElement | null) => {
    videoRegistry[reel.id] = el;
    videoRef.current = el;
  }, [reel.id]);

  /* React sets src first, then this effect calls play() — clean GPU pipeline */
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (isPlaying) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [isPlaying]);

  const showContent = !isPlaying || isLoading;

  return (
    <div
      className="relative border border-gray-200 bg-lionzNavy"
      style={{ width, height, borderRadius: "1.5rem", clipPath: "inset(0 round 1.5rem)" }}
    >
      {/* React controls src — browser owns the full load→decode→render pipeline */}
      {reel.videoSrc && (
        <video
          ref={registerRef}
          src={isPlaying ? reel.videoSrc : undefined}
          playsInline
          controls
          onPlay={onVideoStarted}
          onEnded={() => onPlay("")}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Cover + gradient — visible until video is playing and loaded */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300"
        style={{ opacity: showContent ? 1 : 0 }}
      >
        {thumb ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={thumb} alt={reel.location ?? ""} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-lionzNavy flex flex-col items-center justify-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo/logo.webp" alt="" style={{ height: 40, width: "auto", opacity: 0.5 }} />
            {reel.location && <span className="text-white/40 text-[11px]">{reel.location}</span>}
          </div>
        )}
        {/* Gradient + location inside cover so they fade together */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/75 to-transparent" />
        {reel.location && (
          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5">
            <svg width={10} height={10} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" fill="#E0B000"/>
              <circle cx="12" cy="10" r="3" fill="white"/>
            </svg>
            <span className="text-white text-xs font-semibold drop-shadow">{reel.location}</span>
          </div>
        )}
      </div>

      {/* Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <div className="bg-black/40 backdrop-blur-sm rounded-full p-4">
            <Loader2 size={24} className="text-lionzGold animate-spin" />
          </div>
        </div>
      )}

      {/* Play button */}
      {!isPlaying && !isLoading && reel.videoSrc && (
        <button
          onClick={(e) => { e.stopPropagation(); onPlay(reel.id); }}
          className={`absolute inset-0 flex items-center justify-center z-30 group outline-none focus:outline-none ${!isCenter ? "opacity-0 hover:opacity-100 transition-opacity duration-200" : ""}`}
          aria-label="Play"
        >
          <div className="bg-white/90 backdrop-blur-sm group-hover:bg-white rounded-full p-4 transition-all duration-200 group-hover:scale-110">
            <Play size={22} fill="#E0B000" className="translate-x-0.5" />
          </div>
        </button>
      )}
    </div>
  );
});

/* ─── Main Section ─── */
export default function ReelsSection() {
  const [center,    setCenter]    = useState(1);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [thumbs,    setThumbs]    = useState<Record<string, string>>({});

  const sectionRef = useRef<HTMLElement>(null);
  const extracting = useRef<Set<string>>(new Set());
  const playingRef = useRef<string | null>(null);

  useEffect(() => { playingRef.current = playingId; }, [playingId]);

  function stopVideo(id: string | null) {
    if (!id) return;
    const el = videoRegistry[id];
    if (el) el.pause();
  }

  /* onPlay event from the video element clears the spinner */
  const handleVideoStarted = useCallback(() => setLoadingId(null), []);

  const handlePlay = useCallback((id: string) => {
    if (!id) { stopVideo(playingRef.current); setPlayingId(null); setLoadingId(null); return; }
    if (id === playingRef.current) return;
    stopVideo(playingRef.current);
    setPlayingId(id);
    setLoadingId(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nav = useCallback((dir: "prev" | "next") => {
    stopVideo(playingRef.current);
    setPlayingId(null);
    setLoadingId(null);
    setCenter((i) =>
      dir === "prev"
        ? (i === 0 ? reels.length - 1 : i - 1)
        : (i === reels.length - 1 ? 0 : i + 1)
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ─── Lazy thumbnail extraction — staggered, visible cards only ─── */
  const extractFrame = useCallback((src: string, id: string) => {
    if (extracting.current.has(id)) return;
    extracting.current.add(id);
    const v = document.createElement("video");
    v.preload = "metadata"; v.muted = true; v.playsInline = true;
    v.addEventListener("loadedmetadata", () => { v.currentTime = 0.5; });
    v.addEventListener("seeked", () => {
      try {
        const c = document.createElement("canvas");
        c.width = v.videoWidth || 320; c.height = v.videoHeight || 568;
        c.getContext("2d")?.drawImage(v, 0, 0);
        setThumbs((p) => ({ ...p, [id]: c.toDataURL("image/jpeg", 0.75) }));
      } catch { /* tainted */ }
      finally { v.src = ""; extracting.current.delete(id); }
    });
    v.addEventListener("error", () => { v.src = ""; extracting.current.delete(id); });
    v.src = src;
  }, []);

  const visible = [-2, -1, 0, 1, 2].map((offset) => ({
    reel: reels[(center + offset + reels.length) % reels.length],
    offset,
  }));

  useEffect(() => {
    visible.forEach(({ reel }, i) => {
      if (!reel.videoSrc || reel.thumbnail || thumbs[reel.id]) return;
      const t = setTimeout(() => extractFrame(reel.videoSrc!, reel.id), i * 400);
      return () => clearTimeout(t);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [center]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (!e.isIntersecting) { stopVideo(playingRef.current); setPlayingId(null); setLoadingId(null); } },
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section ref={sectionRef} className="bg-white section-padding overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full">
            <Wrench size={13} className="text-lionzGold" /> Our Work
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark text-center mb-14">
          Roofs <span className="text-lionzGold">We&apos;ve Built</span>
        </h2>

        {/* Desktop */}
        <div className="hidden md:flex relative items-center justify-center">
          <button onClick={() => nav("prev")} aria-label="Previous"
            className="absolute left-0 z-30 bg-black/80 hover:bg-black text-white rounded-full p-2.5 transition-colors shadow-md outline-none focus:outline-none">
            <ChevronLeft size={22} />
          </button>

          <div className="flex items-center justify-center gap-3">
            {visible.map(({ reel, offset }) => {
              const playing = playingId === reel.id;
              /* playing card always gets full size + opacity */
              const opacity = playing || offset === 0 ? "opacity-100" : Math.abs(offset) === 1 ? "opacity-60" : "opacity-25";
              const shadow  = playing || offset === 0 ? "shadow-xl" : Math.abs(offset) === 1 ? "shadow-md" : "shadow-sm";
              const scale   = playing || offset === 0 ? "scale-100" : Math.abs(offset) === 1 ? "scale-95" : "scale-90";
              const w = offset === 0 ? 280 : Math.abs(offset) === 1 ? 240 : 200;
              const h = offset === 0 ? 490 : Math.abs(offset) === 1 ? 420 : 360;

              return (
                <div
                  key={reel.id + offset}
                  onClick={() => {
                    if (offset !== 0) {
                      stopVideo(playingRef.current);
                      setPlayingId(null); setLoadingId(null);
                      setCenter((center + offset + reels.length) % reels.length);
                    }
                  }}
                  className={`${opacity} ${shadow} ${scale} transition-[transform,opacity] duration-300 ease-out ${Math.abs(offset) === 2 ? "hidden lg:block" : ""} ${offset !== 0 ? "cursor-pointer" : ""}`}
                >
                  <ReelCard
                    reel={reel} width={w} height={h}
                    isCenter={offset === 0}
                    isPlaying={playing}
                    isLoading={loadingId === reel.id}
                    thumb={reel.thumbnail || thumbs[reel.id]}
                    onPlay={handlePlay}
                    onVideoStarted={handleVideoStarted}
                  />
                </div>
              );
            })}
          </div>

          <button onClick={() => nav("next")} aria-label="Next"
            className="absolute right-0 z-30 bg-black/80 hover:bg-black text-white rounded-full p-2.5 transition-colors shadow-md outline-none focus:outline-none">
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-2 no-scrollbar">
          {reels.map((reel) => (
            <div key={reel.id} className="snap-center shrink-0">
              <ReelCard
                reel={reel} width={260} height={460} isCenter
                isPlaying={playingId === reel.id}
                isLoading={loadingId === reel.id}
                thumb={reel.thumbnail || thumbs[reel.id]}
                onPlay={handlePlay}
                onVideoStarted={handleVideoStarted}
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {reels.map((reel, i) => (
            <button key={reel.id}
              onClick={() => { stopVideo(playingRef.current); setPlayingId(null); setLoadingId(null); setCenter(i); }}
              aria-label={`Reel ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${i === center ? "w-6 h-2 bg-lionzGold" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
