"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import {
  MenuIcon,
  Newspaper,
  User,
  Megaphone,
  HelpCircle,
  Shield,
  Home,
  Heart,
} from "lucide-react"

export function GlobalMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="md:hidden fixed bottom-10 right-6 z-50">
      <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <PopoverTrigger asChild>
          <Button variant="default" size="icon" className="rounded-full w-14 h-14 shadow-lg">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">メニューを開く</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="end"
          className="w-45 p-2 mb-2 bg-background/80 backdrop-blur-sm"
        >
          <nav className="flex flex-col space-y-1">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-sm px-3 py-2 transition-colors">
              <Home className="h-5 w-5" />
              <span>ホーム</span>
            </Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-sm px-3 py-2 transition-colors">
              <Newspaper className="h-5 w-5" />
              <span>ブログ</span>
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-sm px-3 py-2 transition-colors">
              <User className="h-5 w-5" />
              <span>自己紹介</span>
            </Link>
            <Link href="/reports" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-sm px-3 py-2 transition-colors">
              <Megaphone className="h-5 w-5" />
              <span>活動報告</span>
            </Link>
            <Link href="/thanks" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-sm px-3 py-2 transition-colors">
              <Heart className="h-5 w-5" />
              <span>スペシャル
                <br/>サンクス
              </span>
            </Link>
            <div className="border-t my-1"></div>
            <Link href="/help" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-sm px-3 py-2 transition-colors">
              <HelpCircle className="h-5 w-5" />
              <span>ヘルプ</span>
            </Link>
            <Link href="/privacy" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-sm px-3 py-2 transition-colors">
              <Shield className="h-5 w-5" />
              <span>プライバシー</span>
            </Link>
          </nav>
        </PopoverContent>
      </Popover>
    </div>
  )
}
