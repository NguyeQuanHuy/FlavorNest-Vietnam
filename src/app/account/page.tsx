'use client'

/**
 * FlavorNest Vietnam — My Account Page (Redesigned)
 * src/app/account/page.tsx
 *
 * Improvements from Gemini review:
 * - Full English UI
 * - Larger, more visual favorite cards
 * - Personalized greeting
 * - Activity chart (weekly cooking activity)
 * - Better avatar upload UX
 * - Tighter tab navigation
 * - More interactive overview
 */

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Types ────────────────────────────────────────────────────────────────────
type Tab = 'overview' | 'favorites' | 'settings'

interface UserProfile {
    name: string
    email: string
    avatar: string
    joinedAt: string
    bio: string
}

interface FavoriteRecipe {
    slug: string
    title: string
    subtitle: string
    image: string
    time: string
    difficulty: string
    category: string
    savedAt: string
}

// ─── Mock data ────────────────────────────────────────────────────────────────
const MOCK_USER: UserProfile = {
    name: 'Nguyễn Quan Huy',
    email: 'huy@flavornest.vn',
    avatar: '',
    joinedAt: '2024-09-01',
    bio: 'Passionate about Vietnamese home cooking and family meals.',
}

const SAMPLE_FAVORITES: FavoriteRecipe[] = [
    {
        slug: 'hanoi-beef-pho',
        title: 'Hanoi Beef Pho',
        subtitle: 'Phở Bò Hà Nội',
        image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=800&q=80',
        time: '3 hrs', difficulty: 'Medium', category: 'Soup', savedAt: '2025-01-10',
    },
    {
        slug: 'banh-cuon',
        title: 'Steamed Rice Rolls',
        subtitle: 'Bánh Cuốn',
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
        time: '45 min', difficulty: 'Medium', category: 'Breakfast', savedAt: '2025-01-15',
    },
    {
        slug: 'banh-flan',
        title: 'Vietnamese Caramel Flan',
        subtitle: 'Bánh Flan',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
        time: '3 hrs', difficulty: 'Medium', category: 'Dessert', savedAt: '2025-01-20',
    },
    {
        slug: 'bun-cha-hanoi',
        title: 'Hanoi Grilled Pork Vermicelli',
        subtitle: 'Bún Chả Hà Nội',
        image: 'https://images.unsplash.com/photo-1742893368398-128bded9c656?auto=format&fit=crop&w=800&q=80',
        time: '45 min', difficulty: 'Easy', category: 'Noodles', savedAt: '2025-02-01',
    },
]

// Mock weekly activity data
const WEEKLY_ACTIVITY = [
    { day: 'Mon', count: 2 },
    { day: 'Tue', count: 0 },
    { day: 'Wed', count: 3 },
    { day: 'Thu', count: 1 },
    { day: 'Fri', count: 4 },
    { day: 'Sat', count: 2 },
    { day: 'Sun', count: 1 },
]

// ─── Schemas ──────────────────────────────────────────────────────────────────
const profileSchema = z.object({
    name: z.string().min(1, 'Please enter your name').max(40, 'Max 40 characters'),
    bio: z.string().max(160, 'Max 160 characters').optional().or(z.literal('')),
})

const passwordSchema = z.object({
    currentPassword: z.string().min(1, 'Enter current password'),
    newPassword: z.string().min(6, 'Min 6 characters'),
    confirmPassword: z.string().min(1, 'Confirm your password'),
}).refine(d => d.newPassword === d.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
})

type ProfileForm = z.infer<typeof profileSchema>
type PasswordForm = z.infer<typeof passwordSchema>

// ─── Helpers ──────────────────────────────────────────────────────────────────
const DIFF_COLOR: Record<string, string> = {
    Easy: '#059669', Medium: '#D97706', Hard: '#DC2626',
}

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

function getInitials(name: string) {
    return name.split(' ').map(w => w[0]).slice(-2).join('').toUpperCase()
}

