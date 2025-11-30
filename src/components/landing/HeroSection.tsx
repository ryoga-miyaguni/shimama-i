"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const backgroundImages = [
  {
    src: "/tankdiner.jpg",
    alt: "tankdiner",
  },
  {
    src: "/kourizima.jpg",
    alt: "古宇利島",
  },
  {
    src: "/ka-satacos.jpg",
    alt: "カーサタコス",
  },
  {
    src: "/nakagusuku.jpg",
    alt: "中城城跡",
  },
  {
    src: "/parparo-v.jpg",
    alt: "沖縄の食材を使ったカラフルなタコス",
  },
  {
    src: "/nakagami.jpg",
    alt: "中頭方西海道",
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
      style={{
        backgroundColor: "#fed7aa",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23fed7aa' /%3E%3Ccircle cx='40' cy='50' r='25' fill='%23ffedd5' fill-opacity='0.5'/%3E%3Ccircle cx='150' cy='80' r='40' fill='%23ffedd5' fill-opacity='0.4'/%3E%3Ccircle cx='80' cy='160' r='30' fill='%23ffedd5' fill-opacity='0.6'/%3E%3Ccircle cx='170' cy='170' r='20' fill='%23ffedd5' fill-opacity='0.5'/%3E%3C/svg%3E\")",
      }}
      className="relative w-full pt-10 md:pt-16 pb-20 md:pb-30 -mb-[18vh] md:-mb-[20vh] [clip-path:url(#hero-bottom-wave)]"
    >
      <div className="relative z-10">
        {/* カードコンテナ */}
         <div className="w-6/7 md:w-5/9 h-[50vh] md:h-[60vh] mx-auto">
          <Card className="relative w-full h-full rounded-2xl overflow-hidden border-none p-0">
            {/* 背景画像スライドショー */}
            <div className="absolute inset-0">
              {backgroundImages.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={index === 0}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </Card>
        </div>

        {/* テキストコンテンツ */}
        <div className="relative z-0 container mx-auto px-4 -mt-12 md:-mt-16">
          <div className="max-w-2xl mx-auto text-center pt-22 md:pt-24">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-relaxed">
              <span className="bg-gradient-to-b from-orange-600 to-orange-400 bg-clip-text text-transparent">
                タコス
                <br className="md:hidden" />
                スタンプラリー
              </span>
              <br />
              <span className="text-gray-800">
                in OKINAWA
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 font-bold">
              沖縄各地のタコス店を巡る
              <br className="md:hidden" />
              スタンプラリーイベント開催！
              <br />
              個性豊かなタコスと沖縄各地の魅力を
              <br className="md:hidden" />
              楽しみながらスタンプを集めて、
              <br className="md:hidden" />
              素敵な景品をゲットしよう！
              <br />
              開催期間：2025/12/1 ~ 2026/2/28
            </p>
          </div>
        </div>
      </div>
      <svg width="0" height="0">
        <defs>
          <clipPath id="hero-bottom-wave" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.85 C0.8,1 0.2,1 0,0.85 V0" />
          </clipPath>
        </defs>
      </svg>
    </section>
  )
}