import Image from 'next/image';
import Link from 'next/link';
import { Target, MapPin, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-800 font-sans pb-20">
      
      {/* --- Header: タイトルのみシンプルに --- */}
      <section className="pt-28 pb-10 px-6 text-center bg-gradient-to-b from-orange-50 to-white">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2">
          私たちについて
        </h1>
        <p className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-6">
          ABOUT US
        </p>
        <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
      </section>

      {/* --- ① 自己紹介 (Introduction) --- */}
      <section className="container mx-auto px-6 max-w-3xl py-12">
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 text-sm font-bold">01</span>
            自己紹介
          </h2>

          <div className="relative h-56 rounded-2xl overflow-hidden mb-6">
            <Image 
              src="/about1.jpg"
              alt="チーム"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="prose prose-lg text-slate-600 leading-8">
            <p>
              こんにちは！私たちは琉球大学と沖縄国際大学の学生で結成されたチーム<strong className="text-slate-900">「しままーい」</strong>です。
            </p>
            <p>
              「しままーい」とは沖縄の方言で<span className="text-orange-500 font-bold">「島を巡る」</span>という意味。「沖縄をもっと知りたい、そしてその魅力を広めたい」という想いを込めて名付けました。
            </p>
            <p>
              現在、私たちは県内のタコス店や周辺のスポットを巡りながら、沖縄の隠れた魅力を再発見する活動を行っています。大学も専攻も違う7人が集まりましたが、共通しているのは「沖縄を盛り上げたい！」という気持ちです。
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-3xl px-6"><hr className="border-slate-100" /></div>

      {/* --- ② このプロジェクトで実現したいこと (Vision) --- */}
      <section className="container mx-auto px-6 max-w-3xl py-16">
        <div className="flex flex-col gap-8">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 text-sm font-bold">02</span>
            実現したいこと
          </h2>

          <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
            <Image 
              src="/ka-satacos.jpg"
              alt="沖縄タコス"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6">
              <p className="text-white font-bold text-lg">隠れたソウルフード「沖縄タコス」</p>
            </div>
          </div>
          
          <div className="prose prose-lg text-slate-600 leading-8">
            <h3 className="text-lg font-bold text-center text-slate-900 mb-2">
              「やっぱり沖縄って最高！」と
              <br className="md:hidden" />
              もっと感じてほしい
            </h3>
            <p>
              青い海、温かい人々、独特な歴史文化。沖縄には数えきれない魅力がありますが、暮らしている私たちでさえ気づけていない魅力がまだまだ眠っています。
            </p>
            <p>
              私たちが注目したのは<strong className="text-orange-500">「タコス」</strong>です。
              実は沖縄県内には100店舗以上のタコス店があり、他県と比べても圧倒的な“タコスアイランド”。
              パリッ＆モチッとした皮の食感や、お店ごとの個性豊かな味わいは、世界に誇れる沖縄独自の文化です。
            </p>
            <p>
              このプロジェクトを通して「隠れた沖縄の魅力」に触れるきっかけをつくり、沖縄に関わるすべての人が「もっと沖縄が好きになる」未来をつくりたいと考えています。
            </p>
          </div>
        </div>
      </section>

      {/* --- ③ プロジェクト立ち上げの背景 (Background) --- */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3 mb-10">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 text-sm font-bold">03</span>
            プロジェクト立ち上げの背景
          </h2>

          <div className="space-y-12">
            {/* Story 1 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-orange-500 rounded-full border-4 border-slate-50 hidden md:block"></div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Target size={20} className="text-orange-500" />
                タコス屋でのアルバイト経験
              </h3>
              <p className="text-slate-600 leading-7">
                大学2年の夏、代表の辺土名が北谷のメキシカンタコス屋でアルバイトをした時のことです。
                お店に来るお客さんの9割は外国人。地元の人からは「これ本当にタコス？」「メキシカンタコスって初めて聞いた！」という驚きの声が聞こえました。
              </p>
              <p className="text-slate-600 leading-7 mt-4">
                そこで初めて、私たちが日常的に食べている「沖縄タコス」と、世界的な「タコス」の違いを知りました。
                <span className="bg-orange-100 px-1 font-medium">「当たり前すぎて、その歴史や独自性に意識が向いていないのではないか」</span>
                そう気づかされた原体験でした。
              </p>
            </div>

            {/* Story 2 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-orange-500 rounded-full border-4 border-slate-50 hidden md:block"></div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-orange-500" />
                沖縄そばスタンプラリーへの参加
              </h3>
              <p className="text-slate-600 leading-7">
                さらに、「沖縄そばスタンプラリー」に参加し、約5か月かけて33店舗を巡った経験も大きく影響しています。
                普段は訪れることのなかった金武町や南城市などの地域に足を運び、各店ごとの味や個性の違いを知りました。
              </p>
              <blockquote className="border-l-4 border-orange-400 pl-4 py-2 my-4 italic text-slate-700 bg-slate-50">
                「沖縄にずっと住んでいても、まだまだ知らない地域や文化がたくさんある」
              </blockquote>
              <p className="text-slate-600 leading-7">
                この2つの体験から生まれた「沖縄の魅力をもっと知りたい。そして共有したい」という想いが、「しままーい」の原点です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ④ 最後に (Conclusion) --- */}
      <section className="container mx-auto px-6 max-w-3xl py-16">
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 text-sm font-bold">04</span>
            最後に
          </h2>

          <div className="relative h-56 rounded-2xl overflow-hidden mb-6">
            <Image 
              src="/hosizora.jpg"
              alt="星空"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="prose prose-lg text-slate-600 leading-8">
            <p>
              ここまで読んでいただきありがとうございます！
            </p>
            <p>
              私たちは「タコススタンプラリー」を通して、沖縄の魅力をもっと多くの人と分かち合いたいと考えています。
              皆さんにとって、いつも通る町や食べなれた味が、この企画をきっかけに<strong className="text-slate-900">「こんな魅力があったんだ」</strong>と気づけるものになれば嬉しいです。
            </p>
            <p>
              そして私たちはこの挑戦を一回限りのもので終わらせるつもりはありません。
              今年の第一回を成功させて、将来的には「今年もタコススタンプラリーの季節が来たね」と言われるような、沖縄に根付くイベントに育てていきたいと本気で考えています。
            </p>
            <p className="text-lg font-bold text-slate-900 mt-4">
              タコスを片手に一緒に沖縄を巡り、まだ見ぬ魅力を発見する旅に出かけましょう！
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="https://camp-fire.jp/projects/882901/view" 
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-orange-600 hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1 w-full md:w-auto"
            >
              <Heart size={20} className="fill-white" />
              <span>私たちの想い（CAMPFIRE）</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}