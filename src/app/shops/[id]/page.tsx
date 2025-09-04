import { notFound } from "next/navigation"
import { shops, attractions } from "@/lib/data"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface ShopPageProps {
  params: Promise<{ id: string }>
}

export default async function ShopPage({ params }: ShopPageProps) {
  const { id } = await params
  const shop = shops.find((s) => s.id === id)

  if (!shop) {
    notFound()
  }

  const relatedAttraction = attractions.find((a) => a.shopId === shop.id)

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
            <span className="text-foreground">{shop.name}</span>
          </nav>

          {/* メイン画像 */}
          <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden mb-8">
            <Image src={shop.image || "/placeholder.svg"} alt={shop.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{shop.name}</h1>
              <p className="text-lg opacity-90">{shop.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* メイン情報 */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">🌮 おすすめメニュー</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {shop.specialties.map((specialty, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-lg">
                        <div className="text-2xl">🌮</div>
                        <div>
                          <h4 className="font-semibold">{specialty}</h4>
                          <p className="text-sm text-muted-foreground">人気メニュー</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {relatedAttraction && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">✨ 周辺の魅力スポット</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative h-32 w-full md:w-48 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={relatedAttraction.image || "/placeholder.svg"}
                          alt={relatedAttraction.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-lg font-semibold">{relatedAttraction.title}</h4>
                          <Badge variant="outline">
                            {relatedAttraction.category === "nature" && "🌿 自然"}
                            {relatedAttraction.category === "culture" && "🏛️ 文化"}
                            {relatedAttraction.category === "food" && "🍽️ グルメ"}
                            {relatedAttraction.category === "activity" && "🎯 アクティビティ"}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{relatedAttraction.description}</p>
                        <Link href={`/appeal/${relatedAttraction.id}`}>
                          <Button variant="outline" size="sm">
                            詳しく見る →
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
                  <CardTitle className="text-lg">店舗情報</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold">📍 住所</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{shop.location.address}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold">🕒 営業時間</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{shop.hours}</p>
                  </div>

                  {shop.phone && (
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold">📞 電話番号</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{shop.phone}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-center">スタンプラリー参加</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="text-4xl">🎯</div>
                  <p className="text-sm text-muted-foreground">この店舗でタコスを注文してスタンプをゲット！</p>
                  <Button className="w-full">スタンプカードを確認</Button>
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