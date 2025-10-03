"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const backgroundImages = [
  {
    src: "/beachside-taco-restaurant-with-ocean-view.png",
    alt: "沖縄のビーチサイドにあるタコレストランの風景",
  },
  {
    src: "/colorful-tacos-with-okinawan-ingredients.png",
    alt: "沖縄の食材を使ったカラフルなタコス",
  },
  {
    src: "/manzamo-cliff-okinawa-scenic-ocean-view.png",
    alt: "沖縄の万座毛の美しい風景",
  },
  {
    src: "/kokusai-street-okinawa-bustling-shopping-district.png",
    alt: "活気のある沖縄の国際通り",
  },
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState(backgroundImages.length - 1)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      if (isInitialLoad) setIsInitialLoad(false)
      setPreviousIndex(currentIndex)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000) // 5秒ごとに画像を切り替え

    return () => clearInterval(timer) // コンポーネントが非表示になる際にタイマーをクリア
  }, [currentIndex, isInitialLoad])

  return (
    <section
      className="relative h-[60vh] md:h-[70vh] w-full flex items-center -mb-[18vh] md:-mb-[20vh]"
    >
      {/* カードコンテナ */}
      <div className="absolute top-5 md:top-10 right-5 md:right-15 bottom-4 md:bottom-8 w-3/4 filter drop-shadow-2xl">
        <Card className="relative w-full h-full rounded-2xl overflow-hidden [clip-path:url(#wave-clip)] border-none p-0">
          {/* 背景画像スライドショー */}
          <div className="absolute inset-0">
            <svg width="0" height="0">
              <defs>
                <clipPath id="wave-clip" clipPathUnits="objectBoundingBox"><path d="M0,0 H1 V0.9 C0.8,1, 0.7,0.9, 0.5,0.8 C0.3,0.7, 0.2,0.8, 0,0.7 V0 Z"></path></clipPath>
              </defs>
            </svg>
            {backgroundImages.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
                className={`absolute inset-0 transition-transform duration-[1500ms] ease-in-out ${
                  index === currentIndex
                    ? "translate-y-0 z-20"
                    : index === previousIndex && !isInitialLoad
                      ? "translate-y-0 z-10"
                      : "translate-y-full z-10"
                }`}
              />
            ))}
          </div>
        </Card>
      </div>

      {/* テキストコンテンツ */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-2xl text-white md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance drop-shadow-lg">
            <span className="text-gray-100">
              沖縄タコス
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              スタンプラリー
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-neutral-200 drop-shadow-md">
            沖縄県内の絶品タコス店をめぐる冒険が始まる！
            <br className="hidden md:block" />
            美味しいタコス店を巡って、地域の魅力も発見しよう！
          </p>
        </div>
      </div>
    </section>
  )
}