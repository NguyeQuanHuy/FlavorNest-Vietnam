'use client'

/**
 * FlavorNest Vietnam — My Account Page
 * app/account/page.tsx
 *
 * Tabs: Overview | My Favorites | Settings
 * Data: localStorage for favorites (swap to DB later)
 * Stack: React Hook Form + Zod + Framer Motion
 */

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
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

// ─── Mock user (replace with real session/context) ────────────────────────────
const MOCK_USER: UserProfile = {
    name: 'Nguyễn Quan Huy',
    email: 'huy@flavornest.vn',
    avatar: '',
    joinedAt: '2024-09-01',
    bio: 'Yêu ẩm thực Việt Nam và những bữa cơm gia đình.',
}

// ─── Mock sample favorites (pre-seeded for demo) ──────────────────────────────
const SAMPLE_FAVORITES: FavoriteRecipe[] = [
    {
        slug: 'hanoi-beef-pho',
        title: 'Hanoi Beef Pho',
        subtitle: 'Phở Bò Hà Nội',
        image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=800&q=80',
        time: '3 hrs', difficulty: 'Medium', category: 'Soup',
        savedAt: '2025-01-10',
    },
    {
        slug: 'banh-cuon',
        title: 'Steamed Rice Rolls',
        subtitle: 'Bánh Cuốn',
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
        time: '45 min', difficulty: 'Medium', category: 'Breakfast',
        savedAt: '2025-01-15',
    },
    {
        slug: 'banh-flan',
        title: 'Vietnamese Caramel Flan',
        subtitle: 'Bánh Flan',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
        time: '3 hrs', difficulty: 'Medium', category: 'Dessert',
        savedAt: '2025-01-20',
    },
]

// ─── Zod schemas ──────────────────────────────────────────────────────────────
const profileSchema = z.object({
    name: z.string().min(1, 'Vui lòng nhập tên').max(40, 'Tối đa 40 ký tự'),
    bio: z.string().max(160, 'Tối đa 160 ký tự').optional().or(z.literal('')),
})

const passwordSchema = z.object({
    currentPassword: z.string().min(1, 'Nhập mật khẩu hiện tại'),
    newPassword: z.string().min(6, 'Tối thiểu 6 ký tự'),
    confirmPassword: z.string().min(1, 'Xác nhận mật khẩu'),
}).refine(d => d.newPassword === d.confirmPassword, {
    message: 'Mật khẩu không khớp',
    path: ['confirmPassword'],
})

type ProfileForm = z.infer<typeof profileSchema>
type PasswordForm = z.infer<typeof passwordSchema>

// ─── Helpers ──────────────────────────────────────────────────────────────────
const DIFF_COLOR: Record<string, string> = {
    Easy: '#059669', Medium: '#D97706', Hard: '#DC2626',
}

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

function getInitials(name: string) {
    return name.split(' ').map(w => w[0]).slice(-2).join('').toUpperCase()
}

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Single favorite recipe card */
function FavoriteCard({ recipe, onRemove }: { recipe: FavoriteRecipe; onRemove: () => void }) {
    const [hovered, setHovered] = useState(false)
    const [removing, setRemoving] = useState(false)

    const handleRemove = () => {
        setRemoving(true)
        setTimeout(onRemove, 350)
    }

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: removing ? 0 : 1, scale: removing ? 0.9 : 1 }}
            exit={{ opacity: 0, scale: 0.9, height: 0 }}
            transition={{ duration: 0.32 }}
            style={{
                background: 'white',
                borderRadius: 22,
                overflow: 'hidden',
                border: hovered ? '1px solid rgba(217,119,6,0.28)' : '1px solid rgba(75,46,26,0.07)',
                transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
                boxShadow: hovered ? '0 20px 48px rgba(75,46,26,0.12)' : '0 2px 8px rgba(75,46,26,0.05)',
                transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s, border-color 0.2s',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image */}
            <div style={{ position: 'relative', height: 170, overflow: 'hidden', background: '#f5ede3' }}>
                <Image
                    src={recipe.image} alt={recipe.title} fill
                    style={{ objectFit: 'cover', transform: hovered ? 'scale(1.06)' : 'scale(1)', transition: 'transform 0.5s ease' }}
                    sizes="(max-width:640px) 100vw, 33vw" quality={75}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(75,46,26,0.55) 0%, transparent 55%)' }} />
                <span style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#4B2E1A', padding: '4px 11px', borderRadius: 100 }}>
                    {recipe.category}
                </span>
                {/* Remove button */}
                <button
                    onClick={handleRemove}
                    title="Xóa khỏi Favorites"
                    style={{ position: 'absolute', top: 10, right: 10, width: 30, height: 30, borderRadius: '50%', background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)', border: 'none', color: 'white', fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(220,38,38,0.75)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.45)')}
                >
                    ✕
                </button>
            </div>

            {/* Body */}
            <div style={{ padding: '14px 16px 16px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: '#2D1A0E', margin: '0 0 2px', lineHeight: 1.2 }}>
                    {recipe.title}
                </h3>
                <p style={{ fontSize: 11, color: 'rgba(75,46,26,0.4)', fontStyle: 'italic', margin: '0 0 10px' }}>{recipe.subtitle}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, color: DIFF_COLOR[recipe.difficulty], background: `${DIFF_COLOR[recipe.difficulty]}18`, padding: '3px 9px', borderRadius: 7 }}>{recipe.difficulty}</span>
                        <span style={{ fontSize: 11, color: 'rgba(75,46,26,0.4)' }}>⏱ {recipe.time}</span>
                    </div>
                    <Link href={`/recipes/${recipe.slug}`} style={{ fontSize: 12, fontWeight: 600, color: '#D97706', textDecoration: 'none' }}>
                        Xem →
                    </Link>
                </div>
                <p style={{ fontSize: 11, color: 'rgba(75,46,26,0.3)', margin: '8px 0 0' }}>
                    Đã lưu {formatDate(recipe.savedAt)}
                </p>
            </div>
        </motion.div>
    )
}

