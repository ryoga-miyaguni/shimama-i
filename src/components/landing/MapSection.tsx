"use client"

import { useState, useEffect } from "react"
import OkinawaMap from "@/components/OkinawaMap"
import ShopPopup from "@/components/ShopPopup"
import RegionShopList from "@/components/RegionShopList"
import type { MapPoint } from "../../../types"
import { mapPoints } from "@/lib/data"

// 画面幅を判定するカスタムフック
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [breakpoint])

  return isMobile
}

export function MapSection() {
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null)
  const isMobile = useIsMobile()

  const handlePointSelect = (point: MapPoint | null) => {
    setSelectedPoint(point)
  }

  return (
    <>
      <OkinawaMap points={mapPoints} onPointSelect={handlePointSelect} isMobile={isMobile} />

      {isMobile && (
        <RegionShopList points={mapPoints} onShopSelect={handlePointSelect} />
      )}

      {selectedPoint && (
        <ShopPopup
          point={selectedPoint}
          onClose={() => setSelectedPoint(null)}
        />
      )}
    </>
  )
}