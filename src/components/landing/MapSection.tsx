"use client"

import { useState } from "react"
import OkinawaMap from "@/components/OkinawaMap"
import ShopPopup from "@/components/ShopPopup"
import type { MapPoint } from "../../../types"
import { mapPoints } from "@/lib/data"

export function MapSection() {
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null)

  return (
    <>
      <OkinawaMap points={mapPoints} onPointSelect={setSelectedPoint} />
      {selectedPoint && (
        <ShopPopup
          shop={selectedPoint.shop}
          attraction={selectedPoint.attraction}
          onClose={() => setSelectedPoint(null)}
        />
      )}
    </>
  )
}