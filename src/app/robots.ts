import type { MetadataRoute } from 'next'

const SITE_URL = 'https://flavornest-vietnam.com'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/account', '/favorites', '/login', '/auth/'],
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
    }
}
