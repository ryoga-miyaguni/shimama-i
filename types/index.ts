export interface Shop {
  id: string
  name: string
  description: string
  image: string
  location: {
    lat: number
    lng: number
    address: string
  }
  specialties: string[]
  hours: string
  phone?: string
  website?: string
}

export interface RegionAttraction {
  id: string
  shopId: string
  title: string
  description: string
  image: string
  category: "nature" | "culture" | "food" | "activity"
}

export interface Sponsor {
  id: string
  name: string
  logo: string
  website?: string
  description: string
  tier: "gold" | "silver" | "bronze"
}

export interface MapPoint {
  id: string
  shop: Shop
  attraction: RegionAttraction
  position: {
    x: number // percentage from left
    y: number // percentage from top
  }
}
