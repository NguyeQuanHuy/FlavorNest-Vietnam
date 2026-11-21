'use client'
// ─────────────────────────────────────────────────────────────────────────────
//  app/_sections/SupermarketSwaps.tsx
//  Homepage proof of the brand promise: "Real Vietnamese food, from your supermarket."
//  Swaps mirror the substitute data on /ingredients (keep the two in sync).
// ─────────────────────────────────────────────────────────────────────────────

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'

interface Swap {
  missing: string
  missingVi: string
  use: string
  note: string
  usedIn: string
}

const SWAPS: Swap[] = [
  {
    missing: 'Thai basil',
    missingVi: 'Húng quế',
    use: 'Italian basil',
    note: 'Milder, with less anise — add a little more at the end.',
    usedIn: 'Phở, bún bò',
  },
  {
    missing: 'Galangal',
    missingVi: 'Riềng',
    use: 'Fresh ginger',
    note: 'Same job in the pot, a different flavour — still delicious.',
    usedIn: 'Chả cá, braises',
  },
  {
    missing: 'Garlic chives',
    missingVi: 'Hẹ',
    use: 'Chives + a little garlic',
    note: 'Regular chives with a small amount of minced garlic.',
    usedIn: 'Bánh canh hẹ, gỏi cuốn',
  },
  {
    missing: 'Rock sugar',
    missingVi: 'Đường phèn',
    use: 'White sugar, 75%',
    note: 'Rock sugar is less sweet, so use three quarters of the amount.',
    usedIn: 'Phở broth, braises',
  },
]

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const serif = { fontFamily: "'Playfair Display', Georgia, serif" }

export default function SupermarketSwaps() {
  return (
    <section
      aria-labelledby="swaps-heading"
      className="px-5 py-20 sm:px-6 lg:py-24"
      style={{ background: '#FAF7F2', fontFamily: "'DM Sans', system-ui, sans-serif" }}
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mb-10 flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-xl">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-px w-8" style={{ background: '#D97706' }} />
              <span className="text-[11px] font-bold uppercase" style={{ color: '#D97706', letterSpacing: '0.18em' }}>
                Supermarket swaps
              </span>
            </div>
            <h2 id="swaps-heading" className="font-bold leading-[1.05]" style={{ ...serif, fontSize: 'clamp(2rem, 4.4vw, 3.2rem)', color: '#2D1A0E' }}>
              Can&apos;t find it? <em style={{ color: '#D97706' }}>Swap it.</em>
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed" style={{ color: 'rgba(75,46,26,0.62)' }}>
              No Asian grocery nearby? These everyday supermarket swaps keep the dish tasting Vietnamese.
            </p>
          </div>
          <Link
            href="/ingredients"
            className="group hidden items-center gap-1.5 text-[14px] font-semibold transition-colors hover:text-[#B45309] sm:inline-flex"
            style={{ color: '#2D1A0E', textDecoration: 'none' }}
          >
            All ingredient swaps <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Cards: swipe on phones, grid from tablet up */}
        <ul className="-mx-5 flex snap-x snap-mandatory scroll-pl-5 gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
          {SWAPS.map((s, i) => (
            <motion.li
              key={s.missing}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
              className="flex w-[78%] flex-shrink-0 snap-start flex-col rounded-2xl border bg-white p-5 sm:w-auto sm:p-6"
              style={{ borderColor: 'rgba(75,46,26,0.08)', boxShadow: '0 1px 2px rgba(45,26,14,0.04)' }}
            >
              {/* Can't find */}
              <p className="text-[11px] font-semibold uppercase" style={{ color: 'rgba(75,46,26,0.42)', letterSpacing: '0.12em' }}>
                Can&apos;t find
              </p>
              <p className="mt-1 text-[17px] font-semibold" style={{ color: 'rgba(45,26,14,0.55)' }}>
                {s.missing} <span className="text-[13px] font-normal italic" style={{ ...serif, color: 'rgba(75,46,26,0.45)' }}>· {s.missingVi}</span>
              </p>

              <span
                aria-hidden
                className="my-3 flex h-7 w-7 items-center justify-center rounded-full"
                style={{ background: '#FEF3C7', color: '#B45309' }}
              >
                <ArrowDown size={15} strokeWidth={2.4} />
              </span>

              {/* Use */}
              <p className="text-[11px] font-semibold uppercase" style={{ color: '#B45309', letterSpacing: '0.12em' }}>
                Use
              </p>
              <p className="mt-1 text-[21px] font-bold leading-snug" style={{ ...serif, color: '#2D1A0E' }}>
                {s.use}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'rgba(75,46,26,0.65)' }}>
                {s.note}
              </p>
              <p className="mt-auto pt-4 text-[12.5px]" style={{ color: 'rgba(75,46,26,0.5)' }}>
                Used in: <span style={{ color: '#4B2E1A', fontWeight: 600 }}>{s.usedIn}</span>
              </p>
            </motion.li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="/ingredients"
            className="inline-flex items-center gap-2 rounded-full border bg-white px-6 py-3 text-[14px] font-semibold"
            style={{ borderColor: 'rgba(75,46,26,0.18)', color: '#2D1A0E', textDecoration: 'none' }}
          >
            All ingredient swaps <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
