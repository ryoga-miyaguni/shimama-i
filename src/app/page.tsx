import { HeroSection } from "@/components/landing/HeroSection"
import { AboutSection } from "@/components/landing/AboutSection"
import { MapSection } from "@/components/landing/MapSection"
import { PrizeSection } from "@/components/landing/PrizeSection"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MapSection />
      {/* <InstagramPost url="https://www.instagram.com/p/DOuplp-CYRR/" /> */}
      <AboutSection />
      <PrizeSection />
    </div>
  )
}