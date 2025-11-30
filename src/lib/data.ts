import type { Shop, RegionAttraction, Sponsor, MapPoint } from "../../types"

export const shops: Shop[] = [
  {
    id: "1",
    name: "カフェ パルパロ 古宇利島",
    description: "アグー豚を使ったこだわりの三色タコスは、パリパリもちもちの独特食感が楽しめます。",
    region: "north",
    image: "/parparo-v.jpg",
    location: { address: "国頭郡今帰仁村古宇利268" },
    position: { x: 58, y: 20 },
    hours: "10:30〜18:00（火曜定休）",
    phone: "0980-380554",
    snsUrl: "https://www.instagram.com/cafe_paruparo/",
  },
  {
    id: "2",
    name: "Famille",
    description: "フレンチシェフが作るオシャレなタコスが自慢で、辛スープにディップして食べるのがおすすめです。",
    region: "north",
    image: "/famille.jpg",
    location: { address: "名護市屋部35番地" },
    position: { x: 50, y: 35 },
    hours: "平日:11:00 ~ 17:00 休日:10:00 ~ 17:00 (SNSをご確認ください)",
    phone: "080-4001-4528",
    snsUrl: "https://www.instagram.com/famille.okinawa88/",
  },
  {
    id: "3",
    name: "カーサタコス",
    description: "創業40年以上、地元に根ざしたカーサ（家）のような温かい雰囲気のお店でタコスを楽しめます。",
    region: "central",
    image: "/ka-satacos.jpg",
    location: { address: "うるま市天願１３８７−５" },
    position: { x: 38, y: 60 },
    hours: "11:00〜20:00（水・木定休）",
    phone: "098-9726-022",
    snsUrl: "https://www.instagram.com/casa_tacos_tengan/",
  },
  {
    id: "4",
    name: "TACOBOX OKINAWA",
    description: "ジューシーなチキンタコスが自慢の、唯一無二のオリジナルタコスを味わうことができます。",
    region: "central",
    image: "/tacobox.jpg",
    location: { address: "嘉手納町屋良１０２６−３" },
    position: { x: 25, y: 59 },
    hours: "11:00 ~ 18:00",
    phone: "090-9781-6059",
    snsUrl: "https://www.instagram.com/tacobox_okinawa/",
  },
  {
    id: "5",
    name: "タコスカフェ タコロコ",
    description: "本場メキシコの味を再現した、スープに浸して楽しむビリアタコスなどが味わえます。",
    region: "central",
    image: "/tacoloco.jpg",
    location: { address: "北谷町美浜９−２ アメリカンビレッジ B棟 2F" },
    position: { x: 21, y: 66 }, 
    hours: "11:00 ~ 16:00, 17:00 ~ 22:00",
    phone: "098-923-2320",
    snsUrl: "https://www.instagram.com/tacoloco.mihama/",
  },
  {
    id: "6",
    name: "TANK/DINER",
    description: "コザの街で、ハンバーガーから沖縄そばまで揃うメニュー豊富な中で、手作りにこだわったタコスが楽しめます。",
    region: "central",
    image: "/tankdiner.jpg",
    location: { address: "沖縄市中央２丁目６−５"},
    position: { x: 30, y: 65 }, 
    hours: "11:00 ~ 16:00（ラストオーダー 15:30） 定休日: 水",
    phone: "090-6866-5654",
    snsUrl: "https://www.instagram.com/tankdiner",
  },
  {
    id: "7",
    name: "Udo Tacos+",
    description: "手作りのもっちもち生地でいただくカルニタスと、サクサクのフィッシュタコスが絶品です。",
    region: "central",
    image: "/udotacos.jpg",
    location: { address: "沖縄市高原4-1-16" },
    position: { x: 32, y: 72 }, 
    hours: "（日・月定休日) 火・水：11:00 ～ 19:00、木：11:00 ～ 14:00、 土・金：11:00 ～ 20:00 (SNSをご確認ください) ",
    phone: "098-923-1611",
    snsUrl: "https://www.instagram.com/udotacosplus/",
  },
  {
    id: "8",
    name: "Cafe Mermaid",
    description: "パイ生地のようなパリサク食感の皮が特徴的な、名物「まぎータコス」が味わえます。",
    region: "central",
    image: "/mermaid.png",
    location: { address: "中城村字久場1963 中城モール一階" },
    position: { x: 27, y: 78 }, 
    hours: "11:00 ～ 20:00（ラストオーダー 19:00）",
    phone: "098-895-6188",
    snsUrl: "https://www.instagram.com/mermaid_in_nakagusuku/",
  },
  {
    id: "9",
    name: "TeaRoom・SORA",
    description: "マンガ喫茶のような雰囲気で、ポーたまやゴーヤーが入ったユニークな「うちなータコス」が楽しめます。",
    region: "central",
    image: "/sora.jpg",
    location: { address: "浦添市経塚５１８ テナントビル 1-A てぃーだ" },
    position: { x: 19, y: 80 }, 
    hours: "8:00 ～ 24:00",
    phone: "098-874-2081",
    snsUrl: "https://www.instagram.com/sora.tacos/",
  },
  {
    id: "10",
    name: "タコスプーン",
    description: "那覇市で味わえる王道のパリモチ沖縄タコスは、沖縄タコス好きにはたまらない一品です。",
    region: "south",
    image: "/tacospoon.jpg",
    location: { address: "那覇市曙３丁目２０−１" },
    position: { x: 10, y: 80 }, 
    hours: "11:00～21：30、(15時〜17時までは準備中)",
    phone: "098-800-1149",
    snsUrl: "https://www.instagram.com/taco.spoon/",
  },
  {
    id: "11",
    name: "ローレル",
    description: "オシャレな雰囲気の店内で、クリスピー感が際立つ本格的なハードシェルタコスやビリアタコスを味わえます。",
    region: "south",
    image: "/ro-reru.jpg",
    location: { address: "南城市つきしろ１６７８−２１９" },
    position: { x: 27, y: 86 }, 
    hours: "11:00 ～ 20:00 (定休日 月・第2第4木曜)",
    phone: "098-917-6084",
    snsUrl: "https://www.instagram.com/laurel_by_kmc/",
  },
  {
    id: "12",
    name: "GRINGO",
    description: "ボリュームたっぷりのタコスはもちろん、ロゴ入りのコップなど細部へのこだわりも光るお店です。",
    region: "south",
    image: "/gringo.jpg",
    location: { address: "糸満市西崎6-4-5 マルキヨ開発ビル F1" },
    position: { x: 7, y: 88 }, 
    hours: "11:00 ～ 20:30",
    phone: "098-996-1197",
    snsUrl: "https://www.instagram.com/gringo.tacos/",
  },      
]

