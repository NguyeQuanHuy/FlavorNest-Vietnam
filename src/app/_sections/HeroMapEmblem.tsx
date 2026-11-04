'use client';

// ─────────────────────────────────────────────────────────────────────────────
//  app/_sections/HeroMapEmblem.tsx
//  Small golden map of Vietnam for the home hero: the outline draws itself,
//  fills with gold, then three glowing dots mark the three food capitals
//  (Hà Nội · Huế · Sài Gòn). Links to /travel.
//  Outline: dissolved + simplified from src/data/vietnam-provinces source data.
// ─────────────────────────────────────────────────────────────────────────────

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

const VN_OUTLINE = 'M15.0,107.7L15.2,106.8L15.4,106.3L15.2,105.0L14.7,104.6L14.2,105.4L14.1,106.0L14.5,106.6L14.7,107.9ZM21.2,112.1L21.1,115.2L21.0,116.9L20.8,117.9L20.9,119.2L20.3,119.5L21.3,119.9L23.3,119.3L23.9,118.5L24.6,118.2L25.1,117.7L25.6,116.4L26.7,115.4L29.0,114.4L31.1,113.6L31.7,113.3L31.9,112.5L32.4,112.3L32.6,111.6L33.5,112.1L34.4,111.7L34.8,111.0L34.7,110.4L35.4,109.6L35.6,109.2L35.4,108.5L36.4,107.4L36.2,106.7L36.4,106.5L36.4,105.2L36.7,105.2L36.8,105.4L37.8,105.1L37.8,104.7L38.4,104.5L39.0,104.9L40.1,105.2L40.9,104.5L41.5,104.5L42.1,104.2L42.5,103.7L44.1,103.0L44.5,102.6L45.5,102.6L45.9,102.3L46.5,100.9L47.6,100.6L48.5,100.5L48.8,99.9L49.5,99.8L49.9,99.0L50.3,98.7L51.5,98.7L51.7,97.9L52.5,97.5L53.0,97.7L53.7,97.3L53.7,96.0L53.9,95.5L54.6,95.6L55.4,94.2L55.1,93.8L55.1,93.2L55.8,93.1L55.7,92.6L55.1,91.4L55.3,90.9L55.1,90.1L55.1,88.9L56.1,88.7L55.9,88.3L55.5,88.0L55.1,87.0L55.4,86.5L56.6,85.3L57.1,84.7L56.5,84.0L55.9,83.0L56.0,81.9L55.3,80.5L55.8,79.4L55.4,78.6L55.3,78.0L55.9,77.8L55.9,77.0L55.5,76.4L55.6,75.8L55.2,75.0L55.0,73.7L54.5,72.9L54.5,72.4L54.2,71.6L54.2,71.3L54.2,70.3L53.2,68.4L52.8,67.2L52.8,66.4L53.1,66.0L52.6,65.4L52.2,64.5L51.6,64.7L51.2,64.0L50.6,63.7L49.9,62.8L49.1,61.5L49.0,60.8L48.1,60.1L47.8,59.4L47.3,59.2L46.8,58.7L47.0,58.3L47.2,58.2L47.3,58.2L47.3,58.1L46.5,57.9L46.0,57.2L45.7,57.2L45.0,56.8L44.1,56.0L42.7,55.0L41.1,53.8L39.9,52.8L38.9,51.6L38.9,51.0L36.6,49.3L35.3,48.0L34.3,46.4L33.9,45.6L33.8,44.7L34.3,44.0L33.9,43.5L33.6,42.8L33.1,42.7L32.2,41.9L31.2,41.5L30.6,41.0L29.6,39.9L28.9,38.7L28.5,37.5L27.9,36.6L27.5,36.4L27.3,35.5L27.6,34.9L28.2,34.6L28.3,33.8L28.8,33.2L28.6,32.3L28.8,32.0L28.8,30.9L29.1,30.0L29.8,29.2L30.0,28.0L30.5,27.7L30.8,28.0L31.7,27.6L33.1,26.0L33.7,25.8L34.9,25.5L35.1,25.0L34.8,24.5L35.0,23.9L34.8,23.0L35.4,22.5L35.9,21.9L36.4,21.6L36.3,21.0L37.0,21.1L37.1,20.7L37.2,20.2L38.0,19.7L38.5,19.7L39.3,20.0L40.0,19.4L40.6,19.5L41.0,19.1L42.2,18.3L42.3,17.8L41.9,17.0L42.8,17.0L43.3,16.3L43.9,16.1L44.2,15.6L44.7,15.7L45.3,16.2L46.1,15.5L46.1,15.0L45.5,15.0L44.7,14.1L44.1,14.1L43.4,14.5L41.9,14.6L41.8,14.1L40.9,14.5L40.8,14.0L40.4,13.4L40.0,13.7L39.6,13.6L38.7,12.9L38.1,12.7L38.6,12.2L38.0,11.7L37.8,12.0L37.1,11.5L36.6,11.5L36.3,11.2L35.6,11.3L35.8,10.5L35.5,9.8L35.7,9.5L35.3,8.6L34.6,8.5L34.7,7.9L34.6,7.6L35.0,6.4L35.8,6.6L36.4,4.7L35.0,3.8L33.7,4.2L32.5,4.3L31.9,3.4L30.4,3.3L30.3,3.6L29.3,3.8L29.2,3.5L28.1,2.7L26.9,2.6L26.9,2.3L26.8,1.7L26.4,1.6L26.0,1.0L25.4,0.7L25.0,0.1L24.3,1.1L23.9,0.9L23.4,1.2L21.8,1.8L21.5,2.2L21.0,2.3L21.5,3.7L20.8,4.0L20.6,4.4L20.0,4.7L19.2,4.4L18.8,4.9L17.4,5.6L16.8,5.1L16.9,4.6L15.7,4.8L15.1,5.5L14.9,7.1L14.5,7.2L13.4,6.3L13.0,5.7L12.2,5.1L11.8,5.0L11.4,5.6L11.5,5.9L11.1,6.5L10.4,5.6L10.2,5.1L9.5,5.0L9.2,5.8L8.5,6.1L8.4,6.8L7.2,7.7L6.4,7.4L6.0,6.6L5.3,6.3L4.6,5.6L3.6,5.5L3.2,5.0L2.7,5.2L2.4,6.2L1.7,6.9L1.1,7.9L0.7,7.8L0.6,8.8L1.1,9.4L1.8,9.7L2.6,10.5L3.1,11.5L3.9,11.9L4.4,13.0L4.3,13.5L4.5,14.1L4.9,14.1L5.6,13.4L6.9,13.7L6.9,14.6L6.0,15.9L6.2,16.3L6.2,18.1L6.6,18.3L6.8,18.8L7.3,18.9L7.6,19.8L8.0,20.1L8.7,20.2L9.2,20.7L10.1,21.1L10.6,20.8L10.9,21.4L11.5,21.4L12.7,22.1L12.7,21.5L13.1,21.4L13.2,20.6L14.0,20.2L15.0,20.2L15.2,19.8L15.7,19.6L16.9,20.0L17.6,20.8L19.0,21.6L19.7,22.2L19.4,22.6L19.0,22.6L18.5,23.3L17.8,23.5L17.9,24.4L18.4,24.5L19.5,24.0L19.5,25.5L20.8,25.9L21.4,26.3L21.9,26.3L22.3,27.0L21.9,27.5L21.3,28.1L21.3,29.1L20.4,29.5L19.9,29.9L19.8,30.5L18.8,30.6L18.3,30.3L18.0,29.8L17.4,30.0L16.6,29.8L15.6,30.2L15.2,30.6L15.6,31.4L15.3,32.2L14.6,32.3L13.8,33.0L14.8,33.7L15.3,33.6L16.2,34.0L16.4,34.6L17.9,35.1L18.3,35.7L18.9,35.7L19.3,36.3L20.0,36.9L20.9,37.3L21.9,37.3L22.1,37.7L23.0,37.8L24.0,38.5L24.0,38.8L23.6,38.8L23.3,40.0L23.9,40.5L24.0,41.0L24.5,41.5L25.1,41.6L25.0,42.0L25.7,42.4L26.1,42.0L26.4,42.1L26.7,42.7L27.5,43.7L27.4,44.7L27.8,45.1L27.9,45.5L28.6,46.3L29.2,46.7L31.0,48.8L32.1,49.7L32.7,49.4L32.8,50.3L33.7,51.8L34.3,52.0L34.6,52.3L34.6,54.2L35.7,56.3L36.3,56.3L36.7,55.4L37.1,55.5L37.3,56.6L38.3,57.3L38.7,57.3L39.3,57.7L39.3,58.4L40.0,58.6L40.7,59.3L41.6,59.1L41.7,59.6L41.2,60.7L40.6,60.7L39.8,61.1L40.1,62.6L40.7,62.9L41.0,63.9L42.1,64.0L42.2,64.6L42.9,64.5L42.7,64.8L42.9,66.0L42.6,66.3L42.9,66.7L42.6,67.6L41.7,67.7L42.0,68.5L42.6,69.0L42.0,69.6L42.4,70.1L42.2,71.5L41.9,72.7L41.5,72.5L41.1,73.3L41.2,73.8L40.7,75.1L41.1,76.1L41.6,76.1L41.6,76.6L41.7,77.1L41.6,77.6L42.2,78.0L42.9,79.8L43.0,81.1L42.8,81.6L41.9,83.8L41.9,84.9L42.4,85.7L42.4,86.3L42.6,87.6L42.3,89.3L41.5,89.8L41.3,90.1L40.8,89.4L39.7,89.7L39.3,90.0L38.4,91.1L37.6,91.6L36.4,91.5L35.8,92.4L33.5,92.4L33.9,93.2L33.5,94.1L33.8,94.8L33.2,94.6L32.6,94.7L32.4,94.4L31.1,94.2L30.5,93.9L29.9,95.0L29.4,94.7L28.8,95.3L29.4,95.9L29.5,96.7L29.2,97.9L31.1,99.6L31.5,99.4L31.9,100.4L31.4,100.9L31.7,101.5L30.8,101.7L30.1,101.1L29.5,101.5L28.6,100.0L27.7,100.3L26.4,100.6L25.8,100.5L25.2,101.3L24.0,100.9L23.4,100.9L22.7,101.1L23.3,102.4L22.2,103.1L21.5,104.1L20.6,104.1L20.1,103.9L19.3,104.0L19.0,104.7L18.2,104.9L19.3,106.3L19.7,107.1L20.5,106.4L21.1,106.8L21.7,107.6L22.5,107.5L23.1,108.3L23.0,108.7L22.2,109.5L21.7,109.6L21.4,110.9ZM46.3,58.3L46.5,58.3L46.6,58.3L46.7,58.3L46.7,58.3L47.0,58.1L47.2,58.2L47.3,58.1L47.1,58.1L47.0,58.1L46.7,58.3L46.7,58.3L46.6,58.3L46.5,58.3ZM44.4,59.3L44.9,58.2L45.1,58.1L44.9,58.2ZM37.7,20.4L37.7,21.1L38.0,21.5L38.4,21.3L38.7,20.9L38.3,20.5Z';

