"use client"

import { useState, useMemo } from "react"
import type { RegionAttraction, Shop } from "../../types"
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

interface RegionAttractionListProps {
  attractions: RegionAttraction[]
  shops: Shop[]
  onAttractionSelect: (shopId: string) => void
}

export default function RegionAttractionList({ attractions, shops, onAttractionSelect }: RegionAttractionListProps) {
  const [activeRegion, setActiveRegion] = useState<Region>("central")

  const groupedAttractions = useMemo(() => {
    const attractionsWithRegion = attractions.map(attraction => {
      const relatedShop = shops.find(shop => shop.id === attraction.shopId)
      return { ...attraction, region: relatedShop?.region || "central" }
    })

    return attractionsWithRegion.reduce(
      (acc, attraction) => {
        if (!acc[attraction.region]) {
          acc[attraction.region] = []
        }
        acc[attraction.region].push(attraction)
        return acc
      },
      {} as Record<Region, (RegionAttraction & { region: Region })[]>,
    )
  }, [attractions, shops])

  const activeRegionAttractions = groupedAttractions[activeRegion] || []

  return (
    <div className="container mx-auto px-4 -mt-12 relative z-20">
      <Card className="p-2">
        <div className="grid grid-cols-3 gap-2">
          {REGIONS.map((region) => (
            <Button key={region.id} variant={activeRegion === region.id ? "default" : "outline"} onClick={() => setActiveRegion(region.id)} className={`font-bold ${activeRegion === region.id ? `${regionColorClasses[region.id]} text-white hover:${regionColorClasses[region.id]}/90` : ""}`}>
              {region.name}
            </Button>
          ))}
        </div>
        <div className="max-h-60 overflow-y-auto space-y-2 p-2 bg-muted/50 rounded-md">
          {activeRegionAttractions.map((attraction) => (
            <Card key={attraction.id} className="p-3 cursor-pointer hover:bg-accent" onClick={() => onAttractionSelect(attraction.shopId)}>
              <p className="font-semibold leading-tight">{attraction.title}</p>
              <p className="text-xs text-muted-foreground">{attraction.description.substring(0, 40)}...</p>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  )
}