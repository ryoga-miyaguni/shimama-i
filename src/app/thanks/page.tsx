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

// ダミーの支援者リスト
const supporters = [
  "山田 太郎", "佐藤 花子", "鈴木 一郎", "高橋 健太", "田中 美咲",
  "渡辺 雄大", "伊藤 さくら", "山本 浩二", "中村 あゆみ", "小林 誠",
  "加藤 直樹", "吉田 恵子", "山口 翼", "松本 大輔", "井上 由美",
  "木村 拓也", "林 愛子", "斎藤 健", "清水 美穂", "森 亮太",
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
            ただいま準備中です。
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-4 text-center">
              {supporters.map((name, index) => (
                <p key={index} className="text-foreground">
                  {name}
                </p>
              ))}
            </div> */}
          </CardContent>
          <CardFooter>
            <p className="w-full text-center text-sm text-muted-foreground">（順不同・敬称略）</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}