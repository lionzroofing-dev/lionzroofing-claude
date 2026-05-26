import type { Metadata } from "next";
import { MapPin, CheckCircle, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import ServicesSlider from "@/components/ServicesSlider";

export const metadata: Metadata = {
  title: "Gutter Works — Installation, Repair & Protection | Lionz Roofing",
  description:
    "Professional gutter installation, repair, and replacement across Miami-Dade, Broward, and Palm Beach. Lionz Roofing keeps your home protected from water damage year-round.",
};

const FEATURES = [
  "Transparent Pricing",
  "Full-Service Roofing Solutions",
  "Customer-First Approach",
];

const BENEFITS = [
  "Protect roof edges, fascia, and soffits from water damage",
  "Prevent foundation erosion and soil washout",
  "Reduce mold, mildew, and moisture intrusion",
  "Minimize exterior staining and siding deterioration",
  "Improve roof lifespan and drainage efficiency",
];

const WARNING_SIGNS = [
  "Overflowing or leaking gutters",
  "Sagging, rusted, or detached sections",
  "Water stains on exterior walls or fascia boards",
  "Pooling water near the foundation",
  "Mold or moisture around roof edges",
];

export default function GutterWorksPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── 1. Hero Banner ── */}
        <section className="relative h-[200px] md:h-[260px] flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/gutter-works/hero.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 40%" }}
          />
          <div className="absolute inset-0 bg-lionzDark/70" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-lionzGold leading-tight">
              Gutter Works
            </h1>
          </div>
        </section>

        {/* ── 2. Intro ── */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — main image */}
            <div className="rounded-3xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gutter-works/intro.webp"
                alt="Gutter Installation and Repair"
                className="w-full h-[420px] object-cover rounded-3xl"
              />
            </div>

            {/* Right — content + secondary image */}
            <div>
              <div className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                <MapPin size={13} className="text-lionzGold" /> Gutter Works
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark leading-tight mb-5">
                Seamless Gutter{" "}
                <span className="text-lionzGold">
                  Installation, Repair &amp; Protection
                </span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Proper gutter systems play a critical role in protecting your
                roof, walls, foundation, and landscaping — especially in South
                Florida&apos;s heavy rain and storm seasons. Lionz Roofing
                provides professional gutter installation, repair, and
                replacement services designed to handle intense rainfall, high
                winds, and debris buildup common throughout Miami-Dade, Broward,
                and Palm Beach counties.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Our seamless gutter systems efficiently direct water away from
                your property, preventing roof edge damage, fascia rot, soil
                erosion, and interior water intrusion. Whether paired with a new
                roof or installed as a standalone upgrade, our gutter solutions
                are engineered for durability and long-term performance.
              </p>

              {/* Feature bullets */}
              <ul className="space-y-2 mb-8">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-700 text-sm font-semibold">
                    <CheckCircle size={16} className="text-lionzGold shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button href="/about" variant="primary">
                  More About Us
                </Button>
                {/* Secondary image */}
                <div className="rounded-2xl overflow-hidden shrink-0 w-full sm:w-44 h-28">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/gutter-works/intro-secondary.webp"
                    alt="Gutter Works"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Why Gutter Works Are Important ── */}
        <section className="bg-lionzDark py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Badge + Heading */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 border border-lionzGold text-lionzGold text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                Benefits
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Why{" "}
                <span className="text-lionzGold">Gutter Works</span> Are{" "}
                <span className="text-lionzGold">Important</span> In South
                Florida
              </h2>
            </div>

            {/* Two-column: text left, benefits list right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Left — text */}
              <div className="space-y-5">
                <p className="text-gray-300 text-base leading-relaxed">
                  Without properly functioning gutters, rainwater can cause
                  serious structural and roofing issues. Quality gutter systems:
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  In South Florida&apos;s frequent downpours, gutters are not
                  optional — they are a vital part of your roofing system.
                </p>
              </div>

              {/* Right — benefit bullets in a bordered box */}
              <div className="border border-lionzGold/30 rounded-2xl p-8">
                <ul className="space-y-3">
                  {BENEFITS.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-gray-200 text-sm">
                      <CheckCircle size={16} className="text-lionzGold shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Two side-by-side photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gutter-works/benefits-1.webp"
                alt="Gutter installation work"
                className="w-full h-64 object-cover rounded-2xl"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gutter-works/benefits-2.webp"
                alt="Roof and gutter system"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* ── 4. When To Call A Gutter Professional ── */}
        <section className="bg-lionzNavy py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              When To Call A{" "}
              <span className="text-lionzGold">Gutter Professional</span>
            </h2>
            <p className="text-gray-400 text-sm mb-8">
              Schedule gutter service if you notice:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {WARNING_SIGNS.map((sign) => (
                <div
                  key={sign}
                  className="flex items-center gap-2 border border-lionzGold/40 rounded-full px-5 py-2.5"
                >
                  <AlertTriangle size={13} className="text-lionzGold shrink-0" />
                  <span className="text-white text-sm font-semibold">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. Services Slider ── */}
        <ServicesSlider />

        {/* ── 6. CTA ── */}
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
