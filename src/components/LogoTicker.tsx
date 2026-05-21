import { Building2 } from "lucide-react";
import { clients } from "@/data/clients";

export default function LogoTicker() {
  // Duplicate logos to create seamless infinite loop
  const doubled = [...clients, ...clients];

  return (
    <section className="bg-lionzLight py-10 overflow-hidden">
      {/* Label */}
      <div className="flex justify-center mb-8">
        <span className="flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full">
          <Building2 size={14} className="text-lionzGold" />
          Companies That Trust Us
        </span>
      </div>

      {/* Ticker */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-lionzLight to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-lionzLight to-transparent pointer-events-none" />

        <div className="flex animate-ticker hover:[animation-play-state:paused]">
          {doubled.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-10 shrink-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.logo}
                alt={client.name}
                className="h-40 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
