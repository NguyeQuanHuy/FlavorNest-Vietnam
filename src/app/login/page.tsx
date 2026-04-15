'use client'

/**
 * FlavorNest Vietnam — Login Page
 * src/app/login/page.tsx
 *
 * Google Sign In dùng Server Action tách riêng để tránh conflict với 'use client'
 */

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ChefHat, Mail, Lock, Loader2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { loginWithCredentials } from '@/app/actions/auth'
import { googleSignIn } from '@/app/actions/google-auth'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isPending, startTransition] = useTransition()
    const [isGooglePending, setIsGooglePending] = useState(false)
    const router = useRouter()

    // ── Email/Password login ──────────────────────────────────────────────────
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        startTransition(async () => {
            try {
                const result = await loginWithCredentials(email, password)
                if (result.success) {
                    router.push('/?welcome=1')
                    router.refresh()
                } else {
                    setError(result.message)
                }
            } catch {
                setError('Đã có lỗi xảy ra. Vui lòng thử lại.')
            }
        })
    }

    // ── Google login ──────────────────────────────────────────────────────────
    const handleGoogle = async () => {
        setIsGooglePending(true)
        try {
            await googleSignIn()
        } catch {
            // next-auth redirects — error here is expected, ignore it
        }
    }

    return (
        <div className="min-h-screen relative flex items-center justify-center bg-[#1C1009] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?q=80&w=2000"
                    className="w-full h-full object-cover opacity-30"
                    alt="FlavorNest Background"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1C1009]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full max-w-md p-8 mx-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl"
            >
                {/* Logo */}
                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 bg-[#D97706] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#D97706]/20">
                        <ChefHat className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-[#F5EDE3]">FlavorNest</h1>
                    <p className="text-[#D97706] italic">Vietnam Gourmet</p>
                </div>

                {/* ── Google Button — shown FIRST for better UX ── */}
                <motion.button
                    onClick={handleGoogle}
                    disabled={isGooglePending}
                    whileTap={{ scale: 0.97 }}
                    className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 font-semibold py-3.5 rounded-2xl transition-all hover:bg-gray-50 shadow-md mb-6 disabled:opacity-70"
                >
                    {isGooglePending ? (
                        <Loader2 className="w-5 h-5 animate-spin text-gray-500" />
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                    )}
                    {isGooglePending ? 'Đang chuyển hướng...' : 'Tiếp tục với Google'}
                </motion.button>

                {/* Divider */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-white/30 text-xs font-medium">hoặc đăng nhập bằng email</span>
                    <div className="h-px flex-1 bg-white/10" />
                </div>

                {/* ── Email / Password form ── */}
                <form onSubmit={handleLogin} className="space-y-5">
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-3 text-sm text-red-200 bg-red-500/20 border border-red-500/50 rounded-xl text-center"
                        >
                            {error}
                        </motion.div>
                    )}

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-[#F5EDE3]/70 ml-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F5EDE3]/40" />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-[#F5EDE3] placeholder-white/20 focus:outline-none focus:border-[#D97706] transition-all"
                                placeholder="chef@flavornest.vn"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-[#F5EDE3]/70 ml-1">Mật khẩu</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F5EDE3]/40" />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-[#F5EDE3] placeholder-white/20 focus:outline-none focus:border-[#D97706] transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-[#D97706] hover:bg-[#B45309] text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-[#D97706]/20 flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                        {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Đăng Nhập Ngay'}
                    </button>
                </form>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-[#F5EDE3]/50 text-sm">
                        Chưa có tài khoản?{' '}
                        <Link href="/auth/signup" className="text-[#D97706] font-semibold hover:underline">
                            Đăng ký miễn phí
                        </Link>
                    </p>
                </div>

                <Link href="/" className="flex items-center justify-center gap-2 mt-6 text-[#F5EDE3]/30 hover:text-[#F5EDE3] transition-colors text-sm">
                    <ArrowLeft className="w-4 h-4" /> Quay lại trang chủ
                </Link>
            </motion.div>
        </div>
    )
}
