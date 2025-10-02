import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/sonner"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GlobalMenu } from "@/components/GlobalMenu";
import { Suspense } from "react";
import "./globals.css";
import Loading from "@/components/Loading";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "沖縄タコススタンプラリー 2025",
  description:
    "沖縄県内の美味しいタコス店を巡るスタンプラリーイベント！地域の魅力を発見しながら、素敵な景品をゲットしよう！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className}>
        <Providers>
          <Header />
          <main>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <Footer />
          <Toaster />
          <GlobalMenu />
        </Providers>
      </body>

    </html>
  );
}