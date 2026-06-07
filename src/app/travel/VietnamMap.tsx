'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Tọa độ % trên SVG map (width=240, height=520)
const CITY_PINS: Record<string, { x: number; y: number; region: string }> = {
    'Hanoi': { x: 126, y: 118, region: 'north' },
    'Sapa': { x: 88, y: 88, region: 'north' },
    'Hạ Long Bay': { x: 152, y: 103, region: 'north' },
    'Ninh Bình': { x: 122, y: 135, region: 'north' },
    'Huế': { x: 140, y: 218, region: 'central' },
    'Đà Nẵng': { x: 148, y: 233, region: 'central' },
    'Hội An': { x: 146, y: 242, region: 'central' },
    'Quy Nhơn': { x: 152, y: 278, region: 'central' },
    'Phú Yên': { x: 155, y: 295, region: 'central' },
    'Ho Chi Minh City': { x: 128, y: 385, region: 'south' },
    'Mekong Delta': { x: 110, y: 408, region: 'south' },
    'Phú Quốc': { x: 72, y: 425, region: 'south' },
    'Đà Lạt': { x: 138, y: 355, region: 'south' },
    'Vũng Tàu': { x: 145, y: 398, region: 'south' },
};

const REGION_COLORS: Record<string, string> = {
    north: '#1E40AF',
    central: '#B45309',
    south: '#166534',
};

interface CityInfo {
    name: string;
    nameVi: string;
    type: string;
    desc: string;
    bestDish: string;
    bestTime: string;
    region: string;
}

interface Props {
    cities: CityInfo[];
    activeCity: string | null;
    activeRegion: string | null;
    onCityClick: (cityName: string, regionId: string) => void;
    onRegionClick: (regionId: string) => void;
}

