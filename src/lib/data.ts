import type { Shop, RegionAttraction, Sponsor, MapPoint } from "../../types"

export const shops: Shop[] = [
  {
    id: "1",
    name: "タコス・デ・オキナワ  ※実際に存在する店舗ではありません。掲載イメージです。",
    description: "沖縄の新鮮な食材を使った本格的なタコスが自慢のお店です。",
    image: "/colorful-tacos-with-okinawan-ingredients.png",
    location: {
      lat: 26.2124,
      lng: 127.6792,
      address: "那覇市国際通り1-1-1",
    },
    specialties: ["ゴーヤータコス", "ラフテータコス", "海ぶどうサルサ"],
    hours: "11:00-21:00",
    phone: "098-123-4567",
  },
  {
    id: "2",
    name: "シーサータコス",
    description: "伝統的な沖縄料理とメキシカンの融合が楽しめるお店です。",
    image: "/traditional-okinawan-tacos-with-shisa-decoration.png",
    location: {
      lat: 26.3344,
      lng: 127.8056,
      address: "読谷村座喜味2956-1",
    },
    specialties: ["アグー豚タコス", "紅芋チップス", "さんぴん茶"],
    hours: "10:00-20:00",
    phone: "098-987-6543",
  },
  {
    id: "3",
    name: "ビーチサイドタコス",
    description: "美しい海を眺めながら絶品タコスを楽しめるロケーション抜群のお店。",
    image: "/beachside-taco-restaurant-with-ocean-view.png",
    location: {
      lat: 26.6401,
      lng: 128.0011,
      address: "名護市喜瀬1808",
    },
    specialties: ["フィッシュタコス", "マンゴーサルサ", "オリオンビール"],
    hours: "9:00-22:00",
    phone: "0980-12-3456",
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

export const mapPoints: MapPoint[] = [
  {
    id: "1",
    shop: shops[0],
    attraction: attractions[0],
    position: { x: 45, y: 65 }, // 那覇市周辺
  },
  {
    id: "2",
    shop: shops[1],
    attraction: attractions[1],
    position: { x: 35, y: 45 }, // 読谷村周辺
  },
  {
    id: "3",
    shop: shops[2],
    attraction: attractions[2],
    position: { x: 55, y: 25 }, // 名護市周辺
  },
]
