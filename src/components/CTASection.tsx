import { Home } from "lucide-react";
import Button from "./Button";

interface CTASectionProps {
  badge?: string;
  title?: string;
  highlight?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  bgImage?: string;
}

export default function CTASection({
  badge = "Book Now",
  title = "Need a Reliable Roofing",
  highlight = "Team?",
  subtitle = "Get your free quote today. No pressure, no obligation — just honest roofing expertise from a team that cares.",
  primaryLabel = "Get Your Free Quote",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref = "/services",
  bgImage = "/images/cta/cta-bg.png",
}: CTASectionProps) {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-lionzDark/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        {badge && (
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 border border-lionzGold text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full">
              <Home size={13} className="text-lionzGold" />
              {badge}
            </span>
          </div>
        )}

        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
          {title}{" "}
          {highlight && <span className="text-lionzGold">{highlight}</span>}
        </h2>

        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={primaryHref} variant="primary" className="text-lg">
            {primaryLabel}
          </Button>
          {secondaryLabel && (
            <Button href={secondaryHref} variant="outline" className="text-lg">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
