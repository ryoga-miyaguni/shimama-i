"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Dispatch, SetStateAction } from "react"
import GooeyCard from "./GooeyCard"
type PinType = "shop" | "attraction"

interface Pin {
  id: string;
  shopId: string;
  name: string;
  position: { x: number; y: number };
  region: 'north' | 'central' | 'south';
}
interface OkinawaMapProps {
  points: Pin[];
  onPointSelect: (shopId: string | null, initialTab: PinType) => void;
  activeTab: PinType;
  onTabChange: Dispatch<SetStateAction<PinType>>;
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

export default function OkinawaMap({ points, onPointSelect, isMobile, activeTab, onTabChange }: OkinawaMapProps) {
  const handlePinClick = (point: Pin) => {
    if (!isMobile) onPointSelect(point.shopId, activeTab)
  }
  return (
    <section
      id="map" className="relative py-16 mt-24 md:mt-32"
    >
      <div className="container mx-auto px-4 relative z-10">
        <GooeyCard
          className="bg-red-600 mb-5"
          contentClassName="top-[45%] md:top-[43%] left-[50%] md:left-[51%] -translate-x-1/2 text-center"
        >
          <h3 className="text-3xl md:text-6xl font-bold whitespace-nowrap">イベントマップ</h3>
        </GooeyCard>

        <div className="max-w-4xl mx-auto">
          {/* タブ切り替えUI */}
          <div className="mb-4 flex justify-center">
            <Tabs
              value={activeTab}
              onValueChange={(value) => onTabChange(value as PinType)}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 rounded-full bg-gray-200/80 backdrop-blur-sm p-1 shadow-lg">
                <TabsTrigger value="shop" className="rounded-full data-[state=active]:bg-emerald-400 data-[state=active]:text-gray-200 data-[state=active]:shadow-md text-base font-semibold">
                  店舗
                </TabsTrigger>
                <TabsTrigger value="attraction" className="rounded-full data-[state=active]:bg-cyan-400 data-[state=active]:text-gray-200 data-[state=active]:shadow-md text-base font-semibold">
                  地域の魅力
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <Card className="shadow-xl border-primary/20 bg-transparent overflow-hidden p-0">
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
                        <div className="font-semibold">{point.name}</div>
                        {/* ツールチップの矢印 */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
        
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
