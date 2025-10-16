"use client"

import { useState } from "react"
import type { MapPoint } from "../../types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import ImagePlaceholder from "@/components/ImagePlaceholder"
import { Instagram } from "lucide-react"

interface ShopPopupProps {
  point: MapPoint
  onClose: () => void
}

export default function ShopPopup({ point, onClose }: ShopPopupProps) {
  const [activeTab, setActiveTab] = useState<"shop" | "attraction">("shop")
  const { shop, attraction } = point

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex space-x-2">
            <Button
              variant={activeTab === "shop" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("shop")}
            >
              🌮 店舗情報
            </Button>
            <Button
              variant={activeTab === "attraction" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("attraction")}
            >
              ✨ 地域の魅力
            </Button>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            ✕
          </Button>
        </CardHeader>

        <CardContent>
          {activeTab === "shop" ? (
            <div className="space-y-4">
              <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                {shop.image ? (
                  <Image
                    src={shop.image}
                    alt={shop.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <ImagePlaceholder />
                )}
              </div>

              <div>
                <CardTitle className="text-xl mb-2">{shop.name}</CardTitle>
                <p className="text-muted-foreground mb-4">{shop.description}</p>

                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold">📍 住所:</span>
                      <p className="text-muted-foreground">{shop.location.address}</p>
                    </div>
                    <div>
                      <span className="font-semibold">🕒 営業時間:</span>
                      <p className="text-muted-foreground">{shop.hours}</p>
                    </div>
                    {shop.phone && (
                      <div>
                        <span className="font-semibold">📞 電話:</span>
                        <p className="text-muted-foreground">{shop.phone}</p>
                      </div>
                    )}
                    {shop.snsUrl && (
                      <div>
                        <span className="font-semibold flex items-center gap-1">
                          <Instagram className="h-4 w-4" /> SNS:
                        </span>
                        <Link href={shop.snsUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all text-sm">
                          {shop.snsUrl}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Link href={`/shops/${shop.id}`}>
                    <Button className="flex-1">詳細を見る</Button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            attraction && (
              <div className="space-y-4">
                <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                  {attraction.image ? (
                    <Image
                      src={attraction.image}
                      alt={attraction.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <ImagePlaceholder />
                  )}
                </div>
  
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-xl">{attraction.title}</CardTitle>
                    <Badge variant="outline">
                      {attraction.category === "nature" && "🌿 自然"}
                      {attraction.category === "culture" && "🏛️ 文化"}
                      {attraction.category === "food" && "🍽️ グルメ"}
                      {attraction.category === "activity" && "🎯 アクティビティ"}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{attraction.description}</p>
  
                  <Link href={`/appeal/${attraction.id}`}>
                    <Button className="w-full">もっと詳しく</Button>
                  </Link>
                </div>
              </div>
            )
          )}
        </CardContent>
      </Card>
    </div>
  )
}