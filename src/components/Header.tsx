"use client";

import { useEffect, useRef, useState } from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [smooth, setSmooth] = useState(false);
  const snapping = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (snapping.current) return;

      const y = window.scrollY;

      if (y > 0) {
        setSmooth(false);
        setScrolled(true);
      } else {
        setSmooth(true);
        setScrolled(false);
      }
    };

    const onScrollUp = () => {
      if (snapping.current) return;
      const y = window.scrollY;
      if (y > 0 && y < 60) {
        snapping.current = true;
        setSmooth(true);
        setScrolled(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => { snapping.current = false; }, 600);
      }
    };

    let lastY = 0;
    const handler = () => {
      const y = window.scrollY;
      if (y < lastY) onScrollUp();
      else onScroll();
      lastY = y;
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-lionzNavy">
      <div
        className={`grid overflow-hidden ${smooth ? "transition-[grid-template-rows] duration-300 ease-in-out" : ""}`}
        style={{ gridTemplateRows: scrolled ? "0fr" : "1fr" }}
      >
        <div className="overflow-hidden">
          <TopBar />
        </div>
      </div>
      <Navbar />
    </header>
  );
}
