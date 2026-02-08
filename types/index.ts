import type { ReactNode } from "react"

export interface Shop {
  id: string
  name: string
  description: string
  detail?: ReactNode
  image: string
  region: "north" | "central" | "south"
  location: {
    address: string
  }
  hours: string
  phone?: string
  website?: string
  snsUrl?: string
  position: { x: number; y: number }
}

export interface RegionAttraction {
  id: string
  shopId: string
  title: string
  description: ReactNode
  detail?: ReactNode
  image: string
  position: { x: number; y: number }
  category: "nature" | "culture" | "food" | "spot"
}

export interface Sponsor {
  id: string
  name: string
  logo: string
  website?: string
  description: ReactNode
  tier: "gold" | "silver" | "bronze"
}

export interface MapPoint {
  id: string
  shop: Shop
  attraction: RegionAttraction
  position: {
    x: number 
    y: number
  }
  region: "north" | "central" | "south"
}
