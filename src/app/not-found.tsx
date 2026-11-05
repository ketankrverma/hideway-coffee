import Link from "next/link";
import { Compass, ArrowRight, Coffee } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-cream-50 text-espresso-950 px-4 py-20">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-caramel-100 text-caramel-700 flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-caramel-700 font-mono font-semibold">
            404 · Page Not Found
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-espresso-900 font-normal">
            Lost in Farrier&apos;s Passage?
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
            The page you are looking for has slipped away like morning mist over Soho.
            Let us guide you back to a warm cup of coffee.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-espresso-900 hover:bg-espresso-800 text-cream-50 px-6 py-3 rounded-sm text-xs uppercase tracking-widest font-medium transition-colors"
          >
            <span>Return Home</span>
            <ArrowRight className="w-3.5 h-3.5 text-caramel-400" />
          </Link>
          <Link
            href="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cream-100 hover:bg-cream-200 text-espresso-900 border border-cream-200 px-6 py-3 rounded-sm text-xs uppercase tracking-widest font-medium transition-colors"
          >
            <Coffee className="w-3.5 h-3.5 text-caramel-700" />
            <span>Explore Menu</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

