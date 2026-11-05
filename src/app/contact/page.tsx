import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";
import { LOCATION_INFO } from "@/data/hoursData";
import OpeningStatusBadge from "@/components/OpeningStatusBadge";
import { MapPin, Mail, Clock, MessageSquare, ArrowUpRight } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export const metadata: Metadata = {
  title: "Enquiries",
  description:
    "Get in touch with Hideaway Coffee House in Soho, London W1D. Enquiries for visits, private space hire, press, or coffee collaborations.",
};

export default function ContactPage() {
  return (
    <div className="bg-cream-50 min-h-screen text-espresso-950">
      {/* Header */}
      <section className="relative py-20 lg:py-28 bg-espresso-950 text-cream-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=2000&q=80"
            alt="Hideaway Coffee House interior"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.3] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-caramel-300 text-xs font-mono tracking-[0.25em] uppercase font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect with Us · Soho W1</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-cream-50 leading-tight">
            Enquiries &amp; Studio Hire
          </h1>
          <p className="text-base sm:text-lg text-cream-200/90 font-light max-w-2xl mx-auto leading-relaxed">
            Have a question about our rotating single origins, interested in private hire of the courtyard room, or
            reaching our team? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-caramel-700 font-mono font-semibold">
                Direct Channels
              </span>
              <h2 className="font-serif text-3xl text-espresso-950 font-medium">
                We are always pleased to assist.
              </h2>
              <p className="text-sm text-charcoal-600 font-light leading-relaxed">
                For everyday cafe visits and morning bakes, we welcome walk-ins without reservations. For all other
                enquiries, please reach us through the direct channels below.
              </p>
            </div>

            {/* Verified Details Cards */}
            <div className="space-y-4">
              {/* Address */}
              <div className="bg-white p-5 rounded-xs border border-cream-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xs bg-caramel-100 flex items-center justify-center text-caramel-700 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-charcoal-500 font-mono block">
                    London Address
                  </span>
                  <p className="font-medium text-espresso-950 text-sm">{LOCATION_INFO.addressLine1}</p>
                  <p className="text-xs text-charcoal-600">Soho, London {LOCATION_INFO.postcode}</p>
                  <a
                    href={LOCATION_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-caramel-700 hover:text-caramel-800 underline font-medium pt-1 font-mono"
                  >
                    <span>Get Walking Directions</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-5 rounded-xs border border-cream-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xs bg-caramel-100 flex items-center justify-center text-caramel-700 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-charcoal-500 font-mono block">
                    Email Enquiries
                  </span>
                  <a
                    href={`mailto:${LOCATION_INFO.email}`}
                    className="font-medium text-espresso-950 text-sm hover:text-caramel-700 transition-colors font-mono"
                  >
                    {LOCATION_INFO.email}
                  </a>
                  <p className="text-xs text-charcoal-500 font-light">
                    Typically answered within 24 business hours.
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="bg-white p-5 rounded-xs border border-cream-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xs bg-caramel-100 flex items-center justify-center text-caramel-700 shrink-0">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-charcoal-500 font-mono block">
                    Social &amp; Visual Updates
                  </span>
                  <a
                    href={LOCATION_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-espresso-950 text-sm hover:text-caramel-700 transition-colors flex items-center gap-1 font-mono"
                  >
                    <span>{LOCATION_INFO.instagramHandle}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <p className="text-xs text-charcoal-500 font-light">
                    Daily stories, single-origin drops, and fresh morning bakes.
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours Summary */}
            <div className="p-5 bg-cream-100 rounded-xs border border-cream-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-espresso-950 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-caramel-700" />
                  <span>Cafe Service Hours</span>
                </span>
                <OpeningStatusBadge variant="compact" />
              </div>
              <div className="text-xs text-charcoal-600 space-y-1 font-mono">
                <p>Monday – Friday: 07:30 – 18:00</p>
                <p>Saturday: 08:30 – 18:30</p>
                <p>Sunday: 09:00 – 17:30</p>
              </div>
            </div>
          </div>

          {/* Form (Cols 6-12) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
