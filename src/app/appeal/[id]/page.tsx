import { notFound } from "next/navigation"
import { attractions, shops } from "@/lib/data"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface AppealPageProps {
  params: Promise<{ id: string }>
}

export default async function AppealPage({ params }: AppealPageProps) {
  const { id } = await params
  const attraction = attractions.find((a) => a.id === id)

  if (!attraction) {
    notFound()
  }

  const relatedShop = shops.find((s) => s.id === attraction.shopId)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* パンくずリスト */}
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-primary hover:underline">
              ホーム
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">{attraction.title}</span>
          </nav>

          {/* メイン画像 */}
          <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden mb-8">
            <Image src={attraction.image || "/placeholder.svg"} alt={attraction.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold">{attraction.title}</h1>
                <Badge className="bg-white/20 text-white border-white/30">
                  {attraction.category === "nature" && "🌿 自然"}
                  {attraction.category === "culture" && "🏛️ 文化"}
                  {attraction.category === "food" && "🍽️ グルメ"}
                  {attraction.category === "activity" && "🎯 アクティビティ"}
                </Badge>
              </div>
              <p className="text-lg opacity-90">{attraction.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* メイン情報 */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">✨ 魅力の詳細</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed">{attraction.description}</p>

                  {attraction.category === "culture" && (
                    <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">🏛️ 文化的価値</h4>
                      <p className="text-sm text-muted-foreground">
                        沖縄の豊かな歴史と文化を感じることができる貴重なスポットです。
                        地域の伝統や歴史的背景を学びながら、現代に受け継がれる文化の価値を体感できます。
                      </p>
                    </div>
                  )}

                  {attraction.category === "nature" && (
                    <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">🌿 自然の魅力</h4>
                      <p className="text-sm text-muted-foreground">
                        沖縄の美しい自然環境を満喫できるスポットです。 四季を通じて異なる表情を見せる自然の美しさと、
                        そこに息づく生命の営みを感じることができます。
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {relatedShop && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">🌮 近くのタコス店</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative h-32 w-full md:w-48 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={relatedShop.image || "/placeholder.svg"}
                          alt={relatedShop.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">{relatedShop.name}</h4>
                        <p className="text-muted-foreground mb-3">{relatedShop.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {relatedShop.specialties.slice(0, 2).map((specialty, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                        <Link href={`/shops/${relatedShop.id}`}>
                          <Button variant="outline" size="sm">
                            店舗詳細を見る →
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* サイドバー */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">アクセス情報</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold">🚗 アクセス</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {relatedShop ? `${relatedShop.name}から徒歩圏内` : "公共交通機関をご利用ください"}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold">⏰ 見学時間</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {attraction.category === "nature" ? "日中がおすすめ" : "営業時間内"}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold">💰 料金</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {attraction.category === "culture" ? "入場料が必要な場合があります" : "無料"}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-center">スタンプラリー</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="text-4xl">📍</div>
                  <p className="text-sm text-muted-foreground">この魅力スポットも巡って、沖縄の魅力を発見しよう！</p>
                  <Button className="w-full">マップに戻る</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}