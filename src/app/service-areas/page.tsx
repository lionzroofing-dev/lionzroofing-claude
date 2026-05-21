"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MapPin, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSlider from "@/components/ServicesSlider";
import Button from "@/components/Button";

/* ─── Lightweight fade-up hook ─── */
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const CITIES = [
  "Miami",
  "Miami Beach",
  "Boca Raton",
  "Hallandale Beach",
  "North Miami",
  "Deerfield Beach",
  "Miami Gardens",
  "Aventura",
  "Hialeah",
  "Bal Harbour And Surfside",
  "Broward County",
  "North Miami Beach",
  "Fort Lauderdale",
  "West Palm Beach",
  "Hollywood",
  "Coral Gables",
  "Coconut Creek",
  "Sunrise",
  "Coral Springs",
  "Pompano Beach",
  "Pembroke Pines",
  "Miramar",
  "Margate",
];

const INTRO_PILLS = [
  "Miami",
  "Boca Raton",
  "Fort Lauderdale",
  "West Palm Beach",
  "Hollywood",
  "Broward County",
  "Surrounding Communities",
];

const FAQS = [
  {
    q: "How Do I Know If My Roof Needs Repair Or Replacement? in Southeast Florida?",
    a: "If you notice missing or damaged shingles after a storm, water stains on ceilings from heavy rains, sagging areas due to moisture buildup, or rising energy bills from poor insulation, it’s time for a professional inspection. We offer free assessments throughout Miami, Fort Lauderdale, Hollywood, Palm Beach, and Boca Raton to help you make the best decision for your roof’s health.",
  },
  {
    q: "How Long Does A Roof Replacement Usually Take?",
    a: "For most residential roofs in Southeast Florida, we get the job done in just 1 to 2 days. Of course, the timeline depends on the size and complexity, but at Lionz Roofing, we move fast without ever cutting corners. Your home’s protection is our priority, so we deliver quality workmanship on time—every time.",
  },
  {
    q: "Do You Offer Warranties On Roofing Work?",
    a: "Absolutely! Every roof we install in Florida comes backed by strong manufacturer warranties specifically designed to meet the state’s strict building codes—plus our own workmanship guarantee. At Lionz Roofing, we build roofs that stand up to Florida’s toughest weather and back them with the peace of mind every homeowner deserves.",
  },
  {
    q: "Do You Help With Insurance Claims For Storm Damage?",
    a: "Absolutely. Serving Miami, Fort Lauderdale, Palm Beach, Hollywood, and Boca Raton, we specialize in storm damage repair and guide you through every step of the insurance claim process. From thorough inspections and detailed documentation to direct communication with your insurance company, Lionz Roofing is here to make your recovery smooth and stress-free.",
  },
  {
    q: "What Areas Do You Serve?",
    a: "We proudly serve multiple areas including Miami, Fort Lauderdale, Boca Raton, Hollywood, and West Palm Beach, as well as other communities in Broward, Miami-Dade, and Palm Beach Counties.",
  },
  {
    q: "What Types Of Roofing Materials Do You Install?",
    a: "We work with a wide range of high-quality materials built to withstand Southeast Florida’s unique climate, including impact-resistant asphalt shingles, durable metal roofing, energy-efficient flat/TPO systems, and classic tile roofs. No matter your style or needs, we’ll help you choose the best roofing solution to protect your home or business from the sun, storms, and ocean exposure.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left gap-4 group"
      >
        <span className="text-lionzNavy font-semibold text-sm md:text-base group-hover:text-lionzGold transition-colors">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-lionzGold transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 pb-4" : "max-h-0"}`}
      >
        <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function ServiceAreasPage() {
  const heroRef = useFadeUp();
  const introRef = useFadeUp();
  const sliderRef = useFadeUp();
  const solutionRef = useFadeUp();
  const gridRef = useFadeUp();
  const faqRef = useFadeUp();

  return (
    <>
      <style>{`
        .fade-up { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.is-visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <Header />
      <main>
        {/* ── 1. Hero ── */}
        <section className="relative h-[200px] md:h-[260px] flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/service-areas/hero.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 5%" }}
          />
          <div className="absolute inset-0 bg-lionzDark/70" />
          <div ref={heroRef} className="fade-up relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Service <span className="text-lionzGold">Areas</span>
            </h1>
          </div>
        </section>

        {/* ── 2. Intro Service Area ── */}
        <section className="bg-[#F5F0E8] py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left image */}
            <div ref={introRef} className="fade-up rounded-3xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/service-areas/intro.webp"
                alt="Lionz Roofing Service Area"
                className="w-full h-[420px] object-cover rounded-3xl"
              />
            </div>
            {/* Right content */}
            <div>
              <div className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                <MapPin size={13} className="text-lionzGold" /> Service Areas
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark leading-tight mb-5">
                Providing Reliable Roofing Services Across{" "}
                <span className="text-lionzGold">Southeast Florida</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                From minor repairs to complete roof replacements, Lionz Roofing
                provides expert roofing solutions tailored to Southeastern
                Florida’s unique climate. Whether you’re a homeowner facing
                leaks or a business owner seeking long-term durability, our team
                delivers high-quality craftsmanship focused on protecting your
                property against intense sun, heavy rains, and hurricane
                threats. Every project we handle is built to last — backed by
                years of experience, trusted materials, and a commitment to
                customer satisfaction that truly sets us apart in the region.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {INTRO_PILLS.map((city) => (
                  <div
                    key={city}
                    className="flex items-center gap-1.5 border border-lionzGold rounded-full px-4 py-2"
                  >
                    <MapPin size={12} className="text-lionzGold shrink-0" />
                    <span className="text-lionzNavy font-semibold text-sm">
                      {city}
                    </span>
                  </div>
                ))}
              </div>
              <Button href="/contact" variant="primary">
                Get Your Free Quote
              </Button>
            </div>
          </div>
        </section>

        {/* ── 3. Services Highlight ── */}
        <section className="bg-lionzNavy section-padding">
          <div ref={sliderRef} className="fade-up max-w-7xl mx-auto">
            <ServicesSlider />
          </div>
        </section>

        {/* ── 4. Complete Roofing Solutions ── */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div ref={solutionRef} className="fade-up">
              <div className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                <MapPin size={13} className="text-lionzGold" /> Service Areas
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark leading-tight mb-5">
                Complete Roofing Solutions For Florida&apos;s{" "}
                <span className="text-lionzGold">Homes And Businesses</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Lionz Roofing provides expert residential and commercial roofing
                across Miami, Fort Lauderdale, Boca Raton, West Palm Beach, and
                Hollywood. From durable, hurricane-ready roof replacements to
                commercial inspections, we protect homes and businesses from
                Florida’s sun, storms, and heavy rains—delivering safe,
                code-compliant, and long-lasting results. Licensed, insured, and
                trusted across South Florida.
              </p>
              <Button href="/contact" variant="primary">
                Contact Us
              </Button>
            </div>
            {/* Right image stack */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/service-areas/solutions.webp"
                  alt="Roofing solutions"
                  className="w-full h-[420px] object-cover rounded-3xl"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-lionzNavy rounded-2xl overflow-hidden shadow-2xl w-36 h-36 border-4 border-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/service-areas/team.webp"
                  alt="Lionz Roofing team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Service Areas Grid ── */}
        <section className="bg-lionzLight py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div ref={gridRef} className="fade-up text-center mb-12">
              <div className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-4">
                <MapPin size={13} className="text-lionzGold" /> Coverage Map
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark">
                Areas We <span className="text-lionzGold">Serve</span>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {CITIES.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 bg-white border border-gray-200 hover:border-lionzGold hover:bg-lionzGold/5 rounded-full px-5 py-2.5 transition-colors cursor-default shadow-sm"
                >
                  <MapPin size={13} className="text-lionzGold shrink-0" />
                  <span className="text-lionzNavy font-semibold text-sm">
                    {city}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. FAQ ── */}
        <section className="bg-gray-50 py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div ref={faqRef} className="fade-up lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark leading-tight mb-4">
                Frequently Asked{" "}
                <span className="text-lionzGold">Questions</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Have questions about our roofing services or coverage areas?
                Find answers to the most common questions below, or reach out to
                our team directly.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="outline">
                  Ask Us Anything
                </Button>
              </div>
            </div>
            {/* Right — accordion */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-2">
              {FAQS.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
