import OkinawaMap from "@/components/OkinawaMap"
import { HeroSection } from "@/components/landing/HeroSection"
import { AboutSection } from "@/components/landing/AboutSection"
// import { SponsorsSection } from "@/components/landing/SponsorsSection"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <OkinawaMap />
      <AboutSection />
      {/* <SponsorsSection /> */}
    </div>
  )
}