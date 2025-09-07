import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[35vh] flex items-center justify-center text-center overflow-hidden">
      {/* 背景画像とオーバーレイ */}
      <div className="absolute inset-0">
        <Image
          src="/beachside-taco-restaurant-with-ocean-view.png"
          alt="沖縄のビーチサイドにあるタコレストランの風景"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
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
            沖縄県内のタコス店をめぐるイベントです！
            <br />
            美味しいタコス店を巡って、地域の魅力も発見しよう！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/stampcard"}>
              <Button size="lg" className="text-lg px-8 py-4">
                🎯 今すぐ参加する
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
