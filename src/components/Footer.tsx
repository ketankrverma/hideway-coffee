"use client";

import { useState } from "react";
import Link from "next/link";
import { OPENING_HOURS, LOCATION_INFO } from "@/data/hoursData";
import { MapPin, ArrowUpRight, CheckCircle2, Mail } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import OpeningStatusBadge from "./OpeningStatusBadge";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-espresso-950 text-cream-100 border-t border-espresso-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-espresso-900">
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <span className="font-serif text-2xl lg:text-3xl font-bold tracking-widest text-cream-50 group-hover:text-caramel-400 transition-colors uppercase">
                Hideaway
              </span>
              <p className="text-[10px] uppercase tracking-[0.25em] text-caramel-400 font-mono font-medium mt-1">
                Coffee House · Soho, London W1D
              </p>
            </Link>

            <p className="text-charcoal-400 text-sm leading-relaxed max-w-sm font-light">
              An independent specialty coffee house tucked inside Farrier&apos;s Passage.
              Crafting mindful moments, single-origin roasts, and warm hospitality in the heart of London.
            </p>

            <div className="pt-2">
              <OpeningStatusBadge />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={LOCATION_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xs bg-espresso-900 hover:bg-caramel-600 text-cream-200 hover:text-espresso-950 flex items-center justify-center transition-all border border-espresso-800"
                aria-label="Follow Hideaway Coffee House on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${LOCATION_INFO.email}`}
                className="w-10 h-10 rounded-xs bg-espresso-900 hover:bg-caramel-600 text-cream-200 hover:text-espresso-950 flex items-center justify-center transition-all border border-espresso-800"
                aria-label="Email Hideaway Coffee House"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={LOCATION_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xs bg-espresso-900 hover:bg-caramel-600 text-cream-200 hover:text-espresso-950 flex items-center justify-center transition-all border border-espresso-800"
                aria-label="View on Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Cols 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-sm tracking-widest uppercase text-cream-300 font-semibold">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-charcoal-400">
              <li>
                <Link href="/" className="hover:text-caramel-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/story" className="hover:text-caramel-400 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-caramel-400 transition-colors">
                  Coffee &amp; Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-caramel-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/visit" className="hover:text-caramel-400 transition-colors">
                  Visit Farrier&apos;s Passage
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-caramel-400 transition-colors">
                  Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours (Cols 7-9) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-sm tracking-widest uppercase text-cream-300 font-semibold">
                Opening Hours
              </h3>
              <span className="text-[10px] tracking-wide text-caramel-400/90 font-mono">
                Verified
              </span>
            </div>
            <div className="space-y-2 text-xs font-mono">
              {OPENING_HOURS.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between text-charcoal-400 border-b border-espresso-900/60 pb-1.5"
                >
                  <span className="text-cream-200">{item.day}</span>
                  <span className="text-cream-300">
                    {item.open} – {item.close}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-charcoal-500 italic">
              * Bank holiday hours may vary. Kitchen closes 45 mins before bar.
            </p>
          </div>

          {/* Location & Newsletter (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-2">
              <h3 className="font-serif text-sm tracking-widest uppercase text-cream-300 font-semibold">
                The Hideaway
              </h3>
              <address className="not-italic text-sm text-charcoal-400 space-y-1">
                <p className="text-cream-200 font-medium">{LOCATION_INFO.addressLine1}</p>
                <p>Soho, London {LOCATION_INFO.postcode}</p>
                <p className="text-xs text-charcoal-500 pt-1 font-mono">
                  Off Wardour St &amp; Shaftesbury Ave
                </p>
              </address>
              <a
                href={LOCATION_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-caramel-400 hover:text-caramel-300 font-medium pt-1 group"
              >
                <span>Get Walking Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Newsletter Dispatch */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs uppercase tracking-wider text-cream-300 font-medium font-mono">
                The Soho Coffee Dispatch
              </h4>
              <p className="text-xs text-charcoal-400 font-light">
                Seasonal origin releases, barista cupping notes, and quiet morning dispatches.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 p-3 bg-espresso-900 border border-caramel-500/40 rounded-xs text-xs text-caramel-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Thank you. You are on the private coffee dispatch list.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 bg-espresso-900 border border-espresso-800 focus:border-caramel-500 rounded-xs px-3 py-2 text-xs text-cream-100 placeholder:text-charcoal-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-caramel-600 hover:bg-caramel-500 text-espresso-950 font-medium px-3.5 py-2 rounded-xs text-xs uppercase tracking-wider transition-colors shrink-0"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500 font-mono">
          <p>
            &copy; 2026 Hideaway Coffee House. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Specialty Coffee · Soho, London W1D 7DP</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">London Editorial Agency Design</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
