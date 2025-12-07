import { Great_Vibes } from "next/font/google"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
})

// 支援者リスト
const supporters = [
  "しんり", "#ミライバトン", "マヒル", "TUT", "ももこ", "マジックハウスジムアース", "まつおか", "Esperanza", "豆の花", "ジョン・スノウ",
  "沖縄ガールズスクエア", "masaki kinjo", "沖縄タコスのお店 OKITACO", "パンダゴリラ", "タコスニキ", "すてふぁにー", "又吉 朝飛", "クニヨシ", "ようてん", "ひかる", 
  "舟田琉人", "TY", "まさ", "伊礼南海人", "レイ", "宮城ジョージ省吾(タコスとタイガくん大好きおぢ)", "ももこす", "大森", "フォレストグリーン", "amacuma", 
  "shin5858", "与儀 海斗", "ぽん", "ツルトモ", "よっしー", "カフェ パルパロ", "琉球ミライ", "ユアトリー株式会社",
];

export default function ThanksPage() {
  return (
    <div className="bg-secondary/30">
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h1 className={`${greatVibes.className} text-6xl font-normal text-foreground sm:text-7xl`}>
            Special Thanks
          </h1>
        </div>
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">
              クラウドファンディング
              <br className="md:hidden" />
              支援者の皆様
            </CardTitle>
            <CardDescription className="pt-2">
              このプロジェクトを支援してくださった皆様に、心より感謝申し上げます。
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-4 text-center">
              {supporters.map((name, index) => (
                <p key={index} className="text-foreground">
                  {name}
                </p>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <p className="w-full text-center text-sm text-muted-foreground">（順不同・敬称略）</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}