import Header from "@/components/Header"
import Footer from "@/components/Footer"
import OkinawaMap from "@/components/OkinawaMap"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { sponsors } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/ContactForm"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ヒーローセクション */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-6xl mb-6 animate-bounce">🌮</div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              沖縄タコス
              <span className="text-primary">スタンプラリー</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              学生主催の楽しいタコス巡りイベント！
              <br />
              沖縄県内の美味しいタコス店を巡って、地域の魅力も発見しよう
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                🎯 今すぐ参加する
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                📍 参加店舗を見る
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 参加店舗マップ */}
      <OkinawaMap />

      {/* イベント概要 */}
      <section id="about" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">イベント概要</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              2024年12月開催！沖縄の美味しいタコスを巡る楽しいスタンプラリーです
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-2">📅</div>
                <CardTitle>開催期間</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  2024年12月1日〜
                  <br />
                  12月31日
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-2">🏪</div>
                <CardTitle>参加店舗</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  沖縄県内の
                  <br />
                  厳選タコス店
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-2">🎁</div>
                <CardTitle>特典</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  スタンプ集めで
                  <br />
                  素敵な景品
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-2">👥</div>
                <CardTitle>参加費</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  参加費無料
                  <br />
                  （飲食代別）
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">参加方法</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Badge className="mt-1">1</Badge>
                  <div>
                    <h4 className="font-semibold">参加登録</h4>
                    <p className="text-muted-foreground text-sm">
                      公式サイトから参加登録を行い、スタンプカードを受け取ろう
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Badge className="mt-1">2</Badge>
                  <div>
                    <h4 className="font-semibold">店舗巡り</h4>
                    <p className="text-muted-foreground text-sm">参加店舗でタコスを注文し、スタンプを集めよう</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Badge className="mt-1">3</Badge>
                  <div>
                    <h4 className="font-semibold">景品ゲット</h4>
                    <p className="text-muted-foreground text-sm">規定数のスタンプを集めて、素敵な景品をもらおう</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 協賛企業 */}
      <section id="sponsors" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">協賛企業</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              このイベントを支えてくださる素晴らしい企業の皆様をご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor) => (
              <Card key={sponsor.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="relative h-24 w-full mb-4">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CardTitle className="text-lg">{sponsor.name}</CardTitle>
                    <Badge
                      variant={sponsor.tier === "gold" ? "default" : "secondary"}
                      className={
                        sponsor.tier === "gold"
                          ? "bg-yellow-500 text-white"
                          : sponsor.tier === "silver"
                            ? "bg-gray-400 text-white"
                            : "bg-amber-600 text-white"
                      }
                    >
                      {sponsor.tier === "gold" && "🥇 ゴールド"}
                      {sponsor.tier === "silver" && "🥈 シルバー"}
                      {sponsor.tier === "bronze" && "🥉 ブロンズ"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">{sponsor.description}</p>
                  {sponsor.website && (
                    <div className="mt-4 text-center">
                      <Link href={sponsor.website} target="_blank" className="text-primary hover:underline text-sm">
                        公式サイト →
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="inline-block p-6 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-semibold text-foreground mb-2">協賛企業募集中！</h3>
              <p className="text-muted-foreground mb-4">地域活性化に一緒に取り組みませんか？</p>
              <ContactForm />
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
