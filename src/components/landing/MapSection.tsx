"use client"

import { useState, useEffect, useMemo } from "react"
import OkinawaMap from "@/components/OkinawaMap"
import RegionAttractionList from "@/components/RegionAttractionList"
import ShopPopup from "@/components/ShopPopup"
import RegionShopList from "@/components/RegionShopList"
import type { MapPoint } from "../../../types"
import { mapPoints, shops, attractions } from "@/lib/data"

// 表示するピンのタイプを定義
type PinType = "shop" | "attraction"

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
  const [selectedPoint, setSelectedPoint] = useState<(MapPoint & { initialTab?: PinType }) | null>(null)
  const [activeTab, setActiveTab] = useState<PinType>("shop")
  const isMobile = useIsMobile()

  // 表示するピンのデータを activeTab に応じて動的に選択
  const pinsToDisplay = useMemo(() => {
    const data = activeTab === "shops" ? shops : attractions
    return data.map((item) => ({
      id: item.id,
      shopId: "shopId" in item ? item.shopId : item.id, 
      name: "name" in item ? item.name : item.title,
      position: item.position,
      region: "region" in item ? item.region : shops.find(s => s.id === item.shopId)?.region || 'central',
    }))
  }, [activeTab])

  const handlePointSelect = (shopId: string | null, initialTab: PinType = "shop") => {
    if (shopId === null) {
      setSelectedPoint(null)
      return
    }
    // shopId を使って、ShopPopup が必要とする完全な MapPoint オブジェクトを検索
    const point = mapPoints.find((p) => p.shop.id === shopId)
    setSelectedPoint(point ? { ...point, initialTab } : null)
  }

  // RegionShopListからの選択を処理するラッパー関数（店舗タブ固定）
  const handleRegionShopSelect = (point: MapPoint) => {
    handlePointSelect(point.shop.id)
  }

  return (
    <>
      <OkinawaMap points={pinsToDisplay} onPointSelect={handlePointSelect} isMobile={isMobile} activeTab={activeTab} onTabChange={setActiveTab} />

      {isMobile && (
        activeTab === "shop" ? (
          <RegionShopList points={mapPoints} onShopSelect={handleRegionShopSelect} />
        ) : (
          <RegionAttractionList attractions={attractions} shops={shops} onAttractionSelect={(shopId) => handlePointSelect(shopId, "attraction")} />
        )
      )}

      {selectedPoint && (
        <ShopPopup
          point={selectedPoint}
          initialTab={selectedPoint.initialTab}
          onClose={() => setSelectedPoint(null)}
        />
      )}
    </>
  )
}