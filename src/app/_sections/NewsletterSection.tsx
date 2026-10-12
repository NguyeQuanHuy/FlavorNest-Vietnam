"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

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
        // TODO (step 4): send the email to /api/newsletter once Resend + domain are set up
        await new Promise(r => setTimeout(r, 600))
        setLoading(false)
        setDone(true)
    }

    return (
        <section className="bg-[#F5EDE3] px-5 py-16 sm:py-20 lg:px-8" aria-labelledby="newsletter-heading">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-4xl rounded-[20px] border border-[rgba(75,46,26,0.09)] bg-white px-6 py-10 sm:px-12 sm:py-12"
            >
                <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
                    {/* Text */}
                    <div>
                        <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#D97706]">
                            <span className="h-px w-6 bg-[#D97706]" />
                            Newsletter
                        </div>
                        <h2 id="newsletter-heading" className="font-display text-3xl font-bold leading-tight text-[#2D1A0E] sm:text-4xl">
                            New recipes, straight to <em className="text-[#D97706]">your inbox</em>
                        </h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-[rgba(75,46,26,0.65)]">
                            Authentic Vietnamese recipes and kitchen stories. No spam, unsubscribe anytime.
                        </p>
                    </div>

                    {/* Form */}
                    <div>
                        {done ? (
                            <motion.p
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="rounded-xl bg-[#FAF6F0] px-5 py-4 text-sm font-medium leading-relaxed text-[#4B2E1A]"
                            >
                                Thanks for your interest! Our newsletter is launching soon. Check back here in a few weeks.
                            </motion.p>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
                                <label htmlFor="nl-email" className="sr-only">Email address</label>
                                <input
                                    id="nl-email"
                                    type="email"
                                    value={email}
                                    onChange={e => { setEmail(e.target.value); setError('') }}
                                    placeholder="your@email.com"
                                    autoComplete="email"
                                    className="w-full rounded-xl border border-[rgba(75,46,26,0.15)] bg-[#FAFAF7] px-4 py-3.5 text-sm text-[#2D1A0E] outline-none transition placeholder:text-[rgba(75,46,26,0.4)] focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/15"
                                />
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full rounded-xl bg-[#2D1A0E] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#D97706] disabled:opacity-60"
                                >
                                    {loading ? 'Subscribing…' : 'Subscribe'}
                                </button>
                                {error && <p className="text-xs text-red-600">{error}</p>}
                            </form>
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
