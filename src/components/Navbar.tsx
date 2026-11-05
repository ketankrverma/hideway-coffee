"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Compass } from "lucide-react";
import OpeningStatusBadge from "./OpeningStatusBadge";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/story", label: "Our Story" },
  { href: "/menu", label: "Coffee & Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/visit", label: "Find Farrier's Passage" },
  { href: "/contact", label: "Enquiries" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Sync mobile menu state on navigation without cascading effect
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top London Postcode & Status Ribbon */}
      <div className="bg-espresso-950 text-cream-200 text-[11px] font-mono py-2 px-4 border-b border-espresso-800/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-caramel-400" />
            <span className="font-semibold text-caramel-300 tracking-wider uppercase">London W1D</span>
            <span className="text-espresso-700 hidden sm:inline">|</span>
            <span className="truncate text-cream-300 font-sans hidden sm:inline">
              Tucked down Farrier&apos;s Passage, off Wardour Street &amp; Shaftesbury Avenue
            </span>
          </div>
          <div className="flex items-center gap-4 text-cream-300 shrink-0">
            <OpeningStatusBadge variant="compact" className="text-cream-200" />
            <span className="text-espresso-800 hidden md:inline">|</span>
            <span className="font-serif italic text-cream-400 hidden md:inline">
              Proper coffee without the rush
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-cream-50/95 backdrop-blur-md shadow-xs border-b border-cream-200/90 py-3.5"
            : "bg-cream-50/85 backdrop-blur-xs border-b border-cream-200/50 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Wordmark & London Hallmark Emblem */}
            <Link
              href="/"
              className="group flex items-center gap-3.5 focus:outline-none"
              aria-label="Hideaway Coffee House Soho Homepage"
            >
              {/* Minimalist Coffee Emblem */}
              <div className="w-10 h-10 rounded-xs bg-espresso-900 text-cream-100 flex items-center justify-center transition-all duration-300 group-hover:bg-caramel-700 border border-espresso-800 shadow-xs">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-caramel-300 group-hover:text-cream-50 transition-colors"
                >
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                  <line x1="6" y1="2" x2="6" y2="4" />
                  <line x1="10" y1="2" x2="10" y2="4" />
                  <line x1="14" y1="2" x2="14" y2="4" />
                </svg>
              </div>

              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-2xl font-bold tracking-wider text-espresso-950 group-hover:text-caramel-700 transition-colors uppercase leading-none">
                    Hideaway
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-caramel-700 font-semibold border border-caramel-500/30 px-1 py-0.2 rounded-xs hidden sm:inline">
                    Soho · W1
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.22em] text-charcoal-500 font-medium mt-1 font-sans">
                  Specialty Coffee House &amp; Bakes
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs uppercase tracking-widest font-medium transition-colors duration-200 rounded-xs ${
                      isActive
                        ? "text-espresso-950 font-semibold"
                        : "text-charcoal-700 hover:text-espresso-950 hover:bg-cream-200/50"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-caramel-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA & Mobile Trigger */}
            <div className="flex items-center gap-3">
              <Link
                href="/visit"
                className="hidden sm:inline-flex items-center gap-2 bg-espresso-900 hover:bg-caramel-700 text-cream-50 text-[11px] uppercase tracking-widest px-4 py-2.5 rounded-xs font-medium transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Find The Alleyway</span>
                <ArrowRight className="w-3.5 h-3.5 text-caramel-300" />
              </Link>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xs text-espresso-900 hover:bg-cream-200/80 transition-colors focus:outline-none focus:ring-2 focus:ring-caramel-500"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-espresso-950 text-cream-100 animate-in fade-in duration-200">
          <div className="flex items-center justify-between p-6 border-b border-espresso-800">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xs bg-caramel-600 text-cream-50 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="w-4 h-4"
                >
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                  <line x1="6" y1="2" x2="6" y2="4" />
                  <line x1="10" y1="2" x2="10" y2="4" />
                  <line x1="14" y1="2" x2="14" y2="4" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-wider font-bold">HIDEAWAY</span>
                <span className="text-[9px] font-mono tracking-widest text-caramel-300">SOHO · LONDON W1D</span>
              </div>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-cream-300 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-serif text-2xl py-2 flex items-center justify-between transition-colors border-b border-espresso-900 ${
                      isActive
                        ? "text-caramel-400 font-semibold pl-2 border-l-2 border-caramel-400"
                        : "text-cream-200 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-40" />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-8 border-t border-espresso-900 space-y-4">
              <div className="text-xs text-cream-400 space-y-1 font-mono">
                <p className="font-medium text-cream-200">7 Farrier&apos;s Passage, Soho, London W1D 7DP</p>
                <p>Weekdays 07:30 – 18:00 · Saturday 08:30 – 18:30 · Sunday 09:00 – 17:30</p>
              </div>
              <Link
                href="/visit"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-caramel-600 hover:bg-caramel-500 text-espresso-950 font-medium py-3 rounded-xs text-xs uppercase tracking-widest transition-colors"
              >
                <Compass className="w-4 h-4" />
                <span>Directions via Google Maps</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
