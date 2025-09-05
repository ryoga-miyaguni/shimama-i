import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl">🌮</div>
            <div>
              <h1 className="text-xl font-bold text-foreground">沖縄タコススタンプラリー</h1>
              <p className="text-sm text-muted-foreground">2025年12月開催</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#map" className="text-foreground hover:text-primary transition-colors">
              参加店舗
            </Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">
              イベント概要
            </Link>
            <Link href="#sponsors" className="text-foreground hover:text-primary transition-colors">
              協賛企業
            </Link>
          </nav>

          <Link href="/stampcard">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            マイページ
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}