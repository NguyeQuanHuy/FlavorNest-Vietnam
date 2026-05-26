import type { CategoryColor } from '@/app/stories/_components/StoriesClient'

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

export const STORIES: Story[] = [