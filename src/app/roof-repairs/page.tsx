import type { Metadata } from "next";
import { MapPin, CheckCircle, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import BlogPreview from "@/components/BlogPreview";
import { resolveImage } from "@/lib/resolveImage";

export const metadata: Metadata = {
  title: "Roof Repairs In Miami Dade, Broward & West Palm Beach | Lionz Roofing",
  description:
    "Dependable roof repair services across South Florida. Lionz Roofing fixes leaks, storm damage, shingles, flat roofs, and more in Miami, Fort Lauderdale, and Palm Beach.",
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

const REPAIR_TYPES = [
  "Concrete And Clay Tile Repairs",
  "Asphalt Shingle Leak Repairs",
  "Metal Roof Patch And Seal",
  "Flat-Roof System Repairs (Modified Bitumen Or TPO)",
  "Wood Shake Repairs",
  "Slate Roof Repairs (Mostly For Luxury Homes)",
];

const LOCATIONS = [
  "Miami",
  "Hollywood",
  "Boca Raton",
  "Fort Lauderdale",
  "Palm Beach",
  "West Palm Beach",
];

export default function RoofRepairsPage() {
  const imgs = {
    hero:         resolveImage("roof-repairs", "hero"),
    intro:        resolveImage("roof-repairs", "intro"),
    whyChoose:    resolveImage("roof-repairs", "why-choose"),
    servicesAcross: resolveImage("roof-repairs", "services-across"),
  };
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
            style={{ objectPosition: "center 60%" }}
          />
          <div className="absolute inset-0 bg-lionzDark/70" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl mx-auto">
              Roof Repairs In{" "}
              <span className="text-lionzGold">
                Miami Dade, Broward, And West Palm Beach
              </span>
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
                alt="Roof Repairs"
                className="w-full h-[420px] object-cover rounded-3xl"
              />
            </div>

            {/* Right content */}
            <div>
              <div className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                <MapPin size={13} className="text-lionzGold" /> Roof Repairs
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark leading-tight mb-5">
                Roof <span className="text-lionzGold">Repairs</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                At Lionz Roofing, we provide dependable roof repair services
                across Florida, designed to extend the life of your roof and
                protect your home or business. Whether you&apos;re dealing with
                a small leak, missing shingles, or storm-related damage, our
                experienced team acts fast to diagnose the issue and deliver
                lasting repairs.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                We prioritize clear communication and honest assessments, so you
                always know what to expect — no upselling, just solutions that
                make sense. With a focus on quality materials and careful
                workmanship, Lionz Roofing ensures your roof is secure,
                weather-ready, and built to last.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/commercial-roofing" variant="primary">
                  Commercial Roofing
                </Button>
                <Button href="/residential-roofing" variant="outline">
                  Residential Roofing
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Services Include ── */}
        <section className="bg-lionzNavy py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 border border-lionzGold text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-4">
                <CheckCircle size={13} className="text-lionzGold" /> Services
                Include
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Services <span className="text-lionzGold">Include</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {SERVICES_INCLUDE.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4"
                >
                  <CheckCircle size={18} className="text-lionzGold shrink-0" />
                  <span className="text-white font-semibold text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Repair Types Detail ── */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <div>
              <div className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                <MapPin size={13} className="text-lionzGold" /> Repair Types
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark leading-tight mb-5">
                Roof <span className="text-lionzGold">Repairs</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                At Lionz Roofing, we know that Southeast Florida&apos;s harsh
                climate takes a toll on roofs, from intense sun and heavy rains
                to hurricane-force winds. That&apos;s why our roof repair
                services are designed to restore and reinforce your roof using
                materials and techniques built to withstand the unique challenges
                of this region. Whether it&apos;s repairing damaged concrete or
                clay tiles, fixing leaks in asphalt shingles, or patching metal
                roofs, our expert team ensures your home stays safe and protected
                year-round.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                No matter the type of roof you have — tile, shingle, metal, or
                flat — we customize every repair to address your home&apos;s
                specific needs while meeting Florida&apos;s strict building
                codes. We act quickly and efficiently to prevent small issues
                from turning into costly problems, giving you peace of mind no
                matter the season.
              </p>
              <ul className="space-y-2 mb-8">
                {REPAIR_TYPES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-gray-600 text-sm"
                  >
                    <CheckCircle
                      size={16}
                      className="text-lionzGold shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — image */}
            <div className="rounded-3xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgs.whyChoose}
                alt="Roof Repair Types"
                className="w-full h-[480px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </section>

        {/* ── 5. Services Across Southeast Florida ── */}
        <section className="bg-lionzNavy py-16 px-4">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-4">
                Roof Repair Services Across{" "}
                <span className="text-lionzGold">Southeast Florida</span>
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                We proudly offer residential roof repair services in{" "}
                <span className="text-lionzGold font-semibold">
                  {LOCATIONS.slice(0, 3).join(", ")}
                </span>
                , and throughout{" "}
                <span className="text-lionzGold font-semibold">
                  Southeast Florida
                </span>
                .
              </p>
            </div>
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
          </div>
        </section>

        {/* ── 6. Why Trust Lionz Roofing ── */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — image */}
            <div className="rounded-3xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgs.servicesAcross}
                alt="Why Trust Lionz Roofing For Roof Repairs"
                className="w-full h-[420px] object-cover rounded-3xl"
              />
            </div>

            {/* Right — content */}
            <div>
              <div className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                <MapPin size={13} className="text-lionzGold" /> Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark leading-tight mb-5">
                Why Florida Home Owners Trust{" "}
                <span className="text-lionzGold">Lionz Roofing</span> For Roof
                Repairs
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Lionz Roofing is your go-to partner in Southeast Florida for
                fast, reliable, and code-compliant roof repairs. With years of
                experience working alongside homeowners and real estate
                professionals, we know how to protect your investment against
                Florida&apos;s extreme weather. Your home&apos;s safety is our
                priority. From quick inspections for storm damage to detailed
                repairs after wear and tear, we navigate Florida&apos;s complex
                roofing requirements to deliver results you can count on.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Have questions or need an expert consultation? Our team is ready
                to discuss your roofing needs and provide you with top-quality
                solutions. Contact us now to schedule an appointment or learn
                more about how we can protect your home with the best roofing
                services in{" "}
                <span className="font-semibold text-lionzNavy">
                  Miami, Fort Lauderdale, Hollywood, West Palm Beach, and Boca
                  Raton
                </span>
                .
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
