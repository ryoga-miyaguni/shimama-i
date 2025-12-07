import Image from 'next/image'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function ActivityPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const post = await prisma.post.findUnique({
    where: { id },
  })

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto py-10 px-4 max-w-3xl">
      {/* 一覧に戻るリンク */}
      <Link href="/reports" className="text-gray-500 hover:text-black mb-6 inline-block">
        ← 活動報告一覧に戻る
      </Link>

      <article>
        <p className="text-gray-500 text-sm mb-4">
            {new Date(post.createdAt).toLocaleDateString('ja-JP')}
        </p>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
          {post.title}
        </h1>

        {post.imageUrl && (
          <div className="relative w-full h-[400px] mb-10 rounded-xl overflow-hidden shadow-sm">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose max-w-none text-gray-800 leading-relaxed whitespace-pre-wrap text-lg">
          {post.content}
        </div>
      </article>
    </div>
  )
}