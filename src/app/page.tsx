import Hero from "@/components/home/Hero";
import BrandIntro from "@/components/home/BrandIntro";
import CoffeeHighlights from "@/components/home/CoffeeHighlights";
import Philosophy from "@/components/home/Philosophy";
import GalleryPreview from "@/components/home/GalleryPreview";
import LocationSection from "@/components/home/LocationSection";
import FinalCta from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <CoffeeHighlights />
      <Philosophy />
      <GalleryPreview />
      <LocationSection />
      <FinalCta />
    </>
  );
}
