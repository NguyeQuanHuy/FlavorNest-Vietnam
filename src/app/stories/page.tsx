// ─────────────────────────────────────────────────────────────────────────────
//  app/stories/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import StoriesClient from './_components/StoriesClient'

export const metadata: Metadata = {
    title: 'Kitchen Stories | FlavorNest Vietnam',
    description: 'Discover the history, culture and people behind authentic Vietnamese cuisine.',
}

// Định nghĩa kiểu dữ liệu (Types)
export type { CategoryColor } from './_components/StoriesClient'
import type { CategoryColor } from './_components/StoriesClient'

export interface Story {
    slug: string
    category: string
    categoryColor: CategoryColor
    title: string
    subtitle: string
    excerpt: string
    image: string
    imageAlt: string
    tag: string
    tagColor: CategoryColor
    readTime: string
    publishedAt: string
    featured: boolean
}

// Dữ liệu danh sách bài viết
export const STORIES: Story[] = [
    {
        slug: 'symphony-of-hanois-dawn',
        category: 'c',
        categoryColor: 'amber',
        title: "The Symphony of Hanoi's Dawn",
        subtitle: 'Traditional Beef Pho',
        excerpt: 'Pho is not for the hurried. To achieve a broth as clear as a mirror, the cook must patiently simmer beef bones for ten full hours.',
        image: '/images/recipes/pho-bo-ha-noi.jpg',
        imageAlt: 'Hanoi beef pho',
        tag: 'Hanoi Heritage',
        tagColor: 'amber',
        readTime: '6 min read',
        publishedAt: 'April 2, 2026',
        featured: true,
    },
    {
        slug: 'secrets-of-the-south-banh-xeo',
        category: 'Traditional',
        categoryColor: 'forest',
        title: "Secrets of the South: Banh Xeo",
        subtitle: 'Sizzling Vietnamese Pancake',
        excerpt: 'The name itself is the recipe. "Xèo" — that violent, joyful sizzle as rice batter meets a white-hot pan.',
        image: '/images/recipes/banh-xeo-mien-trung.jpg',
        imageAlt: 'Banh Xeo',
        tag: 'Saigon Street Food',
        tagColor: 'forest',
        readTime: '5 min read',
        publishedAt: 'March 18, 2026',
        featured: false,
    },
    {
        slug: 'the-art-of-banh-mi',
        category: 'Traditional',
        categoryColor: 'forest',
        title: 'The Art of Banh Mi',
        subtitle: 'Vietnam\'s Greatest Culinary Crossroads',
        excerpt: 'Vietnamese hands transformed the baguette into something unrecognisable and entirely their own: lighter, crispier.',
        image: '/images/recipes/banh-mi.png',
        imageAlt: 'Banh Mi',
        tag: 'East Meets West',
        tagColor: 'forest',
        readTime: '5 min read',
        publishedAt: 'February 8, 2026',
        featured: false,
    },
    {
        slug: 'hue-salt-coffee-story',
        category: 'Fusion',
        categoryColor: 'brown',
        title: 'The Rise of Salt Coffee',
        subtitle: 'Hue Culinary Innovation',
        excerpt: 'A surprising harmony between salty cream and bold Vietnamese robusta.',
        image: '/images/recipes/ca-phe-muoi.jpg',
        imageAlt: 'Salt coffee',
        tag: 'Hue Special',
        tagColor: 'brown',
        readTime: '4 min read',
        publishedAt: 'April 9, 2026',
        featured: false,
    },
    {
        slug: 'instant-noodles-street-story',
        category: 'Heritage',
        categoryColor: 'forest',
        title: 'The Comfort of Instant Noodles',
        subtitle: 'Simple Joy in a Bowl',
        excerpt: 'A quick, comforting bowl of noodles often elevated with egg, herbs, and creative toppings.',
        image: '/images/recipes/mi-tom.jpg',
        imageAlt: 'Instant noodles bowl',
        tag: 'Everyday Comfort',
        tagColor: 'forest',
        readTime: '3 min read',
        publishedAt: 'April 9, 2026',
        featured: false,
    },
    {
        slug: 'vietnamese-fish-hotpot-story',
        category: 'Heritage',
        categoryColor: 'forest',
        title: 'The Warmth of Vietnamese Fish Hotpot',
        subtitle: 'Riverside Flavors in a Pot',
        excerpt: 'A comforting hotpot with fresh fish, herbs, and a tangy broth that brings people together.',
        image: '/images/recipes/lau-ca.jpg',
        imageAlt: 'Vietnamese fish hotpot',
        tag: 'Comfort Dish',
        tagColor: 'forest',
        readTime: '4 min read',
        publishedAt: 'April 9, 2026',
        featured: false,
    },
    {
        slug: 'yangzhou-fried-rice-story',
        category: 'Heritage',
        categoryColor: 'forest',
        title: 'The Harmony of Yangzhou Fried Rice',
        subtitle: 'A Colorful Chinese Classic',
        excerpt: 'A fragrant mix of fluffy rice, eggs, shrimp, and vegetables stir-fried into perfect balance.',
        image: '/images/recipes/com-chien-duong-chau.jpg',
        imageAlt: 'Yangzhou fried rice',
        tag: 'Asian Classic',
        tagColor: 'amber',
        readTime: '4 min read',
        publishedAt: 'April 9, 2026',
        featured: false,
    },
    {
        slug: 'saigon-mixed-rice-paper-story',
        category: 'Street Food',
        categoryColor: 'forest',
        title: 'The Soul of Mixed Rice Paper',
        subtitle: 'Saigon Street Flavor Explosion',
        excerpt: 'A vibrant mix of chewy rice paper, dried beef, herbs, and spicy-sour-sweet sauce.',
        image: '/images/recipes/banh-trang-tron.jpg',
        imageAlt: 'Mixed rice paper (Banh Trang Tron)',
        tag: 'Saigon Icon',
        tagColor: 'amber',
        readTime: '4 min read',
        publishedAt: 'April 9, 2026',
        featured: false,
    },
    {
        slug: 'ca-phe-sua-da-story',
        category: 'Street Food',
        categoryColor: 'forest',
        title: 'The Soul of Iced Milk Coffee',
        subtitle: 'Iced milk coffee',
        excerpt: 'A daily drink of Vietnamese people for breakfast',
        image: '/images/recipes/ca-phe-sua-da.jpg',
        imageAlt: 'Iced milk coffee',
        tag: 'Drink Icon',
        tagColor: 'amber',
        readTime: '4 min read',
        publishedAt: 'April 9, 2026',
        featured: false,
    },
    {
        slug: 'vietnam-street-food-culture-story',
        category: 'Street Food',
        categoryColor: 'amber',
        title: 'The Pulse of Vietnamese Street Food',
        subtitle: 'A Culture Served on Every Corner',
        excerpt: 'From bustling sidewalks to late-night stalls, Vietnamese street food reflects a vibrant mix of flavors, stories, and everyday life.',
        image: '/images/recipes/do-an-duong-pho.jpg',
        imageAlt: 'Vietnamese street food scene',
        tag: 'Street Culture',
        tagColor: 'amber',
        readTime: '4 min read',
        publishedAt: 'April 9, 2026',
        featured: true,
    },
    {
        slug: 'phu-yen-cuisine',
        category: 'Heritage',
        categoryColor: 'amber',
        title: 'The Province Nobody Talks About Has the Best Food in Vietnam',
        subtitle: 'Phú Yên · Central Vietnam',
        excerpt: 'Phú Yên sits between the fame of Hội An and the chaos of Nha Trang, quietly feeding people some of the most honest food on the coast. Most tourists drive straight through. That is their loss.',
        image: '/images/recipes/banh-canh-he-phu-yen.jpg',
        imageAlt: 'Bánh canh hẹ Phú Yên — chives noodle soup',
        tag: 'Heritage',
        tagColor: 'amber',
        readTime: '8 min read',
        publishedAt: 'May 19, 2026',
        featured: true,
    },
    {
        slug: 'why-vietnamese-food-is-famous',
        category: 'Culture',
        categoryColor: 'amber',
        title: 'Why Vietnamese Food Conquered the World',
        subtitle: 'Vietnamese Cuisine · Culture',
        excerpt: 'It is not an accident. It is geography, history, and two thousand years of stubbornly refusing to let anyone else\'s cuisine replace your own.',
        image: '/images/recipes/vietnamese-food.jpg',
        imageAlt: 'Vietnamese street food culture',
        tag: 'Culture',
        tagColor: 'amber',
        readTime: '7 min read',
        publishedAt: 'May 19, 2026',
        featured: true,
    },
    {
        slug: 'is-vietnamese-food-healthy',
        category: 'Nutrition',
        categoryColor: 'amber',
        title: 'Is Vietnamese Food Actually Healthy? A Nutritionist\'s Honest Answer',
        subtitle: 'Health · Nutrition · Vietnamese Cuisine',
        excerpt: 'Vietnam has one of the lowest obesity rates in the world. The food is the reason. Here\'s the science behind why.',
        image: '/images/recipes/goi-cuon-tom-thit.jpg',
        imageAlt: 'Fresh Vietnamese spring rolls — goi cuon',
        tag: 'Nutrition',
        tagColor: 'amber',
        readTime: '6 min read',
        publishedAt: 'May 19, 2026',
        featured: true,
    },
    {
        slug: 'what-to-eat-in-vietnam',
        category: 'Nutrition',
        categoryColor: 'amber',
        title: 'What to Eat in Vietnam: A Guide to the Best Dishes',
        subtitle: 'Health · Nutrition · Vietnamese Cuisine',
        excerpt: 'Vietnam has one of the lowest obesity rates in the world. The food is the reason. Here\'s the science behind why.',
        image: '/images/recipes/what-to-eat.jpg',
        imageAlt: 'eating in Vietnam',
        tag: 'Nutrition',
        tagColor: 'amber',
        readTime: '6 min read',
        publishedAt: 'May 19, 2026',
        featured: true,
    },
]

export default function StoriesPage() {
    return (
        <div className="min-h-screen bg-[#F5EDE3] dark:bg-[#1C1009]">
            <StoriesClient stories={STORIES} />
        </div>
    )
}
