export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

export const navItems: NavItem[] = [
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Service Areas", href: "/service-areas" },
      { label: "Residential Roofing", href: "/residential-roofing" },
      { label: "Commercial Roofing", href: "/commercial-roofing" },
      { label: "Roof Replacements", href: "/roofing-replacement" },
      { label: "Roof Repairs", href: "/roof-repairs" },
      { label: "Gutter Works", href: "/gutter-works" },
    ],
  },
  { label: "Financing", href: "/financing" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
