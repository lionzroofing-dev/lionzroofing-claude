"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "@/components/Button";

const SERVICES_FAQS = [
  {
    q: "What Roofing Services Do You Offer?",
    a: "We offer a full range of roofing services including residential roofing, commercial roofing, roof repairs, roof replacements, and gutter works — all tailored to Southeast Florida's climate and building codes.",
  },
  {
    q: "How Do I Know If I Need A Repair Or A Full Replacement?",
    a: "If you notice missing or damaged shingles after a storm, water stains on ceilings from heavy rains, sagging areas due to moisture buildup, or rising energy bills from poor insulation, it's time for a professional inspection. We offer free assessments throughout Miami, Fort Lauderdale, Hollywood, Palm Beach, and Boca Raton to help you make the best decision for your roof's health.",
  },
  {
    q: "How Long Does A Roof Replacement Usually Take?",
    a: "For most residential roofs in Southeast Florida, we get the job done in just 1 to 2 days. Of course, the timeline depends on the size and complexity, but at Lionz Roofing, we move fast without ever cutting corners. Your home's protection is our priority, so we deliver quality workmanship on time — every time.",
  },
  {
    q: "Do You Help With Insurance Claims For Storm Damage?",
    a: "Absolutely. Serving Miami, Fort Lauderdale, Palm Beach, Hollywood, and Boca Raton, we specialize in storm damage repair and guide you through every step of the insurance claim process. From thorough inspections and detailed documentation to direct communication with your insurance company, Lionz Roofing is here to make your recovery smooth and stress-free.",
  },
  {
    q: "Are You Licensed And Insured?",
    a: "Yes — Lionz Roofing is fully licensed and insured in the state of Florida. We carry all required certifications and comply with Miami-Dade building codes on every project we complete, giving you total peace of mind.",
  },
  {
    q: "Do You Offer Free Estimates?",
    a: "Absolutely. We provide free, no-obligation roof inspections and estimates throughout Miami, Fort Lauderdale, Boca Raton, Hollywood, West Palm Beach, and surrounding South Florida communities. Contact us today to schedule yours.",
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

export default function FAQSection() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left — sticky panel */}
        <div className="lg:sticky lg:top-32">
          <div className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark leading-tight mb-4">
            Frequently Asked{" "}
            <span className="text-lionzGold">Questions</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Have questions about our roofing services? Find answers to the most
            common questions below, or reach out to our team directly.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="outline">
              Ask Us Anything
            </Button>
          </div>
        </div>

        {/* Right — accordion */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-2">
          {SERVICES_FAQS.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
