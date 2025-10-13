import type { Shop, RegionAttraction, Sponsor, MapPoint } from "../../types"

export const shops: Shop[] = [
  {
    id: "1",
    name: "タコス・デ・オキナワ  ※実際に存在する店舗ではありません（掲載イメージです）",
    description: "沖縄の新鮮な食材を使った本格的なタコスが自慢のお店です。",
    image: "/colorful-tacos-with-okinawan-ingredients.png",
    location: { address: "那覇市国際通り1-1-1" },
    position: { x: 50, y: 25 },
    specialties: ["ゴーヤータコス", "ラフテータコス", "海ぶどうサルサ"],
    hours: "11:00-21:00",
    phone: "098-123-4567",
  },
  {
    id: "2",
    name: "ファミーユ",
    description: "伝統的な沖縄料理とメキシカンの融合が楽しめるお店です。",
    image: "",
    location: { address: "名護市屋部35番地" },
    position: { x: 50, y: 35 },
    specialties: ["タコス", "タコライス"],
    hours: "平日:11:00 ~ 17:00 休日:10:00 ~ 17:00 (SNSを確認してください)",
    phone: "080-4001-4528",
    snsUrl: "https://www.instagram.com/famille.okinawa88/",
  },
  {
    id: "3",
    name: "TACOBOX OKINAWA",
    description: "美しい海を眺めながら絶品タコスを楽しめるロケーション抜群のお店。",
    image: "",
    location: { address: "嘉手納町屋良１０２６−３ 道の駅かでな" },
    position: { x: 23, y: 56 },
    specialties: ["フィッシュタコス", "マンゴーサルサ", "オリオンビール"],
    hours: "11:00 ~ 18:00",
    phone: "090-9781-6059",
  },
  {
    id: "4",
    name: "TANK/DINER",
    description: "沖縄市の中心で味わう、スパイシーでジューシーなタコス。",
    image: "",
    location: { address: "沖縄市中央２丁目６−５" },
    position: { x: 33, y: 62 }, 
    specialties: [""],
    hours: "11:00 ~ 16:00（ラストオーダー 15:30） 定休日: 水",
    phone: "090-6866-5654",
  },
  {
    id: "5",
    name: "タコスカフェ タコロコ",
    description: "沖縄市の中心で味わう、スパイシーでジューシーなタコス。",
    image: "",
    location: { address: "北谷町美浜９−２ アメリカンビレッジ B棟 2F" },
    position: { x: 21, y: 66 }, 
    specialties: [""],
    hours: "11:00 ~ 15:30, 17:00 ~ 21:30",
    phone: "098-923-2320",
  },
  {
    id: "6",
    name: "カフェ マーメイド",
    description: "沖縄市の中心で味わう、スパイシーでジューシーなタコス。",
    image: "",
    location: { address: "中城村字久場1963 中城モール一階" },
    position: { x: 32, y: 72 }, 
    specialties: [""],
    hours: "11:00 ～ 20:00（ラストオーダー 19:00）",
    phone: "098-895-6188",
  },
  {
    id: "7",
    name: "TeaRoom・SORA",
    description: "沖縄市の中心で味わう、スパイシーでジューシーなタコス。",
    image: "",
    location: { address: "浦添市経塚５１８ テナントビル 1-A てぃーだ" },
    position: { x: 20, y: 76 }, 
    specialties: [""],
    hours: "8:00 ～ 24:00",
    phone: "098-874-2081",
  },
  {
    id: "8",
    name: "ローレル",
    description: "沖縄市の中心で味わう、スパイシーでジューシーなタコス。",
    image: "",
    location: { address: "南城市つきしろ１６７８−２１９" },
    position: { x: 27, y: 86 }, 
    specialties: [""],
    hours: "11:00 ～ 20:00 (定休日 月・第2第4木曜)",
    phone: "098-917-6084",
  },
  {
    id: "9",
    name: "GRINGO",
    description: "沖縄市の中心で味わう、スパイシーでジューシーなタコス。",
    image: "",
    location: { address: "糸満市西崎6-4-5 マルキヨ開発ビル F1" },
    position: { x: 7, y: 88 }, 
    specialties: [""],
    hours: "11:00 ～ 20:30",
    phone: "098-996-1197",
  },      
]

export const attractions: RegionAttraction[] = [
  {
    id: "1",
    shopId: "1",
    title: "国際通り",
    description: "沖縄最大の繁華街で、お土産店やグルメスポットが立ち並ぶ観光の中心地です。",
    image: "/kokusai-street-okinawa-bustling-shopping-district.png",
    category: "culture",
  },
  {
    id: "2",
    shopId: "2",
    title: "座喜味城跡",
    description: "世界遺産に登録された美しい城跡で、沖縄の歴史を感じることができます。",
    image: "/zakimi-castle-ruins-okinawa-world-heritage-site.png",
    category: "culture",
  },
  {
    id: "3",
    shopId: "3",
    title: "万座毛",
    description: "象の鼻のような形をした断崖絶壁で、絶景スポットとして有名です。",
    image: "/manzamo-cliff-okinawa-scenic-ocean-view.png",
    category: "nature",
  },
  {
    id: "4",
    shopId: "4",
    title: "コザミュージックタウン",
    description: "沖縄市の中心にある音楽の複合施設。ライブハウスやショップが集まっています。",
    image: "", // 画像がないためプレースホルダーが表示されます
    category: "culture",
  },
  {
    id: "5",
    shopId: "5",
    title: "コザミュージックタウン",
    description: "沖縄市の中心にある音楽の複合施設。ライブハウスやショップが集まっています。",
    image: "", // 画像がないためプレースホルダーが表示されます
    category: "culture",
  },
  {
    id: "6",
    shopId: "6",
    title: "コザミュージックタウン",
    description: "沖縄市の中心にある音楽の複合施設。ライブハウスやショップが集まっています。",
    image: "", // 画像がないためプレースホルダーが表示されます
    category: "culture",
  },
  {
    id: "7",
    shopId: "7",
    title: "コザミュージックタウン",
    description: "沖縄市の中心にある音楽の複合施設。ライブハウスやショップが集まっています。",
    image: "", // 画像がないためプレースホルダーが表示されます
    category: "culture",
  },
  {
    id: "8",
    shopId: "8",
    title: "コザミュージックタウン",
    description: "沖縄市の中心にある音楽の複合施設。ライブハウスやショップが集まっています。",
    image: "", // 画像がないためプレースホルダーが表示されます
    category: "culture",
  },
  {
    id: "9",
    shopId: "9",
    title: "コザミュージックタウン",
    description: "沖縄市の中心にある音楽の複合施設。ライブハウスやショップが集まっています。",
    image: "", // 画像がないためプレースホルダーが表示されます
    category: "culture",
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
export const mapPoints: MapPoint[] = shops.map((shop) => {
  const attraction = attractions.find((attr) => attr.shopId === shop.id)
  return {
    id: shop.id,
    shop: shop,
    attraction: attraction!, // shopIdが一致するattractionは必ず存在すると仮定
    position: shop.position,
  }
})
