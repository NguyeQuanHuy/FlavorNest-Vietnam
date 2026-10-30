"use client"

import { motion } from 'framer-motion'
import NewsletterForm from '@/components/NewsletterForm'

export default function NewsletterSection() {
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
                        <NewsletterForm source="home" />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