export const attractions: RegionAttraction[] = [
  {
    id: "a1",
    shopId: "1", // カフェ パルパロ 古宇利島
    title: "古宇利島",
    description: "エメラルドグリーンの海に囲まれた絶景の島。古宇利大橋からの眺めは圧巻です。",
    image: "/kourizima.jpg",
    position: { x: 58, y: 18 },
    category: "nature",
  },
  {
    id: "a2",
    shopId: "2", // ファミーユ
    title: "名護博物館",
    description: "名護の自然・歴史・文化を学べる新しい博物館。やんばるの多様な魅力を発見できます。",
    image: "/nagohakubutukan.jpg",
    position: { x: 52, y: 37 }, // 位置を調整
    category: "culture",
  },
  {
    id: "a3",
    shopId: "3", // カーサタコス
    title: "うるマルシェ",
    description: "うるま市の新鮮な農産物や特産品が揃う、沖縄県最大級のファーマーズマーケット。レストランも併設されており、うるまの食文化を丸ごと楽しめます。",
    image: "/urumaru.jpg",
    position: { x: 42, y: 62 },
    category: "spot",
  },
  {
    id: "a4",
    shopId: "4", // TACOBOX OKINAWA
    title: "道の駅かでな",
    description: "嘉手納基地の滑走路を一望できる展望台が人気。沖縄の特産品も揃う立ち寄りスポットです。",
    image: "/kadena.jpg",
    position: { x: 24, y: 57 },
    category: "spot",
  },
  {
    id: "a5",
    shopId: "5", // タコスカフェ タコロコ
    title: "美浜アメリカンビレッジ",
    description: "カラフルな建物が並ぶシーサイドタウン。ショッピングやグルメ、映画などが楽しめます。",
    image: "/amerikan.jpg",
    position: { x: 22, y: 67 },
    category: "spot",
  },
  {
    id: "a6",
    shopId: "6", // TANK/DINER
    title: "コザ一番街商店街",
    description: "沖縄市の中心市街地にある歴史ある商店街。ディープな沖縄の日常と文化に触れられます。",
    image: "/kozasyoutenngai.jpg",
    position: { x: 31, y: 66 },
    category: "spot",
  },
  {
    id: "a7",
    shopId: "7", // Udo Tacos+
    title: "泡瀬干潟",
    description: "泡瀬干潟は、砂・泥・サンゴ礫・海草藻場・サンゴ礁が入り混じる複雑な浅海環境で、沖縄県内最大級の干潟・浅海域です。貝類・底生生物・魚類・海草、さらには渡り鳥やサンゴに至るまで、多様な生きものが確認されています。",
    image: "/awasehigata.jpg",
    position: { x: 34, y: 73 },
    category: "nature",
  },
  {
    id: "a8",
    shopId: "8", // カフェ マーメイド
    title: "中城城跡",
    description: "世界遺産の一つ。美しい曲線を描く城壁が特徴で、歴史と絶景を同時に楽しめます。",
    image: "/nakagusuku.jpg",
    position: { x: 28, y: 76 },
    category: "culture",
  },
  {
    id: "a9",
    shopId: "9", // TeaRoom・SORA
    title: "中頭方西海道",
    description: "琉球王国時代の主要な道の一つ。浦添の石畳道で歴史の面影を感じながら散策できます。",
    image: "/nakagami.jpg",
    position: { x: 20, y: 79 },
    category: "culture",
  },
  {
    id: "a10",
    shopId: "10", // タコスプーン
    title: "福州園",
    description: "那覇市と福州市の友好を記念して1992年に造られた、中国福建省・福州の伝統庭園を忠実に再現した中国式庭園。異国情緒あふれるスポットです。",
    image: "/hukusyuen.jpg",
    position: { x: 12, y: 81 }, 
    category: "culture",
  },
  {
    id: "a11",
    shopId: "11", // ローレル
    title: "百名ビーチ",
    description: "琉球創世の女神アマミキヨが沖縄本島に最初に上陸したと伝えられる聖地としても有名な海岸です。",
    image: "/momona.jpeg",
    position: { x: 29, y: 87 },
    category: "nature",
  },
  {
    id: "a12",
    shopId: "12", // GRINGO
    title: "くくる糸満",
    description: "糸満市の観光・物産・文化の中心となる施設。お土産探しや地元の食事が楽しめます。",
    image: "/kukuru.jpg",
    position: { x: 8, y: 89 },
    category: "spot",
  },
]

export const sponsors: Sponsor[] = [
  {
    id: "1",
    name: "オリオンビール",
    logo: "/orion-beer-logo-okinawa.png",
    website: "https://www.orionbeer.co.jp",
    description: "沖縄を代表するビールブランド",
    tier: "gold",
  },
  {
    id: "2",
    name: "沖縄県観光協会",
    logo: "/okinawa-tourism-association-logo.png",
    description: "沖縄の観光振興をサポート",
    tier: "gold",
  },
  {
    id: "3",
    name: "ローカルフードマーケット",
    logo: "/local-food-market-logo.png",
    description: "地元食材の提供パートナー",
    tier: "silver",
  },
]

// shops 配列と attractions 配列から mapPoints を自動的に生成
export const mapPoints: MapPoint[] = shops
  .map((shop) => {
    const attraction = attractions.find((attr) => attr.shopId === shop.id)
    if (!attraction) return null // attractionが見つからない場合はnullを返す

    return {
      id: `map-point-${shop.id}-${attraction.id}`,
      shop: shop,
      attraction: attraction,
      position: shop.position,
      region: shop.region,
    }
  })
  .filter((point): point is MapPoint => point !== null) as MapPoint[] // 型アサーションで型エラーを回避