export default function VietnamMap({ cities, activeCity, activeRegion, onCityClick, onRegionClick }: Props) {
    const [hoveredCity, setHoveredCity] = useState<string | null>(null);
    const [tooltipCity, setTooltipCity] = useState<CityInfo | null>(null);

    const handlePinClick = (cityName: string, regionId: string, cityInfo: CityInfo) => {
        setTooltipCity(activeCity === cityName ? null : cityInfo);
        onCityClick(cityName, regionId);
    };

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            {/* SVG Map */}
            <svg
                viewBox="0 0 240 520"
                style={{ width: '100%', display: 'block' }}
                aria-label="Vietnam interactive map"
            >
                {/* Vietnam shape — simplified but accurate outline */}
                <defs>
                    <filter id="map-shadow">
                        <feDropShadow dx="2" dy="3" stdDeviation="4" floodColor="#1E40AF" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="northGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#BFDBFE" />
                        <stop offset="100%" stopColor="#93C5FD" />
                    </linearGradient>
                    <linearGradient id="centralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FDE68A" />
                        <stop offset="100%" stopColor="#FCD34D" />
                    </linearGradient>
                    <linearGradient id="southGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#A7F3D0" />
                        <stop offset="100%" stopColor="#6EE7B7" />
                    </linearGradient>
                </defs>

                {/* North region */}
                <path
                    d="M 95 60 L 105 52 L 118 48 L 132 50 L 148 55 L 162 62 L 170 72 L 168 82 L 172 92 L 165 100 L 158 108 L 152 118 L 148 130 L 140 140 L 132 148 L 120 152 L 108 148 L 100 140 L 92 130 L 88 118 L 84 108 L 82 96 L 84 84 L 88 74 Z"
                    fill={activeRegion === 'north' ? '#BFDBFE' : '#DBEAFE'}
                    stroke="#1E40AF"
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                    style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                    onClick={() => onRegionClick('north')}
                    onMouseEnter={e => (e.currentTarget.style.fill = '#BFDBFE')}
                    onMouseLeave={e => (e.currentTarget.style.fill = activeRegion === 'north' ? '#BFDBFE' : '#DBEAFE')}
                />

                {/* Central region */}
                <path
                    d="M 120 152 L 132 148 L 140 140 L 148 130 L 152 118 L 158 108 L 162 118 L 164 130 L 162 142 L 160 158 L 158 172 L 156 186 L 154 200 L 152 215 L 150 228 L 148 242 L 145 256 L 142 270 L 140 284 L 138 296 L 132 302 L 124 298 L 118 288 L 115 274 L 114 260 L 113 246 L 112 232 L 112 218 L 113 204 L 114 190 L 115 176 L 116 162 L 118 152 Z"
                    fill={activeRegion === 'central' ? '#FDE68A' : '#FEF3C7'}
                    stroke="#B45309"
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                    style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                    onClick={() => onRegionClick('central')}
                    onMouseEnter={e => (e.currentTarget.style.fill = '#FDE68A')}
                    onMouseLeave={e => (e.currentTarget.style.fill = activeRegion === 'central' ? '#FDE68A' : '#FEF3C7')}
                />

                {/* South region */}
                <path
                    d="M 132 302 L 138 296 L 140 284 L 142 270 L 145 256 L 148 242 L 150 256 L 150 270 L 148 285 L 146 300 L 145 315 L 144 330 L 142 345 L 140 358 L 138 372 L 135 385 L 130 398 L 124 408 L 116 415 L 108 418 L 100 415 L 93 408 L 88 400 L 85 390 L 84 378 L 86 366 L 90 355 L 95 345 L 100 335 L 106 325 L 112 315 L 118 308 L 124 304 Z"
                    fill={activeRegion === 'south' ? '#A7F3D0' : '#D1FAE5'}
                    stroke="#166534"
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                    style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                    onClick={() => onRegionClick('south')}
                    onMouseEnter={e => (e.currentTarget.style.fill = '#A7F3D0')}
                    onMouseLeave={e => (e.currentTarget.style.fill = activeRegion === 'south' ? '#A7F3D0' : '#D1FAE5')}
                />

                {/* Phu Quoc island */}
                <ellipse cx="72" cy="425" rx="10" ry="16"
                    fill={activeRegion === 'south' ? '#A7F3D0' : '#D1FAE5'}
                    stroke="#166534" strokeWidth="1.2" strokeOpacity="0.5"
                    style={{ cursor: 'pointer' }}
                    onClick={() => onRegionClick('south')}
                />

                {/* Region labels */}
                <text x="126" y="105" textAnchor="middle" fontSize="8" fill="#1E40AF" fontWeight="700" fontFamily="DM Sans, sans-serif" opacity="0.7">BẮC</text>
                <text x="136" y="225" textAnchor="middle" fontSize="8" fill="#B45309" fontWeight="700" fontFamily="DM Sans, sans-serif" opacity="0.7">TRUNG</text>
                <text x="125" y="360" textAnchor="middle" fontSize="8" fill="#166534" fontWeight="700" fontFamily="DM Sans, sans-serif" opacity="0.7">NAM</text>

                {/* City pins */}
                {cities.map(city => {
                    const pin = CITY_PINS[city.name];
                    if (!pin) return null;
                    const color = REGION_COLORS[pin.region];
                    const isActive = activeCity === city.name;
                    const isHovered = hoveredCity === city.name;
                    const size = isActive ? 7 : isHovered ? 6 : 5;

                    return (
                        <g key={city.name}
                            style={{ cursor: 'pointer' }}
                            onClick={() => handlePinClick(city.name, pin.region, city)}
                            onMouseEnter={() => setHoveredCity(city.name)}
                            onMouseLeave={() => setHoveredCity(null)}
                        >
                            {/* Pulse ring when active */}
                            {isActive && (
                                <circle cx={pin.x} cy={pin.y} r={12} fill={color} opacity="0.15" />
                            )}
                            {/* Outer ring */}
                            <circle cx={pin.x} cy={pin.y} r={size + 2} fill="white" opacity="0.9" />
                            {/* Inner dot */}
                            <circle cx={pin.x} cy={pin.y} r={size} fill={isActive ? color : 'white'} stroke={color} strokeWidth="2" />
                            {/* Center dot when not active */}
                            {!isActive && <circle cx={pin.x} cy={pin.y} r={2} fill={color} />}

                            {/* City name label */}
                            {(isActive || isHovered) && (
                                <g>
                                    <rect
                                        x={pin.x + 10} y={pin.y - 9}
                                        width={city.name.length * 5.5 + 8} height={14}
                                        rx="3" fill={color} opacity="0.95"
                                    />
                                    <text
                                        x={pin.x + 14} y={pin.y + 1}
                                        fontSize="7.5" fill="white"
                                        fontWeight="700" fontFamily="DM Sans, sans-serif"
                                    >
                                        {city.name}
                                    </text>
                                </g>
                            )}
                        </g>
                    );
                })}
            </svg>

            {/* City popup card */}
            <AnimatePresence>
                {tooltipCity && activeCity === tooltipCity.name && (
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: '#fff',
                            border: `2px solid ${REGION_COLORS[CITY_PINS[tooltipCity.name]?.region ?? 'north']}`,
                            borderRadius: 12,
                            padding: '14px 16px',
                            boxShadow: '0 8px 32px rgba(75,46,26,0.15)',
                            zIndex: 20,
                        }}
                    >
                        {/* Close */}
                        <button
                            onClick={() => { setTooltipCity(null); onCityClick(tooltipCity.name, CITY_PINS[tooltipCity.name]?.region ?? ''); }}
                            style={{ position: 'absolute', top: 8, right: 8, background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, color: 'rgba(75,46,26,0.4)', padding: '2px 6px' }}
                        >✕</button>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                            <span style={{
                                fontSize: 9, fontWeight: 800, color: '#fff',
                                background: REGION_COLORS[CITY_PINS[tooltipCity.name]?.region ?? 'north'],
                                padding: '2px 8px', borderRadius: 100, textTransform: 'uppercase', letterSpacing: '0.06em'
                            }}>{tooltipCity.type}</span>
                        </div>

                        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 15, fontWeight: 700, color: '#2D1A0E', marginBottom: 2 }}>
                            {tooltipCity.name}
                        </div>
                        <div style={{ fontSize: 10, color: 'rgba(75,46,26,0.45)', fontStyle: 'italic', marginBottom: 8 }}>
                            {tooltipCity.nameVi}
                        </div>
                        <p style={{ fontSize: 11, color: 'rgba(75,46,26,0.65)', lineHeight: 1.55, margin: '0 0 10px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {tooltipCity.desc}
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: 10, color: REGION_COLORS[CITY_PINS[tooltipCity.name]?.region ?? 'north'], fontWeight: 700 }}>
                                🍜 {tooltipCity.bestDish}
                            </span>
                            <span style={{ fontSize: 10, color: '#166534', fontWeight: 600 }}>
                                ✓ {tooltipCity.bestTime}
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}