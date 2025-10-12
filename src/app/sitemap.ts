import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = 'https://shimama-i.vercel.app/'

  // 静的なページのパス
  const staticPaths = [
    '/',
    '/blog',
    '/about',
    '/reports',
    '/thanks',
    '/help',
    '/privacy',
  ]

  return staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }))
}