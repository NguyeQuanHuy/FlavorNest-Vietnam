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
  <img src="/images/pho-icon.png" alt="Pho" style={{ width: 56, height: 56, objectFit: "contain", mixBlendMode: "multiply" }} />
)

const RiceNoodleIcon = () => (
  <img src="/images/bun-icon.png" alt="Rice Noodles" style={{ width: 56, height: 56, objectFit: "contain", mixBlendMode: "multiply" }} />
)

const BanhMiIcon = () => (
  <img src="/images/banh-mi-icon.png" alt="Banh Mi" style={{ width: 56, height: 56, objectFit: "contain", mixBlendMode: "multiply" }} />
)

const FreshRollIcon = () => (
  <img src="/images/goi-cuon-icon.png" alt="Fresh Rolls" style={{ width: 56, height: 56, objectFit: "contain", mixBlendMode: "multiply" }} />
)

const BrokenRiceIcon = () => (
  <img src="/images/com-tam-icon.png" alt="Broken Rice" style={{ width: 56, height: 56, objectFit: "contain", mixBlendMode: "multiply" }} />
)

const StreetFoodIcon = () => (
  <img src="/images/street-food.png" alt="Street Food" style={{ width: 56, height: 56, objectFit: 'contain', mixBlendMode: 'multiply' }} />
)

const SweetSoupIcon = () => (
  <img src="/images/che-icon.png" alt="Sweet Soup" style={{ width: 56, height: 56, objectFit: "contain", mixBlendMode: "multiply" }} />
)

const GrilledIcon = () => (
  <img src="/images/grilled-icon.png" alt="Grilled" style={{ width: 56, height: 56, objectFit: 'contain', mixBlendMode: 'multiply' }} />
)
const CATEGORIES: Category[] = [
  { href: '/categories/pho', label: 'Pho', count: '12 recipes', accent: '#D97706', glowColor: 'rgba(217,119,6,0.35)', icon: <PhoIcon /> },
  { href: '/categories/bun', label: 'Rice Noodles', count: '9 recipes', accent: '#D97706', glowColor: 'rgba(217,119,6,0.35)', icon: <RiceNoodleIcon /> },
  { href: '/categories/banhmi', label: 'Banh Mi', count: '7 recipes', accent: '#D97706', glowColor: 'rgba(217,119,6,0.35)', icon: <BanhMiIcon /> },
  { href: '/categories/rolls', label: 'Fresh Rolls', count: '6 recipes', accent: '#D97706', glowColor: 'rgba(217,119,6,0.35)', icon: <FreshRollIcon /> },
  { href: '/categories/com', label: 'Broken Rice', count: '8 recipes', accent: '#D97706', glowColor: 'rgba(217,119,6,0.35)', icon: <BrokenRiceIcon /> },
  { href: '/categories/street', label: 'Street Food', count: '14 recipes', accent: '#D97706', glowColor: 'rgba(217,119,6,0.35)', icon: <StreetFoodIcon /> },
  { href: '/categories/dessert', label: 'Sweet Soup', count: '10 recipes', accent: '#D97706', glowColor: 'rgba(217,119,6,0.35)', icon: <SweetSoupIcon /> },
  { href: '/categories/grilled', label: 'Grilled', count: '5 recipes', accent: '#D97706', glowColor: 'rgba(217,119,6,0.35)', icon: <GrilledIcon /> },
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
