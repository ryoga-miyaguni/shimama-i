"use client"

import type { MapPoint } from "../../types"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import GooeyCard from "./GooeyCard"

interface OkinawaMapProps {
  points: MapPoint[];
  onPointSelect: (point: MapPoint | null) => void;
  isMobile: boolean;
}

const regionColorClasses = {
  north: {
    bg: "bg-green-500",
    ring: "focus:ring-green-500",
    ping: "bg-green-500",
  },
  central: {
    bg: "bg-red-500",
    ring: "focus:ring-red-500",
    ping: "bg-red-500",
  },
  south: {
    bg: "bg-yellow-500",
    ring: "focus:ring-yellow-500",
    ping: "bg-yellow-500",
  },
}; 

export default function OkinawaMap({ points, onPointSelect, isMobile }: OkinawaMapProps) {
  const handlePinClick = (point: MapPoint) => {
    if (!isMobile) onPointSelect(point)
  }
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
          className="bg-red-600 mb-3 md:mb-6"
          contentClassName="top-[41%] md:top-[43%] left-[52%] md:left-[51%] -translate-x-1/2 text-center"
        >
          <h3 className="text-4xl md:text-7xl font-bold whitespace-nowrap">タコスマップ</h3>
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
            {points.map((point) => {
              const color = regionColorClasses[point.region] || regionColorClasses.central;
              return (
                <div
                  key={point.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
                  style={{
                    left: `${point.position.x}%`,
                    top: `${point.position.y}%`,
                  }}
                >
                  <div className="relative flex items-center justify-center">
                    {/* ピンのデザイン */}
                    <button onClick={() => handlePinClick(point)} className={`relative w-8 h-8 md:w-10 md:h-10 ${color.bg} rounded-full border-2 md:border-4 border-white shadow-lg group-hover:scale-110 transition-transform animate-bounce flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ${color.ring}`}>
                      <span className="text-white text-base md:text-xl font-bold">🌮</span>
                      {/* アニメーション用のdivも色を合わせる */}
                      <div className={`absolute inset-0 ${color.ping} rounded-full animate-ping opacity-75`}></div>
                    </button>

                    {/* 店舗名のツールチップ */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-white text-gray-800 text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-200">
                      <div className="font-semibold">{point.shop.name}</div>
                      <div className="text-xs text-gray-600">
                        {point.shop.location.address.split(/[市町村]/)[0] + point.shop.location.address.match(/[市町村]/)}
                      </div>
                      {/* ツールチップの矢印 */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
        
        <div className="hidden md:flex justify-center mt-4">
          <Card className="p-4 shadow-2xl border-primary/10">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className={`w-5 h-5 ${regionColorClasses.north.bg} rounded-full`}></div>
                <span className="text-foreground font-medium">北部</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`w-5 h-5 ${regionColorClasses.central.bg} rounded-full`}></div>
                <span className="text-foreground font-medium">中部</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`w-5 h-5 ${regionColorClasses.south.bg} rounded-full`}></div>
                <span className="text-foreground font-medium">南部</span>
              </div>
              <div className="text-muted-foreground">ピンをクリックで詳細表示</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
