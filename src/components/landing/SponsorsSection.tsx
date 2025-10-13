import Image from "next/image"
import Link from "next/link"
import { sponsors } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactForm from "@/components/ContactForm"
import ImagePlaceholder from "@/components/ImagePlaceholder"

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">協賛企業</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            このイベントを支えてくださる素敵な企業の皆様をご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor) => (
            <Card key={sponsor.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="relative h-24 w-full mb-4 flex items-center justify-center">
                  {sponsor.logo ? (
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <ImagePlaceholder />
                  )}
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
  )
}
