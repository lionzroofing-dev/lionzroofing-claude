"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "@/components/Button";

const FAQS = [
  {
    q: "How Do I Know If My Roof Needs Repair Or Replacement In Southeast Florida?",
    a: "If you notice missing or damaged shingles after a storm, water stains on ceilings from heavy rains, sagging areas due to moisture buildup, or rising energy bills from poor insulation, it's time for a professional inspection. We offer free assessments throughout Miami, Fort Lauderdale, Hollywood, Palm Beach, and Boca Raton to help you make the best decision for your roof's health.",
  },
  {
    q: "How Long Does A Roof Replacement Usually Take?",
    a: "For most residential roofs in Southeast Florida, we complete a full roof replacement in just 1 to 2 days. Commercial projects may take longer depending on roof size and system type. At Lionz Roofing, we work efficiently without cutting corners — your property is protected from start to finish.",
  },
  {
    q: "Do You Offer Warranties On Your Roofing Work?",
    a: "Yes. Lionz Roofing stands behind every roof replacement with both manufacturer warranties on materials and a workmanship warranty on our installation. We use Miami-Dade-approved products built to withstand South Florida's toughest weather conditions.",
  },
  {
    q: "Do You Help With Insurance Claims For Storm Damage?",
    a: "Absolutely. We specialize in storm damage repair and guide you through every step of the insurance claim process — from thorough inspections and detailed documentation to direct communication with your insurance company. We serve Miami, Fort Lauderdale, Palm Beach, Hollywood, and Boca Raton.",
  },
  {
    q: "What Areas Do You Serve?",
    a: "Lionz Roofing provides roof replacement services throughout Miami-Dade, Broward, and Palm Beach counties, including Miami, Fort Lauderdale, West Palm Beach, Hollywood, Boca Raton, Pompano Beach, Coral Springs, and surrounding communities.",
  },
  {
    q: "What Types Of Roofing Materials Do You Install?",
    a: "We install a full range of roofing systems including asphalt shingles, metal roofing, tile roofing (concrete and clay), flat roofing systems (TPO, PVC, modified bitumen), and built-up roofing — all selected and installed to meet South Florida's building codes and climate demands.",
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
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 pb-4" : "max-h-0"}`}>
        <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function RoofReplacementFAQ() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="lg:sticky lg:top-32">
          <div className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark leading-tight mb-4">
            Frequently Asked{" "}
            <span className="text-lionzGold">Questions</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Have questions about roof replacements? Find answers below or reach
            out to our team directly.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="outline">
              Ask Us Anything
            </Button>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-2">
          {FAQS.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
