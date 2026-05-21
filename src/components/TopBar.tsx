import { Phone, Mail, FileText } from "lucide-react";

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const COMPANY = {
  address: "5200 NW 33rd Ave Suite 200, Fort Lauderdale, FL 33309",
  mapsUrl: "https://www.google.com/maps?q=5200+NW+33rd+Ave+Suite+200,+Fort+Lauderdale,+FL+33309",
  phone: "(954) 637-6835",
  email: "contact@lionzroofing.com",
  license: "CCC1336828",
  facebook: "https://www.facebook.com/LionzRoofing/",
  tiktok: "https://www.tiktok.com/@lionzroofing",
  instagram: "https://www.instagram.com/lionzroofing",
};

export default function TopBar() {
  return (
    <div className="bg-lionzGold text-lionzNavy text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-y-1">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a
            href={COMPANY.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="hidden sm:inline">{COMPANY.address}</span>
            <span className="sm:hidden">Fort Lauderdale, FL</span>
          </a>
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-1 hover:underline font-semibold"
          >
            <Phone size={14} className="shrink-0" />
            {COMPANY.phone}
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="flex items-center gap-1 hover:underline hidden md:flex"
          >
            <Mail size={14} className="shrink-0" />
            {COMPANY.email}
          </a>
          <span className="flex items-center gap-1 hidden lg:flex">
            <FileText size={14} className="shrink-0" />
            License # {COMPANY.license}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={COMPANY.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:opacity-70 transition-opacity"
          >
            <FacebookIcon size={16} />
          </a>
          <a
            href={COMPANY.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:opacity-70 transition-opacity"
          >
            <TikTokIcon size={16} />
          </a>
          <a
            href={COMPANY.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-70 transition-opacity"
          >
            <InstagramIcon size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