/** Empty favorites state */
function EmptyFavorites() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', padding: '60px 20px' }}
        >
            <div style={{ fontSize: 52, marginBottom: 16 }}>🍜</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#4B2E1A', margin: '0 0 10px' }}>
                Chưa có công thức nào được lưu
            </h3>
            <p style={{ fontSize: 15, color: 'rgba(75,46,26,0.55)', lineHeight: 1.7, margin: '0 0 24px', maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
                Hãy khám phá các công thức và nhấn ♡ để lưu vào danh sách yêu thích của bạn.
            </p>
            <Link href="/recipes" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', background: '#4B2E1A', color: 'white', borderRadius: 100, textDecoration: 'none', fontSize: 14, fontWeight: 700 }}>
                Khám phá công thức →
            </Link>
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

    // Load favorites from localStorage
    useEffect(() => {
        try {
            const stored = localStorage.getItem('fn_favorites')
            setFavorites(stored ? JSON.parse(stored) : SAMPLE_FAVORITES)
        } catch {
            setFavorites(SAMPLE_FAVORITES)
        }
    }, [])

    const saveFavorites = (next: FavoriteRecipe[]) => {
        setFavorites(next)
        try { localStorage.setItem('fn_favorites', JSON.stringify(next)) } catch { }
    }

    const removeFavorite = (slug: string) => {
        saveFavorites(favorites.filter(f => f.slug !== slug))
    }

    // Profile form
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

    // Password form
    const pwForm = useForm<PasswordForm>({
        resolver: zodResolver(passwordSchema),
    })

    const onSavePassword = async (_data: PasswordForm) => {
        // TODO: call API
        await new Promise(r => setTimeout(r, 800))
        pwForm.reset()
        setPwSaved(true)
        setTimeout(() => setPwSaved(false), 3000)
    }

    const inputCls: React.CSSProperties = {
        width: '100%', padding: '11px 14px',
        background: '#FAFAF7', border: '1.5px solid rgba(75,46,26,0.1)',
        borderRadius: 12, fontSize: 14, fontFamily: 'inherit',
        color: '#4B2E1A', outline: 'none',
        transition: 'border-color 0.2s',
    }

    const TABS: { id: Tab; label: string; emoji: string }[] = [
        { id: 'overview', label: 'Tổng quan', emoji: '🏠' },
        { id: 'favorites', label: `Đã lưu (${favorites.length})`, emoji: '♡' },
        { id: 'settings', label: 'Cài đặt', emoji: '⚙️' },
    ]

    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif", paddingTop: 88 }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Playfair+Display:ital,wght@0,700;1,600&display=swap');
        * { box-sizing: border-box; }
        .fn-input:focus { border-color: #D97706 !important; background: white !important; }
        .tab-btn { background: none; border: none; cursor: pointer; font-family: inherit; padding: 10px 20px; font-size: 14px; font-weight: 500; color: rgba(75,46,26,0.5); border-bottom: 2.5px solid transparent; transition: all 0.2s; white-space: nowrap; }
        .tab-btn.active { color: #4B2E1A; border-bottom-color: #D97706; font-weight: 700; }
        .tab-btn:hover:not(.active) { color: #4B2E1A; }
      `}</style>

            <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 20px 80px' }}>

                {/* ── PROFILE HEADER ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ background: 'white', borderRadius: 28, padding: '32px', marginBottom: 24, border: '1px solid rgba(75,46,26,0.07)', boxShadow: '0 4px 24px rgba(75,46,26,0.06)' }}
                >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap' }}>
                        {/* Avatar */}
                        <div style={{ position: 'relative', flexShrink: 0 }}>
                            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, #D97706, #F59E0B)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 700, color: 'white', fontFamily: "'Playfair Display', serif" }}>
                                {user.avatar ? (
                                    <Image src={user.avatar} alt={user.name} fill style={{ borderRadius: '50%', objectFit: 'cover' }} />
                                ) : getInitials(user.name)}
                            </div>
                            <div style={{ position: 'absolute', bottom: 2, right: 2, width: 16, height: 16, borderRadius: '50%', background: '#22c55e', border: '2px solid white' }} />
                        </div>

                        {/* Info */}
                        <div style={{ flex: 1, minWidth: 200 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 4 }}>
                                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#2D1A0E', margin: 0 }}>
                                    {user.name}
                                </h1>
                                <span style={{ fontSize: 11, fontWeight: 700, background: 'rgba(217,119,6,0.1)', color: '#D97706', padding: '3px 10px', borderRadius: 100, letterSpacing: '0.06em' }}>
                                    FlavorNest Chef
                                </span>
                            </div>
                            <p style={{ fontSize: 14, color: 'rgba(75,46,26,0.5)', margin: '0 0 8px' }}>{user.email}</p>
                            {user.bio && <p style={{ fontSize: 14, color: 'rgba(75,46,26,0.65)', margin: 0, fontStyle: 'italic' }}>{user.bio}</p>}
                        </div>

                        {/* Stats + Edit */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
                            <button
                                onClick={() => setEditingProfile(true)}
                                style={{ padding: '9px 20px', background: '#4B2E1A', color: 'white', borderRadius: 100, border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.2s' }}
                                onMouseEnter={e => (e.currentTarget.style.background = '#D97706')}
                                onMouseLeave={e => (e.currentTarget.style.background = '#4B2E1A')}
                            >
                                ✏️ Chỉnh sửa
                            </button>
                            <div style={{ display: 'flex', gap: 20, textAlign: 'center' }}>
                                {[
                                    { val: favorites.length, lbl: 'Đã lưu' },
                                    { val: formatDate(user.joinedAt), lbl: 'Tham gia' },
                                ].map(s => (
                                    <div key={s.lbl}>
                                        <div style={{ fontSize: 18, fontWeight: 700, color: '#2D1A0E', fontFamily: "'Playfair Display', serif" }}>{s.val}</div>
                                        <div style={{ fontSize: 11, color: 'rgba(75,46,26,0.4)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.lbl}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Success toast */}
                    <AnimatePresence>
                        {profileSaved && (
                            <motion.div
                                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                style={{ marginTop: 16, background: 'rgba(22,101,52,0.1)', border: '1px solid rgba(22,101,52,0.2)', borderRadius: 12, padding: '10px 14px', fontSize: 13, color: '#166534', display: 'flex', alignItems: 'center', gap: 8 }}
                            >
                                ✅ Thông tin đã được lưu thành công!
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* ── EDIT PROFILE MODAL ── */}
                <AnimatePresence>
                    {editingProfile && (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}
                            onClick={e => { if (e.target === e.currentTarget) setEditingProfile(false) }}
                        >
                            <motion.div
                                initial={{ scale: 0.94, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 20 }}
                                style={{ background: 'white', borderRadius: 24, padding: '32px', width: '100%', maxWidth: 440, boxShadow: '0 32px 80px rgba(0,0,0,0.25)' }}
                            >
                                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#2D1A0E', margin: '0 0 24px' }}>
                                    Chỉnh sửa hồ sơ
                                </h2>
                                <form onSubmit={profileForm.handleSubmit(onSaveProfile)} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    <div>
                                        <label style={{ fontSize: 13, fontWeight: 600, color: 'rgba(75,46,26,0.7)', display: 'block', marginBottom: 6 }}>Tên hiển thị</label>
                                        <input {...profileForm.register('name')} className="fn-input" style={inputCls} placeholder="Tên của bạn" />
                                        {profileForm.formState.errors.name && <p style={{ fontSize: 12, color: '#DC2626', marginTop: 4 }}>⚠ {profileForm.formState.errors.name.message}</p>}
                                    </div>
                                    <div>
                                        <label style={{ fontSize: 13, fontWeight: 600, color: 'rgba(75,46,26,0.7)', display: 'block', marginBottom: 6 }}>
                                            Giới thiệu ngắn <span style={{ color: 'rgba(75,46,26,0.35)', fontWeight: 400 }}>(tùy chọn)</span>
                                        </label>
                                        <textarea {...profileForm.register('bio')} className="fn-input" style={{ ...inputCls, minHeight: 80, resize: 'vertical' }} placeholder="Bạn yêu thích món ăn gì?" />
                                    </div>
                                    <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                                        <button type="button" onClick={() => setEditingProfile(false)} style={{ flex: 1, padding: '12px', background: '#F5EDE3', color: '#4B2E1A', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                                            Hủy
                                        </button>
                                        <button type="submit" style={{ flex: 2, padding: '12px', background: '#D97706', color: 'white', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                                            Lưu thay đổi
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── TAB NAV ── */}
                <div style={{ background: 'white', borderRadius: 20, marginBottom: 24, border: '1px solid rgba(75,46,26,0.07)', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', borderBottom: '1px solid rgba(75,46,26,0.07)', overflowX: 'auto' }}>
                        {TABS.map(tab => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}>
                                {tab.emoji} {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* ── TAB CONTENT ── */}
                    <div style={{ padding: '28px 28px' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.25 }}
                            >

                                {/* OVERVIEW TAB */}
                                {activeTab === 'overview' && (
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                                            <div style={{ width: 24, height: 1.5, background: '#D97706' }} />
                                            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#D97706', textTransform: 'uppercase' }}>Tổng quan</span>
                                        </div>

                                        {/* Stat cards */}
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 14, marginBottom: 28 }}>
                                            {[
                                                { icon: '♡', val: favorites.length, lbl: 'Công thức đã lưu', color: '#BE185D' },
                                                { icon: '📅', val: formatDate(user.joinedAt), lbl: 'Ngày tham gia', color: '#D97706' },
                                                { icon: '🍜', val: '100+', lbl: 'Công thức có sẵn', color: '#166534' },
                                            ].map(s => (
                                                <div key={s.lbl} style={{ background: '#FAFAF7', borderRadius: 16, padding: '18px 16px', border: '1px solid rgba(75,46,26,0.06)' }}>
                                                    <div style={{ fontSize: 22, marginBottom: 8 }}>{s.icon}</div>
                                                    <div style={{ fontSize: 20, fontWeight: 700, color: s.color, fontFamily: "'Playfair Display', serif", marginBottom: 3 }}>{s.val}</div>
                                                    <div style={{ fontSize: 12, color: 'rgba(75,46,26,0.45)', fontWeight: 600 }}>{s.lbl}</div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Recent favorites */}
                                        {favorites.length > 0 && (
                                            <>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                                                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#2D1A0E', margin: 0 }}>Đã lưu gần đây</h3>
                                                    <button onClick={() => setActiveTab('favorites')} style={{ fontSize: 13, color: '#D97706', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                                                        Xem tất cả →
                                                    </button>
                                                </div>
                                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
                                                    {favorites.slice(0, 3).map(f => (
                                                        <Link key={f.slug} href={`/recipes/${f.slug}`} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px', background: '#FAFAF7', borderRadius: 14, border: '1px solid rgba(75,46,26,0.06)', textDecoration: 'none', transition: 'all 0.18s' }}
                                                            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(217,119,6,0.25)'; (e.currentTarget as HTMLAnchorElement).style.background = 'white'; }}
                                                            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(75,46,26,0.06)'; (e.currentTarget as HTMLAnchorElement).style.background = '#FAFAF7'; }}
                                                        >
                                                            <div style={{ width: 44, height: 44, borderRadius: 10, overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
                                                                <Image src={f.image} alt={f.title} fill style={{ objectFit: 'cover' }} sizes="48px" />
                                                            </div>
                                                            <div>
                                                                <p style={{ fontSize: 13, fontWeight: 600, color: '#2D1A0E', margin: 0, lineHeight: 1.3 }}>{f.title}</p>
                                                                <p style={{ fontSize: 11, color: 'rgba(75,46,26,0.4)', margin: '2px 0 0', fontStyle: 'italic' }}>{f.subtitle}</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </>
                                        )}

                                        {/* Activity placeholder — easy to extend */}
                                        <div style={{ marginTop: 28, padding: '20px', background: '#F5EDE3', borderRadius: 16, border: '1px dashed rgba(217,119,6,0.3)' }}>
                                            <p style={{ fontSize: 13, color: 'rgba(75,46,26,0.5)', margin: 0, textAlign: 'center' }}>
                                                💬 <strong>Hoạt động & bình luận</strong> — sắp ra mắt!
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* FAVORITES TAB */}
                                {activeTab === 'favorites' && (
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
                                            <div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                                                    <div style={{ width: 24, height: 1.5, background: '#D97706' }} />
                                                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#D97706', textTransform: 'uppercase' }}>Danh sách yêu thích</span>
                                                </div>
                                                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#2D1A0E', margin: 0 }}>
                                                    Công thức đã lưu ({favorites.length})
                                                </h2>
                                            </div>
                                            {favorites.length > 0 && (
                                                <Link href="/recipes" style={{ fontSize: 13, fontWeight: 600, color: '#D97706', textDecoration: 'none', padding: '9px 20px', border: '1.5px solid rgba(217,119,6,0.3)', borderRadius: 100, transition: 'all 0.18s' }}>
                                                    + Khám phá thêm
                                                </Link>
                                            )}
                                        </div>

                                        {favorites.length === 0 ? (
                                            <EmptyFavorites />
                                        ) : (
                                            <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
                                                <AnimatePresence>
                                                    {favorites.map(f => (
                                                        <FavoriteCard key={f.slug} recipe={f} onRemove={() => removeFavorite(f.slug)} />
                                                    ))}
                                                </AnimatePresence>
                                            </motion.div>
                                        )}
                                    </div>
                                )}

                                {/* SETTINGS TAB */}
                                {activeTab === 'settings' && (
                                    <div style={{ maxWidth: 480 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                                            <div style={{ width: 24, height: 1.5, background: '#D97706' }} />
                                            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#D97706', textTransform: 'uppercase' }}>Cài đặt tài khoản</span>
                                        </div>

                                        {/* Change password */}
                                        <div style={{ background: '#FAFAF7', borderRadius: 18, padding: '24px', marginBottom: 20, border: '1px solid rgba(75,46,26,0.07)' }}>
                                            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#2D1A0E', margin: '0 0 20px' }}>
                                                Đổi mật khẩu
                                            </h3>
                                            <form onSubmit={pwForm.handleSubmit(onSavePassword)} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                                {(['currentPassword', 'newPassword', 'confirmPassword'] as const).map((field, i) => (
                                                    <div key={field}>
                                                        <label style={{ fontSize: 13, fontWeight: 600, color: 'rgba(75,46,26,0.7)', display: 'block', marginBottom: 5 }}>
                                                            {['Mật khẩu hiện tại', 'Mật khẩu mới', 'Xác nhận mật khẩu mới'][i]}
                                                        </label>
                                                        <input {...pwForm.register(field)} type="password" className="fn-input" style={inputCls} placeholder="••••••••" />
                                                        {pwForm.formState.errors[field] && (
                                                            <p style={{ fontSize: 12, color: '#DC2626', marginTop: 4 }}>⚠ {pwForm.formState.errors[field]?.message}</p>
                                                        )}
                                                    </div>
                                                ))}
                                                <AnimatePresence>
                                                    {pwSaved && (
                                                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ fontSize: 13, color: '#166534', background: 'rgba(22,101,52,0.08)', padding: '9px 13px', borderRadius: 10, margin: 0 }}>
                                                            ✅ Mật khẩu đã được cập nhật!
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                                <button type="submit" style={{ padding: '12px', background: '#D97706', color: 'white', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', marginTop: 4 }}>
                                                    Cập nhật mật khẩu
                                                </button>
                                            </form>
                                        </div>

                                        {/* Danger zone */}
                                        <div style={{ borderRadius: 18, padding: '20px 24px', border: '1.5px solid rgba(220,38,38,0.15)', background: 'rgba(220,38,38,0.03)' }}>
                                            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#DC2626', margin: '0 0 8px' }}>Vùng nguy hiểm</h3>
                                            <p style={{ fontSize: 13, color: 'rgba(75,46,26,0.55)', margin: '0 0 14px', lineHeight: 1.6 }}>Sau khi xóa tài khoản, tất cả dữ liệu sẽ bị mất vĩnh viễn.</p>
                                            <button style={{ padding: '9px 20px', background: 'transparent', color: '#DC2626', border: '1.5px solid rgba(220,38,38,0.3)', borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s' }}
                                                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(220,38,38,0.08)'; }}
                                                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                                            >
                                                Xóa tài khoản
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