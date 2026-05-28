import type { Metadata } from "next";
import Link from "next/link";
import { User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSlider from "@/components/ServicesSlider";
import { resolveImage } from "@/lib/resolveImage";

export const metadata: Metadata = {
  title: "About Lionz Roofing — Fort Lauderdale, FL",
  description:
    "Lionz Roofing is a licensed and insured South Florida roofing contractor serving Miami, Fort Lauderdale, Hollywood, Boca Raton, and West Palm Beach.",
};

export default function AboutPage() {
  const ari = resolveImage("about", "ari");
  return (
    <>
      <Header />
      <main>
        {/* Section 1 — About + Emergency Card */}
        <section className="bg-[#F5F0E8] py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — About text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-lionzDark leading-tight mb-6">
                About <span className="text-lionzGold">Lionz Roofing</span>
              </h1>
              <p className="text-gray-600 text-base leading-relaxed text-justify">
                Lionz Roofing is a licensed and insured South Florida roofing
                contractor serving Miami, Fort Lauderdale, Hollywood, Boca
                Raton, and West Palm Beach. We specialize in residential and
                commercial roofing, including roof replacements, leak repairs,
                storm damage restoration, and flat roofing systems. Trusted
                across Miami-Dade, Broward, and Palm Beach Counties, we deliver
                code-compliant, hurricane-ready roofing solutions built with
                premium materials, expert craftsmanship, and transparent
                service.
              </p>
            </div>

            {/* Right — Emergency card */}
            <div className="relative bg-lionzNavy rounded-3xl p-8 md:p-10 text-center">
              {/* Gold badge top-right */}
              <div className="absolute -top-5 -right-3 w-14 h-14 bg-lionzGold rounded-full flex items-center justify-center shadow-lg">
                <svg
                  width={26}
                  height={26}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-5">
                <span className="text-lionzGold">Emergency </span> Roof Repair
                &amp;
                <br />
                Storm Damage Experts
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                We provide{" "}
                <strong className="text-white">24/7 emergency response</strong>{" "}
                and <strong className="text-white">insurance assistance</strong>{" "}
                for storm-affected homes and buildings across Southeast Florida.
                Whether it&apos;s wind, hail, water, or hurricane damage, our
                team acts fast to protect your property and guide you through
                the restoration process.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-lionzGold text-lionzNavy font-bold px-8 py-3 rounded-xl hover:brightness-90 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2 — Meet the Team */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section badge */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full">
                <User size={13} className="text-lionzGold" />
                Meet the Team
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left — Ari photo */}
              <div className="rounded-3xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ari}
                  alt="Ari — Lead at Lionz Roofing"
                  className="w-full max-w-[430px] h-auto rounded-[32px] object-cover"
                />
              </div>

              {/* Right — Ari intro */}
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-lionzDark leading-tight mb-6">
                  I&apos;m <span className="text-lionzGold">Ari</span>
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-4 text-justify">
                  I Lead <strong>Lionz Roofing</strong> With One Standard: No
                  Shortcuts, Just Solid Work, Strong Teams, and Attention to
                  Every Detail.
                </p>
                <p className="text-gray-600 text-base leading-relaxed text-justify">
                  From Estimation to Final Installation, I Stay Hands-On to Make
                  Sure Every Roof Is Built to Last.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3 — Our Services */}
        <ServicesSlider />

        {/* Section 4 — CTA Banner */}
        <section className="relative py-24 px-4 overflow-hidden bg-lionzNavy">
          {/* Background image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/cta/cta-bg.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-lionzDark/65" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-lionzGold text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
              <svg
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E0B000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Talk To Us
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              We Are Here To <span className="text-lionzGold">Help</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8">
              Let Lionz Roofing take the stress out of your next roofing
              project. Contact us today for a free inspection and quote!
            </p>
            <Link
              href="/contact"
              className="inline-block bg-lionzGold text-lionzNavy font-bold px-10 py-4 rounded-xl hover:brightness-90 transition-all text-base"
            >
              Get Your Free Quote
            </Link>
          </div>
        </section>
        {/* Section 5 — Service Areas + Map */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Top row: badge left, heading right */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-10">
              <div className="shrink-0">
                <div className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full">
                  <svg
                    width={13}
                    height={13}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E0B000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Our Service Areas
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark leading-tight">
                Reliable Roofing In Southeast Florida,{" "}
                <br className="hidden md:block" />
                Right Where You <span className="text-lionzGold">Need It</span>
              </h2>
            </div>

            {/* Card: map left, content right */}
            <div className="bg-gray-50 rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 h-[420px]">
                <iframe
                  src="https://maps.google.com/maps?q=5200+NW+33rd+Ave+Suite+200,+Fort+Lauderdale,+FL+33309&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lionz Roofing Location"
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-gray-400 italic text-sm mb-3">
                  Proudly Serving Miami-Dade, Broward, and Palm Beach Counties
                </p>
                <p className="text-gray-600 text-base leading-relaxed mb-8">
                  <strong>We work across </strong> Southeast Florida, including
                  Miami, Hollywood, West Palm Beach, Fort Lauderdale, and Boca
                  Raton. Whether you&apos;re a homeowner, property manager, or
                  contractor, <strong>we&apos;re ready to help.</strong>
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { city: "Miami", q: "Miami,+FL" },
                    { city: "Boca Raton", q: "Boca+Raton,+FL" },
                    { city: "Fort Lauderdale", q: "Fort+Lauderdale,+FL" },
                    { city: "Broward County", q: "Broward+County,+FL" },
                    { city: "West Palm Beach", q: "West+Palm+Beach,+FL" },
                    { city: "Hollywood", q: "Hollywood,+FL" },
                  ].map(({ city, q }) => (
                    <a
                      key={city}
                      href={`https://www.google.com/maps/search/roofing+contractor+${q}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-lionzGold rounded-full px-4 py-2.5 hover:bg-lionzGold/10 transition-colors"
                    >
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#E0B000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="text-lionzNavy font-semibold text-sm">
                        {city}
                      </span>
                    </a>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-block bg-lionzGold text-lionzNavy font-bold px-10 py-4 rounded-xl hover:brightness-90 transition-all w-full text-center"
                >
                  Get Your Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
