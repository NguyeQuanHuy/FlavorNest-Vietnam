'use client';

// Region map for /recipes/north | central | south
// 34 provincial units (from 1 July 2025) — shapes from src/data/vietnam-provinces.ts.
// Hover a province → card with its signature dishes. Click / tap → card stays pinned (links clickable).

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PROVINCES, CITY_POINTS, ISLANDS, type MapRegion, type ProvinceShape } from '@/data/vietnam-provinces';
import { PROVINCE_SPECIALTIES } from '@/data/province-specialties';

type Region = MapRegion;

interface Props {
    region: Region;
    /** Rendered width in px (height follows the map's aspect ratio). */
    size?: number;
    /** 'hero' = interactive editorial map, 'compact' = small decorative map */
    variant?: 'hero' | 'compact';
}

type City = { key: string; label: string; main?: boolean; anchor?: 'start' | 'end' };

// Map frame (SVG user units of vietnam-provinces.ts)
const VB = { x: 0, y: 0, w: 700, h: 995 };

const META: Record<Region, {
    label: string; short: string; sub: string; href: string;
    box: [number, number, number, number]; // x0, y0, x1, y1 of region
    cities: City[];
}> = {
    north: {
        label: 'Northern Vietnam', short: 'North', sub: 'Red River Delta & Highlands', href: '/recipes/north',
        box: [9, 7, 383, 235],
        cities: [
            { key: 'Hanoi', label: 'Hà Nội', main: true, anchor: 'end' },
            { key: 'Hạ Long Bay', label: 'Hạ Long' },
            { key: 'Sapa', label: 'Sa Pa', anchor: 'end' },
        ],
    },
    central: {
        label: 'Central Vietnam', short: 'Central', sub: 'Imperial Coast & Highlands', href: '/recipes/central',
        box: [119, 187, 473, 805],
        cities: [
            { key: 'Huế', label: 'Huế', main: true, anchor: 'end' },
            { key: 'Hội An', label: 'Hội An' },
            { key: 'Quy Nhơn', label: 'Quy Nhơn' },
        ],
    },
    south: {
        label: 'Southern Vietnam', short: 'South', sub: 'Saigon & the Mekong Delta', href: '/recipes/south',
        box: [117, 705, 441, 986],
        cities: [
            { key: 'Ho Chi Minh City', label: 'Sài Gòn', main: true },
            { key: 'Mekong Delta', label: 'Cần Thơ', anchor: 'end' },
            { key: 'Phú Quốc', label: 'Phú Quốc', anchor: 'end' },
            { key: 'Đà Lạt', label: 'Đà Lạt' },
        ],
    },
};

const REGIONS: Region[] = ['north', 'central', 'south'];

// Latitude lines — equirectangular: y = 163.1 + (21.028 − lat) × 66
const GRATICULE = [{ lat: '20°N', y: 231 }, { lat: '15°N', y: 561 }, { lat: '10°N', y: 891 }];

const EASE = [0.22, 1, 0.36, 1] as const;
const CARD_W = 248;

