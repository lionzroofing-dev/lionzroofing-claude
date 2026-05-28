import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, FileText } from "lucide-react";

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const COMPANY = {
  address: "5200 NW 33rd Ave Suite 200, Fort Lauderdale, FL 33309",
  mapsUrl:
    "https://www.google.com/maps?q=5200+NW+33rd+Ave+Suite+200,+Fort+Lauderdale,+FL+33309",
  phone: "(954) 637-6835",
  email: "contact@lionzroofing.com",
  license: "CCC1336828",
  facebook: "https://www.facebook.com/LionzRoofing/",
  tiktok: "https://www.tiktok.com/@lionzroofing",
  instagram: "https://www.instagram.com/lionzroofing",
};

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Financing", href: "/financing" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Service Areas", href: "/service-areas" },
  { label: "Residential Roofing", href: "/residential-roofing" },
  { label: "Commercial Roofing", href: "/commercial-roofing" },
  { label: "Roof Replacements", href: "/roofing-replacement" },
  { label: "Roof Repairs", href: "/roof-repairs" },
  { label: "Gutter Works", href: "/gutter-works" },
];

export default function Footer() {
  return (
    <footer className="bg-lionzNavy text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <Image
              src="/images/logo/logo.webp"
              alt="Lionz Roofing"
              width={220}
              height={95}
              style={{ height: "80px", width: "auto" }}
              priority
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            At Lionz Roofing, we protect what matters most — your home and your
            business — with durable, high-quality roofing solutions tailored to
            your needs.
          </p>
          <div className="flex gap-4">
            <a
              href={COMPANY.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-lionzGold transition-colors"
            >
              <FacebookIcon size={20} />
            </a>
            <a
              href={COMPANY.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-gray-400 hover:text-lionzGold transition-colors"
            >
              <TikTokIcon size={20} />
            </a>
            <a
              href={COMPANY.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-lionzGold transition-colors"
            >
              <InstagramIcon size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lionzGold font-bold uppercase tracking-widest text-sm mb-5">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-lionzGold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lionzGold font-bold uppercase tracking-widest text-sm mb-5">
            Our Services
          </h3>
          <ul className="space-y-2">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-lionzGold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lionzGold font-bold uppercase tracking-widest text-sm mb-5">
            Contact Us
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href={COMPANY.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-gray-400 hover:text-lionzGold transition-colors text-sm"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-lionzGold mt-0.5"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {COMPANY.address}
              </a>
            </li>
            <li>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 text-gray-400 hover:text-lionzGold transition-colors text-sm"
              >
                <Phone size={16} className="shrink-0 text-lionzGold" />
                {COMPANY.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-lionzGold transition-colors text-sm"
              >
                <Mail size={16} className="shrink-0 text-lionzGold" />
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-center gap-2 text-gray-400 text-sm">
              <FileText size={16} className="shrink-0 text-lionzGold" />
              License # {COMPANY.license}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Lionz Roofing. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            <Link
              href="/privacy-policy"
              className="hover:text-gray-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-gray-400 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
