import type { Shop, RegionAttraction, Sponsor, MapPoint } from "../../types"

export const shops: Shop[] = [
  {
    id: "1",
    name: "タコス・デ・オキナワ  ※実際に存在する店舗ではありません（掲載イメージです）",
    description: "沖縄の新鮮な食材を使った本格的なタコスが自慢のお店です。",
    region: "north",
    image: "/colorful-tacos-with-okinawan-ingredients.png",
    location: { address: "名護市" },
    position: { x: 50, y: 25 },
    specialties: ["ゴーヤータコス", "ラフテータコス", "海ぶどうサルサ"],
    hours: "11:00-21:00",
    phone: "098-123-4567",
  },
  {
    id: "2",
    name: "ファミーユ",
    description: "伝統的な沖縄料理とメキシカンの融合が楽しめるお店です。",
    region: "north",
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
    region: "central",
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
    region: "central",
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
    region: "central",
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
    region: "central",
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
    region: "central",
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
    region: "south",
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
    region: "south",
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
    id: "a1",
    shopId: "1",
    title: "国際通り",
    description: "沖縄最大の繁華街で、お土産店やグルメスポットが立ち並ぶ観光の中心地です。",
    image: "/kokusai-street-okinawa-bustling-shopping-district.png",
    category: "culture",
  },
  {
    id: "a2",
    shopId: "2", // ファミーユ
    title: "ナゴパイナップルパーク",
    description: "パイナップルについて学び、味わい、楽しめるテーマパーク。パイナップル号に乗って園内を冒険しよう。",
    image: "",
    category: "activity",
  },
  {
    id: "a3",
    shopId: "3", // TACOBOX OKINAWA
    title: "道の駅かでな",
    description: "嘉手納基地の滑走路を一望できる展望台が人気。沖縄のお土産や特産品も揃っています。",
    image: "",
    category: "nature",
  },
  {
    id: "a4",
    shopId: "4",
    title: "コザミュージックタウン",
    description: "沖縄市の中心にある音楽の複合施設。ライブハウスやショップが集まっています。",
    image: "",
    category: "culture",
  },
  {
    id: "a5",
    shopId: "5", // タコスカフェ タコロコ
    title: "美浜アメリカンビレッジ",
    description: "カラフルな建物が並ぶシーサイドタウン。ショッピングやグルメ、映画などが楽しめます。",
    image: "",
    category: "culture",
  },
  {
    id: "a6",
    shopId: "6", // カフェ マーメイド
    title: "中城城跡",
    description: "世界遺産の一つ。美しい曲線を描く城壁が特徴で、歴史と絶景を同時に楽しめます。",
    image: "",
    category: "culture",
  },
  {
    id: "a7",
    shopId: "7", // TeaRoom・SORA
    title: "浦添大公園",
    description: "長大なローラー滑り台が人気の公園。歴史的な史跡も点在し、散策にも最適です。",
    image: "",
    category: "culture",
  },
  {
    id: "a8",
    shopId: "8", // ローレル
    title: "斎場御嶽（せーふぁうたき）",
    description: "琉球王国最高の聖地とされる世界遺産。神秘的な雰囲気の中で自然の力を感じられます。",
    image: "",
    category: "culture",
  },
  {
    id: "a9",
    shopId: "9", // GRINGO
    title: "ひめゆりの塔",
    description: "沖縄戦の悲劇を伝える平和祈念施設。平和の尊さを学ぶことができます。",
    image: "",
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
  .filter((point): point is MapPoint => point !== null) // nullを除外して型を保証
