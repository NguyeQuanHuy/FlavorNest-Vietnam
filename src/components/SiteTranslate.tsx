'use client'

// ─────────────────────────────────────────────────────────────────────────────
//  src/components/SiteTranslate.tsx  (mounted once in app/layout.tsx)
//  Loads Google's translator only when a non-English language is chosen,
//  hides Google's own toolbar, and makes React tolerant of the DOM changes
//  the translator makes (prevents "removeChild" crashes on navigation).
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect } from 'react'
import { currentSiteLang } from '@/lib/site-translate'

declare global {
    interface Window {
        googleTranslateElementInit?: () => void
        google?: { translate?: { TranslateElement: new (opts: object, id: string) => unknown } }
        __fnDomPatched?: boolean
    }
}

function patchDomForTranslation() {
    if (window.__fnDomPatched) return
    window.__fnDomPatched = true
    const removeChild = Node.prototype.removeChild
    Node.prototype.removeChild = function <T extends Node>(this: Node, child: T): T {
        if (child.parentNode !== this) return child
        return removeChild.call(this, child) as T
    }
    const insertBefore = Node.prototype.insertBefore
    Node.prototype.insertBefore = function <T extends Node>(this: Node, node: T, ref: Node | null): T {
        if (ref && ref.parentNode !== this) return insertBefore.call(this, node, null) as T
        return insertBefore.call(this, node, ref) as T
    }
}

export default function SiteTranslate() {
    useEffect(() => {
        const lang = currentSiteLang()
        if (lang === 'en') return
        patchDomForTranslation()
        if (document.getElementById('google-translate-script')) return
        window.googleTranslateElementInit = () => {
            const TE = window.google?.translate?.TranslateElement
            if (TE) new TE({ pageLanguage: 'en', autoDisplay: false }, 'google_translate_element')
        }
        const s = document.createElement('script')
        s.id = 'google-translate-script'
        s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        s.async = true
        document.body.appendChild(s)
    }, [])

    return (
        <>
            <div id="google_translate_element" aria-hidden style={{ display: 'none' }} />
            <style>{`
                body { top: 0 !important; position: static !important; }
                .goog-te-banner-frame, iframe.skiptranslate, body > .skiptranslate,
                #goog-gt-tt, .goog-te-balloon-frame, .goog-tooltip, .goog-te-spinner-pos { display: none !important; }
                .goog-text-highlight { background: none !important; box-shadow: none !important; }
                .VIpgJd-ZVi9od-aZ2wEe-wOHMyf, .VIpgJd-ZVi9od-ORHb-OEVmcd, .VIpgJd-ZVi9od-xl07Ob-OEVmcd { display: none !important; }
                .VIpgJd-yAWNEb-VIpgJd-fmcmS-sn54Q { background: none !important; box-shadow: none !important; }
                font { background: transparent !important; box-shadow: none !important; }
            `}</style>
        </>
    )
}
