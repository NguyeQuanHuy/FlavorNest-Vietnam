'use client'
import Link from 'next/link'

interface Category {
  href: string
  label: string
  count: string
  accent: string
  glowColor: string
  icon: React.ReactNode
}

const PhoIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <ellipse cx="24" cy="32" rx="16" ry="8" fill="#D97706" opacity="0.18" />
    <path d="M8 26c0 8 32 8 32 0" stroke="#D97706" strokeWidth="1.5" fill="none" />
    <path d="M10 26c1-8 6-14 14-14s13 6 14 14" fill="#4B2E1A" opacity="0.6" />
    <path d="M10 26c1-8 6-14 14-14s13 6 14 14" stroke="#D97706" strokeWidth="1.5" fill="none" />
    <path d="M16 20c2-2 4-3 8-3s6 1 8 3" stroke="#F5EDE3" strokeWidth="1" opacity="0.5" fill="none" />
    <circle cx="18" cy="24" r="2" fill="#D97706" opacity="0.8" />
    <circle cx="24" cy="26" r="1.5" fill="#F5EDE3" opacity="0.6" />
    <circle cx="30" cy="24" r="2" fill="#D97706" opacity="0.8" />
    <path d="M20 14c0-4 2-6 2-6s-1 3 0 6" stroke="#4B2E1A" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M24 12c0-4 2-5 2-5s-1 2 0 5" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M28 14c0-4 2-6 2-6s-1 3 0 6" stroke="#4B2E1A" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const RiceNoodleIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <path d="M16 8 Q20 20 16 36" stroke="#F5EDE3" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9" />
    <path d="M24 6 Q28 20 24 38" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M32 8 Q28 20 32 36" stroke="#F5EDE3" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9" />
    <path d="M13 22 Q24 18 35 22" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
    <path d="M12 28 Q24 24 36 28" stroke="#F5EDE3" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />
    <ellipse cx="24" cy="38" rx="10" ry="3" fill="#D97706" opacity="0.2" />
  </svg>
)

const BanhMiIcon = () => (
  <img src="/images/banh-mi-icon.png" alt="Banh Mi" style={{ width: 56, height: 56, objectFit: "contain" }} />
)

const FreshRollIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <rect x="10" y="16" width="28" height="16" rx="8" fill="#F5EDE3" opacity="0.15" stroke="#F5EDE3" strokeWidth="1.5" />
    <path d="M18 20 Q24 18 30 20" stroke="#166534" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M16 24 Q24 22 32 24" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M18 28 Q24 26 30 28" stroke="#F5EDE3" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
    <ellipse cx="10" cy="24" rx="4" ry="8" fill="#F5EDE3" opacity="0.12" stroke="#F5EDE3" strokeWidth="1.5" />
    <ellipse cx="38" cy="24" rx="4" ry="8" fill="#F5EDE3" opacity="0.12" stroke="#F5EDE3" strokeWidth="1.5" />
    <circle cx="24" cy="24" r="2" fill="#D97706" opacity="0.6" />
  </svg>
)

const BrokenRiceIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <path d="M8 30 Q10 22 24 22 Q38 22 40 30 L38 36 Q24 40 10 36Z" fill="#D97706" opacity="0.2" />
    <path d="M8 30 Q10 22 24 22 Q38 22 40 30" stroke="#D97706" strokeWidth="1.5" fill="none" />
    <path d="M10 30 Q24 34 38 30" stroke="#F5EDE3" strokeWidth="1" fill="none" opacity="0.4" />
    <ellipse cx="18" cy="26" rx="2" ry="1" fill="#F5EDE3" opacity="0.7" transform="rotate(-20 18 26)" />
    <ellipse cx="24" cy="25" rx="2" ry="1" fill="#F5EDE3" opacity="0.7" transform="rotate(10 24 25)" />
    <ellipse cx="30" cy="26" rx="2" ry="1" fill="#F5EDE3" opacity="0.7" transform="rotate(-15 30 26)" />
    <ellipse cx="21" cy="28" rx="1.5" ry="1" fill="#F5EDE3" opacity="0.5" transform="rotate(5 21 28)" />
    <ellipse cx="27" cy="28" rx="1.5" ry="1" fill="#F5EDE3" opacity="0.5" transform="rotate(-10 27 28)" />
    <path d="M20 18 Q22 12 24 10 Q26 12 28 18" stroke="#166534" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M24 10 Q24 14 23 18" stroke="#166534" strokeWidth="1" fill="none" opacity="0.6" />
  </svg>
)

const StreetFoodIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <path d="M22 8 L24 6 L26 8" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <rect x="16" y="8" width="16" height="6" rx="2" fill="#D97706" opacity="0.8" />
    <path d="M14 14 L10 38 L38 38 L34 14Z" fill="#4B2E1A" opacity="0.7" />
    <path d="M14 14 L10 38 L38 38 L34 14Z" stroke="#D97706" strokeWidth="1.5" fill="none" />
    <path d="M12 22 L36 22" stroke="#D97706" strokeWidth="1" opacity="0.5" />
    <path d="M11 30 L37 30" stroke="#D97706" strokeWidth="1" opacity="0.5" />
    <circle cx="20" cy="26" r="2" fill="#F5EDE3" opacity="0.6" />
    <circle cx="28" cy="26" r="2" fill="#F5EDE3" opacity="0.6" />
    <circle cx="24" cy="34" r="1.5" fill="#D97706" opacity="0.8" />
  </svg>
)

const SweetSoupIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <path d="M12 20 Q10 34 24 36 Q38 34 36 20Z" fill="#D97706" opacity="0.2" />
    <path d="M12 20 Q10 34 24 36 Q38 34 36 20" stroke="#D97706" strokeWidth="1.5" fill="none" />
    <path d="M10 20 L38 20" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 20 L14 14 L18 14" stroke="#F5EDE3" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M24 20 L24 12" stroke="#F5EDE3" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M32 20 L34 14 L30 14" stroke="#F5EDE3" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <circle cx="20" cy="28" r="2.5" fill="#F5EDE3" opacity="0.5" />
    <circle cx="28" cy="30" r="2" fill="#D97706" opacity="0.6" />
    <circle cx="24" cy="26" r="1.5" fill="#F5EDE3" opacity="0.4" />
    <path d="M14 36 Q24 40 34 36" stroke="#D97706" strokeWidth="1" fill="none" opacity="0.4" />
  </svg>
)

const GrilledIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <path d="M14 28 Q16 20 24 18 Q32 20 34 28 L32 34 L16 34Z" fill="#D97706" opacity="0.2" />
    <path d="M10 28 L38 28" stroke="#4B2E1A" strokeWidth="3" strokeLinecap="round" />
    <path d="M14 28 L16 34 L32 34 L34 28" stroke="#D97706" strokeWidth="1.5" fill="none" />
    <path d="M16 22 Q18 24 20 22 Q22 20 24 22 Q26 24 28 22 Q30 20 32 22" stroke="#F5EDE3" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M18 26 Q20 28 22 26 Q24 24 26 26 Q28 28 30 26" stroke="#F5EDE3" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
    <path d="M20 10 Q18 14 20 16 Q22 14 21 10Z" fill="#D97706" opacity="0.9" />
    <path d="M26 8 Q24 13 26 16 Q28 13 27 8Z" fill="#ef4444" opacity="0.8" />
    <path d="M32 10 Q30 14 32 16 Q34 14 33 10Z" fill="#D97706" opacity="0.9" />
  </svg>
)

const CATEGORIES: Category[] = [
  { href: '/categories/pho', label: 'Pho', count: '12 recipes', accent: '#D97706', glowColor: 'rgba(217,119,6,0.35)', icon: <PhoIcon /> },
  { href: '/categories/bun', label: 'Rice Noodles', count: '9 recipes', accent: '#F5EDE3', glowColor: 'rgba(245,237,227,0.2)', icon: <RiceNoodleIcon /> },
  { href: '/categories/banhmi', label: 'Banh Mi', count: '7 recipes', accent: '#D97706', glowColor: 'rgba(217,119,6,0.35)', icon: <BanhMiIcon /> },
  { href: '/categories/rolls', label: 'Fresh Rolls', count: '6 recipes', accent: '#166534', glowColor: 'rgba(22,101,52,0.35)', icon: <FreshRollIcon /> },
  { href: '/categories/com', label: 'Broken Rice', count: '8 recipes', accent: '#D97706', glowColor: 'rgba(217,119,6,0.35)', icon: <BrokenRiceIcon /> },
  { href: '/categories/street', label: 'Street Food', count: '14 recipes', accent: '#F5EDE3', glowColor: 'rgba(245,237,227,0.2)', icon: <StreetFoodIcon /> },
  { href: '/categories/dessert', label: 'Sweet Soup', count: '10 recipes', accent: '#D97706', glowColor: 'rgba(217,119,6,0.35)', icon: <SweetSoupIcon /> },
  { href: '/categories/grilled', label: 'Grilled', count: '5 recipes', accent: '#ef4444', glowColor: 'rgba(239,68,68,0.35)', icon: <GrilledIcon /> },
]

export default function CategoriesSection() {
  return (
    <section className="py-24 bg-[#2A1508] relative overflow-hidden" aria-labelledby="categories-heading">
      <div
        className="absolute inset-0 opacity-[.035] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg,#F5EDE3 0,#F5EDE3 1px,transparent 0,transparent 50%)', backgroundSize: '18px 18px' }}
      />
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#D97706]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#166534]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-7 h-px bg-[#D97706]" />
            <span className="text-[#D97706] text-[11px] font-bold uppercase tracking-[.18em]">Browse By Type</span>
            <div className="w-7 h-px bg-[#D97706]" />
          </div>
          <h2 id="categories-heading" className="font-display text-4xl sm:text-5xl text-white font-bold">
            Popular <em className="text-[#D97706]">Categories</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {CATEGORIES.map((cat) => (
            <div key={cat.href}>
              <Link
                href={cat.href}
                className="group flex flex-col items-center text-center rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.border = `1px solid ${cat.accent}55`
                    ; (e.currentTarget as HTMLElement).style.background = `rgba(255,255,255,0.07)`
                    ; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${cat.glowColor}`
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.08)'
                    ; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'
                    ; (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                <div className="mb-3">
                  {cat.icon}
                </div>
                <div className="text-white font-bold text-sm leading-tight mb-1">{cat.label}</div>
                <div className="text-white/38 text-[10px]">{cat.count}</div>
                <div
                  className="mt-2.5 h-0.5 w-0 group-hover:w-8 rounded-full transition-all duration-350 mx-auto"
                  style={{ backgroundColor: cat.accent, opacity: 0.7 }}
                />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/recipes"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-[#D97706] text-white/65 hover:text-[#D97706] text-sm font-semibold px-7 py-3 rounded-2xl transition-all duration-300"
          >
            Browse All Recipes →
          </Link>
        </div>
      </div>
    </section>
  )
}
