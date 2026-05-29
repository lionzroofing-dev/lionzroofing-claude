import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lionzroofing.com"),
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
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
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
        alt: "Lionz Roofing — South Florida Roofing Contractors",
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
      <body className="font-sans antialiased">
        {children}

        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">{`
              window.dataLayer=window.dataLayer||[];
              function gtag(){dataLayer.push(arguments);}
              gtag('js',new Date());
              gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');
            `}</Script>
          </>
        )}

        {/* Meta Pixel */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">{`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
            fbq('track','PageView');
          `}</Script>
        )}
        <SpeedInsights />
      </body>
    </html>
  );
}
