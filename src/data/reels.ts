export interface Reel {
  id: string;
  thumbnail: string;
  videoSrc?: string;
  title?: string;
  location?: string;
}

// Thumbnails → /public/images/reels/
// Videos     → /public/videos/reels/
export const reels: Reel[] = [
  { id: "reel-01", thumbnail: "/images/reels/reel-01.jpg", videoSrc: "/videos/reels/reel-01.mp4", location: "Fort Lauderdale, FL" },
  { id: "reel-02", thumbnail: "/images/reels/reel-02.jpg", videoSrc: "/videos/reels/reel-02.mp4", location: "North Miami Beach, FL" },
  { id: "reel-03", thumbnail: "/images/reels/reel-03.jpg", videoSrc: "/videos/reels/reel-03.mp4", location: "Coral Springs, FL" },
  { id: "reel-04", thumbnail: "/images/reels/reel-04.jpg", videoSrc: "/videos/reels/reel-04.mp4", location: "Pompano Beach, FL" },
  { id: "reel-05", thumbnail: "/images/reels/reel-05.jpg", videoSrc: "/videos/reels/reel-05.mp4", location: "Boca Raton, FL" },
  { id: "reel-06", thumbnail: "/images/reels/reel-06.jpg", videoSrc: "/videos/reels/reel-06.mp4", location: "Hollywood, FL" },
  { id: "reel-07", thumbnail: "/images/reels/reel-07.jpg", videoSrc: "/videos/reels/reel-07.mp4", location: "Deerfield Beach, FL" },
  { id: "reel-08", thumbnail: "/images/reels/reel-08.jpg", videoSrc: "/videos/reels/reel-08.mp4", location: "Hallandale Beach, FL" },
  { id: "reel-09", thumbnail: "/images/reels/reel-09.jpg", videoSrc: "/videos/reels/reel-09.mp4", location: "Miramar, FL" },
  { id: "reel-010", thumbnail: "/images/reels/reel-010.jpg", videoSrc: "/videos/reels/reel-010.mp4", location: "Sunrise, FL" },
  { id: "reel-011", thumbnail: "/images/reels/reel-011.jpg", videoSrc: "/videos/reels/reel-011.mp4", location: "Plantation, FL" },
];
