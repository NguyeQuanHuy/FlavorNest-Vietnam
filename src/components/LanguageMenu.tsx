'use client'

// ─────────────────────────────────────────────────────────────────────────────
//  src/components/LanguageMenu.tsx — desktop 🌐 button + dropdown (navbar)
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, ChevronDown } from 'lucide-react'
import { SITE_LANGS, currentSiteLang, setSiteLang } from '@/lib/site-translate'
import { LangGrid } from './LanguagePicker'

export default function LanguageMenu() {
    const [open, setOpen] = useState(false)
    const [lang, setLang] = useState('en')
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => setLang(currentSiteLang()), [])

    useEffect(() => {
        if (!open) return
        const onDown = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false) }
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
        document.addEventListener('mousedown', onDown)
        window.addEventListener('keydown', onKey)
        return () => { document.removeEventListener('mousedown', onDown); window.removeEventListener('keydown', onKey) }
    }, [open])

    const choose = (code: string) => {
        if (code === lang) { setOpen(false); return }
        setLang(code)
        setSiteLang(code)
    }
    const short = (SITE_LANGS.find(l => l.code === lang)?.code ?? 'en').split('-')[0].toUpperCase()

    return (
        <div ref={ref} className="notranslate relative hidden lg:block" translate="no">
            <button
                type="button"
                onClick={() => setOpen(o => !o)}
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label="Change language"
                title="Change language"
                className="flex h-10 items-center gap-1.5 rounded-[10px] px-2.5 transition-colors hover:bg-[rgba(245,237,227,0.18)]"
                style={{ border: '1px solid rgba(245,237,227,0.25)', background: 'rgba(245,237,227,0.1)', color: '#F5EDE3' }}
            >
                <Globe size={16} strokeWidth={2} aria-hidden />
                <span className="text-[12px] font-bold" style={{ letterSpacing: '0.06em' }}>{short}</span>
                <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex opacity-70">
                    <ChevronDown size={13} aria-hidden />
                </motion.span>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute right-0 top-full z-50 mt-3 w-[340px] origin-top-right rounded-2xl border border-[rgba(75,46,26,0.1)] p-3"
                        style={{ background: '#FBF8F4', boxShadow: '0 18px 48px rgba(45,26,14,0.22)', fontFamily: 'var(--font-dm-sans), sans-serif' }}
                    >
                        <p className="px-1 pb-2.5 pt-1 text-[10.5px] font-bold uppercase" style={{ color: 'rgba(75,46,26,0.5)', letterSpacing: '0.12em' }}>Read FlavorNest in</p>
                        <LangGrid lang={lang} onChoose={choose} className="" />
                        <p className="mt-3 border-t px-1 pt-2.5 text-[11.5px] leading-snug" style={{ borderColor: 'rgba(75,46,26,0.08)', color: 'rgba(75,46,26,0.45)' }}>
                            Machine translation by Google — loaded only when you pick a language.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
