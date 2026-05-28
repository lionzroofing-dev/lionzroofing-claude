import type { Metadata } from "next";
import ServiceAreasClient from "./ServiceAreasClient";

export const metadata: Metadata = {
  title: "Roofing Service Areas | South Florida",
  description:
    "Lionz Roofing serves Miami, Fort Lauderdale, Boca Raton, Hollywood, West Palm Beach, and all of South Florida. Licensed & insured roofing contractors.",
};

export default function ServiceAreasPage() {
  return <ServiceAreasClient />;
}
