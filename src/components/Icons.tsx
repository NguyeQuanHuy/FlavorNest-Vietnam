// ─────────────────────────────────────────────────────────────────────────────
//  src/components/Icons.tsx
//  FlavorNest Vietnam — Icon system (synced với Claude Design)
//  Source: lucide-react · Stroke 1.8px · Round linecaps · currentColor
// ─────────────────────────────────────────────────────────────────────────────

import {
    // Navigation — brown #4B2E1A
    Home, Search, Menu, X, ChevronDown, ChevronRight, ArrowRight, ArrowUp,
    // Recipes & Cooking — amber #D97706
    Flame, Clock, Utensils, Users, Heart, Star, MapPin, Tag,
    // Content & Stories — forest #166534
    FileText, BookOpen, Globe, Navigation, Video, Image as ImageIcon, MessageCircle, Share2,
    // Account & UI — brown #4B2E1A
    User, Lock, Bell, Sun, SlidersHorizontal, Check, MoreHorizontal, Download,
    type LucideIcon,
} from 'lucide-react'

// ─── Brand colors per group ──────────────────────────────────────────────────
export const ICON_GROUP_COLOR = {
    navigation: '#4B2E1A',
    recipes: '#D97706',
    content: '#166534',
    account: '#4B2E1A',
} as const

export type IconGroup = keyof typeof ICON_GROUP_COLOR

// ─── 32 icons mapped to Claude Design spec ───────────────────────────────────
export const Icons = {
    // Navigation
    home: Home,
    search: Search,
    menu: Menu,
    close: X,
    chevronDown: ChevronDown,
    chevronRight: ChevronRight,
    arrowRight: ArrowRight,
    arrowUp: ArrowUp,

    // Recipes & Cooking
    spice: Flame,         // "Spice" → Flame (lucide không có icon spice)
    cookTime: Clock,
    prep: Utensils,       // "Prep" → Utensils
    servings: Users,
    favorite: Heart,
    rating: Star,
    region: MapPin,       // "Region" → MapPin (gợi vùng miền)
    category: Tag,

    // Content & Stories
    recipe: FileText,
    story: BookOpen,
    culture: Globe,
    travel: Navigation,
    video: Video,
    photo: ImageIcon,
    comment: MessageCircle,
    share: Share2,

    // Account & UI
    account: User,
    signIn: Lock,
    notify: Bell,
    theme: Sun,
    filter: SlidersHorizontal,
    check: Check,
    more: MoreHorizontal,
    download: Download,
} satisfies Record<string, LucideIcon>

export type IconName = keyof typeof Icons

// ─── Wrapper component — giữ đúng spec (1.8px stroke, round caps) ────────────
interface FNIconProps {
    name: IconName
    group?: IconGroup
    size?: number          // default 20 (nav) hoặc 16 (inline)
    className?: string
    color?: string         // override group color
    'aria-label'?: string
}

export function FNIcon({
    name,
    group,
    size = 20,
    className,
    color,
    'aria-label': ariaLabel,
}: FNIconProps) {
    const Icon = Icons[name]
    const resolvedColor = color ?? (group ? ICON_GROUP_COLOR[group] : 'currentColor')

    return (
        <Icon
            size={size}
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            color={resolvedColor}
            className={className}
            aria-label={ariaLabel}
            aria-hidden={ariaLabel ? undefined : true}
        />
    )
}