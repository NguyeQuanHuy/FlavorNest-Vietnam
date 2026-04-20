'use client'

import { motion } from 'framer-motion'
import { CATEGORIES } from '@/data/mockRecipes'

interface CategoryFilterProps {
  active: string
  onChange: (slug: string) => void
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 8,
        overflowX: 'auto',
        paddingBottom: 2,
        scrollbarWidth: 'none',
      }}
    >
      {CATEGORIES.map((cat) => {
        const isActive = active === cat.slug
        return (
          <motion.button
            key={cat.slug}
            onClick={() => onChange(cat.slug)}
            whileTap={{ scale: 0.96 }}
            style={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '8px 18px',
              border: isActive ? '1.5px solid #D97706' : '1px solid #e8e0d6',
              background: isActive ? '#D97706' : '#fff',
              color: isActive ? '#fff' : '#4B2E1A',
              fontSize: 13,
              fontWeight: isActive ? 500 : 400,
              fontFamily: 'var(--font-dm-sans)',
              cursor: 'pointer',
              borderRadius: 2,
              transition: 'all 0.18s ease',
              whiteSpace: 'nowrap',
              letterSpacing: '0.02em',
            }}
          >
            <span style={{ fontSize: 11, opacity: 0.8 }}>{cat.icon}</span>
            {cat.label}
          </motion.button>
        )
      })}
    </div>
  )
}
