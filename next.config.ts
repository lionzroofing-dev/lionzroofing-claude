import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Old WordPress page slugs → new Next.js routes
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us/:path*", destination: "/about", permanent: true },
      { source: "/roof-replacements", destination: "/roofing-replacement", permanent: true },
      { source: "/roof-replacement", destination: "/roofing-replacement", permanent: true },
      { source: "/roof-repair-services", destination: "/roof-repairs", permanent: true },
      { source: "/roof-repair", destination: "/roof-repairs", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/surrounding-communities", destination: "/service-areas", permanent: true },
      { source: "/service-area", destination: "/service-areas", permanent: true },
      { source: "/our-services", destination: "/services", permanent: true },
      { source: "/residential", destination: "/residential-roofing", permanent: true },
      { source: "/commercial", destination: "/commercial-roofing", permanent: true },
      { source: "/gutters", destination: "/gutter-works", permanent: true },
      { source: "/gutter-installation", destination: "/gutter-works", permanent: true },
      { source: "/financing-options", destination: "/financing", permanent: true },
      { source: "/reviews", destination: "/testimonials", permanent: true },
      { source: "/photo-gallery", destination: "/gallery", permanent: true },
      { source: "/our-work", destination: "/gallery", permanent: true },
      // WordPress admin/system URLs
      { source: "/wp-admin", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-includes/:path*", destination: "/", permanent: true },
      { source: "/category/:path*", destination: "/blog", permanent: true },
      { source: "/tag/:path*", destination: "/blog", permanent: true },
      { source: "/author/:path*", destination: "/", permanent: true },
      { source: "/page/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
