import { LOCATION_INFO } from "@/data/hoursData";
import { MapPin, Navigation, Compass, Train, ArrowUpRight, Footprints } from "lucide-react";
import OpeningStatusBadge from "../OpeningStatusBadge";

export default function LocationSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream-50 text-espresso-950 border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-caramel-700 text-xs font-mono tracking-[0.2em] uppercase font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Finding Farrier&apos;s Passage · Soho W1D</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-espresso-950 leading-tight">
            Our Soho Location
          </h2>
          <p className="text-charcoal-600 font-light text-base sm:text-lg">
            Nestled inside a quiet pedestrian passage off Wardour Street. Just minutes from the Elizabeth Line,
            West End theatres, and independent record shops, yet delightfully quiet.
          </p>
        </div>

        {/* Location Grid: Details on Left, Interactive Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Details Column (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="bg-cream-100 p-6 sm:p-8 rounded-xs border border-cream-200 space-y-6">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-caramel-700 font-mono font-semibold">
                    London Postcode
                  </span>
                  <h3 className="font-serif text-2xl text-espresso-950 font-medium">
                    {LOCATION_INFO.addressLine1}
                  </h3>
                  <p className="text-sm text-charcoal-700">
                    Soho, London {LOCATION_INFO.postcode}
                  </p>
                  <p className="text-xs text-charcoal-500 font-mono">City of Westminster · Central London Zone 1</p>
                </div>

                <div className="w-10 h-10 rounded-xs bg-caramel-100 flex items-center justify-center text-caramel-700">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              {/* Status indicator */}
              <div className="pt-2 border-t border-cream-200">
                <OpeningStatusBadge />
              </div>

              {/* Wayfinding tip with British storytelling */}
              <div className="p-4 bg-white/90 rounded-xs border border-cream-200 text-xs text-charcoal-700 space-y-1.5">
                <div className="flex items-center gap-1.5 text-espresso-950 font-medium font-serif text-sm">
                  <Footprints className="w-4 h-4 text-caramel-600" />
                  <span>How to spot the passage:</span>
                </div>
                <p className="leading-relaxed">
                  {LOCATION_INFO.howToFindUs}
                </p>
              </div>

              {/* Get Directions CTA */}
              <a
                href={LOCATION_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-espresso-900 hover:bg-caramel-700 text-cream-50 py-3.5 px-6 rounded-xs text-xs uppercase tracking-widest font-medium transition-all shadow-sm hover:shadow-md"
              >
                <Navigation className="w-4 h-4 text-caramel-300" />
                <span>Open in Google Maps (Walking Route)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Underground & Transit Box with London Lines */}
            <div className="bg-cream-100 p-6 rounded-xs border border-cream-200 space-y-4">
              <div className="flex items-center justify-between border-b border-cream-200 pb-3">
                <div className="flex items-center gap-2 text-espresso-950 font-medium text-sm">
                  <Train className="w-4 h-4 text-caramel-600" />
                  <span>London Underground Connections</span>
                </div>
                <span className="text-[10px] font-mono text-charcoal-500">Zone 1</span>
              </div>
              <div className="space-y-3 text-xs">
                {LOCATION_INFO.transit.map((t) => (
                  <div
                    key={t.station}
                    className="flex items-start justify-between border-b border-cream-200 pb-2 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-medium text-espresso-950">{t.station}</p>
                      <p className="text-charcoal-500 text-[11px]">{t.lines}</p>
                    </div>
                    <span className="font-mono text-caramel-700 bg-cream-50 px-2 py-0.5 rounded-xs shrink-0 font-medium">
                      {t.walkTime}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Map Column (Cols 6-12) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] lg:aspect-[16/11] rounded-xs overflow-hidden border border-cream-300 shadow-xl bg-cream-200">
              <iframe
                title="Hideaway Coffee House Location Map - 7 Farriers Passage London W1D 7DP"
                src="https://maps.google.com/maps?q=7%20Farrier's%20Passage,%20London%20W1D%207DP&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.05) saturate(0.9)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Overlay Badge on Map */}
              <div className="absolute top-4 left-4 bg-espresso-950/92 backdrop-blur-md text-cream-100 p-3.5 rounded-xs border border-espresso-800 shadow-md text-xs space-y-0.5 hidden sm:block">
                <p className="font-serif font-medium text-cream-50">
                  Hideaway Coffee House
                </p>
                <p className="text-caramel-300 font-mono text-[11px]">
                  7 Farrier&apos;s Passage, Soho London W1D 7DP
                </p>
              </div>
            </div>

            {/* Quick Map Bar */}
            <div className="flex items-center justify-between text-xs text-charcoal-500 px-1 font-mono">
              <span>Pedestrian passage · Courtyard seating available</span>
              <a
                href={LOCATION_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-caramel-700 hover:text-caramel-800 underline font-medium"
              >
                Open Full Map &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
