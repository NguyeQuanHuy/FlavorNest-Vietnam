'use client'

// ─────────────────────────────────────────────────────────────────────────────
//  src/components/LanguagePicker.tsx — language row for the mobile menu
//  Collapsed: 🌐 LANGUAGE ·········· Deutsch ›   Expanded: 2-column grid.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, ChevronDown, Check } from 'lucide-react'
import { SITE_LANGS, currentSiteLang, setSiteLang } from '@/lib/site-translate'

export default function LanguagePicker() {
    const [open, setOpen] = useState(false)
    const [lang, setLang] = useState('en')
    useEffect(() => setLang(currentSiteLang()), [])
    const current = SITE_LANGS.find(l => l.code === lang) ?? SITE_LANGS[0]

    const choose = (code: string) => {
        if (code === lang) { setOpen(false); return }
        setLang(code)
        setSiteLang(code)
    }

    return (
        <div className="notranslate" translate="no">
            <button
                type="button"
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
                aria-controls="fn-lang-list"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-4 transition-colors hover:bg-[rgba(217,119,6,0.06)]"
                style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', color: '#2D1A0E' }}
            >
                <Globe size={19} color="#D97706" strokeWidth={2} aria-hidden />
                <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Language</span>
                <span className="ml-auto flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[13px] font-semibold" style={{ background: 'rgba(217,119,6,0.1)', color: '#B45309' }}>
                    {current.native}
                </span>
                <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex">
                    <ChevronDown size={16} color="#D97706" aria-hidden />
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        id="fn-lang-list"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div role="listbox" aria-label="Choose language" className="grid grid-cols-2 gap-2 px-1 pb-3">
                            {SITE_LANGS.map(l => {
                                const on = l.code === lang
                                return (
                                    <button
                                        key={l.code}
                                        type="button"
                                        role="option"
                                        aria-selected={on}
                                        lang={l.code}
                                        onClick={() => choose(l.code)}
                                        className="flex items-center gap-2 rounded-2xl px-3.5 py-2.5 text-left transition-all active:scale-[0.98]"
                                        style={{
                                            background: on ? '#2D1A0E' : '#fff',
                                            border: `1px solid ${on ? '#2D1A0E' : 'rgba(75,46,26,0.1)'}`,
                                            boxShadow: on ? '0 8px 20px -12px rgba(45,26,14,0.6)' : 'none',
                                        }}
                                    >
                                        <span className="min-w-0 flex-1">
                                            <span className="block truncate text-[14.5px] font-bold" style={{ color: on ? '#fff' : '#2D1A0E' }}>{l.native}</span>
                                            <span className="block truncate text-[11.5px]" style={{ color: on ? 'rgba(245,237,227,0.65)' : 'rgba(75,46,26,0.5)' }}>{l.english}</span>
                                        </span>
                                        {on && <Check size={16} color="#F59E0B" strokeWidth={2.6} aria-hidden />}
                                    </button>
                                )
                            })}
                        </div>
                        <p className="px-2 pb-3 text-[11.5px] leading-snug" style={{ color: 'rgba(75,46,26,0.45)' }}>
                            Machine translation by Google — loaded only when you pick a language.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
            <div style={{ height: 1, background: 'rgba(75,46,26,0.06)' }} />
        </div>
    )
}