const W = 57.5;
const H = 120;
const PINS = [
    { name: 'Hà Nội', x: 29.1, y: 19.2 },
    { name: 'Huế', x: 42.6, y: 56.1 },
    { name: 'Sài Gòn', x: 35.7, y: 102.0 },
];

export default function HeroMapEmblem() {
    const reduce = useReducedMotion();
    const t = (delay: number, duration = 0.8) => (reduce ? { duration: 0 } : { delay, duration, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] });

    return (
        <Link
            href="/travel"
            aria-label="Explore Vietnamese food by region"
            title="Explore by region — North, Centre, South"
            className="group relative mx-auto mb-4 block w-fit outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1C1009] sm:mb-5"
        >
            {/* soft golden halo */}
            <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[200%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'radial-gradient(closest-side, rgba(245,158,11,0.35), transparent)' }}
            />
            <motion.svg
                viewBox={`-3 -3 ${W + 6} ${H + 6}`}
                className="relative h-[62px] w-auto overflow-visible transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.06] sm:h-[84px]"
                aria-hidden
                animate={reduce ? undefined : { y: [0, -3, 0] }}
                transition={reduce ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2.4 }}
            >
                <defs>
                    <linearGradient id="vn-gold" x1="0" y1="0" x2="0.35" y2="1">
                        <stop offset="0%" stopColor="#FDE68A" />
                        <stop offset="45%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#B45309" />
                    </linearGradient>
                    <linearGradient id="vn-shine" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#fff" stopOpacity="0" />
                        <stop offset="50%" stopColor="#fff" stopOpacity="0.55" />
                        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="vn-clip"><path d={VN_OUTLINE} /></clipPath>
                </defs>

                {/* gold fill */}
                <motion.path
                    d={VN_OUTLINE}
                    fill="url(#vn-gold)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={t(1.0, 0.9)}
                />
                {/* outline drawing itself */}
                <motion.path
                    d={VN_OUTLINE}
                    fill="none"
                    stroke="#FCD34D"
                    strokeWidth={1.1}
                    strokeLinejoin="round"
                    initial={{ pathLength: reduce ? 1 : 0, opacity: 1 }}
                    animate={{ pathLength: 1, opacity: 0.85 }}
                    transition={t(0.2, 1.4)}
                />
                {/* light sweep across the gold */}
                {!reduce && (
                    <g clipPath="url(#vn-clip)">
                        <motion.rect
                            y={-10} width={26} height={H + 20} fill="url(#vn-shine)"
                            initial={{ x: -30 }}
                            animate={{ x: [-30, W + 10] }}
                            transition={{ delay: 2, duration: 1.4, repeat: Infinity, repeatDelay: 7, ease: 'easeInOut' }}
                        />
                    </g>
                )}

                {/* three food capitals */}
                {PINS.map((p, i) => (
                    <g key={p.name}>
                        {!reduce && (
                            <motion.circle
                                cx={p.x} cy={p.y} r={3.2} fill="#FFF7E6"
                                initial={{ scale: 1, opacity: 0 }}
                                animate={{ scale: [1, 2.8], opacity: [0.7, 0] }}
                                transition={{ delay: 2.1 + i * 0.35, duration: 2, repeat: Infinity, repeatDelay: 1.2, ease: 'easeOut' }}
                                style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                            />
                        )}
                        <motion.circle
                            cx={p.x} cy={p.y} r={2.6} fill="#FFF7E6" stroke="#7C2D12" strokeWidth={0.9}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={reduce ? { duration: 0 } : { delay: 1.7 + i * 0.15, type: 'spring', stiffness: 420, damping: 16 }}
                            style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                        />
                    </g>
                ))}
            </motion.svg>
            <span className="sr-only">Hà Nội, Huế and Sài Gòn — the three food capitals of Vietnam</span>
        </Link>
    );
}
