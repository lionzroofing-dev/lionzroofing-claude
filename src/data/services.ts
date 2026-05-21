export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    slug: "roof-repair",
    title: "Roof Repair",
    description:
      "Fast, reliable repairs for leaks, damaged shingles, flashing issues, and more — protecting your home before small problems become big ones.",
    icon: "wrench",
  },
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    description:
      "Full roof replacement using premium materials and expert installation. We handle everything from tear-off to final inspection.",
    icon: "home",
  },
  {
    slug: "residential-roofing",
    title: "Residential Roofing",
    description:
      "Quality residential roofing solutions built to last in Florida's climate. Your family's protection is our priority.",
    icon: "shield",
  },
  {
    slug: "commercial-roofing",
    title: "Commercial Roofing",
    description:
      "Durable commercial roofing systems for businesses of all sizes. Minimize downtime with our efficient installation process.",
    icon: "building",
  },
  {
    slug: "storm-damage",
    title: "Storm Damage",
    description:
      "Emergency response for storm-damaged roofs. We assess damage, work with insurance, and restore your roof quickly.",
    icon: "cloud-lightning",
  },
  {
    slug: "roof-inspection",
    title: "Roof Inspection",
    description:
      "Thorough roof inspections to identify issues before they escalate. Ideal for home buyers, sellers, and annual maintenance.",
    icon: "search",
  },
];
