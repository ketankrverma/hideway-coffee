import type { Metadata } from "next";
import Image from "next/image";
import { LOCATION_INFO, OPENING_HOURS } from "@/data/hoursData";
import OpeningStatusBadge from "@/components/OpeningStatusBadge";
import {
  MapPin,
  Navigation,
  Train,
  Clock,
  Compass,
  ArrowUpRight,
  HelpCircle,
  Footprints,
} from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export const metadata: Metadata = {
  title: "Visit Us",
  description:
    "Find Hideaway Coffee House at 7 Farrier's Passage, Soho, London W1D 7DP. Opening hours, walking directions from Tottenham Court Road & Leicester Square, and Google Maps.",
};

const FAQS = [
  {
    q: "How do I spot Farrier's Passage in Soho?",
    a: "Farrier's Passage is an understated pedestrian alleyway located between Wardour Street and Shaftesbury Avenue in Soho W1. Look for our subtle brass projecting sign and dark oak double doors halfway down the passage.",
  },
  {
    q: "Are dogs welcome inside?",
    a: "Yes, well-behaved dogs on leads are warmly welcomed inside our cafe and at our outdoor passage tables. Fresh water bowls are always topped up.",
  },
  {
    q: "What is your laptop policy?",
    a: "We welcome quiet laptop working on weekdays during morning and afternoon hours, backed by high-speed guest Wi-Fi. On bustling weekends, we invite guests to disconnect and keep tables free for casual gatherings.",
  },
  {
    q: "Do you take table bookings?",
    a: "We operate entirely on a walk-in basis to preserve an effortless neighbourhood coffee house rhythm. If you plan to visit with a larger group (6+), do drop us a line in advance.",
  },
];

