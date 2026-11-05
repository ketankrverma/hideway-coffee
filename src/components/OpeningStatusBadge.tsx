"use client";

import { useEffect, useState } from "react";
import { getShopStatus } from "@/data/hoursData";
import { Clock } from "lucide-react";

interface Props {
  variant?: "pill" | "text" | "compact" | "london-stamp";
  className?: string;
}

export default function OpeningStatusBadge({ variant = "pill", className = "" }: Props) {
  const [status, setStatus] = useState<{ isOpen: boolean; message: string; subtext: string }>({
    isOpen: true,
    message: "Serving in Soho",
    subtext: "Until 18:00 today",
  });
  const [londonTime, setLondonTime] = useState<string>("12:00 GMT");

  useEffect(() => {
    const update = () => {
      setStatus(getShopStatus());
      const now = new Date();
      setLondonTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
        }) + " London"
      );
    };

    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, []);

  if (variant === "london-stamp") {
    return (
      <div className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xs border border-caramel-500/30 bg-espresso-950/90 text-cream-100 font-mono text-[11px] uppercase tracking-widest ${className}`}>
        <span className={`w-2 h-2 rounded-full ${status.isOpen ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
        <span className="text-caramel-300 font-semibold">{status.isOpen ? "Open Now" : "Closed"}</span>
        <span className="text-espresso-700">|</span>
        <span className="text-cream-300">{londonTime}</span>
        <span className="text-espresso-700">|</span>
        <span className="text-cream-400 lowercase italic font-serif">Farrier&apos;s Passage W1</span>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <span className={`inline-flex items-center gap-1.5 text-xs font-mono tracking-wide ${className}`}>
        <span
          className={`h-2 w-2 rounded-full ${
            status.isOpen ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
          }`}
        />
        <span className={status.isOpen ? "text-emerald-700 font-medium" : "text-charcoal-600"}>
          {status.message}
        </span>
      </span>
    );
  }

  if (variant === "text") {
    return (
      <div className={`flex items-start gap-2 text-sm ${className}`}>
        <Clock className="w-4 h-4 mt-0.5 text-caramel-600 shrink-0" />
        <div>
          <p className="font-medium text-espresso-900">{status.message}</p>
          <p className="text-xs text-charcoal-600 font-light">{status.subtext} · {londonTime}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xs text-xs font-mono transition-colors border ${
        status.isOpen
          ? "bg-emerald-950/10 border-emerald-700/30 text-emerald-900"
          : "bg-cream-200/60 border-cream-300 text-charcoal-700"
      } ${className}`}
    >
      <span
        className={`h-2 w-2 rounded-full ${
          status.isOpen ? "bg-emerald-600 animate-pulse" : "bg-charcoal-400"
        }`}
      />
      <span className="font-medium tracking-wide uppercase text-[11px]">{status.message}</span>
      <span className="opacity-40">/</span>
      <span className="opacity-80 text-[11px] lowercase italic font-serif">{status.subtext}</span>
    </div>
  );
}
