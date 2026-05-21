import type { Metadata } from "next";
import { MapPin, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import SectionTitle from "@/components/SectionTitle";
import ServicesSlider from "@/components/ServicesSlider";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Button from "@/components/Button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Roofing Services",
  description:
    "Roof repair, replacement, residential and commercial roofing services in Fort Lauderdale and South Florida. Storm damage and roof inspections available.",
};

const TRUST_ITEMS = [
  "Expert Team",
  "Customer Satisfaction",
  "Certified & Insured",
  "Fast & Reliable Service",
];

export default function ServicesPage() {
  return (
    <>
      <style>{`
        .fade-up { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.is-visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <Header />
      <main>
        {/* ── 1. Hero Banner ── */}
        <section className="relative h-[200px] md:h-[260px] flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/hero.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 40%" }}
          />
          <div className="absolute inset-0 bg-lionzDark/70" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Our <span className="text-lionzGold">Services</span>
            </h1>
          </div>
        </section>

        {/* ── 2. Intro ── */}
        <section className="bg-[#F5F0E8] py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left image */}
            <div className="rounded-3xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/services/hero.png"
                alt="Lionz Roofing Services"
                className="w-full h-[420px] object-cover rounded-3xl"
              />
            </div>

            {/* Right content */}
            <div>
              <div className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                <MapPin size={13} className="text-lionzGold" /> Licensed,
                Insured &amp; Reliable
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-lionzDark leading-tight mb-5">
                Reliable Roofing Services You Can Count On Across{" "}
                <span className="text-lionzGold">Southeast Florida</span>
              </h1>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                From minor repairs to complete roof replacements, Lionz Roofing
                provides expert roofing solutions tailored to Southeastern
                Florida&apos;s unique climate. Whether you&apos;re a homeowner
                facing leaks or a business owner seeking long-term durability,
                our team delivers high-quality craftsmanship focused on
                protecting your property against intense sun, heavy rains, and
                hurricane threats. Every project we handle is built to last —
                backed by years of experience, trusted materials, and a
                commitment to customer satisfaction that truly sets us apart in
                the region.
              </p>

              {/* Trust items */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {TRUST_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle
                      size={18}
                      className="text-lionzGold shrink-0"
                    />
                    <span className="text-lionzNavy font-semibold text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Button href="/contact" variant="primary">
                Get Your Free Quote
              </Button>
            </div>
          </div>
        </section>

        {/* ── 3. Services Slider ── */}
        <ServicesSlider />

        {/* ── 4. FAQ ── */}
        <FAQSection />

        {/* ── 5. CTA ── */}
        <CTASection
          badge="Book Now"
          title="We Are Here To"
          highlight="Help"
          subtitle="At Lionz Roofing, we protect what matters most — your home and your business — with durable, high-quality roofing solutions tailored to your needs."
          primaryLabel="Get Your Free Quote"
          primaryHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
