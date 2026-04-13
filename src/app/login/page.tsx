'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChefHat, Mail, Lock, Loader2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { loginWithCredentials } from '@/app/actions/auth'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isPending, startTransition] = useTransition()
    const router = useRouter()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        startTransition(async () => {
            try {
                const result = await loginWithCredentials(email, password)
                if (result.success) {
                    // Đăng nhập thành công, chuyển về trang chủ
                    router.push('/')
                    router.refresh()
                } else {
                    setError(result.message)
                }
            } catch (err) {
                setError("Đã có lỗi xảy ra. Vui lòng thử lại.")
            }
        })
    }

    return (
        <div className="min-h-screen relative flex items-center justify-center bg-[#1C1009] overflow-hidden">
            {/* Background Image Overlay */}
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
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-[#F5EDE3] focus:outline-none focus:border-[#D97706] transition-all"
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
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-[#F5EDE3] focus:outline-none focus:border-[#D97706] transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-[#D97706] hover:bg-[#B45309] text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-[#D97706]/20 flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                        {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Đăng Nhập Ngay"}
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-[#F5EDE3]/50 text-sm">
                        Chưa có tài khoản?{' '}
                        <Link href="/login" className="text-[#D97706] font-semibold hover:underline">
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