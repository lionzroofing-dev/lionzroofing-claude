"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  thumbnail: string;
  images: string[];
}

interface GalleryClientProps {
  projects: Project[];
}

const INITIAL_VISIBLE = 6;
const BASE_SLIDE_W = 520;
const BASE_GAP = 28;

export default function GalleryClient({ projects }: GalleryClientProps) {
  const [showAll, setShowAll] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dims, setDims] = useState({ w: BASE_SLIDE_W, gap: BASE_GAP });

  useEffect(() => {
    const calc = () => {
      const vw = window.innerWidth;
      setDims({
        w: Math.min(BASE_SLIDE_W, Math.round(vw * 0.78)),
        gap: Math.min(BASE_GAP, Math.round(vw * 0.03)),
      });
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_VISIBLE);

  const openProject = (project: Project) => {
    setActiveProject(project);
    setActiveIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProject = useCallback(() => {
    setActiveProject(null);
    setActiveIndex(0);
    document.body.style.overflow = "";
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((i) => Math.max(i - 1, 0));
  }, []);

  const next = useCallback(() => {
    if (!activeProject) return;
    if (activeIndex === activeProject.images.length - 1) {
      closeProject();
    } else {
      setActiveIndex((i) => i + 1);
    }
  }, [activeProject, activeIndex, closeProject]);

  useEffect(() => {
    if (!activeProject) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProject();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeProject, closeProject, prev, next]);

  return (
    <>
      {/* ── Project Grid ── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-4">
              Our Work
            </div>
            {/* <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark mb-3">
              Projects <span className="text-lionzGold">Gallery</span>
            </h2> */}
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              Explore our roofing projects. Each one built with quality
              craftsmanship and attention to detail.
            </p>
          </div>

          {projects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg font-medium">
                Projects coming soon.
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Check back to see our latest work.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => openProject(project)}
                    className="group relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow duration-300"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-lionzDark/0 group-hover:bg-lionzDark/30 transition-colors duration-300" />
                    <div className="bg-white px-5 py-4 flex items-center justify-between">
                      <div>
                        <p className="text-lionzNavy font-bold text-sm">
                          {project.title}
                        </p>
                      </div>
                      <span className="flex items-center gap-1 text-lionzGold text-xs font-bold hover:underline">
                        View Project <ExternalLink size={12} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {!showAll && projects.length > INITIAL_VISIBLE && (
                <div className="text-center mt-10">
                  <button
                    onClick={() => setShowAll(true)}
                    className="inline-flex items-center gap-2 border-2 border-lionzNavy text-lionzNavy font-bold px-8 py-3 rounded-xl hover:bg-lionzNavy hover:text-white transition-all duration-200"
                  >
                    Load More Projects
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── Lightbox — filmstrip style ── */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 overflow-hidden"
          style={{
            background: "rgba(38,38,38,0.87)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
          onClick={closeProject}
        >
          {/* Close button — top right */}
          <button
            onClick={closeProject}
            className="absolute top-5 right-5 z-20 flex items-center justify-center w-12 h-12 rounded-full transition-all hover:scale-110"
            style={{ background: "rgba(90,90,90,0.75)", color: "white" }}
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* Filmstrip */}
          <div
            className="absolute inset-0 flex items-center"
          >
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                transform: `translateX(calc(50vw - ${dims.w / 2 + activeIndex * (dims.w + dims.gap)}px))`,
                gap: dims.gap,
              }}
            >
              {activeProject.images.map((img, i) => (
                <div
                  key={i}
                  className="shrink-0 transition-opacity duration-400"
                  style={{
                    width: dims.w,
                    opacity: i === activeIndex ? 1 : 0.38,
                    cursor: i !== activeIndex ? "pointer" : "default",
                  }}
                  onClick={(e) => { e.stopPropagation(); if (i !== activeIndex) setActiveIndex(i); }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img}
                    alt={`${activeProject.title} — ${i + 1}`}
                    className="w-full object-cover"
                    style={{
                      height: "60vh",
                      borderRadius: 4,
                      display: "block",
                    }}
                  />
                  {i === activeIndex && (
                    <div className="mt-4 px-1">
                      <p className="text-white text-sm font-semibold leading-snug">
                        {activeProject.title}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom nav arrows */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              disabled={activeIndex === 0}
              className="flex items-center justify-center w-12 h-12 rounded-full transition-all hover:scale-105 disabled:opacity-25 disabled:cursor-not-allowed"
              style={{ background: "rgba(90,90,90,0.75)", color: "white" }}
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="flex items-center justify-center w-12 h-12 rounded-full transition-all hover:scale-105"
              style={{ background: "rgba(90,90,90,0.75)", color: "white" }}
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
