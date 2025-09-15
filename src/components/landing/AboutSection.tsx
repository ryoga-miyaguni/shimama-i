import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
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
              <div className="text-4xl mb-2" aria-hidden="true">📅</div>
              <CardTitle>開催期間</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                2025年12月1日〜2月28日
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="text-4xl mb-2" aria-hidden="true">🌮</div>
              <CardTitle>参加店舗</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                沖縄県内15店舗の厳選タコス店
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="text-4xl mb-2" aria-hidden="true">🎁</div>
              <CardTitle>特典</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                スタンプ集めで素敵な景品
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="text-4xl mb-2" aria-hidden="true">👥</div>
              <CardTitle>参加費</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                参加費無料
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
                  <h4 className="font-semibold">スタンプカードGET</h4>
                  <p className="text-muted-foreground text-sm">
                    参加店舗へ行って、スタンプカードを受け取ろう
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Badge className="mt-1">2</Badge>
                <div>
                  <h4 className="font-semibold">店舗巡り</h4>
                  <p className="text-muted-foreground text-sm">
                    タコスを注文し、スタンプを集めよう
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Badge className="mt-1">3</Badge>
                <div>
                  <h4 className="font-semibold">景品ゲット</h4>
                  <p className="text-muted-foreground text-sm">
                    規定数のスタンプを集めて、素敵な景品をもらおう
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
