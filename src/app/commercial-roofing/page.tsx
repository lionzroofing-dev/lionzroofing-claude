import type { Metadata } from "next";
import { MapPin, CheckCircle, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import BlogPreview from "@/components/BlogPreview";

export const metadata: Metadata = {
  title: "Commercial Roofing In Southeast Florida",
  description:
    "Expert commercial roofing in Florida by Lionz Roofing. TPO, PVC, metal systems, replacements, and storm protection in Miami, Fort Lauderdale, Palm Beach, and beyond.",
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

const MATERIAL_BULLETS = [
  "TPO (Thermoplastic Polyolefin)",
  "PVC (Polyvinyl Chloride)",
  "Modified Bitumen",
  "Built-Up Roofing (BUR)",
  "Metal Roofing",
  "Roof Coatings & Sealants",
];

const SERVICE_LOCATIONS = [
  "Miami",
  "Hollywood",
  "Boca Raton",
  "Fort Lauderdale",
  "Palm Beach",
];

export default function CommercialRoofingPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── 1. Hero Banner ── */}
        <section className="relative h-[200px] md:h-[260px] flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/commercial-roofing/hero.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 40%" }}
          />
          <div className="absolute inset-0 bg-lionzDark/70" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              <span className="text-lionzGold">Commercial</span> Roofing
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
                src="/images/commercial-roofing/intro.webp"
                alt="Commercial Roofing"
                className="w-full h-[420px] object-cover rounded-3xl"
              />
            </div>

            {/* Right content */}
            <div>
              <div className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                <MapPin size={13} className="text-lionzGold" /> Commercial
                Roofing
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark leading-tight mb-5">
                <span className="text-lionzGold">Commercial</span> Roofing
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Lionz Roofing delivers reliable commercial roofing solutions
                across Florida, combining expert workmanship with a strong
                commitment to long-term performance. From storm damage repairs
                to full commercial roof replacements, we provide tailored
                systems designed to protect your property against Florida&apos;s
                demanding weather conditions.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                We utilize high-quality materials and proven installation
                methods to ensure durability, energy efficiency, and minimal
                disruption to your operations. With clear communication and
                consistent project oversight, Lionz Roofing delivers dependable
                commercial roofing results — on time and with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/residential-roofing" variant="primary">
                  Residential Roofing
                </Button>
                <Button href="/contact" variant="outline">
                  Roof Repair
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Services Include ── */}
        <section className="bg-lionzNavy py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 border border-lionzGold text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-2">
                <CheckCircle size={13} className="text-lionzGold" /> Services
                Include
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SERVICES_INCLUDE.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3"
                >
                  <CheckCircle size={16} className="text-lionzGold shrink-0" />
                  <span className="text-white font-semibold text-sm">
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark leading-tight mb-5">
                The Best Commercial Roofing Materials In{" "}
                <span className="text-lionzGold">Southeast Florida</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                At Lionz Roofing, we know Southeast Florida&apos;s commercial
                buildings require roofing materials that can stand up to intense
                heat, heavy rainfall, and hurricane-force winds. Our commercial
                roofs are designed to provide maximum protection and energy
                efficiency. We install and maintain a range of systems,
                including TPO, PVC, modified bitumen, metal roofing, and
                built-up roofing — all tailored to the specific needs of your
                property and industry requirements.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                From energy-saving reflective roofs to durable metal systems,
                our commercial roofing solutions balance performance and
                cost-effectiveness to protect your business year-round.
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
            </div>

            {/* Right — image */}
            <div className="rounded-3xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/commercial-roofing/services-across.webp"
                alt="Commercial Roofing Materials"
                className="w-full h-[520px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </section>

        {/* ── 5. Services Across Southeast Florida ── */}
        <section className="bg-lionzNavy py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — heading */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Commercial Roofing Services Across{" "}
                <span className="text-lionzGold">Southeast Florida</span>
              </h2>
            </div>

            {/* Right — contact card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                We offer Commercial Roofing Services in{" "}
                {SERVICE_LOCATIONS.join(", ")}, and beyond.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-lionzGold text-lionzNavy font-bold px-6 py-3 rounded-xl hover:brightness-90 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* ── 6. Why Choose ── */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — image */}
            <div className="rounded-3xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/commercial-roofing/why-choose.webp"
                alt="Why Florida Businesses Choose Lionz Roofing"
                className="w-full h-[420px] object-cover rounded-3xl"
              />
            </div>

            {/* Right — content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark leading-tight mb-5">
                Why Florida&apos;s Businesses Choose{" "}
                <span className="text-lionzGold">Lionz Roofing</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Lionz Roofing is the trusted commercial roofing partner across
                Southeast Florida. Our experienced team understands the demands
                of commercial properties — from office buildings and warehouses
                to retail centers and industrial facilities. We bring deep
                knowledge of local building codes, weather patterns, and
                material innovations to every project.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Our commitment to clear communication, fast turnaround, and
                superior workmanship means your roofing project stays on
                schedule and on budget. Whether you need a routine inspection or
                a full roof replacement, Lionz Roofing delivers dependable
                solutions that minimize disruption and maximize protection.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                When you work with us, you&apos;re choosing a partner that
                prioritizes your business continuity and long-term investment.
              </p>
            </div>
          </div>
        </section>

        {/* ── 7. CTA ── */}
        <CTASection
          badge="Book Now"
          title="We Are Here To"
          highlight="Help"
          subtitle="At Lionz Roofing, we protect what matters most — your home and your business — with durable, high-quality roofing solutions tailored to your needs."
          primaryLabel="Get Your Free Quote"
          primaryHref="/contact"
        />

        {/* ── 8. Related Articles ── */}
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
