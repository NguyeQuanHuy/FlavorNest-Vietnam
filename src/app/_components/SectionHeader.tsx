import Link from 'next/link'

interface SectionHeaderProps {
    id?: string
    eyebrow: string
    heading: string
    headingHighlight: string
    subheading: string
    cta?: { label: string; href: string }
    align?: 'left' | 'center'
}

export default function SectionHeader({
    id,
    eyebrow,
    heading,
    headingHighlight,
    subheading,
    cta,
    align = 'left',
}: SectionHeaderProps) {
    return (
        <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-5 ${align === 'center' ? 'items-center text-center' : ''}`}>
            <div className={align === 'center' ? 'text-center' : ''}>
                <div className={`flex items-center gap-2 mb-2 ${align === 'center' ? 'justify-center' : ''}`}>
                    <div className="w-7 h-px bg-[#D97706]" />
                    <span className="text-[#D97706] text-[11px] font-bold uppercase tracking-[.18em]">{eyebrow}</span>
                </div>
                <h2 id={id} className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#4B2E1A] dark:text-[#F5EDE3] font-extrabold leading-tight">
                    {heading}{' '}
                    <em className="text-[#D97706]">{headingHighlight}</em>
                </h2>
            </div>

            <div className={`flex flex-col items-start gap-3 ${align === 'center' ? 'items-center' : ''}`}>
                <p className="text-[#4B2E1A]/55 dark:text-[#F5EDE3]/45 text-sm leading-relaxed max-w-xs">{subheading}</p>
                {cta && (
                    <Link
                        href={cta.href}
                        className="hidden sm:inline-flex items-center gap-2 border-2 border-[#D97706] text-[#D97706] hover:bg-[#D97706] hover:text-white font-bold px-7 py-2.5 rounded-2xl transition-all duration-300 text-sm hover:shadow-[0_8px_32px_rgba(217,119,6,.28)] hover:-translate-y-0.5"
                    >
                        {cta.label} →
                    </Link>
                )}
            </div>
        </div>
    )
}