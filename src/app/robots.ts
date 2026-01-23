import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://zeplin-creative-eight.vercel.app/';

  return {
    rules: [
        {
            userAgent: [
            'GPTBot',
            'ChatGPT-User',
            'Google-Extended',
            'CCBot',
            'Claude-Web',
            'ClaudeBot',
            'PerplexityBot',
            'Omgilibot', 
            'FacebookBot',
            ],
            disallow: '/',
        },
        {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/private/'],
        },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
