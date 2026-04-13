"use client"

import { useState } from 'react'
import { motion } from 'framer-motion' // <--- THÊM DÒNG NÀY ĐỂ HẾT LỖI 'motion is not defined'

export default function NewsletterSection() {
    const [email, setEmail] = useState('')
    const [done, setDone] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email.includes('@')) {
            setError('Please enter a valid email address.')
            return
        }
        setLoading(true)
        setError('')
        // Giả lập gọi API
        await new Promise(r => setTimeout(r, 900))
        setLoading(false)
        setDone(true)
    }

    return (
        <section className="py-24 px-5 lg:px-8 relative overflow-hidden" aria-labelledby="newsletter-heading">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#166534] via-[#1a5c35] to-[#4B2E1A]" />

            {/* Decorative rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/4 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] border border-white/6 rounded-full pointer-events-none" />
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#D97706]/18 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/4 rounded-full blur-3xl pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 max-w-2xl mx-auto text-center"
            >
                {/* Social proof avatars */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/18 text-white/80 text-xs px-4 py-2 rounded-full mb-6">
                    <span className="flex -space-x-1.5">
                        {['S', 'L', 'M', 'A'].map(l => (
                            <span key={l} className="w-5 h-5 rounded-full bg-[#D97706]/70 border border-white/30 flex items-center justify-center text-[8px] font-bold text-white">{l}</span>
                        ))}
                    </span>
                    15,000+ food lovers already in the nest
                </div>

                <div className="text-5xl mb-4">🪺</div>

                <h2 id="newsletter-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold leading-tight mb-4">
                    Get <em className="text-[#F59E0B]">10 Free</em><br />Vietnamese Recipes
                </h2>
                <p className="text-white/60 text-lg mb-8 max-w-sm mx-auto">
                    Join the nest. New recipes every Tuesday. Zero spam — just authentic flavors.
                </p>

                {/* Form */}
                {done ? (
                    <motion.p
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-green-300 font-bold text-lg"
                    >
                        ✓ Welcome to the nest! Your 10 recipes are on their way.
                    </motion.p>
                ) : (
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <label htmlFor="nl-email" className="sr-only">Email address</label>
                            <input
                                id="nl-email"
                                type="email"
                                value={email}
                                onChange={e => { setEmail(e.target.value); setError('') }}
                                placeholder="your@email.com"
                                autoComplete="email"
                                className="flex-1 bg-white/12 backdrop-blur-sm border border-white/20 text-white placeholder-white/42 px-5 py-4 rounded-2xl text-sm focus:outline-none focus:border-[#D97706] focus:bg-white/18 transition-all"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-[#D97706] hover:bg-[#B45309] disabled:opacity-60 text-white font-bold px-7 py-4 rounded-2xl text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(217,119,6,.4)] whitespace-nowrap"
                            >
                                {loading ? 'Joining…' : 'Join the Nest →'}
                            </button>
                        </div>
                        {error && (
                            <p className="text-red-300 text-xs mt-2">{error}</p>
                        )}
                    </form>
                )}

                <p className="text-white/28 text-xs mt-5">
                    ✓ 10 exclusive recipes &nbsp;·&nbsp; ✓ Weekly newsletter &nbsp;·&nbsp; ✓ Unsubscribe anytime
                </p>
            </motion.div>
        </section>
    )
}