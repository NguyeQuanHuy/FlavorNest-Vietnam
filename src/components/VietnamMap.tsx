'use client';

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { NORTH_PROVINCES, CENTRAL_PROVINCES } from './vietnam-regions';

type Region = 'north' | 'central' | 'south';

interface Props {
    region: Region;
    /** Rendered width in px (height follows the map's aspect ratio). */
    size?: number;
    /** 'hero' = full editorial map with cities + region switcher, 'compact' = small decorative map */
    variant?: 'hero' | 'compact';
}

type Province = { id: string; d: string; name: string; region: Region };
type City = { name: string; x: number; y: number; main?: boolean; anchor?: 'start' | 'end' };

// Map frame (SVG user units of /images/vietnam-map.svg)
const VB = { x: 262, y: 30, w: 600, h: 940 };

const META: Record<Region, {
    label: string; short: string; sub: string; href: string;
    box: [number, number, number, number]; // x0, y0, x1, y1 of region
    cities: City[];
}> = {
    north: {
        label: 'Northern Vietnam', short: 'North', sub: 'Red River Delta & Highlands', href: '/recipes/north',
        box: [284, 45, 629, 348],
        cities: [
            { name: 'Hà Nội', x: 503.1, y: 194.1, main: true, anchor: 'end' },
            { name: 'Hạ Long', x: 575.3, y: 199.0 },
            { name: 'Sa Pa', x: 384.8, y: 111.3, anchor: 'end' },
        ],
    },
    central: {
        label: 'Central Vietnam', short: 'Central', sub: 'Imperial Coast & Highlands', href: '/recipes/central',
        box: [459, 336, 716, 797],
        cities: [
            { name: 'Huế', x: 605.3, y: 478.0, main: true, anchor: 'end' },
            { name: 'Hội An', x: 649.3, y: 513.7 },
            { name: 'Nha Trang', x: 699.9, y: 734.7 },
        ],
    },
    south: {
        label: 'Southern Vietnam', short: 'South', sub: 'Saigon & the Mekong Delta', href: '/recipes/south',
        box: [385, 731, 686, 955],
        cities: [
            { name: 'Sài Gòn', x: 552.9, y: 822.6, main: true },
            { name: 'Cần Thơ', x: 496.7, y: 866.3, anchor: 'end' },
            { name: 'Phú Quốc', x: 392.0, y: 855.5, anchor: 'end' },
        ],
    },
};

const REGIONS: Region[] = ['north', 'central', 'south'];

// Province name fixes (source SVG has a few unaccented / wrong names)
const NAME_FIX: Record<string, string> = {
    VNHN: 'Hà Nội', VNSG: 'TP. Hồ Chí Minh', VNCT: 'Cần Thơ', VN27: 'Quảng Nam', VN26: 'Thừa Thiên Huế',
    VN45: 'Đồng Tháp', VN05: 'Sơn La', VN23: 'Hà Tĩnh', VN01: 'Lai Châu', VN73: 'Hậu Giang',
    VN39: 'Đồng Nai', VN53: 'Bắc Kạn', VN66: 'Hưng Yên',
};

const regionOf = (id: string): Region =>
    NORTH_PROVINCES.includes(id) ? 'north' : CENTRAL_PROVINCES.includes(id) ? 'central' : 'south';

// Shared, cached loader — all map instances on a page use one request
let cache: Promise<Province[]> | null = null;
function loadProvinces(): Promise<Province[]> {
    if (!cache) {
        cache = fetch('/images/vietnam-map.svg')
            .then(r => r.text())
            .then(txt => {
                const doc = new DOMParser().parseFromString(txt, 'image/svg+xml');
                return Array.from(doc.querySelectorAll('path[id^="VN"]')).map(p => {
                    const id = p.getAttribute('id') || '';
                    return { id, d: p.getAttribute('d') || '', name: NAME_FIX[id] || p.getAttribute('name') || id, region: regionOf(id) };
                });
            })
            .catch(err => { cache = null; throw err; });
    }
    return cache;
}

