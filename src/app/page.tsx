"use client"

import { useState } from "react"
import OkinawaMap from "@/components/OkinawaMap"
import { HeroSection } from "@/components/landing/HeroSection"
import { AboutSection } from "@/components/landing/AboutSection"
import ShopPopup from "@/components/ShopPopup"
// import { SponsorsSection } from "@/components/landing/SponsorsSection"
import type { MapPoint } from "../../types"

export default function HomePage() {
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <OkinawaMap onPointSelect={setSelectedPoint} />
      <AboutSection />
      {/* <SponsorsSection /> */}

      {selectedPoint && (
        <ShopPopup
          shop={selectedPoint.shop}
          attraction={selectedPoint.attraction}
          onClose={() => setSelectedPoint(null)}
        />
      )}
    </div>
  )
}