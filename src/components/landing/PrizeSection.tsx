"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react"; // 矢印アイコン
import GooeyCard from '../GooeyCard';

// 景品データの型定義
type Prize = {
  id: number;
  name: React.ReactElement;
  imageAlt: string,
  description: React.ReactElement;
  image: string;
};

// 景品データ
const prizes: Prize[] = [
  {
    id: 1,
    name: (
      <>
        ジップラインチケット<br />
        （ペア５組）
      </>
    ),
    imageAlt: "ジップラインチケット",
    description:(
      <>
        美しい海の上を全長約250mにわたって滑空する、スリル満点の空中アクティビティ！<br />
        まるで鳥になったような気分で、沖縄の絶景と心地よい海風を全身で楽しめます。<br /> 
        <span className="block mt-4">
          公式サイト：
          <a 
            href="https://panza.co.jp/okinawa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 underline hover:text-orange-600"
          >
            PANZA OKINAWA
          </a>
        </span>
      </>
    ),
    image: "/zipline.jpg",
  },
  {
    id: 2,
    name: (
      <>
        星空フォトツアー<br />
        （ペア１組）
      </>
    ),
    imageAlt: "星空フォトツアー",
    description:(
      <>
        世界中の秘境を知るプロカメラマンが、満天の星空と共にあなただけの一枚を撮影します。<br />
        一生の宝物になるような、幻想的で美しい星空フォト体験をプレゼント。<br />
        <span className="block mt-4">
          公式サイト：
          <a 
            href="https://tarzanworld.studio.site/company"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 underline hover:text-orange-600"
          >
            TARZAN WORLD
          </a>
        </span>
      </>
    ),
    image: "/hosizora.jpg",
  },
  {
    id: 3,
    name: (
      <>
        ナイトサファリツアー<br />
        （ペア１組）
      </>
    ),
    imageAlt: "ナイトサファリツアー",
    description:(
      <>
        やんばるの自然を知り尽くしたガイドと巡る沖縄唯一のジャングルナイトサファリツアー！<br />
        一眼レフマクロレンズを使用したど迫力の写真も人気！<br />
        <span className="block mt-4">
          公式サイト：
          <a 
            href="https://tarzanworld.studio.site/company"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 underline hover:text-orange-600"
          >
            TARZAN WORLD
          </a>
        </span>
      </>
    ),
    image: "/nightsafari.jpg",
  },
  {
    id: 4,
    name: (
      <>
        やちむんタコスホルダー<br />
        （10名様）
      </>
    ),
    imageAlt: "やちむんタコスホルダー",
    description:(
      <>
        参加店舗「カフェ パルパロ 古宇利島」で実際に使用されている、シーサー型の特製やちむんタコスホルダー！<br />
        沖縄の伝統と遊び心が詰まったこのアイテムで、タコスをもっと楽しもう！<br />
        <span className="block mt-4">
          公式インスタグラム：<br />
          <a 
            href="https://www.instagram.com/cafe_paruparo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 underline hover:text-orange-600"
          >
            カフェ パルパロ 古宇利島
          </a>
        </span>
      </>
    ),
    image: "/yatimun.jpg",
  },
];

export const PrizeSection = () => {
  // 現在表示しているスライドの番号（0〜3）を管理
  const [currentIndex, setCurrentIndex] = useState(0);

  // 「前へ」ボタンの処理
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? prizes.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // 「次へ」ボタンの処理
  const nextSlide = () => {
    const isLastSlide = currentIndex === prizes.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="px-4 max-w-7xl mx-auto">
      <GooeyCard
        className="bg-red-600 mb-5"
        contentClassName="top-[40%] md:top-[40%] left-[50%] md:left-[51%] -translate-x-1/2 text-center"
        >
        <h3 className="text-5xl md:text-8xl font-bold whitespace-nowrap">景品</h3>
      </GooeyCard>

      <div className="relative group">
        {/* カードコンポーネント */}
        <Card className="overflow-hidden border-none shadow-xl bg-white">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              
              {/* 画像エリア（左側 or 上側） */}
              <div className="w-full md:w-1/2 p-4 md:p-6">
                {/* 画像の表示領域（ここを角丸にして、内側に画像を収める） */}
                <div className="relative w-full h-64 md:h-[350px] rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={prizes[currentIndex].image}
                    alt={prizes[currentIndex].imageAlt}
                    fill
                    className="object-cover transition-all duration-500"
                  />

                </div>
              </div>

              {/* テキストエリア（右側 or 下側） */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center min-h-[250px]">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 transition-all duration-300 text-center">
                  {prizes[currentIndex].name}
                </h3>
                <p className="text-gray-600 leading-relaxed transition-all duration-300">
                  {prizes[currentIndex].description}
                </p>
                
                {/* スライドインジケーター（・・・・） */}
                <div className="flex justify-center gap-2 mt-6">
                  {prizes.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                        currentIndex === index ? "bg-orange-500" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 左矢印ボタン */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full w-12 h-12 border-orange-200 z-10"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </Button>

        {/* 右矢印ボタン */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full w-12 h-12 border-orange-200 z-10"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </Button>
      </div>

      {/* 応募口数について */}
      <div className="mt-12 bg-orange-50 rounded-2xl p-6 md:p-8 border-2 border-orange-100">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg">!</span>
          応募口数について
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center border border-orange-100">
            <div className="text-4xl mb-2">🌮 × 6</div>
            <h4 className="font-bold text-lg text-gray-800 mb-2">スタンプ6個で</h4>
            <p className="text-xl font-bold text-orange-600">
              「1口」応募可能！
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-100 to-white rounded-xl p-6 shadow-md flex flex-col items-center text-center border-2 border-orange-300 relative overflow-hidden">         
            <div className="text-4xl mb-2">🌮 × 12</div>
            <h4 className="font-bold text-lg text-gray-800 mb-2">全12店舗制覇で</h4>
            <p className="text-2xl font-bold text-red-600">
              「2口」応募可能！
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};