// Latitude lines (Mercator y in map units)
const GRATICULE = [{ lat: '20°N', y: 258.8 }, { lat: '15°N', y: 567.5 }, { lat: '10°N', y: 869.0 }];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function VietnamMap({ region, size = 200, variant = 'hero' }: Props) {
    const router = useRouter();
    const uid = useId().replace(/:/g, '');
    const wrapRef = useRef<HTMLDivElement>(null);
    const [provinces, setProvinces] = useState<Province[]>([]);
    const [hover, setHover] = useState<{ p: Province; x: number; y: number } | null>(null);

    const isHero = variant === 'hero';
    const meta = META[region];
    const height = Math.round(size * (VB.h / VB.w));

    useEffect(() => {
        let alive = true;
        loadProvinces().then(p => { if (alive) setProvinces(p); }).catch(() => { });
        return () => { alive = false; };
    }, []);

    const { active, inactive } = useMemo(() => ({
        active: provinces.filter(p => p.region === region),
        inactive: provinces.filter(p => p.region !== region),
    }), [provinces, region]);

    const [bx0, by0, bx1, by1] = meta.box;
    const cx = (bx0 + bx1) / 2;
    const cy = (by0 + by1) / 2;
    const ringR = Math.max(bx1 - bx0, by1 - by0) / 2 + 26;

    const onMove = (p: Province) => (e: React.MouseEvent) => {
        const r = wrapRef.current?.getBoundingClientRect();
        if (!r) return;
        setHover({ p, x: e.clientX - r.left, y: e.clientY - r.top });
    };

    const go = (p: Province) => {
        if (p.region !== region) router.push(META[p.region].href);
    };

    return (
        <div style={{ width: size, maxWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isHero ? 18 : 0 }}>
            <style>{`
                .fnm-p { transition: fill .35s ease, opacity .35s ease; }
                .fnm-in { fill: #EADCC8; stroke: #FFFBF4; stroke-width: .8; cursor: pointer; }
                .fnm-in:hover { fill: #DCC3A3; }
                .fnm-on { stroke: #FFF4E2; stroke-width: .7; }
                .fnm-on:hover { opacity: .86; }
                .fnm-pill { flex: 1; text-align: center; padding: 9px 0; border-radius: 100px; font-size: 12px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; text-decoration: none; transition: background .25s, color .25s; color: rgba(75,46,26,.55); }
                .fnm-pill:hover { color: #2D1A0E; background: rgba(217,119,6,.08); }
                .fnm-pill[aria-current="page"] { background: #D97706; color: #fff; box-shadow: 0 6px 16px rgba(217,119,6,.35); }
                .fn-region-hero { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 56px; align-items: center; }
                @media (max-width: 900px) {
                    .fn-region-hero { grid-template-columns: 1fr; gap: 40px; }
                    .fn-region-hero-map > div { width: min(300px, 84vw) !important; }
                }
            `}</style>

            {/* ── Map ── */}
            <motion.div
                ref={wrapRef}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: EASE }}
                style={{ position: 'relative', width: '100%', aspectRatio: `${VB.w} / ${VB.h}` }}
                onMouseLeave={() => setHover(null)}
            >

                <svg
                    viewBox={`${VB.x} ${VB.y} ${VB.w} ${VB.h}`}
                    width={size} height={height}
                    role="img"
                    aria-label={`Map of Vietnam highlighting ${meta.label}`}
                    style={{ position: 'relative', width: '100%', height: '100%', overflow: 'visible', display: 'block' }}
                >
                    <defs>
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
                        <g key={g.lat} aria-hidden>
                            <line x1={VB.x} x2={VB.x + VB.w} y1={g.y} y2={g.y} stroke="rgba(75,46,26,0.10)" strokeWidth={0.8} strokeDasharray="2 7" />
                            <text x={VB.x + VB.w - 4} y={g.y - 6} textAnchor="end" fontSize={15} fontWeight={600} letterSpacing="0.12em" fill="rgba(75,46,26,0.32)" fontFamily="'DM Sans', system-ui, sans-serif">{g.lat}</text>
                        </g>
                    ))}

                    {isHero && <circle aria-hidden cx={cx} cy={cy} r={ringR * 1.6} fill={`url(#${uid}-glow)`} />}

                    {/* Rotating focus ring */}
                    {isHero && (
                        <motion.circle
                            cx={cx} cy={cy} r={ringR}
                            fill="none" stroke="#D97706" strokeOpacity={0.28} strokeWidth={1.2} strokeDasharray="3 9"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1, rotate: 360 }}
                            transition={{ opacity: { duration: 1, delay: 0.5 }, scale: { duration: 1.2, delay: 0.5, ease: EASE }, rotate: { duration: 90, repeat: Infinity, ease: 'linear' } }}
                        />
                    )}

                    {/* Other regions (clickable → navigate) */}
                    <g filter={`url(#${uid}-soft)`}>
                        {inactive.map(p => (
                            <path key={p.id} d={p.d} className="fnm-p fnm-in"
                                onMouseMove={onMove(p)} onClick={() => go(p)} />
                        ))}
                    </g>

                    {/* Active region */}
                    <motion.g
                        filter={`url(#${uid}-lift)`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: provinces.length ? 1 : 0, y: provinces.length ? -4 : 8 }}
                        transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
                    >
                        {active.map(p => (
                            <path key={p.id} d={p.d} fill={`url(#${uid}-g)`} className="fnm-p fnm-on" onMouseMove={onMove(p)} />
                        ))}
                    </motion.g>

                    {/* Hoàng Sa & Trường Sa */}
                    {isHero && (
                        <g aria-hidden fill="#B08A64" fontFamily="'DM Sans', system-ui, sans-serif">
                            {[[792, 452], [801, 446], [808, 458], [797, 463], [815, 449]].map(([x, y], i) => <circle key={`hs${i}`} cx={x} cy={y} r={2.2} opacity={0.75} />)}
                            <text x={803} y={488} textAnchor="middle" fontSize={15} fontStyle="italic" fill="rgba(75,46,26,0.45)">Hoàng Sa</text>
                            {[[778, 766], [790, 758], [800, 772], [786, 780], [806, 786], [795, 794], [812, 764]].map(([x, y], i) => <circle key={`ts${i}`} cx={x} cy={y} r={2.2} opacity={0.75} />)}
                            <text x={795} y={818} textAnchor="middle" fontSize={15} fontStyle="italic" fill="rgba(75,46,26,0.45)">Trường Sa</text>
                        </g>
                    )}

                    {/* Cities */}
                    {provinces.length > 0 && meta.cities.filter(c => isHero || c.main).map((c, i) => {
                        const left = c.anchor === 'end';
                        return (
                            <motion.g key={c.name} aria-hidden style={{ pointerEvents: 'none' }}
                                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 + i * 0.15, ease: EASE }}>
                                {c.main && (
                                    <motion.circle cx={c.x} cy={c.y} fill="none" stroke="#FFF7EB" strokeWidth={1.5}
                                        initial={{ r: 5, opacity: 0.9 }} animate={{ r: 22, opacity: 0 }}
                                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }} />
                                )}
                                <circle cx={c.x} cy={c.y} r={c.main ? 6.5 : 4.5} fill={c.main ? '#2D1A0E' : '#FFF7EB'} stroke={c.main ? '#FFF7EB' : '#4B2E1A'} strokeWidth={c.main ? 2.5 : 1.8} />
                                {isHero && (
                                    <text
                                        x={c.x + (left ? -12 : 12)} y={c.y + 5}
                                        textAnchor={left ? 'end' : 'start'}
                                        fontFamily="'Playfair Display', serif"
                                        fontSize={c.main ? 26 : 19} fontWeight={c.main ? 700 : 600} fontStyle={c.main ? 'normal' : 'italic'}
                                        fill="#2D1A0E"
                                        stroke="#FFF8EE" strokeWidth={5} strokeLinejoin="round" paintOrder="stroke"
                                    >{c.name}</text>
                                )}
                            </motion.g>
                        );
                    })}

                    {/* Compass */}
                    {isHero && (
                        <g aria-hidden transform={`translate(${VB.x + VB.w - 34} ${VB.y + 52})`}>
                            <circle r={24} fill="rgba(255,251,244,0.7)" stroke="rgba(75,46,26,0.18)" strokeWidth={1} />
                            <path d="M0 -14 L5 2 L0 -2 L-5 2 Z" fill="#D97706" />
                            <path d="M0 14 L5 -2 L0 2 L-5 -2 Z" fill="rgba(75,46,26,0.25)" />
                            <text y={-31} textAnchor="middle" fontSize={15} fontWeight={700} fill="#4B2E1A" fontFamily="'DM Sans', system-ui, sans-serif">N</text>
                        </g>
                    )}
                </svg>

                {/* Tooltip */}
                <AnimatePresence>
                    {hover && (
                        <motion.div
                            key="tip"
                            initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            style={{
                                position: 'absolute', left: hover.x, top: hover.y, transform: 'translate(-50%, calc(-100% - 14px))',
                                pointerEvents: 'none', whiteSpace: 'nowrap', zIndex: 5,
                                background: '#2D1A0E', color: '#FFF7EB', borderRadius: 10, padding: '8px 12px',
                                boxShadow: '0 10px 24px rgba(45,26,14,0.25)', fontFamily: "'DM Sans', system-ui, sans-serif",
                            }}
                        >
                            <div style={{ fontSize: 13, fontWeight: 700 }}>{hover.p.name}</div>
                            <div style={{ fontSize: 11, color: hover.p.region === region ? '#FBBF24' : 'rgba(255,247,235,0.65)', marginTop: 2 }}>
                                {hover.p.region === region ? META[region].label : `Explore ${META[hover.p.region].short} →`}
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ width: 10, height: 10, borderRadius: 3, background: 'linear-gradient(135deg,#F59E0B,#B45309)', boxShadow: '0 0 0 3px rgba(217,119,6,0.18)' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4B2E1A' }}>{meta.label}</span>
                        <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.5)', fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>· {meta.sub}</span>
                    </div>
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
