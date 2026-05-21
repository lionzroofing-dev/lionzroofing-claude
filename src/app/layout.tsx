import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lionz Roofing | Fort Lauderdale Roofing Contractors",
    template: "%s | Lionz Roofing",
  },
  description:
    "Lionz Roofing — Fort Lauderdale's trusted roofing contractors. Roof repair, replacement, residential and commercial roofing across South Florida. Licensed & insured. Free estimates.",
  keywords: [
    "Roofing Fort Lauderdale",
    "Roof Repair Fort Lauderdale",
    "Roof Replacement Florida",
    "Residential Roofing Florida",
    "Commercial Roofing Florida",
    "Roofing Contractors Fort Lauderdale",
    "Emergency Roof Repair Florida",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Lionz Roofing",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable} data-scroll-behavior="smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
