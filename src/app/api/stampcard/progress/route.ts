import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { prisma } from "@/lib/prisma"
import { shops } from "@/lib/data"
import { authOptions } from "../../auth/[...nextauth]/route"

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    let profile = await prisma.profile.findUnique({
      where: { userId: session.user.id },
      include: {
        collectedStamps: true,
        user: true,
      },
    })

    if (!profile) {
      // プロフィールが見つからない場合、その場で作成する
      profile = await prisma.profile.create({
        data: {
          userId: session.user.id,
        },
        include: {
          collectedStamps: true,
          user: true,
        },
      })
      console.log(`Created a new profile for user: ${session.user.id}`)
    }

    // フロントエンドで使いやすいように、localStorageの時と似た形式にデータを整形
    const userProgress = {
      userId: profile.userId,
      userName: profile.user.name || "名無しさん",
      level: profile.level,
      totalVisits: profile.totalVisits,
      badges: profile.badges,
      createdAt: profile.createdAt.toISOString(),
      stamps: shops.map((shop) => {
        const collected = profile.collectedStamps.find((s) => s.shopId === shop.id)
        return {
          shopId: shop.id,
          isCollected: !!collected,
          visitDate: collected ? new Date(collected.collectedAt).toLocaleDateString("ja-JP") : "",
          qrCodeUsed: collected ? collected.qrCodeUsed || "" : "",
        }
      }),
    }

    return NextResponse.json(userProgress)
  } catch (error) {
    console.error("Failed to fetch user progress:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}