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
        category: 'Heritage',
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
        image: '/images/recipes/banh-xeo.jpg',
        imageAlt: 'Banh Xeo',
        tag: 'Saigon Street Food',
        tagColor: 'forest',
        readTime: '5 min read',
        publishedAt: 'March 18, 2026',
        featured: false,
    },
    {
        slug: 'the-art-of-banh-mi',
        category: 'Fusion',
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
        category: 'Street Food',
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
]

export default function StoriesPage() {
    return (
        <div className="min-h-screen bg-[#F5EDE3] dark:bg-[#1C1009]">
            <StoriesClient stories={STORIES} />
        </div>
    )
}
