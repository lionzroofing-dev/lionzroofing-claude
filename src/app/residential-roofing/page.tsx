import type { Metadata } from "next";
import { MapPin, CheckCircle, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import BlogPreview from "@/components/BlogPreview";
import { resolveImage } from "@/lib/resolveImage";

export const metadata: Metadata = {
  title: "Residential Roofing In Southeast Florida",
  description:
    "Expert residential roofing in Florida by Lionz Roofing. Repairs, replacements, and storm protection in Miami, Fort Lauderdale, Palm Beach, and beyond.",
};

const SERVICES_INCLUDE = [
  "Roof Replacement Or Installation",
  "High-Quality, Durable Materials",
  "Weather-Resistant Upgrades",
  "Roof Inspections And Consultations",
  "Minor Repairs And Patchwork",
  "Custom Design And Color Options",
  "24/7 Support",
];

const MATERIAL_NAMES = [
  { name: "Asphalt Shingle Roof", slot: "material-asphalt" },
  { name: "Flat Roofing",         slot: "material-flat" },
  { name: "Metal Roofing",        slot: "material-metal" },
  { name: "Wood Roofing",         slot: "material-wood" },
  { name: "Tile Roofing",         slot: "material-tile" },
  { name: "Slate Roofing",        slot: "material-slate" },
];

const LOCATIONS = [
  "Miami",
  "Fort Lauderdale",
  "West Palm Beach",
  "Palm Beach",
  "Hollywood",
  "Boca Raton",
  "Pompano Beach",
  "Coral Springs",
];

const MATERIAL_BULLETS = [
  "Concrete & Clay Tile",
  "Asphalt Shingles",
  "Metal",
  "Flat Roofing (EPDM, TPO, Modified Bitumen)",
  "Wood Shakes",
  "Slate (used mostly in luxury homes)",
];

export default function ResidentialRoofingPage() {
  const imgs = {
    hero:         resolveImage("residential-roofing", "hero"),
    intro:        resolveImage("residential-roofing", "intro"),
    servicesAcross: resolveImage("residential-roofing", "services-across"),
  };
  const MATERIALS = MATERIAL_NAMES.map((m) => ({
    name: m.name,
    image: resolveImage("residential-roofing", m.slot),
  }));
  return (
    <>
      <Header />
      <main>
        {/* ── 1. Hero Banner ── */}
        <section className="relative h-[200px] md:h-[260px] flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgs.hero}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 80%" }}
          />
          <div className="absolute inset-0 bg-lionzDark/70" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Residential <span className="text-lionzGold">Roofing</span>
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
                src={imgs.intro}
                alt="Residential Roofing"
                className="w-full h-[420px] object-cover rounded-3xl"
              />
            </div>

            {/* Right content */}
            <div>
              <div className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                <MapPin size={13} className="text-lionzGold" /> Residential
                Roofing
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark leading-tight mb-5">
                Trusted Residential Roofing Across{" "}
                <span className="text-lionzGold">Southeast Florida</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                At Lionz Roofing, we specialize in residential roofing services
                across Florida, combining skilled craftsmanship with quality
                materials to give you years of peace of mind. From minor repairs
                to full roof replacements, our team of professionals is
                committed to protecting your home from Florida&apos;s weather
                extremes.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                We use high-quality materials and proven techniques to ensure
                lasting performance and complete customer satisfaction — not
                just quick fixes, but dependable results. Whether you&apos;re in
                need of shingle roofing, flat, or metal systems, trust Lionz
                Roofing to deliver durable, energy-efficient solutions that
                enhance your home&apos;s curb appeal.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/contact" variant="primary">
                  Schedule Appointment
                </Button>
                <Button href="/contact" variant="outline">
                  Roof Report
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Services Include ── */}
        <section className="bg-lionzLight py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-4">
                <CheckCircle size={13} className="text-lionzGold" /> What We
                Offer
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark">
                Services <span className="text-lionzGold">Include</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {SERVICES_INCLUDE.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100"
                >
                  <CheckCircle size={18} className="text-lionzGold shrink-0" />
                  <span className="text-lionzNavy font-semibold text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Roofing Materials ── */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — text */}
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                <MapPin size={13} className="text-lionzGold" /> Materials
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark leading-tight mb-5">
                The Best Residential Roofing Materials In{" "}
                <span className="text-lionzGold">Southeast Florida</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                At Lionz Roofing, we understand that Southeast Florida&apos;s
                unique climate demands residential roofing materials that can
                stand up to intense sun, heavy rains, and hurricane-force winds.
                That&apos;s why we carry materials specifically designed to
                ensure your home withstands South Florida&apos;s toughest
                conditions.
              </p>
              <ul className="space-y-2 mb-8">
                {MATERIAL_BULLETS.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-gray-600 text-sm"
                  >
                    <CheckCircle
                      size={16}
                      className="text-lionzGold shrink-0 mt-0.5"
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="primary">
                Get Your Free Quote
              </Button>
            </div>

            {/* Right — materials grid */}
            <div className="grid grid-cols-2 gap-4">
              {MATERIALS.map((m) => (
                <div
                  key={m.name}
                  className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 group"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="bg-white px-4 py-3">
                    <p className="text-lionzNavy font-bold text-sm">{m.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. Services Across Southeast Florida ── */}
        <section className="bg-lionzNavy py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — image + heading */}
            <div>
              <div className="rounded-3xl overflow-hidden mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgs.servicesAcross}
                  alt="Residential Roofing Services Across Southeast Florida"
                  className="w-full h-[320px] object-cover rounded-3xl"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Residential Roofing Services Across{" "}
                <span className="text-lionzGold">Southeast Florida</span>
              </h2>
              <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                We offer Residential Roofing Services in {LOCATIONS.join(", ")},
                and beyond.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {LOCATIONS.map((loc) => (
                  <div
                    key={loc}
                    className="flex items-center gap-1.5 border border-lionzGold/40 hover:border-lionzGold rounded-full px-4 py-2 transition-colors"
                  >
                    <MapPin size={12} className="text-lionzGold shrink-0" />
                    <span className="text-white text-sm font-semibold">
                      {loc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Why Choose */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="inline-flex items-center gap-2 border border-lionzGold text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                <MapPin size={13} className="text-lionzGold" /> Why Choose Us
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-5">
                Why Florida Home Owners Choose{" "}
                <span className="text-lionzGold">Lionz Roofing</span>
              </h3>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                Lionz Roofing is your trusted partner in Southeast Florida. Our
                team brings a deep understanding of the local market to every
                project. With years of experience working alongside homeowners
                and real estate professionals, we know exactly what it takes to
                build a roof that protects your investment and enhances curb
                appeal for years to come.
              </p>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                We&apos;ve earned a reputation for delivering top quality that
                speaks for itself. When you choose Lionz Roofing, you&apos;re
                choosing expertise, reliability, and the peace of mind that
                comes with knowing your home is in the right hands.
              </p>
              <a
                href="tel:(954) 637-6835"
                className="inline-flex items-center gap-2 bg-lionzGold text-lionzNavy font-bold px-6 py-3 rounded-xl hover:brightness-90 transition-all"
              >
                <Phone size={16} />
                Call Us Now
              </a>
            </div>
          </div>
        </section>

        {/* ── 6. CTA ── */}
        <CTASection
          badge="Book Now"
          title="We Are Here To"
          highlight="Help"
          subtitle="At Lionz Roofing, we protect what matters most — your home and your business — with durable, high-quality roofing solutions tailored to your needs."
          primaryLabel="Get Your Free Quote"
          primaryHref="/contact"
        />

        {/* ── 7. Related Articles ── */}
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
