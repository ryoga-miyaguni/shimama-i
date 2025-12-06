// app/blog/[id]/page.tsx
import Image from 'next/image'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// 詳細ページのメイン機能
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  // URLから記事のIDを取り出す
  const { id } = await params

  // データベースから、そのIDの記事を1つだけ探す
  const post = await prisma.post.findUnique({
    where: { id },
  })

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto py-10 px-4 max-w-3xl">
      {/* 戻るボタン */}
      <Link href="/blog" className="text-gray-500 hover:text-black mb-6 inline-block">
        ← ブログ一覧に戻る
      </Link>

      <article>
        {/* 日付 */}
        <p className="text-gray-500 text-sm mb-4">
            {new Date(post.createdAt).toLocaleDateString('ja-JP')}
        </p>

        {/* タイトル */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
          {post.title}
        </h1>

        {/* 画像 (ある場合のみ) */}
        {post.imageUrl && (
          <div className="relative w-full h-[400px] mb-10 rounded-xl overflow-hidden shadow-sm">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority // 詳細ページの画像は優先的に読み込む
            />
          </div>
        )}

        {/* 本文 */}
        {/* whitespace-pre-wrap をつけることで、改行がそのまま表示される */}
        <div className="prose max-w-none text-gray-800 leading-relaxed whitespace-pre-wrap text-lg">
          {post.content}
        </div>
      </article>
    </div>
  )
}