function getGreeting() {
    const h = new Date().getHours()
    if (h < 12) return 'Good morning'
    if (h < 17) return 'Good afternoon'
    return 'Good evening'
}

// ─── Activity Chart ───────────────────────────────────────────────────────────
function ActivityChart() {
    const max = Math.max(...WEEKLY_ACTIVITY.map(d => d.count))
    return (
        <div style={{ background: '#FAFAF7', borderRadius: 16, padding: '20px', border: '1px solid rgba(75,46,26,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: '#2D1A0E', margin: 0 }}>This Week's Activity</h4>
                <span style={{ fontSize: 11, color: 'rgba(75,46,26,0.4)', fontWeight: 600 }}>recipes saved/viewed</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 60 }}>
                {WEEKLY_ACTIVITY.map((d, i) => (
                    <div key={d.day} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: max > 0 ? `${(d.count / max) * 44}px` : '4px' }}
                            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                            style={{
                                width: '100%',
                                background: d.count > 0
                                    ? 'linear-gradient(to top, #D97706, #F59E0B)'
                                    : 'rgba(75,46,26,0.08)',
                                borderRadius: '4px 4px 2px 2px',
                                minHeight: 4,
                            }}
                        />
                        <span style={{ fontSize: 10, color: 'rgba(75,46,26,0.4)', fontWeight: 600 }}>{d.day}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

// ─── Favorite Card (larger, more visual) ─────────────────────────────────────
function FavoriteCard({ recipe, onRemove }: { recipe: FavoriteRecipe; onRemove: () => void }) {
    const [hovered, setHovered] = useState(false)
    const [removing, setRemoving] = useState(false)

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: removing ? 0 : 1, scale: removing ? 0.9 : 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.32 }}
            style={{
                background: 'white',
                borderRadius: 22,
                overflow: 'hidden',
                border: hovered ? '1.5px solid rgba(217,119,6,0.3)' : '1px solid rgba(75,46,26,0.07)',
                transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hovered ? '0 24px 52px rgba(75,46,26,0.14)' : '0 2px 8px rgba(75,46,26,0.05)',
                transition: 'all 0.33s cubic-bezier(0.34,1.56,0.64,1)',
                cursor: 'pointer',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Larger image */}
            <div style={{ position: 'relative', height: 200, overflow: 'hidden', background: '#f5ede3' }}>
                <Image
                    src={recipe.image} alt={recipe.title} fill
                    style={{ objectFit: 'cover', transform: hovered ? 'scale(1.07)' : 'scale(1)', transition: 'transform 0.55s ease' }}
                    sizes="(max-width:640px) 100vw, 33vw" quality={80}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(45,26,14,0.75) 0%, transparent 55%)' }} />

                {/* Category */}
                <span style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#4B2E1A', padding: '4px 11px', borderRadius: 100 }}>
                    {recipe.category}
                </span>

                {/* Remove button */}
                <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={() => { setRemoving(true); setTimeout(onRemove, 320) }}
                    style={{ position: 'absolute', top: 10, right: 10, width: 32, height: 32, borderRadius: '50%', background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)', border: 'none', color: 'white', fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(220,38,38,0.8)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.45)')}
                    aria-label="Remove from favorites"
                >
                    ✕
                </motion.button>

                {/* Title overlay */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px' }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: 'white', margin: 0, lineHeight: 1.2, textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}>
                        {recipe.title}
                    </h3>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', margin: '3px 0 0', fontStyle: 'italic' }}>{recipe.subtitle}</p>
                </div>
            </div>

            {/* Body */}
            <div style={{ padding: '14px 16px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, color: DIFF_COLOR[recipe.difficulty], background: `${DIFF_COLOR[recipe.difficulty]}18`, padding: '3px 9px', borderRadius: 7 }}>{recipe.difficulty}</span>
                        <span style={{ fontSize: 11, color: 'rgba(75,46,26,0.4)' }}>⏱ {recipe.time}</span>
                    </div>
                    <Link href={`/recipes/${recipe.slug}`} style={{ fontSize: 12, fontWeight: 700, color: '#D97706', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 3 }}>
                        Cook it →
                    </Link>
                </div>
                <p style={{ fontSize: 11, color: 'rgba(75,46,26,0.3)', margin: '8px 0 0' }}>
                    Saved {formatDate(recipe.savedAt)}
                </p>
            </div>
        </motion.div>
    )
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function AccountPage() {
    const [activeTab, setActiveTab] = useState<Tab>('overview')
    const [user, setUser] = useState<UserProfile>(MOCK_USER)
    const [favorites, setFavorites] = useState<FavoriteRecipe[]>([])
    const [editingProfile, setEditingProfile] = useState(false)
    const [profileSaved, setProfileSaved] = useState(false)
    const [pwSaved, setPwSaved] = useState(false)
    const fileRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
    try {
        const stored = localStorage.getItem('fn_favorites')
        setFavorites(stored ? JSON.parse(stored) : SAMPLE_FAVORITES)
        // Load saved avatar
        const savedAvatar = localStorage.getItem('fn_avatar')
        if (savedAvatar) setUser(prev => ({ ...prev, avatar: savedAvatar }))
    } catch { setFavorites(SAMPLE_FAVORITES) }
    }, [])

    const saveFavorites = (next: FavoriteRecipe[]) => {
        setFavorites(next)
        try { localStorage.setItem('fn_favorites', JSON.stringify(next)) } catch { }
    }

    const removeFavorite = (slug: string) => saveFavorites(favorites.filter(f => f.slug !== slug))

    // Avatar upload
    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
        const avatarData = reader.result as string
        setUser(prev => ({ ...prev, avatar: avatarData }))
        try { localStorage.setItem('fn_avatar', avatarData) } catch {}
    }
    reader.readAsDataURL(file)
    }

    const profileForm = useForm<ProfileForm>({
        resolver: zodResolver(profileSchema),
        defaultValues: { name: user.name, bio: user.bio },
    })

    const onSaveProfile = (data: ProfileForm) => {
        setUser(prev => ({ ...prev, name: data.name, bio: data.bio ?? '' }))
        setEditingProfile(false)
        setProfileSaved(true)
        setTimeout(() => setProfileSaved(false), 3000)
    }

    const pwForm = useForm<PasswordForm>({ resolver: zodResolver(passwordSchema) })

    const onSavePassword = async (_data: PasswordForm) => {
        await new Promise(r => setTimeout(r, 800))
        pwForm.reset()
        setPwSaved(true)
        setTimeout(() => setPwSaved(false), 3000)
    }

    const inputCls: React.CSSProperties = {
        width: '100%', padding: '11px 14px',
        background: '#FAFAF7', border: '1.5px solid rgba(75,46,26,0.1)',
        borderRadius: 12, fontSize: 14, fontFamily: 'inherit',
        color: '#4B2E1A', outline: 'none', transition: 'border-color 0.2s',
    }

    const TABS = [
        { id: 'overview' as Tab, label: 'Overview', icon: '🏠' },
        { id: 'favorites' as Tab, label: `Saved (${favorites.length})`, icon: '♡' },
        { id: 'settings' as Tab, label: 'Settings', icon: '⚙️' },
    ]

    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif", paddingTop: 88 }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Playfair+Display:ital,wght@0,700;1,600&display=swap');
                * { box-sizing: border-box; }
                .fn-input:focus { border-color: #D97706 !important; background: white !important; }
                .tab-btn { background: none; border: none; cursor: pointer; font-family: inherit; padding: 12px 22px; font-size: 14px; font-weight: 500; color: rgba(75,46,26,0.45); border-bottom: 2.5px solid transparent; transition: all 0.2s; white-space: nowrap; display: flex; align-items: center; gap: 7px; }
                .tab-btn.active { color: #2D1A0E; border-bottom-color: #D97706; font-weight: 700; }
                .tab-btn:hover:not(.active) { color: #4B2E1A; background: rgba(75,46,26,0.03); }
            `}</style>

            <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 20px 80px' }}>

                {/* ── GREETING BANNER ── */}
                <motion.div
                    initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    style={{ background: 'linear-gradient(135deg, #2D1A0E 0%, #4B2E1A 100%)', borderRadius: 24, padding: '20px 28px', marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}
                >
                    <div>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '0 0 3px', fontWeight: 500 }}>{getGreeting()},</p>
                        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: 'white', margin: 0 }}>
                            {user.name.split(' ').pop()} 👋 What are you cooking today?
                        </p>
                    </div>
                    <Link href="/recipes" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#D97706', color: 'white', fontSize: 13, fontWeight: 700, padding: '10px 20px', borderRadius: 100, textDecoration: 'none' }}>
                        Explore Recipes →
                    </Link>
                </motion.div>

                {/* ── PROFILE HEADER ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    style={{ background: 'white', borderRadius: 28, padding: '28px 32px', marginBottom: 20, border: '1px solid rgba(75,46,26,0.07)', boxShadow: '0 4px 24px rgba(75,46,26,0.06)' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
                        {/* Clickable avatar */}
                        <div style={{ position: 'relative', flexShrink: 0, cursor: 'pointer' }} onClick={() => fileRef.current?.click()} title="Click to change photo">
                            <div style={{ width: 76, height: 76, borderRadius: '50%', background: 'linear-gradient(135deg, #D97706, #F59E0B)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 700, color: 'white', fontFamily: "'Playfair Display', serif", overflow: 'hidden', border: '3px solid white', boxShadow: '0 0 0 2px rgba(217,119,6,0.3)' }}>
                                {user.avatar
                                    ? <Image src={user.avatar} alt={user.name} fill style={{ objectFit: 'cover', borderRadius: '50%' }} />
                                    : getInitials(user.name)}
                            </div>
                            {/* Upload overlay */}
                            <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.2s' }}
                                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                                onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
                            >
                                <span style={{ fontSize: 16 }}>📷</span>
                            </div>
                            <div style={{ position: 'absolute', bottom: 2, right: 2, width: 14, height: 14, borderRadius: '50%', background: '#22c55e', border: '2px solid white' }} />
                            <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleAvatarChange} />
                        </div>

                        {/* User info */}
                        <div style={{ flex: 1, minWidth: 180 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 3 }}>
                                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{user.name}</h1>
                                <span style={{ fontSize: 10, fontWeight: 700, background: 'rgba(217,119,6,0.1)', color: '#D97706', padding: '3px 10px', borderRadius: 100, letterSpacing: '0.06em', textTransform: 'uppercase' }}>FlavorNest Chef</span>
                            </div>
                            <p style={{ fontSize: 13, color: 'rgba(75,46,26,0.45)', margin: '0 0 5px' }}>{user.email}</p>
                            {user.bio && <p style={{ fontSize: 13, color: 'rgba(75,46,26,0.6)', margin: 0, fontStyle: 'italic' }}>{user.bio}</p>}
                        </div>

                        {/* Stats */}
                        <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
                            {[
                                { val: favorites.length, lbl: 'Saved', color: '#BE185D' },
                                { val: formatDate(user.joinedAt), lbl: 'Member since', color: '#D97706' },
                            ].map(s => (
                                <div key={s.lbl} style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: 20, fontWeight: 700, color: s.color, fontFamily: "'Playfair Display', serif", lineHeight: 1 }}>{s.val}</div>
                                    <div style={{ fontSize: 10, color: 'rgba(75,46,26,0.4)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: 3 }}>{s.lbl}</div>
                                </div>
                            ))}
                            <button
                                onClick={() => setEditingProfile(true)}
                                style={{ padding: '9px 18px', background: '#4B2E1A', color: 'white', borderRadius: 100, border: 'none', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 5, transition: 'background 0.2s' }}
                                onMouseEnter={e => (e.currentTarget.style.background = '#D97706')}
                                onMouseLeave={e => (e.currentTarget.style.background = '#4B2E1A')}
                            >
                                ✏️ Edit Profile
                            </button>
                        </div>
                    </div>

                    <AnimatePresence>
                        {profileSaved && (
                            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                style={{ marginTop: 14, background: 'rgba(22,101,52,0.08)', border: '1px solid rgba(22,101,52,0.18)', borderRadius: 12, padding: '10px 14px', fontSize: 13, color: '#166534', display: 'flex', alignItems: 'center', gap: 8 }}>
                                ✅ Profile updated successfully!
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* ── EDIT PROFILE MODAL ── */}
                <AnimatePresence>
                    {editingProfile && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}
                            onClick={e => { if (e.target === e.currentTarget) setEditingProfile(false) }}>
                            <motion.div initial={{ scale: 0.94, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 20 }}
                                style={{ background: 'white', borderRadius: 24, padding: '32px', width: '100%', maxWidth: 440, boxShadow: '0 32px 80px rgba(0,0,0,0.25)' }}>
                                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#2D1A0E', margin: '0 0 6px' }}>Edit Profile</h2>
                                <p style={{ fontSize: 13, color: 'rgba(75,46,26,0.45)', margin: '0 0 24px' }}>Update your display name and bio.</p>
                                <form onSubmit={profileForm.handleSubmit(onSaveProfile)} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    <div>
                                        <label style={{ fontSize: 13, fontWeight: 600, color: 'rgba(75,46,26,0.7)', display: 'block', marginBottom: 6 }}>Display Name</label>
                                        <input {...profileForm.register('name')} className="fn-input" style={inputCls} placeholder="Your name" />
                                        {profileForm.formState.errors.name && <p style={{ fontSize: 12, color: '#DC2626', marginTop: 4 }}>⚠ {profileForm.formState.errors.name.message}</p>}
                                    </div>
                                    <div>
                                        <label style={{ fontSize: 13, fontWeight: 600, color: 'rgba(75,46,26,0.7)', display: 'block', marginBottom: 6 }}>
                                            Short Bio <span style={{ color: 'rgba(75,46,26,0.35)', fontWeight: 400 }}>(optional)</span>
                                        </label>
                                        <textarea {...profileForm.register('bio')} className="fn-input" style={{ ...inputCls, minHeight: 80, resize: 'vertical' }} placeholder="What do you love to cook?" />
                                    </div>
                                    <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                                        <button type="button" onClick={() => setEditingProfile(false)} style={{ flex: 1, padding: '12px', background: '#F5EDE3', color: '#4B2E1A', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Cancel</button>
                                        <button type="submit" style={{ flex: 2, padding: '12px', background: '#D97706', color: 'white', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>Save Changes</button>
                                    </div>
                                </form>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── TABS ── */}
                <div style={{ background: 'white', borderRadius: 22, border: '1px solid rgba(75,46,26,0.07)', overflow: 'hidden', boxShadow: '0 2px 12px rgba(75,46,26,0.04)' }}>
                    <div style={{ display: 'flex', borderBottom: '1px solid rgba(75,46,26,0.07)', overflowX: 'auto' }}>
                        {TABS.map(tab => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}>
                                <span>{tab.icon}</span> {tab.label}
                            </button>
                        ))}
                    </div>

                    <div style={{ padding: '28px 28px 32px' }}>
                        <AnimatePresence mode="wait">
                            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }}>

                                {/* ── OVERVIEW ── */}
                                {activeTab === 'overview' && (
                                    <div>
                                        {/* Stat cards */}
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 14, marginBottom: 24 }}>
                                            {[
                                                { icon: '♡', val: `${favorites.length}`, lbl: 'Recipes Saved', color: '#BE185D', bg: 'rgba(190,24,93,0.07)' },
                                                { icon: '📅', val: formatDate(user.joinedAt), lbl: 'Member Since', color: '#D97706', bg: 'rgba(217,119,6,0.07)' },
                                                { icon: '🍜', val: '100+', lbl: 'Recipes Available', color: '#166534', bg: 'rgba(22,101,52,0.07)' },
                                            ].map(s => (
                                                <div key={s.lbl} style={{ background: s.bg, borderRadius: 16, padding: '18px 16px', border: `1px solid ${s.color}22` }}>
                                                    <div style={{ fontSize: 24, marginBottom: 8 }}>{s.icon}</div>
                                                    <div style={{ fontSize: 20, fontWeight: 700, color: s.color, fontFamily: "'Playfair Display', serif", marginBottom: 3 }}>{s.val}</div>
                                                    <div style={{ fontSize: 11, color: 'rgba(75,46,26,0.5)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.lbl}</div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Activity chart */}
                                        <div style={{ marginBottom: 24 }}>
                                            <ActivityChart />
                                        </div>

                                        {/* Recent saved — larger thumbnails */}
                                        {favorites.length > 0 && (
                                            <div>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                                                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#2D1A0E', margin: 0 }}>Recently Saved</h3>
                                                    <button onClick={() => setActiveTab('favorites')} style={{ fontSize: 13, color: '#D97706', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                                                        View all {favorites.length} →
                                                    </button>
                                                </div>
                                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12 }}>
                                                    {favorites.slice(0, 4).map(f => (
                                                        <Link key={f.slug} href={`/recipes/${f.slug}`}
                                                            style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', height: 120, display: 'block', textDecoration: 'none', flexShrink: 0 }}>
                                                            <Image src={f.image} alt={f.title} fill style={{ objectFit: 'cover' }} sizes="200px" quality={70} />
                                                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(45,26,14,0.85) 0%, transparent 50%)' }} />
                                                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 12px' }}>
                                                                <p style={{ fontSize: 12, fontWeight: 700, color: 'white', margin: 0, lineHeight: 1.3 }}>{f.title}</p>
                                                                <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.55)', margin: '2px 0 0', fontStyle: 'italic' }}>{f.subtitle}</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Coming soon */}
                                        <div style={{ marginTop: 20, padding: '18px 20px', background: 'linear-gradient(135deg, #F5EDE3, #FDE8C5)', borderRadius: 16, border: '1px dashed rgba(217,119,6,0.3)', display: 'flex', alignItems: 'center', gap: 12 }}>
                                            <span style={{ fontSize: 22 }}>💬</span>
                                            <div>
                                                <p style={{ fontSize: 13, fontWeight: 700, color: '#4B2E1A', margin: '0 0 2px' }}>Comments & Activity — Coming Soon</p>
                                                <p style={{ fontSize: 12, color: 'rgba(75,46,26,0.5)', margin: 0 }}>See your recipe comments and cooking history in one place.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* ── FAVORITES ── */}
                                {activeTab === 'favorites' && (
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
                                            <div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                                                    <div style={{ width: 22, height: 1.5, background: '#D97706' }} />
                                                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#D97706', textTransform: 'uppercase' }}>Your Collection</span>
                                                </div>
                                                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#2D1A0E', margin: 0 }}>
                                                    Saved Recipes ({favorites.length})
                                                </h2>
                                            </div>
                                            {favorites.length > 0 && (
                                                <Link href="/recipes" style={{ fontSize: 13, fontWeight: 600, color: '#D97706', textDecoration: 'none', padding: '9px 20px', border: '1.5px solid rgba(217,119,6,0.3)', borderRadius: 100 }}>
                                                    + Discover More
                                                </Link>
                                            )}
                                        </div>

                                        {favorites.length === 0 ? (
                                            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', padding: '60px 20px' }}>
                                                <div style={{ fontSize: 52, marginBottom: 16 }}>🍜</div>
                                                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#4B2E1A', margin: '0 0 10px' }}>No recipes saved yet</h3>
                                                <p style={{ fontSize: 15, color: 'rgba(75,46,26,0.55)', lineHeight: 1.7, margin: '0 0 24px', maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
                                                    Browse recipes and tap ♡ to save your favourites here.
                                                </p>
                                                <Link href="/recipes" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', background: '#4B2E1A', color: 'white', borderRadius: 100, textDecoration: 'none', fontSize: 14, fontWeight: 700 }}>
                                                    Explore Recipes →
                                                </Link>
                                            </motion.div>
                                        ) : (
                                            <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
                                                <AnimatePresence>
                                                    {favorites.map(f => (
                                                        <FavoriteCard key={f.slug} recipe={f} onRemove={() => removeFavorite(f.slug)} />
                                                    ))}
                                                </AnimatePresence>
                                            </motion.div>
                                        )}
                                    </div>
                                )}

                                {/* ── SETTINGS ── */}
                                {activeTab === 'settings' && (
                                    <div style={{ maxWidth: 500 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                                            <div style={{ width: 22, height: 1.5, background: '#D97706' }} />
                                            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#D97706', textTransform: 'uppercase' }}>Account Settings</span>
                                        </div>

                                        {/* Change password */}
                                        <div style={{ background: '#FAFAF7', borderRadius: 18, padding: '24px', marginBottom: 20, border: '1px solid rgba(75,46,26,0.07)' }}>
                                            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#2D1A0E', margin: '0 0 20px' }}>Change Password</h3>
                                            <form onSubmit={pwForm.handleSubmit(onSavePassword)} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                                {(['currentPassword', 'newPassword', 'confirmPassword'] as const).map((field, i) => (
                                                    <div key={field}>
                                                        <label style={{ fontSize: 13, fontWeight: 600, color: 'rgba(75,46,26,0.7)', display: 'block', marginBottom: 5 }}>
                                                            {['Current Password', 'New Password', 'Confirm New Password'][i]}
                                                        </label>
                                                        <input {...pwForm.register(field)} type="password" className="fn-input" style={inputCls} placeholder="••••••••" />
                                                        {pwForm.formState.errors[field] && <p style={{ fontSize: 12, color: '#DC2626', marginTop: 4 }}>⚠ {pwForm.formState.errors[field]?.message}</p>}
                                                    </div>
                                                ))}
                                                <AnimatePresence>
                                                    {pwSaved && (
                                                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ fontSize: 13, color: '#166534', background: 'rgba(22,101,52,0.08)', padding: '9px 13px', borderRadius: 10, margin: 0 }}>
                                                            ✅ Password updated successfully!
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                                <button type="submit" style={{ padding: '12px', background: '#D97706', color: 'white', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', marginTop: 4 }}>
                                                    Update Password
                                                </button>
                                            </form>
                                        </div>

                                        {/* Danger zone */}
                                        <div style={{ borderRadius: 18, padding: '20px 24px', border: '1.5px solid rgba(220,38,38,0.15)', background: 'rgba(220,38,38,0.02)' }}>
                                            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#DC2626', margin: '0 0 6px' }}>Danger Zone</h3>
                                            <p style={{ fontSize: 13, color: 'rgba(75,46,26,0.55)', margin: '0 0 14px', lineHeight: 1.6 }}>Permanently delete your account and all associated data. This cannot be undone.</p>
                                            <button
                                                style={{ padding: '9px 20px', background: 'transparent', color: '#DC2626', border: '1.5px solid rgba(220,38,38,0.3)', borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}
                                                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(220,38,38,0.08)')}
                                                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                                            >
                                                Delete Account
                                            </button>
                                        </div>
                                    </div>
                                )}

                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </main>
    )
}
