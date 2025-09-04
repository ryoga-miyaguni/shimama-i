"use client"

import React, { useState } from "react"
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
            沖縄県内の美味しいタコス店をマップで探索！各ポイントをクリックして店舗情報と地域の魅力をチェックしよう。
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* 沖縄県の簡略化された地図 */}
          <div className="relative bg-gradient-to-b from-blue-100 to-blue-200 rounded-2xl p-8 min-h-[500px]">
            {/* 沖縄本島の形を簡略化したSVG */}
            <svg
              viewBox="0 0 400 200"
              className="w-full h-full absolute inset-0"
              style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
            >
              <path
                d="M50 120 Q80 100 120 110 Q160 115 200 105 Q240 100 280 110 Q320 120 350 130 Q340 150 300 155 Q260 160 220 150 Q180 145 140 150 Q100 155 70 145 Q45 135 50 120 Z"
                fill="#10b981"
                stroke="#059669"
                strokeWidth="2"
                opacity="0.8"
              />
              {/* 小さな島々 */}
              <circle cx="80" cy="80" r="8" fill="#10b981" opacity="0.6" />
              <circle cx="320" cy="80" r="6" fill="#10b981" opacity="0.6" />
              <circle cx="360" cy="100" r="4" fill="#10b981" opacity="0.6" />
            </svg>

            {/* マップポイント */}
            {mapPoints.map((point) => (
              <button
                key={point.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{
                  left: `${point.position.x}%`,
                  top: `${point.position.y}%`,
                }}
                onClick={() => setSelectedPoint(point)}
              >
                <div className="relative">
                  {/* ピンのアニメーション */}
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform animate-bounce">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* 店舗名のツールチップ */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-card text-foreground text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {point.shop.name}
                  </div>
                </div>
              </button>
            ))}

            {/* 装飾的な要素 */}
            <div className="absolute top-4 right-4 text-2xl animate-bounce">🌮</div>
            <div className="absolute bottom-4 left-4 text-xl animate-pulse">🏝️</div>
            <div className="absolute top-1/3 left-1/4 text-lg animate-bounce" style={{ animationDelay: "0.5s" }}>
              🌺
            </div>
          </div>

          {/* 凡例 */}
          <div className="mt-6 flex justify-center">
            <div className="bg-card rounded-lg p-4 shadow-sm">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <span className="text-foreground">タコス店舗</span>
                </div>
                <div className="text-muted-foreground">クリックで詳細表示</div>
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
