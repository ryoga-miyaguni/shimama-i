"use client"

import { useState, useMemo } from "react"
import type { MapPoint } from "../../types"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Region = "north" | "central" | "south"

const REGIONS: { id: Region; name: string }[] = [
  { id: "north", name: "北部" },
  { id: "central", name: "中部" },
  { id: "south", name: "南部" },
]

const regionColorClasses = {
  north: "bg-green-500",
  central: "bg-red-500",
  south: "bg-yellow-500",
}

interface RegionShopListProps {
  points: MapPoint[]
  onShopSelect: (point: MapPoint) => void
}

export default function RegionShopList({ points, onShopSelect }: RegionShopListProps) {
  const [activeRegion, setActiveRegion] = useState<Region>("central")

  const groupedPoints = useMemo(() => {
    return points.reduce(
      (acc, point) => {
        const region = point.region || "central"
        if (!acc[region]) {
          acc[region] = []
        }
        acc[region].push(point)
        return acc
      },
      {} as Record<Region, MapPoint[]>,
    )
  }, [points])

  const activeRegionPoints = groupedPoints[activeRegion] || []

  return (
    <div className="container mx-auto px-4 -mt-12 relative z-20">
      <Card className="p-2">
        <div className="grid grid-cols-3 gap-2">
          {REGIONS.map((region) => (
            <Button
              key={region.id}
              variant={activeRegion === region.id ? "default" : "outline"}
              onClick={() => setActiveRegion(region.id)}
              className={`font-bold ${
                activeRegion === region.id
                  ? `${regionColorClasses[region.id]} text-white hover:${regionColorClasses[region.id]}/90`
                  : ""
              }`}
            >
              {region.name}
            </Button>
          ))}
        </div>
        <div className="max-h-60 overflow-y-auto space-y-2 p-2 bg-muted/50 rounded-md">
          {activeRegionPoints.map((point) => (
            <Card key={point.id} className="p-3 cursor-pointer hover:bg-accent" onClick={() => onShopSelect(point)}>
              <p className="font-semibold leading-tight">{point.shop.name}</p>
              <p className="text-xs text-muted-foreground">{point.shop.location.address}</p>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  )
}