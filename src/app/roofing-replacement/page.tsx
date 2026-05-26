import type { Metadata } from "next";
import { MapPin, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import ServicesSlider from "@/components/ServicesSlider";
import CTASection from "@/components/CTASection";
import { resolveImage } from "@/lib/resolveImage";

export const metadata: Metadata = {
  title: "Roof Replacements In Southeast Florida | Lionz Roofing",
  description:
    "Expert roof replacement services in Florida by Lionz Roofing. Hurricane-rated, energy-efficient, Miami-Dade-approved materials for residential and commercial properties across South Florida.",
};

const TRUST_ITEMS = [
  "Transparent Pricing",
  "Full-Service Roofing Solutions",
  "Customer-First Approach",
];

const BENEFITS = [
  "Provides full protection against hurricanes and severe storms",
  "Improves energy efficiency and lowers cooling costs",
  "Prevents recurring leaks and structural deterioration",
  "Increases property value and curb appeal",
  "Ensures compliance with Florida and Miami-Dade building codes",
  "Reduces long-term maintenance and repair expenses",
];

const WHEN_TO_CONSIDER = [
  "Your roof is 15–20+ years old",
  "Leaks continue despite repeated repairs",
  "Shingles are curling, cracking, or missing",
  "Tiles are broken, displaced, or deteriorating",
  "Storm or hurricane damage has weakened the roof system",
  "Energy bills are rising due to poor insulation or ventilation",
];

export default function RoofingReplacementPage() {
  const imgs = {
    hero:             resolveImage("roofing-replacement", "hero"),
    intro:            resolveImage("roofing-replacement", "intro"),
    introSecondary1:  resolveImage("roofing-replacement", "intro-secondary-1"),
    introSecondary2:  resolveImage("roofing-replacement", "intro-secondary-2"),
    benefits:         resolveImage("roofing-replacement", "benefits"),
    whenToConsider:   resolveImage("roofing-replacement", "when-to-consider"),
  };
  return (
    <>
      <Header />
      <main>

        {/* ── 1. Hero Banner ── */}
        <section className="relative h-[200px] md:h-[300px] flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgs.hero}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 40%" }}
          />
          <div className="absolute inset-0 bg-lionzDark/70" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-lionzGold leading-tight">
              Roof Replacements
            </h1>
          </div>
        </section>

        {/* ── 2. Intro ── */}
        <section className="bg-[#F5F0E8] py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_0.55fr] gap-8 items-center">

            {/* Left — main image */}
            <div className="rounded-3xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgs.intro}
                alt="Roof Replacement Services"
                className="w-full h-[440px] object-cover rounded-3xl"
              />
            </div>

            {/* Middle — content */}
            <div>
              <div className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                <MapPin size={13} className="text-lionzGold" /> Roof Replacements
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark leading-tight mb-5">
                Hurricane-Rated,{" "}
                <span className="text-lionzGold">Energy-Efficient</span>{" "}
                Roofing Systems
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                When repairs are no longer enough, a full roof replacement becomes
                essential to protect your property from Florida&apos;s extreme heat,
                heavy rainfall, and hurricane-force winds. Lionz Roofing specializes
                in code-compliant roof replacement services using Miami-Dade&ndash;approved
                materials built for long-term durability and energy efficiency.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                We replace worn, storm-damaged, or aging roofs with high-performance
                systems — including metal roofing, tile roofing, architectural shingles,
                and flat roofing solutions — tailored to South Florida&apos;s climate
                and building requirements.
              </p>
              <ul className="space-y-2 mb-8">
                {TRUST_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-lionzGold shrink-0" />
                    <span className="text-lionzNavy font-semibold text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/about" variant="primary">
                More About Us
              </Button>
            </div>

            {/* Right — two stacked images (desktop only) */}
            <div className="hidden lg:flex flex-col gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgs.introSecondary1}
                alt="Roof replacement project"
                className="w-full h-[210px] object-cover rounded-2xl"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgs.introSecondary2}
                alt="Completed roof replacement"
                className="w-full h-[210px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* ── 3. Why Roof Replacement Is Important ── */}
        <section className="bg-lionzNavy py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 border border-lionzGold text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full">
                <CheckCircle size={13} className="text-lionzGold" /> Benefits
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12">
              Why Roof Replacement{" "}
              <span className="text-lionzGold">Is Important</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  An aging or compromised roof puts your entire property at risk. A
                  professional roof replacement:
                </p>
                <ul className="space-y-3 mb-6">
                  {BENEFITS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-lionzGold shrink-0 mt-0.5" />
                      <span className="text-gray-200 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Replacing your roof at the right time protects not only your
                  structure but also your investment.
                </p>
              </div>
              <div className="border-4 border-lionzGold rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgs.benefits}
                  alt="Why roof replacement is important"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. When To Consider A Roof Replacement ── */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgs.whenToConsider}
                alt="Roof replacement inspection"
                className="w-full h-[480px] object-cover rounded-3xl"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                <MapPin size={13} className="text-lionzGold" /> When To Consider
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark leading-tight mb-5">
                When To{" "}
                <span className="text-lionzGold">Consider</span>{" "}
                A Roof Replacement
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                You may need a roof replacement if:
              </p>
              <ul className="space-y-3 mb-6">
                {WHEN_TO_CONSIDER.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle size={16} className="text-lionzGold shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Lionz Roofing delivers{" "}
                <span className="font-semibold text-lionzNavy">
                  South Florida roof replacements
                </span>{" "}
                built for strength, efficiency, and long-term peace of mind.
              </p>
              <Button href="/contact" variant="primary">
                Get Your Free Quote
              </Button>
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
