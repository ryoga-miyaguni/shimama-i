import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/sonner"
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { GlobalMenu } from "@/components/GlobalMenu";
import { Suspense } from "react";
import "./globals.css";
import Loading from "@/components/Loading";
import { Analytics } from "@vercel/analytics/react";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shimama-i.vercel.app/"),
  title: "沖縄タコススタンプラリー!",
  description: "沖縄のタコス店を巡りながら地域の魅力を発見するスタンプラリーイベント!",
  verification: {
    google: "HBye-qZFf8HeUmjA8vjjvm-Zkh7DFCD0ia0fqoWEnWw",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "沖縄タコススタンプラリー!",
    description: "沖縄のタコス店を巡りながら地域の魅力を発見するスタンプラリーイベント!",
    url: "https://shimama-i.vercel.app/",
    siteName: "沖縄タコススタンプラリー",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
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
        <Analytics />
      </body>
    </html>
  );
}