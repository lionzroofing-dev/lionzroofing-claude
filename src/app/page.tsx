import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import AboutSection from "@/components/AboutSection";
import ServicesSlider from "@/components/ServicesSlider";
import BlogPreview from "@/components/BlogPreview";
import ReelsSection from "@/components/ReelsSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lionz Roofing | South Florida Roofing Contractor",
  description:
    "South Florida's trusted roofing professionals. Roof repair, replacement, residential and commercial roofing services. Licensed, insured, free estimates.",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Hero />

        {/* Logo Ticker */}
        <LogoTicker />

        {/* About */}
        <AboutSection />

        {/* Services */}
        <ServicesSlider />

        {/* Blog Preview */}
        <BlogPreview />

        {/* Reels */}
        <ReelsSection />
      </main>
      <Footer />
    </>
  );
}
