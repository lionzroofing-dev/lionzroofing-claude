"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { navItems } from "@/data/navigation";

const PHONE = "(954) 637-6835";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-lionzNavy shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo/logo.webp"
            alt="Lionz Roofing"
            width={220}
            height={95}
            style={{ height: "80px", width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <li key={item.href} className="relative group">
                <div
                  className="flex items-center text-white font-medium"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="hover:text-lionzGold px-3 py-2 rounded transition-colors"
                  >
                    {item.label}
                  </Link>
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    className="hover:text-lionzGold pr-2 py-2 transition-colors"
                    aria-label="Toggle services menu"
                  >
                    <ChevronDown size={14} />
                  </button>
                </div>
                <ul
                  className={`absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[220px] transition-all duration-150 ${
                    servicesOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block px-5 py-2 text-lionzNavy hover:bg-lionzLight hover:text-lionzGold font-medium transition-colors text-sm"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white hover:text-lionzGold font-medium px-3 py-2 rounded transition-colors block"
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="hidden md:flex items-center gap-2 bg-lionzGold text-lionzNavy font-bold px-5 py-2 rounded-xl hover:brightness-90 transition-all"
          >
            <Phone size={16} />
            Call Us
          </a>
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-lionzNavy border-t border-white/10 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-white hover:text-lionzGold font-medium py-2 border-b border-white/10 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${PHONE}`}
            className="mt-4 flex items-center justify-center gap-2 bg-lionzGold text-lionzNavy font-bold px-5 py-3 rounded-xl hover:brightness-90 transition-all w-full"
          >
            <Phone size={16} />
            Call Us Now
          </a>
        </div>
      )}
    </nav>
  );
}
