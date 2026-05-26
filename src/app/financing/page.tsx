import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { resolveImage } from "@/lib/resolveImage";

export const metadata: Metadata = {
  title: "Roofing Financing Options | Lionz Roofing Fort Lauderdale",
  description:
    "Flexible roofing financing through Renew Financial and Ygrene. No credit score required options. Get a new roof now and pay over time — Fort Lauderdale, FL.",
};

const RENEW_BENEFITS = [
  "No Traditional Credit Score Requirement",
  "Long Repayment Terms",
  "Energy-Efficient And Hurricane-Rated Roofing Eligibility",
  "Payments Tied To The Property Not The Homeowner",
  "Ideal For Roof Replacements And Storm-Resilient Upgrades",
];

const YGRENE_BENEFITS = [
  "No Upfront Payment Required For Qualifying Properties",
  "Flexible Repayment Terms",
  "Covers Energy-Efficient And Storm-Protection Roofing",
  "Helps Improve Property Value And Resilience",
  "Designed For Florida's Climate And Building Codes",
];

const WHY_MATTERS_POINTS = [
  "Roofs are one of the most expensive home improvements",
  "Delaying repairs leads to bigger, costlier damage",
  "Financing lets you act fast without draining savings",
  "Manageable monthly payments protect your budget",
  "Improve your home value without the financial strain",
];

const WHO_BENEFITS = [
  "Homeowners needing urgent roof repairs or replacements",
  "Property owners affected by storm or hurricane damage",
  "Homeowners looking to upgrade to energy-efficient roofing",
  "Residents who want to improve their property value",
  "Anyone seeking to preserve their savings while protecting their home",
];

const WHY_LIONZ = [
  "Partnered with trusted Florida financing programs",
  "Experienced navigating the application process",
  "Focused on long-lasting, quality roofing solutions",
  "Fully licensed and insured — CCC1336828",
  "Local experts who understand Florida's building codes",
];

export default function FinancingPage() {
  const imgs = {
    hero: resolveImage("financing", "hero"),
    intro: resolveImage("financing", "intro-1"),
    benefits1: resolveImage("financing", "benefits-1"),
    benefits2: resolveImage("financing", "benefits-2"),
  };
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[200px] md:h-[260px] overflow-hidden bg-lionzDark">
          <Image
            src={imgs.hero}
            alt="Roofing financing options"
            fill
            className="object-cover object-bottom"
            priority
          />
          <div className="absolute inset-0 bg-lionzDark/65" />
          <div className="relative z-10 h-full flex items-center justify-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-lionzGold text-center">
              Financing
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2 shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={imgs.intro}
                    alt="Roofing financing partners"
                    width={680}
                    height={480}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <span className="inline-block bg-lionzGold/15 text-lionzGold font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                  Financing Options
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-lionzDark mb-5 leading-tight">
                  Affordable Payment Options For Your New Roof
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At Lionz Roofing, we understand that a new roof is a major
                  investment. That&apos;s why we&apos;ve partnered with trusted
                  financing programs to give you flexible, accessible options —
                  so you can protect your home without the financial burden of
                  paying everything upfront.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether you need an emergency repair or a full replacement,
                  our financing solutions are designed to make quality roofing
                  attainable for every homeowner in South Florida.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Renew Financial */}
        <section className="bg-lionzDark py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-10">
              <span className="inline-block bg-lionzGold/20 text-lionzGold font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                Financing Partners
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-lionzGold mb-4">
                Renew Financial
              </h2>
              <p className="text-gray-300 max-w-2xl leading-relaxed mb-6">
                Renew Financial offers PACE (Property Assessed Clean Energy)
                financing — a government-backed program that lets homeowners
                fund roofing upgrades without traditional credit requirements.
                Payments are made through your property tax bill, making it one
                of the most flexible options available in Florida.
              </p>
              <Button href="/contact" variant="primary" className="px-8 py-3">
                Renew Financial
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
              {RENEW_BENEFITS.map((benefit, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-start gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-lionzGold shrink-0 mt-0.5"
                  />
                  <p className="text-gray-200 text-sm leading-snug font-medium">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ygrene Financing */}
        <section className="bg-lionzLight py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-10">
              <span className="inline-block bg-lionzGold/20 text-lionzGold font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                Financing Partners
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-lionzDark mb-4">
                Ygrene Financing
              </h2>
              <p className="text-gray-600 max-w-2xl leading-relaxed mb-6">
                Ygrene is a leading PACE financing provider specializing in
                energy-efficient and storm-resilient home improvements. Their
                programs are specifically designed with Florida&apos;s climate
                and building codes in mind — making them ideal for roofing
                projects that meet local standards.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {YGRENE_BENEFITS.map((benefit, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-3 shadow-sm"
                >
                  <CheckCircle2
                    size={20}
                    className="text-lionzGold shrink-0 mt-0.5"
                  />
                  <p className="text-gray-700 text-sm leading-snug font-medium">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
            <Button href="/contact" variant="primary" className="px-8 py-3">
              Ygrene Home Repair Financing
            </Button>
          </div>
        </section>

        {/* Why Roofing Financing Matters */}
        <section className="bg-lionzDark py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-1">
                <span className="inline-block bg-lionzGold/20 text-lionzGold font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                  Why It Matters
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-5 leading-tight">
                  Why Roofing Financing Matters
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  When your roof needs attention, waiting is rarely an option.
                  Storm damage, leaks, and aging materials only get worse over
                  time — and more expensive. Financing empowers you to take
                  action immediately.
                </p>
                <ul className="space-y-3">
                  {WHY_MATTERS_POINTS.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-lionzGold shrink-0 mt-0.5"
                      />
                      <span className="text-gray-200 text-sm leading-snug">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src={imgs.benefits1}
                    alt="Roofing financing benefits"
                    width={320}
                    height={380}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src={imgs.benefits2}
                    alt="Quality roofing solutions"
                    width={320}
                    height={380}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two-Column Info */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Who Can Benefit */}
              <div className="bg-lionzLight rounded-2xl p-8">
                <h2 className="text-xl md:text-2xl font-extrabold text-lionzDark mb-6">
                  Who Can Benefit From Roofing Financing?
                </h2>
                <ul className="space-y-3">
                  {WHO_BENEFITS.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-lionzGold shrink-0 mt-0.5"
                      />
                      <span className="text-gray-700 text-sm leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Why Choose Lionz */}
              <div className="bg-lionzNavy rounded-2xl p-8">
                <h2 className="text-xl md:text-2xl font-extrabold text-white mb-6">
                  Why Choose Lionz Roofing For Financed Roofing Projects?
                </h2>
                <ul className="space-y-3">
                  {WHY_LIONZ.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-lionzGold shrink-0 mt-0.5"
                      />
                      <span className="text-gray-200 text-sm leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
