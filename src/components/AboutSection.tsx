import { Users, Handshake, CheckSquare } from "lucide-react";
import Button from "./Button";

const features = [
  {
    icon: <Users size={28} className="text-lionzNavy" />,
    title: "Professional",
    subtitle: "Skilled & Safety-Focused",
    label: "Crew",
  },
  {
    icon: <Handshake size={28} className="text-lionzNavy" />,
    title: "Reliable",
    subtitle: "Trusted",
    label: "Roofing Partner",
  },
];

const checklist = [
  "Transparent Pricing",
  "Full-Service Roofing Solutions",
  "Customer-First Approach",
];

export default function AboutSection() {
  return (
    <section className="bg-white section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left — Images */}
        <div className="relative">
          {/* Main image */}
          <div className="rounded-2xl overflow-hidden aspect-[4/5] w-full max-w-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about/about-main.jpg"
              alt="Lionz Roofing crew at work"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* Right — Content */}
        <div>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Users size={13} className="text-lionzGold" />
            About Us
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-lionzNavy leading-tight mb-4">
            Residential And Commercial Roofing Services In{" "}
            <span className="text-lionzGold">Southeast Florida.</span>
          </h2>

          {/* Body text */}
          <p className="text-gray-600 italic leading-relaxed mb-4 text-sm">
            At Lionz Roofing, we're dedicated to delivering dependable commercial and
            residential roofing solutions across Southern Florida with a focus on Miami-Dade,
            Broward, and West Palm Beach Counties. We offer specialized roofing services in
            Miami, Fort Lauderdale, Hollywood, Boca Raton, and Palm Beach.
          </p>
          <p className="text-gray-600 italic leading-relaxed mb-8 text-sm">
            We focus on clear communication, careful workmanship, and long-term
            protection, so that you feel confident from the initial roofing quote to the project
            completion. By choosing Lionz as your Roofer, you can rest assured that your
            home and business will be protected for years to come.
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-lionzGold/15 border border-lionzGold/30 rounded-xl p-4 flex items-center gap-3"
              >
                <div className="bg-lionzGold rounded-lg w-12 h-12 flex items-center justify-center shrink-0">
                  {f.icon}
                </div>
                <div>
                  <p className="font-bold text-lionzNavy text-sm">{f.title}</p>
                  <p className="text-gray-500 text-xs">{f.subtitle}</p>
                  <p className="text-gray-500 text-xs">{f.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Checklist + Secondary image */}
          <div className="flex gap-6 items-start mb-8">
            <div className="flex-1">
              <ul className="space-y-2 mb-6">
                {checklist.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-lionzNavy font-medium text-sm">
                    <CheckSquare size={18} className="text-lionzGold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/about" variant="primary">
                More About Us
              </Button>
            </div>

            {/* Secondary image */}
            <div className="w-80 h-44 rounded-2xl overflow-hidden shrink-0 shadow-lg hidden sm:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about/about-secondary.webp"
                alt="Lionz Roofing completed project"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
