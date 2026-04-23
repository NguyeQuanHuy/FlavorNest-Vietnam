'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface LogoProps {
    size?: number
    showText?: boolean
    href?: string
}

export default function Logo({ size = 40, showText = true, href = '/' }: LogoProps) {
    const content = (
        <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
            <div
                style={{
                    width: size,
                    height: size,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(217, 119, 6, 0.25)',
                    flexShrink: 0,
                }}
            >
                <Image
                    src="/logo.png"
                    alt="FlavorNest Vietnam"
                    width={size}
                    height={size}
                    priority
                    style={{ objectFit: 'cover' }}
                />
            </div>

            {showText && (
                <div className="flex flex-col leading-tight">
                    <span
                        style={{
                            fontFamily: 'var(--font-playfair), serif',
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: '#4B2E1A',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        FlavorNest
                    </span>
                    <span
                        style={{
                            fontFamily: 'var(--font-dm-sans), sans-serif',
                            fontSize: '0.7rem',
                            color: '#D97706',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            fontWeight: 500,
                        }}
                    >
                        Vietnam
                    </span>
                </div>
            )}
        </motion.div>
    )

    return href ? <Link href={href}>{content}</Link> : content
}