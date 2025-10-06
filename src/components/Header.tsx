"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useSession, signIn, signOut } from "next-auth/react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ArrowLeft, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import useSWR from 'swr'

// stampcard/page.tsx から型定義をコピー
interface UserProgress {
  userId: string;
  userName: string;
  level: number;
  totalVisits: number;
  badges: string[];
  createdAt: string;
  stamps: {
    shopId: string;
    visitDate: string;
    isCollected: boolean;
    qrCodeUsed: string;
  }[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session, status } = useSession()
  const isHomePage = pathname === '/'
  const isStampCardPage = pathname === '/stampcard'

  const { data: userProgress } = useSWR<UserProgress>(
    status === 'authenticated' && isStampCardPage ? '/api/stampcard/progress' : null,
    fetcher
  );

  // スタンプカードページ専用のヘッダー
  if (isStampCardPage) {
    return (
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-3 items-center">
            <div className="flex justify-start">
              <Button variant="ghost" size="icon" onClick={() => router.back()}>
                <ArrowLeft className="h-6 w-6" />
                <span className="sr-only">戻る</span>
              </Button>
            </div>
            <div className="text-center">
              {userProgress && (
                <div>
                  <p className="text-xs text-muted-foreground">参加者</p>
                  <p className="font-semibold text-sm">{userProgress.userName}</p>
                </div>
              )}
            </div>
            <div className="flex justify-end">
              <Button variant="ghost" size="icon" onClick={() => signOut({ callbackUrl: '/' })}>
                <LogOut className="h-5 w-5" />
                <span className="sr-only">ログアウト</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // 通常のページのヘッダー
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {!isHomePage && (
              <Button variant="ghost" size="icon" onClick={() => router.back()}>
                <ArrowLeft className="h-6 w-6" />
                <span className="sr-only">戻る</span>
              </Button>
            )}
            <Link href="/" className="flex items-center space-x-2">
              <div>
                <h1 className="text-xl font-bold text-foreground">タコスタ</h1>
                <p className="hidden md:flex text-sm text-muted-foreground">2025年12月開催</p>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/#map" className={navigationMenuTriggerStyle()}>
                      参加店舗
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/blog" className={navigationMenuTriggerStyle()}>
                      ブログ
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>このサイトについて</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[200px] lg:w-[250px]">
                      <li><NavigationMenuLink asChild><Link href="/about">自己紹介</Link></NavigationMenuLink></li>
                      <li><NavigationMenuLink asChild><Link href="/reports">活動報告</Link></NavigationMenuLink></li>
                      <li><NavigationMenuLink asChild><Link href="/thanks">スペシャルサンクス</Link></NavigationMenuLink></li>
                      <li><NavigationMenuLink asChild><Link href="/help">ヘルプ</Link></NavigationMenuLink></li>
                      <li className="border-t pt-2 mt-2"><NavigationMenuLink asChild><Link href="/privacy">プライバシーポリシー</Link></NavigationMenuLink></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="flex items-center gap-2">
            {status === "authenticated" ? (
                <Link href="/stampcard">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    マイページ
                  </Button>
                </Link>
            ) : (
              <Button onClick={() => signIn("google")}>
                Googleでログイン
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}