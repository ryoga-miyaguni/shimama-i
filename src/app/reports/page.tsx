import Image from 'next/image'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export default async function ActivityPage() {
  // activityカテゴリの記事を取得
  const posts = await prisma.post.findMany({
    where: { category: 'activity' },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">活動報告</h1>

      {posts.length === 0 && (
        <p className="text-center text-gray-500">まだ活動報告はありません。</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href={`/reports/${post.id}`} key={post.id} className="group">
            <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white flex flex-col h-full">
              
              {post.imageUrl ? (
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}

              <div className="p-5">
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(post.createdAt).toLocaleDateString('ja-JP')}
                </p>
                <h2 className="text-xl font-bold group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}