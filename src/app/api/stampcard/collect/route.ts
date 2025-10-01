import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { prisma } from "@/lib/prisma"
import { authOptions } from "../../auth/[...nextauth]/route"

// このAPIでもQRコードの正当性を検証するために定義
const SHOP_QR_CODES: Record<string, string> = {
  "1": "TACOS-NAHA-2024-A1B2C3",
  "2": "SHISA-YOMITAN-2024-D4E5F6",
  "3": "BEACH-NAGO-2024-G7H8I9",
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    return NextResponse.json({ message: "ログインしてください。" }, { status: 401 })
  }

  const { qrCode } = await request.json()
  if (!qrCode) {
    return NextResponse.json({ message: "QRコードが必要です。" }, { status: 400 })
  }

  const shopId = Object.keys(SHOP_QR_CODES).find((id) => SHOP_QR_CODES[id] === qrCode)
  if (!shopId) {
    return NextResponse.json({ message: "無効なQRコードです。" }, { status: 400 })
  }

  const userId = session.user.id

  try {
    // 既にスタンプを獲得済みかチェック
    const profile = await prisma.profile.findUnique({
      where: { userId },
    })
    if (!profile) {
      return NextResponse.json({ message: "プロフィールが見つかりません。" }, { status: 404 })
    }
    const existingStamp = await prisma.collectedStamp.findFirst({
      where: { profileId: profile.id, shopId },
    })

    if (existingStamp) {
      return NextResponse.json({ message: "この店舗のスタンプは既に獲得済みです。" }, { status: 409 })
    }

    // トランザクションを使って、スタンプ履歴の追加とプロフィールの更新を同時に行う
    const [, updatedProfile] = await prisma.$transaction([
      // 1. スタンプ獲得履歴を作成
      prisma.collectedStamp.create({
        data: {
          profileId: profile.id,
          shopId,
          qrCodeUsed: qrCode,
        },
      }),
      // 2. プロフィール情報を更新
      prisma.profile.update({
        where: { userId },
        data: {
          totalVisits: { increment: 1 },
          // ここでレベルやバッジの更新ロジックも追加できる
          // 例: level: newLevel, badges: { set: newBadges }
        },
      }),
    ])

    // レベルとバッジのロジックをサーバーサイドで再計算
    const collectedCount = updatedProfile.totalVisits
    const newLevel = Math.floor(collectedCount / 1) + 1
    const newBadges = [...updatedProfile.badges]
    if (collectedCount === 1 && !newBadges.includes("初回訪問")) newBadges.push("初回訪問")
    if (collectedCount === 2 && !newBadges.includes("タコス通")) newBadges.push("タコス通")
    if (collectedCount === 3 && !newBadges.includes("沖縄マスター")) newBadges.push("沖縄マスター")

    await prisma.profile.update({ where: { userId }, data: { level: newLevel, badges: newBadges } })

    return NextResponse.json({ message: "スタンプを獲得しました！" }, { status: 200 })
  } catch (error) {
    console.error("Failed to collect stamp:", error)
    return NextResponse.json({ message: "スタンプの獲得に失敗しました。" }, { status: 500 })
  }
}
//app/api/stampcard/collect/route.ts