"use client"

import type { MapPoint } from "../../types"
import { mapPoints } from "@/lib/data"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import GooeyCard from "./GooeyCard"

interface OkinawaMapProps {
  onPointSelect: (point: MapPoint | null) => void;
}

export default function OkinawaMap({ onPointSelect }: OkinawaMapProps) {
  return (
    <section
      id="map" className="relative py-16 mt-24 md:mt-32"
    >
      {/* 背景の斜めカット */}
      <div
        className="absolute inset-0 bg-secondary/30"
        style={{ clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0% 100%)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <GooeyCard
          className="bg-red-600"
          contentStyle={{
            top: "36%",
            left: "51%",
            transform: "translateX(-50%)",
            textAlign: "center",
          }}
        >
          <h3 className="text-4xl font-bold">TACOSMAP</h3>
        </GooeyCard>

        <Card className="max-w-4xl mx-auto shadow-xl border-primary/20 bg-transparent overflow-hidden p-0">
          <div className="relative">
            <Image
              src="/okinawa-map.png"
              alt="クリック可能な店舗がマッピングされた沖縄県の地図"
              width={1280}
              height={720}
              priority
              className="w-full h-auto object-cover"
            />

            {/* マップポイント */}
            {mapPoints.map((point) => (
                <button
                  key={point.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
                  style={{
                    left: `${point.position.x}%`,
                    top: `${point.position.y}%`,
                  }}
                  onClick={() => onPointSelect(point)}
                >
                  <div className="relative">
                    {/* ピンのデザイン */}
                    <div className="w-10 h-10 bg-red-500 rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform animate-bounce flex items-center justify-center">
                      <span className="text-white text-xl font-bold">🌮</span>
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
        </Card>
        
        <div className="flex justify-center mt-4">
          <Card className="p-4 shadow-2xl border-primary/10">
            <div className="flex items-center space-x-4 text-sm gap-0">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🌮</span>
                </div>
                <span className="text-foreground font-medium">タコス店舗</span>
              </div>
              <div className="text-muted-foreground">ピンをクリックで詳細表示</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
