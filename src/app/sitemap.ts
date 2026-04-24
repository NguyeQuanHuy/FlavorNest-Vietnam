import { MetadataRoute } from 'next'

const BASE_URL = 'https://flavor-nest-vietnam.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
    const recipes = [
        // Desserts
        'che-ba-mau', 'banh-flan', 'che-thai', 'banh-chuoi-nuong',
        'sua-chua-nep-cam', 'kem-chuoi', 'che-buoi', 'banh-cam',
        'che-dau', 'banh-troi-nuoc',
        // Drinks
        'ca-phe-trung', 'ca-phe-sua-da', 'tra-da', 'sinh-to-bo',
        'nuoc-mia', 'ca-phe-muoi', 'tra-thai', 'nuoc-sam',
        // Northern
        'hanoi-beef-pho', 'bun-cha-hanoi', 'banh-cuon', 'xoi-xeo',
        'cha-ca-la-vong', 'bun-thang',
        // Central
        'bun-bo-hue', 'cao-lau', 'mi-quang', 'banh-beo',
        'com-hen', 'banh-xeo-mien-trung', 'banh-nam',
        'phu-yen-chives-noodle-soup', 'ga-la-e-phu-yen',
        // Southern
        'thit-kho-tau', 'com-tam-saigon', 'bun-thit-nuong',
        'banh-xeo-mien-tay', 'hu-tieu-nam-vang', 'ca-kho-to',
        'lau-thai', 'bo-luc-lac', 'lau-mam', 'banh-mi-saigon',
        // Street food
        'banh-mi-thit-nuong', 'banh-trang-nuong', 'goi-cuon',
        'banh-xeo', 'banh-trang-tron',
    ]

    const recipeUrls = recipes.map((slug) => ({
        url: `${BASE_URL}/recipes/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/recipes`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/recipes/desserts`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/recipes/drinks`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/recipes/north`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/recipes/central`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/recipes/south`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/recipes/street-food`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        ...recipeUrls,
    ]
}