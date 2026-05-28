"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Wrench, Home, Building2, Hammer, Droplets, ChevronLeft, ChevronRight,
} from "lucide-react";

const services = [
  {
    href: "/residential-roofing",
    title: "Residential Roofing",
    description:
      "New installations, repairs, or full replacements — we handle every roofing project across Southeast Florida with care, precision, and long-lasting craftsmanship.",
    icon: <Home size={56} className="text-lionzGold" />,
  },
  {
    href: "/commercial-roofing",
    title: "Commercial Roofing",
    description:
      "High-quality commercial roofing systems engineered for durability and performance in South Florida, including Miami, Fort Lauderdale, Palm Beach, and surrounding areas.",
    icon: <Building2 size={56} className="text-lionzGold" />,
  },
  {
    href: "/roofing-replacement",
    title: "Roof Replacements",
    description:
      "Lionz Roofing specializes in code-compliant roof replacement services using Miami-Dade–approved materials built for long-term durability and energy efficiency.",
    icon: <Hammer size={56} className="text-lionzGold" />,
  },
  {
    href: "/roof-repairs",
    title: "Roof Repairs",
    description:
      "Get fast, reliable roof repairs for leaks, storm damage, and wear — proudly serving businesses and properties in Miami, Hollywood, Palm Beach, and Boca Raton.",
    icon: <Wrench size={56} className="text-lionzGold" />,
  },
  {
    href: "/gutter-works",
    title: "Gutter Works",
    description:
      "Lionz Roofing provides professional gutter installation, repair, and replacement services designed to handle intense rainfall, high winds, and debris buildup common throughout Miami-Dade, Broward, and Palm Beach counties.",
    icon: <Droplets size={56} className="text-lionzGold" />,
  },
];

export default function ServicesSlider() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [direction, setDirection] = useState<"left" | "right">("left");

  const goTo = (index: number, dir: "left" | "right") => {
    setDirection(dir);
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
    }, 220);
  };

  const prev = () => goTo(current === 0 ? services.length - 1 : current - 1, "right");
  const next = () => goTo(current === services.length - 1 ? 0 : current + 1, "left");

  const service = services[current];

  return (
    <section className="bg-lionzNavy section-padding" id="services">
      <div className="max-w-4xl mx-auto text-center">

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 border border-lionzGold text-lionzGold text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full">
            <Wrench size={13} />
            Our Services
          </span>
        </div>

        {/* Slide area — fixed height so layout never shifts */}
        <div className="relative flex items-center justify-between gap-4">

          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous service"
            className="text-white/50 hover:text-lionzGold transition-colors shrink-0"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Fixed-height content box */}
          <div className="flex-1 h-auto md:h-[320px] flex flex-col items-center justify-center px-4">
            <div
              className="flex flex-col items-center transition-all duration-200 ease-in-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "translateX(0)"
                  : direction === "left"
                  ? "translateX(40px)"
                  : "translateX(-40px)",
              }}
            >
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-lionzGold mb-4">
                {service.title}
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="bg-lionzGold text-lionzNavy font-bold px-10 py-3 rounded-xl hover:brightness-90 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next service"
            className="text-white/50 hover:text-lionzGold transition-colors shrink-0"
          >
            <ChevronRight size={36} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "left" : "right")}
              aria-label={`Go to service ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                i === current ? "bg-lionzGold scale-125" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
