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
    default: "Lionz Roofing | South Florida Roofing Contractors",
    template: "%s | Lionz Roofing",
  },
  description:
    "Lionz Roofing — South Florida's trusted roofing contractors. Roof repair, replacement, residential and commercial roofing across South Florida. Licensed & insured. Free estimates.",
  keywords: [
    "Roofing Fort Lauderdale",
    "Roof Repair Fort Lauderdale",
    "Roof Replacement Florida",
    "Residential Roofing Florida",
    "Commercial Roofing Florida",
    "Roofing Contractors South Florida",
    "Emergency Roof Repair Florida",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Lionz Roofing",
    images: [
      {
        url: "/images/hero/hero-roof.webp",
        width: 1200,
        height: 630,
        alt: "Lionz Roofing — South Florida Roofing Contractor Roofing Contractors",
      },
    ],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Lionz Roofing",
  url: "https://lionzroofing.com",
  logo: "https://lionzroofing.com/images/logo/logo.webp",
  telephone: "(954) 637-6835",
  email: "contact@lionzroofing.com",
  hasCredential: "License # CCC1336828",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5200 NW 33rd Ave Suite 200",
    addressLocality: "Fort Lauderdale",
    addressRegion: "FL",
    postalCode: "33309",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.1463,
    longitude: -80.2008,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  areaServed: [
    "Miami",
    "Fort Lauderdale",
    "Hollywood",
    "Boca Raton",
    "West Palm Beach",
    "Broward County",
    "Miami-Dade County",
    "Palm Beach County",
  ],
  sameAs: [
    "https://www.facebook.com/LionzRoofing/",
    "https://www.tiktok.com/@lionzroofing",
    "https://www.instagram.com/lionzroofing",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={montserrat.variable}
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
