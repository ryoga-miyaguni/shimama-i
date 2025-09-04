"use client"

import { useState } from "react"
import type { MapPoint } from "../../types"
import { mapPoints } from "@/lib/data"
import ShopPopup from "./ShopPopup"

export default function OkinawaMap() {
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null)

  return (
    <section id="map" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">参加店舗マップ</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            沖縄県内の美味しいタコス店をマップで探索！
            <br />
            各ポイントをクリックして店舗情報と地域の魅力をチェックしよう。
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img src="/okinawa-map.png" alt="沖縄県地図" className="w-full h-auto" />

            {/* マップポイント */}
            {mapPoints.map((point) => (
              <button
                key={point.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
                style={{
                  left: `${point.position.x}%`,
                  top: `${point.position.y}%`,
                }}
                onClick={() => setSelectedPoint(point)}
              >
                <div className="relative">
                  {/* ピンのデザイン */}
                  <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform animate-bounce flex items-center justify-center">
                    <span className="text-white text-xs font-bold">🌮</span>
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* 店舗名のツールチップ */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-white text-gray-800 text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-200">
                    <div className="font-semibold">{point.shop.name}</div>
                    <div className="text-xs text-gray-600">{point.shop.location.address}</div>
                    {/* ツールチップの矢印 */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* 凡例 */}
          <div className="mt-6 flex justify-center">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🌮</span>
                  </div>
                  <span className="text-gray-800 font-medium">タコス店舗</span>
                </div>
                <div className="text-gray-600">ピンをクリックで詳細表示</div>
              </div>
            </div>
          </div>
        </div>

        {/* ポップアップ */}
        {selectedPoint && (
          <ShopPopup
            shop={selectedPoint.shop}
            attraction={selectedPoint.attraction}
            onClose={() => setSelectedPoint(null)}
          />
        )}
      </div>
    </section>
  )
}
