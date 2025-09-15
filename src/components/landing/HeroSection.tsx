"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000) // 5秒ごとに画像を切り替え

    return () => clearInterval(timer) // コンポーネントが非表示になる際にタイマーをクリア
  }, [])

  return (
    <section className="relative h-[37vh] md:h-[45vh] flex items-center justify-center text-center overflow-hidden">
      {/* 背景画像コンテナ */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: "cover" }}
            priority={index === 0} // 最初の画像だけ優先的に読み込む
            className={`transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
      </div>

      {/* コンテンツ */}
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
            沖縄タコス
            <span className="text-primary">スタンプラリー</span>
          </h1>
          <p className="text-xl text-neutral-200 mb-8 text-pretty">
            沖縄県内のタコス店をめぐるイベント！
            <br />
            美味しいタコス店を巡って、
            <br className="md:hidden" />
            地域の魅力も発見しよう！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Link href={"/stampcard"}>
              <Button size="lg" className="text-lg px-8 py-4">
                🎯 今すぐ参加する
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  )
}