export default function VietnamMap({ region, size = 200, variant = 'hero' }: Props) {
    const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '');
    const wrapRef = useRef<HTMLDivElement>(null);
    const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [hovered, setHovered] = useState<string | null>(null);
    const [pinned, setPinned] = useState<string | null>(null);
    const [boxW, setBoxW] = useState(size);
    const [view, setView] = useState({ left: 0, vw: 1440 });

    const isHero = variant === 'hero';
    const meta = META[region];
    const height = Math.round(size * (VB.h / VB.w));

    const active = useMemo(() => PROVINCES.filter(p => p.region === region), [region]);
    const inactive = useMemo(() => PROVINCES.filter(p => p.region !== region), [region]);

    const shownCode = hovered ?? pinned;
    const shown: ProvinceShape | null = PROVINCES.find(p => p.code === shownCode) ?? null;

    // Escape closes a pinned card
    useEffect(() => {
        if (!pinned) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setPinned(null); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [pinned]);

    useEffect(() => () => { if (leaveTimer.current) clearTimeout(leaveTimer.current); }, []);

    const measure = () => {
        const r = wrapRef.current?.getBoundingClientRect();
        if (!r) return;
        setBoxW(r.width);
        setView({ left: r.left, vw: window.innerWidth });
    };
    const enter = (code: string) => {
        if (!isHero) return;
        if (leaveTimer.current) clearTimeout(leaveTimer.current);
        measure();
        setHovered(code);
    };
    const leave = () => {
        if (leaveTimer.current) clearTimeout(leaveTimer.current);
        leaveTimer.current = setTimeout(() => setHovered(null), 140);
    };
    const pin = (code: string) => {
        if (!isHero) return;
        measure();
        setPinned(prev => (prev === code ? null : code));
        setHovered(null);
    };

    const [bx0, by0, bx1, by1] = meta.box;
    const cx = (bx0 + bx1) / 2;
    const cy = (by0 + by1) / 2;
    const ringR = Math.max(bx1 - bx0, by1 - by0) / 2 + 26;

    // Card anchor (px inside the map box)
    const scale = boxW / VB.w;
    const card = shown && (() => {
        const px = (shown.center.x - VB.x) * scale;
        const py = (shown.center.y - VB.y) * scale;
        // prefer the side with more room on screen, then keep the card inside the viewport
        const roomRight = view.vw - (view.left + px);
        const onRight = roomRight > CARD_W + 40 || roomRight > view.left + px;
        let left = onRight ? px + 18 : px - 18 - CARD_W;
        left = Math.max(12 - view.left, Math.min(left, view.vw - 12 - view.left - CARD_W));
        const top = Math.max(-20, Math.min(py - 40, boxW * (VB.h / VB.w) - 220));
        return { left, top, side: onRight ? 'right' : 'left' };
    })();

    const fillFor = (p: ProvinceShape, isActive: boolean) => {
        const on = p.code === shownCode;
        if (isActive) return on ? '#FBBF24' : `url(#${uid}-g)`;
        return on ? '#D7BC97' : '#EADCC8';
    };

    const dishes = shown ? PROVINCE_SPECIALTIES[shown.code] ?? [] : [];
    const merged = shown && shown.merged.length > 1 ? shown.merged : null;
    const isPinned = shown && pinned === shown.code && !hovered;

    return (
        <div style={{ width: size, maxWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isHero ? 18 : 0 }}>
            <style>{`
                .fnm-p { transition: fill .3s ease; outline: none; }
                .fnm-hero .fnm-p { cursor: pointer; }
                .fnm-in { stroke: #FFFBF4; stroke-width: .8; }
                .fnm-on { stroke: #FFF4E2; stroke-width: .7; }
                .fnm-pill { flex: 1; text-align: center; padding: 9px 0; border-radius: 100px; font-size: 12px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; text-decoration: none; transition: background .25s, color .25s; color: rgba(75,46,26,.55); }
                .fnm-pill:hover { color: #2D1A0E; background: rgba(217,119,6,.08); }
                .fnm-pill[aria-current="page"] { background: #D97706; color: #fff; box-shadow: 0 6px 16px rgba(217,119,6,.35); }
                .fnm-dish { display: flex; align-items: baseline; gap: 8px; padding: 6px 8px; margin: 0 -8px; border-radius: 8px; text-decoration: none; color: inherit; transition: background .2s; }
                a.fnm-dish:hover { background: rgba(217,119,6,.10); }
                a.fnm-dish:hover .fnm-dish-vi { color: #B45309; }
                .fn-region-hero { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 56px; align-items: center; }
                @media (max-width: 900px) {
                    .fn-region-hero { grid-template-columns: 1fr; gap: 40px; }
                    .fn-region-hero-map > div { width: min(300px, 84vw) !important; }
                }
            `}</style>

            {/* ── Map ── */}
            <motion.div
                ref={wrapRef}
                className={isHero ? 'fnm-hero' : undefined}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: EASE }}
                style={{ position: 'relative', width: '100%', aspectRatio: `${VB.w} / ${VB.h}`, zIndex: shown ? 20 : undefined }}
            >
                <svg
                    viewBox={`${VB.x} ${VB.y} ${VB.w} ${VB.h}`}
                    width={size} height={height}
                    role="img"
                    aria-label={`Map of Vietnam highlighting ${meta.label}`}
                    style={{ position: 'relative', width: '100%', height: '100%', overflow: 'visible', display: 'block' }}
                    onClick={e => { if (e.target === e.currentTarget) setPinned(null); }}
                >
                    <defs>
                        <clipPath id={`${uid}-clip`}>
                            <rect x={VB.x - 40} y={VB.y - 20} width={VB.w + 60} height={VB.h + 40} />
                        </clipPath>
                        <linearGradient id={`${uid}-g`} gradientUnits="userSpaceOnUse" x1={bx0} y1={by0} x2={bx1} y2={by1}>
                            <stop offset="0%" stopColor="#F59E0B" />
                            <stop offset="55%" stopColor="#D97706" />
                            <stop offset="100%" stopColor="#B45309" />
                        </linearGradient>
                        <radialGradient id={`${uid}-glow`}>
                            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.30" />
                            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                        </radialGradient>
                        <filter id={`${uid}-lift`} x="-30%" y="-30%" width="160%" height="160%">
                            <feMorphology in="SourceAlpha" operator="dilate" radius="1.8" result="dil" />
                            <feFlood floodColor="#4B2E1A" floodOpacity="0.85" />
                            <feComposite in2="dil" operator="in" result="outline" />
                            <feGaussianBlur in="SourceAlpha" stdDeviation="9" result="blur" />
                            <feOffset in="blur" dy="10" result="ob" />
                            <feFlood floodColor="#92400E" floodOpacity="0.38" />
                            <feComposite in2="ob" operator="in" result="shadow" />
                            <feMerge>
                                <feMergeNode in="shadow" />
                                <feMergeNode in="outline" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <filter id={`${uid}-soft`} x="-10%" y="-10%" width="120%" height="120%">
                            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#4B2E1A" floodOpacity="0.08" />
                        </filter>
                    </defs>

                    {/* Graticule */}
                    {isHero && GRATICULE.map(g => (
                        <g key={g.lat} aria-hidden style={{ pointerEvents: 'none' }}>
                            <line x1={VB.x} x2={VB.x + VB.w} y1={g.y} y2={g.y} stroke="rgba(75,46,26,0.10)" strokeWidth={0.8} strokeDasharray="2 7" />
                            <text x={VB.x + 4} y={g.y - 6} fontSize={15} fontWeight={600} letterSpacing="0.12em" fill="rgba(75,46,26,0.32)" fontFamily="'DM Sans', system-ui, sans-serif">{g.lat}</text>
                        </g>
                    ))}

                    {isHero && <circle aria-hidden cx={cx} cy={cy} r={ringR * 1.6} fill={`url(#${uid}-glow)`} style={{ pointerEvents: 'none' }} />}

                    {/* Rotating focus ring */}
                    {isHero && (
                        <motion.circle
                            cx={cx} cy={cy} r={ringR}
                            fill="none" stroke="#D97706" strokeOpacity={0.28} strokeWidth={1.2} strokeDasharray="3 9"
                            style={{ pointerEvents: 'none' }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1, rotate: 360 }}
                            transition={{ opacity: { duration: 1, delay: 0.5 }, scale: { duration: 1.2, delay: 0.5, ease: EASE }, rotate: { duration: 90, repeat: Infinity, ease: 'linear' } }}
                        />
                    )}

                    <g clipPath={`url(#${uid}-clip)`}>
                        {/* Other regions */}
                        <g filter={`url(#${uid}-soft)`}>
                            {inactive.map(p => (
                                <path key={p.code} d={p.d} className="fnm-p fnm-in" fill={fillFor(p, false)}
                                    tabIndex={isHero ? 0 : -1} aria-label={isHero ? p.name : undefined}
                                    onMouseEnter={() => enter(p.code)} onMouseLeave={leave}
                                    onFocus={() => enter(p.code)} onBlur={leave}
                                    onClick={() => pin(p.code)}
                                    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pin(p.code); } }} />
                            ))}
                        </g>

                        {/* Active region */}
                        <motion.g
                            filter={`url(#${uid}-lift)`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: -4 }}
                            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
                        >
                            {active.map(p => (
                                <path key={p.code} d={p.d} className="fnm-p fnm-on" fill={fillFor(p, true)}
                                    tabIndex={isHero ? 0 : -1} aria-label={isHero ? p.name : undefined}
                                    onMouseEnter={() => enter(p.code)} onMouseLeave={leave}
                                    onFocus={() => enter(p.code)} onBlur={leave}
                                    onClick={() => pin(p.code)}
                                    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pin(p.code); } }} />
                            ))}
                        </motion.g>

                        {/* Outline of the province being shown */}
                        {shown && (
                            <path d={shown.d} fill="none" stroke="#2D1A0E" strokeWidth={1.8} strokeLinejoin="round"
                                transform={shown.region === region ? 'translate(0 -4)' : undefined}
                                style={{ pointerEvents: 'none' }} />
                        )}
                    </g>

                    {/* Hoàng Sa & Trường Sa */}
                    {isHero && ISLANDS.map((isl, i) => {
                        const short = isl.name.replace('Quần đảo ', '');
                        const dots = i === 0
                            ? [[-10, -4], [-2, -9], [6, 1], [-5, 6], [11, -6]]
                            : [[-14, -2], [-3, -10], [6, 4], [-8, 10], [13, 12], [2, 18], [17, -8]];
                        return (
                            <g key={isl.name} aria-hidden fill="#B08A64" style={{ pointerEvents: 'none' }}>
                                {dots.map(([dx, dy], k) => <circle key={k} cx={isl.x + dx} cy={isl.y + dy} r={2.4} opacity={0.75} />)}
                                <text x={isl.x} y={isl.y + (i === 0 ? 30 : 42)} textAnchor="middle" fontSize={15} fontStyle="italic"
                                    fill="rgba(75,46,26,0.5)" fontFamily="'DM Sans', system-ui, sans-serif">{short}</text>
                            </g>
                        );
                    })}

                    {/* Cities */}
                    {meta.cities.filter(c => isHero || c.main).map((c, i) => {
                        const pt = CITY_POINTS[c.key];
                        if (!pt) return null;
                        const left = c.anchor === 'end';
                        return (
                            <motion.g key={c.key} aria-hidden style={{ pointerEvents: 'none' }}
                                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 + i * 0.15, ease: EASE }}>
                                {c.main && (
                                    <motion.circle cx={pt.x} cy={pt.y} fill="none" stroke="#FFF7EB" strokeWidth={1.5}
                                        initial={{ r: 5, opacity: 0.9 }} animate={{ r: 22, opacity: 0 }}
                                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }} />
                                )}
                                <circle cx={pt.x} cy={pt.y} r={c.main ? 6.5 : 4.5} fill={c.main ? '#2D1A0E' : '#FFF7EB'} stroke={c.main ? '#FFF7EB' : '#4B2E1A'} strokeWidth={c.main ? 2.5 : 1.8} />
                                {isHero && (
                                    <text
                                        x={pt.x + (left ? -12 : 12)} y={pt.y + 5}
                                        textAnchor={left ? 'end' : 'start'}
                                        fontFamily="'Playfair Display', serif"
                                        fontSize={c.main ? 26 : 19} fontWeight={c.main ? 700 : 600} fontStyle={c.main ? 'normal' : 'italic'}
                                        fill="#2D1A0E"
                                        stroke="#FFF8EE" strokeWidth={5} strokeLinejoin="round" paintOrder="stroke"
                                    >{c.label}</text>
                                )}
                            </motion.g>
                        );
                    })}

                    {/* Compass */}
                    {isHero && (
                        <g aria-hidden transform={`translate(${VB.x + VB.w - 34} ${VB.y + 52})`} style={{ pointerEvents: 'none' }}>
                            <circle r={24} fill="rgba(255,251,244,0.7)" stroke="rgba(75,46,26,0.18)" strokeWidth={1} />
                            <path d="M0 -14 L5 2 L0 -2 L-5 2 Z" fill="#D97706" />
                            <path d="M0 14 L5 -2 L0 2 L-5 -2 Z" fill="rgba(75,46,26,0.25)" />
                            <text y={-31} textAnchor="middle" fontSize={15} fontWeight={700} fill="#4B2E1A" fontFamily="'DM Sans', system-ui, sans-serif">N</text>
                        </g>
                    )}
                </svg>

                {/* ── Specialty card ── */}
                <AnimatePresence>
                    {isHero && shown && card && (
                        <motion.div
                            key={shown.code}
                            role="dialog"
                            aria-label={`${shown.name} specialties`}
                            initial={{ opacity: 0, x: card.side === 'right' ? -8 : 8, scale: 0.97 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.12 } }}
                            transition={{ duration: 0.22, ease: EASE }}
                            onMouseEnter={() => { if (leaveTimer.current) clearTimeout(leaveTimer.current); setHovered(shown.code); }}
                            onMouseLeave={leave}
                            style={{
                                position: 'absolute', left: card.left, top: card.top, width: CARD_W, zIndex: 30,
                                background: 'rgba(255,252,247,0.97)', backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(75,46,26,0.10)', borderRadius: 16,
                                boxShadow: '0 24px 48px -12px rgba(45,26,14,0.28), 0 4px 12px rgba(45,26,14,0.08)',
                                padding: '14px 16px 12px', fontFamily: "'DM Sans', system-ui, sans-serif", color: '#2D1A0E',
                                textAlign: 'left',
                            }}
                        >
                            {/* Header */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                                <div>
                                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: shown.region === region ? '#D97706' : 'rgba(75,46,26,0.5)' }}>
                                        {META[shown.region].label}
                                    </div>
                                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 21, fontWeight: 700, lineHeight: 1.15, marginTop: 2 }}>
                                        {shown.name}
                                    </div>
                                </div>
                                {isPinned && (
                                    <button type="button" aria-label="Close" onClick={() => setPinned(null)}
                                        style={{ border: 'none', background: 'rgba(75,46,26,0.06)', width: 26, height: 26, borderRadius: 13, cursor: 'pointer', color: '#4B2E1A', fontSize: 15, lineHeight: '26px', flexShrink: 0 }}>×</button>
                                )}
                            </div>
                            {merged && (
                                <div style={{ fontSize: 11, color: 'rgba(75,46,26,0.55)', marginTop: 4 }}>
                                    Since 2025: {merged.join(' + ')}
                                </div>
                            )}

                            {/* Dishes */}
                            <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '10px 0 6px' }} />
                            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(75,46,26,0.45)', marginBottom: 2 }}>
                                Signature dishes
                            </div>
                            {dishes.map((d, i) => {
                                const inner = (
                                    <>
                                        <span style={{ color: d.slug ? '#D97706' : 'rgba(75,46,26,0.3)', fontSize: 10, flexShrink: 0, transform: 'translateY(-1px)' }}>●</span>
                                        <span style={{ flex: 1, minWidth: 0 }}>
                                            <span className="fnm-dish-vi" style={{ display: 'block', fontSize: 14, fontWeight: 700, transition: 'color .2s' }}>{d.vi}</span>
                                            <span style={{ display: 'block', fontSize: 11.5, color: 'rgba(75,46,26,0.6)', marginTop: 1 }}>
                                                {d.en}{d.from ? ` · ${d.from}` : ''}
                                            </span>
                                        </span>
                                        {d.slug && <span style={{ fontSize: 13, color: '#D97706', flexShrink: 0 }}>→</span>}
                                    </>
                                );
                                return (
                                    <motion.div key={d.vi} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 * i, duration: 0.2 }}>
                                        {d.slug
                                            ? <Link href={`/recipes/${d.slug}`} className="fnm-dish">{inner}</Link>
                                            : <div className="fnm-dish">{inner}</div>}
                                    </motion.div>
                                );
                            })}

                            {/* Footer */}
                            <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, fontSize: 11 }}>
                                {shown.region !== region ? (
                                    <Link href={META[shown.region].href} style={{ color: '#B45309', fontWeight: 700, textDecoration: 'none' }}>
                                        Explore {META[shown.region].short} →
                                    </Link>
                                ) : <span />}
                                {!isPinned && <span style={{ color: 'rgba(75,46,26,0.4)' }}>Click to pin</span>}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* ── Legend + region switcher ── */}
            {isHero && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
                    style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
                        <span style={{ width: 10, height: 10, borderRadius: 3, background: 'linear-gradient(135deg,#F59E0B,#B45309)', boxShadow: '0 0 0 3px rgba(217,119,6,0.18)' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4B2E1A' }}>{meta.label}</span>
                        <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.5)', fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>· {meta.sub}</span>
                    </div>
                    <div style={{ fontSize: 11.5, color: 'rgba(75,46,26,0.5)' }}>Hover a province to taste its specialties</div>
                    <nav aria-label="Regions" style={{
                        display: 'flex', width: '100%', maxWidth: 320, padding: 4, gap: 4, borderRadius: 100,
                        background: 'rgba(255,255,255,0.65)', border: '1px solid rgba(75,46,26,0.10)',
                        backdropFilter: 'blur(6px)', boxShadow: '0 4px 14px rgba(75,46,26,0.06)',
                    }}>
                        {REGIONS.map(r => (
                            <Link key={r} href={META[r].href} className="fnm-pill" aria-current={r === region ? 'page' : undefined}>
                                {META[r].short}
                            </Link>
                        ))}
                    </nav>
                </motion.div>
            )}
        </div>
    );
}
