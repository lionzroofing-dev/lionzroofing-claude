import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import GalleryClient from "@/components/GalleryClient";

export const metadata: Metadata = {
  title: "Projects Gallery | Lionz Roofing",
  description:
    "Browse completed roofing projects by Lionz Roofing — residential and commercial work across Fort Lauderdale, Miami, Palm Beach, and South Florida.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── 1. Hero Banner ── */}
        <section className="relative h-[200px] md:h-[260px] flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/gallery/hero.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 40%" }}
          />
          <div className="absolute inset-0 bg-lionzDark/70" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Projects <span className="text-lionzGold">Gallery</span>
            </h1>
          </div>
        </section>

        {/* ── 2. Interactive Gallery ── */}
        <GalleryClient />

        {/* ── 3. CTA ── */}
        <CTASection
          badge="Book Now"
          title="Ready To Start Your"
          highlight="Project?"
          subtitle="Get a free roofing estimate from Lionz Roofing. Serving Miami, Fort Lauderdale, Palm Beach, and all of Southeast Florida."
          primaryLabel="Get Your Free Quote"
          primaryHref="/contact"
        />

      </main>
      <Footer />
    </>
  );
}
