import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticket, MapPin, Gift } from "lucide-react"; 
import GooeyCard from '../GooeyCard';

export const AboutSection = () => {
  const steps = [
    {
      id: 1,
      title: "スタンプカードを手に入れよう！",
      description: (
        <>
          まずは参加店舗へ！<br />
          お店の人に声をかけて<br />
          スタンプカードを手に入れよう
        </>
      ),
      icon: <Ticket className="w-8 h-8 text-orange-500" />,
    },
    {
      id: 2,
      title: "店舗を巡ってスタンプを集める！",
      description: (
        <>
          お店はどの順番で回ってもOK！<br className='md-50'/>
          <span className="block mt-4">
          <span className='font-bold'>スタンプ押印のルール</span>
          <br />
          1.お会計一回につき、スタンプは一人一個まで<br />
          2.タコス１ピースのつき、一人一個スタンプが押せます<br />
          3.テイクアウトでもOK！
          </span>
        </>
      ),
      icon: <MapPin className="w-8 h-8 text-orange-500" />,
    },
    {
      id: 3,
      title: "景品に応募しよう！",
      description: (
        <>
          スタンプが貯まったら<br />
          お店の人にカードを提出しよう！<br />
          提出はどの参加店舗でもOK！<br />
          <span className="block mt-4">
          イベント終了後、運営から景品応募フォームが<br />
          届くので、それに回答したら応募完了<br />
          結果発表待とう！
          </span>
        </>
      ),
      icon: <Gift className="w-8 h-8 text-orange-500" />,
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center">
        <GooeyCard
          className="bg-red-600 mb-5"
          contentClassName="top-[41%] md:top-[43%] left-[50%] md:left-[51%] -translate-x-1/2 text-center"
        >
          <h3 className="text-4xl md:text-7xl font-bold whitespace-nowrap">参加方法</h3>
        </GooeyCard>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="relative flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-orange-100 border-4 border-white flex items-center justify-center mb-6 shadow-sm z-10">
              <span className="text-xl font-bold text-orange-600">
                {step.id}
              </span>
            </div>

            <Card className="w-full h-full text-center hover:shadow-lg transition-shadow duration-300 border-orange-100 bg-white/90 backdrop-blur-sm">
              <CardHeader className="pt-6 pb-2">
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};