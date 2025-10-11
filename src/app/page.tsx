import { HeroSection } from "@/components/landing/HeroSection"
import { AboutSection } from "@/components/landing/AboutSection"
import { MapSection } from "@/components/landing/MapSection"
// import { SponsorsSection } from "@/components/landing/SponsorsSection"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MapSection />
      <AboutSection />
      {/* <SponsorsSection /> */}
    </div>
  )
}