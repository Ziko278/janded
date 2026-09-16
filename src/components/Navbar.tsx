"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/project-management", label: "Project Management" },
  { href: "/health-safety", label: "Health & Safety" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden md:flex bg-ink text-white/70 text-xs">
        <div className="mx-auto max-w-[1200px] w-full px-10 h-9 flex items-center justify-between">
          <span>No. 9 Konoko Street, Wuse 2, Abuja FCT</span>
          <div className="flex items-center gap-6">
            <span>09078921750</span>
            <span className="text-white/30">|</span>
            <span>info@jaded.ng</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-surface/95 backdrop-blur border-b border-line">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
  <img
    src="/images/logo.png"
    alt="Janded Global Resources Ltd."
    className="h-12 w-auto"
  />
  <span className="font-heading text-xl font-semibold text-ink tracking-tight">
    JANDED
  </span>
</Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm text-ink/80 py-1 hover:text-ink transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:w-0 after:bg-amber after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm font-medium text-ink border border-ink px-5 py-2.5 hover:bg-ink hover:text-white transition-colors"
            >
              Get a Quote
            </Link>
          </nav>

          <button
            className="md:hidden flex flex-col gap-1.5 w-8"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="h-0.5 bg-ink w-full" />
            <span className="h-0.5 bg-ink w-full" />
            <span className="h-0.5 bg-ink w-2/3" />
          </button>
        </div>

        {open && (
          <nav className="md:hidden border-t border-line px-6 py-4 flex flex-col gap-4 bg-surface">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-ink/80"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-sm font-medium bg-ink text-white px-5 py-2.5 text-center"
            >
              Get a Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}