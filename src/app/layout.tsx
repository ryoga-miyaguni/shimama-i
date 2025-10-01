import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";

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
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}