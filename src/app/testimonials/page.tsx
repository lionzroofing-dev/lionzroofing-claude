import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { resolveImage } from "@/lib/resolveImage";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "See what customers say about Lionz Roofing. Trusted by homeowners and businesses across Fort Lauderdale and South Florida.",
};

export default function TestimonialsPage() {
  const heroImg = resolveImage("testimonials", "hero");
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <Header />
      <main>
        <section className="relative h-[200px] md:h-[260px] flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 60%" }}
          />
          <div className="absolute inset-0 bg-lionzDark/70" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Customer <span className="text-lionzGold">Reviews</span>
            </h1>
          </div>
        </section>
        <section className="section-padding bg-lionzLight">
          <div className="max-w-5xl mx-auto">
            <SectionTitle
              label="Google Reviews"
              title="See What Our Customers Are Saying"
            />
            <div
              className="elfsight-app-74ada3ac-ad98-42a9-83f6-3e023b25ba97"
              data-elfsight-app-lazy
            />
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
