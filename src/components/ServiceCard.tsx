import Link from "next/link";
import {
  Wrench,
  Home,
  Shield,
  Building2,
  CloudLightning,
  Search,
} from "lucide-react";
import type { Service } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  wrench: <Wrench size={32} className="text-lionzGold" />,
  home: <Home size={32} className="text-lionzGold" />,
  shield: <Shield size={32} className="text-lionzGold" />,
  building: <Building2 size={32} className="text-lionzGold" />,
  "cloud-lightning": <CloudLightning size={32} className="text-lionzGold" />,
  search: <Search size={32} className="text-lionzGold" />,
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full border border-gray-100">
      <div className="bg-lionzLight rounded-xl w-16 h-16 flex items-center justify-center mb-5">
        {iconMap[service.icon]}
      </div>
      <h3 className="text-xl font-bold text-lionzNavy mb-3">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed flex-1">{service.description}</p>
      <Link
        href={`/services#${service.slug}`}
        className="mt-6 text-lionzGold font-bold hover:underline inline-flex items-center gap-1"
      >
        Learn More →
      </Link>
    </div>
  );
}