export default function VisitPage() {
  return (
    <div className="bg-cream-50 min-h-screen text-espresso-950">
      {/* Header */}
      <section className="relative py-20 lg:py-28 bg-espresso-950 text-cream-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=80"
            alt="Farriers Passage Soho London exterior"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.35] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-caramel-300 text-xs font-mono tracking-[0.25em] uppercase font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Finding The Alleyway · Soho W1D</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-cream-50 leading-tight">
            Visit Us in Soho
          </h1>
          <p className="text-base sm:text-lg text-cream-200/90 font-light max-w-2xl mx-auto leading-relaxed">
            7 Farrier&apos;s Passage, London W1D 7DP.
            A quiet sanctuary just seconds from the bustling heart of central London.
          </p>
        </div>
      </section>

      {/* Main Location Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Hours, Address & Directions (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Box */}
            <div className="bg-white p-6 sm:p-8 rounded-xs border border-cream-200 shadow-xs space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-caramel-700 font-mono font-semibold">
                    West End Address
                  </span>
                  <h2 className="font-serif text-2xl text-espresso-950 font-medium mt-1">
                    {LOCATION_INFO.name}
                  </h2>
                  <address className="not-italic text-sm text-charcoal-700 mt-2 space-y-0.5 font-sans">
                    <p className="font-medium text-espresso-950">{LOCATION_INFO.addressLine1}</p>
                    <p>Soho, London {LOCATION_INFO.postcode}</p>
                    <p className="text-xs text-charcoal-500 pt-1 font-mono">City of Westminster · United Kingdom</p>
                  </address>
                </div>

                <div className="w-11 h-11 rounded-xs bg-caramel-100 flex items-center justify-center text-caramel-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              {/* Status Badge */}
              <div className="pt-2 border-t border-cream-200">
                <OpeningStatusBadge />
              </div>

              {/* Primary Directions CTA */}
              <a
                href={LOCATION_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-espresso-900 hover:bg-caramel-700 text-cream-50 py-3.5 px-6 rounded-xs text-xs uppercase tracking-widest font-medium transition-all shadow-sm hover:shadow-md"
              >
                <Navigation className="w-4 h-4 text-caramel-300" />
                <span>Get Walking Directions via Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Opening Hours Table */}
            <div className="bg-white p-6 sm:p-8 rounded-xs border border-cream-200 shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-cream-200 pb-3">
                <div className="flex items-center gap-2 text-espresso-950 font-medium text-sm">
                  <Clock className="w-4 h-4 text-caramel-600" />
                  <span>Opening Hours</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-xs">
                  London (GMT/BST)
                </span>
              </div>

              <div className="space-y-2.5 text-xs font-mono">
                {OPENING_HOURS.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between text-charcoal-600 border-b border-cream-100 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="font-medium text-espresso-950">{item.day}</span>
                    <span className="text-espresso-950">
                      {item.open} – {item.close}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-cream-200 text-[11px] text-charcoal-500 italic space-y-1">
                <p>* Espresso bar opens promptly at stated opening times.</p>
                <p>* Warm sourdough kitchen closes 45 minutes prior to cafe close.</p>
              </div>
            </div>

            {/* London Underground Transit Connections */}
            <div className="bg-white p-6 sm:p-8 rounded-xs border border-cream-200 shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-cream-200 pb-3">
                <div className="flex items-center gap-2 text-espresso-950 font-medium text-sm">
                  <Train className="w-4 h-4 text-caramel-600" />
                  <span>Nearby Underground Stations</span>
                </div>
                <span className="text-[10px] font-mono text-charcoal-500">Zone 1</span>
              </div>

              <div className="space-y-3.5 text-xs">
                {LOCATION_INFO.transit.map((t) => (
                  <div key={t.station} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-espresso-950">{t.station}</span>
                      <span className="font-mono text-caramel-700 bg-cream-100 px-2 py-0.5 rounded-xs font-medium">
                        {t.walkTime}
                      </span>
                    </div>
                    <p className="text-[11px] text-charcoal-500">{t.lines}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps & Wayfinding (Cols 6-12) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Interactive Map Frame */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-xs overflow-hidden border border-cream-300 shadow-xl bg-cream-200">
              <iframe
                title="Hideaway Coffee House Location Map - 7 Farriers Passage London"
                src="https://maps.google.com/maps?q=7%20Farrier's%20Passage,%20London%20W1D%207DP&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.05) saturate(0.9)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Wayfinding Card with London Walkthrough */}
            <div className="bg-cream-100 p-6 sm:p-8 rounded-xs border border-cream-200 space-y-4">
              <div className="flex items-center gap-2 text-espresso-950 font-medium text-sm">
                <Footprints className="w-4 h-4 text-caramel-600" />
                <span>How to Find Farrier&apos;s Passage</span>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
                {LOCATION_INFO.howToFindUs}
              </p>

              {/* Step-by-step stroll guide */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-white/70 rounded-xs border border-cream-200">
                  <span className="font-serif font-medium text-espresso-950 block">From Tottenham Court Rd:</span>
                  <p className="text-charcoal-600 font-light mt-0.5">Exit via Dean Street, stroll south towards Shaftesbury Ave, turn right down the passage.</p>
                </div>
                <div className="p-3 bg-white/70 rounded-xs border border-cream-200">
                  <span className="font-serif font-medium text-espresso-950 block">From Leicester Square:</span>
                  <p className="text-charcoal-600 font-light mt-0.5">Head north up Wardour Street past Chinatown, turn into Farrier&apos;s Passage on your left.</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
                <a
                  href={LOCATION_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-caramel-700 hover:text-caramel-800 underline font-medium flex items-center gap-1"
                >
                  <span>Open Full Screen in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-charcoal-300">•</span>
                <a
                  href={LOCATION_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-caramel-700 hover:text-caramel-800 underline font-medium flex items-center gap-1"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Instagram {LOCATION_INFO.instagramHandle}</span>
                </a>
              </div>
            </div>

            {/* Visitor FAQs */}
            <div className="bg-white p-6 sm:p-8 rounded-xs border border-cream-200 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-espresso-950 font-medium text-sm border-b border-cream-200 pb-3">
                <HelpCircle className="w-4 h-4 text-caramel-600" />
                <span>Visitor Information &amp; Common Queries</span>
              </div>

              <div className="space-y-4 text-xs">
                {FAQS.map((faq) => (
                  <div key={faq.q} className="space-y-1 border-b border-cream-100 pb-3 last:border-0 last:pb-0">
                    <h3 className="font-serif font-medium text-espresso-950 text-sm">
                      {faq.q}
                    </h3>
                    <p className="text-charcoal-600 font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
