'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Tọa độ % chính xác dựa trên ảnh vietnam-map.png (top/left)
// Đã hiệu chỉnh theo bản đồ thực tế
const CITY_PINS: Record<string, { top: string; left: string; region: string }> = {
    'Hanoi': { top: '27%', left: '55%', region: 'north' },
    'Sapa': { top: '20%', left: '38%', region: 'north' },
    'Hạ Long Bay': { top: '24%', left: '65%', region: 'north' },
    'Ninh Bình': { top: '31%', left: '52%', region: 'north' },
    'Huế': { top: '46%', left: '58%', region: 'central' },
    'Đà Nẵng': { top: '49%', left: '60%', region: 'central' },
    'Hội An': { top: '51%', left: '59%', region: 'central' },
    'Quy Nhơn': { top: '58%', left: '61%', region: 'central' },
    'Phú Yên': { top: '61%', left: '61%', region: 'central' },
    'Ho Chi Minh City': { top: '76%', left: '50%', region: 'south' },
    'Mekong Delta': { top: '81%', left: '44%', region: 'south' },
    'Phú Quốc': { top: '86%', left: '27%', region: 'south' },
    'Đà Lạt': { top: '70%', left: '53%', region: 'south' },
    'Vũng Tàu': { top: '78%', left: '55%', region: 'south' },
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
    region?: string;
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
        const isDeselect = activeCity === cityName;
        setTooltipCity(isDeselect ? null : cityInfo);
        onCityClick(cityName, regionId);
    };

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            {/* Map image */}
            <div style={{ position: 'relative', width: '100%' }}>
                <img
                    src="/images/vietnam-map.png"
                    alt="Vietnam map"
                    style={{ width: '100%', display: 'block', opacity: 0.9 }}
                />

                {/* City pins overlay */}
                {cities.map(city => {
                    const pin = CITY_PINS[city.name];
                    if (!pin) return null;
                    const color = REGION_COLORS[pin.region];
                    const isActive = activeCity === city.name;
                    const isHovered = hoveredCity === city.name;
                    const size = isActive ? 14 : isHovered ? 12 : 9;

                    return (
                        <div
                            key={city.name}
                            onClick={() => handlePinClick(city.name, pin.region, city)}
                            onMouseEnter={() => setHoveredCity(city.name)}
                            onMouseLeave={() => setHoveredCity(null)}
                            style={{
                                position: 'absolute',
                                top: pin.top,
                                left: pin.left,
                                transform: 'translate(-50%, -50%)',
                                cursor: 'pointer',
                                zIndex: isActive ? 20 : 10,
                            }}
                        >
                            {/* Pulse ring */}
                            {isActive && (
                                <div style={{
                                    position: 'absolute',
                                    top: '50%', left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: size + 14,
                                    height: size + 14,
                                    borderRadius: '50%',
                                    background: color,
                                    opacity: 0.2,
                                    animation: 'pulse 1.5s ease-out infinite',
                                }} />
                            )}

                            {/* Pin dot */}
                            <div style={{
                                width: size,
                                height: size,
                                borderRadius: '50%',
                                background: isActive ? color : 'white',
                                border: `2.5px solid ${color}`,
                                boxShadow: isActive
                                    ? `0 0 0 3px ${color}33, 0 2px 8px rgba(0,0,0,0.25)`
                                    : '0 1px 6px rgba(0,0,0,0.3)',
                                transition: 'all 0.2s',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                {!isActive && (
                                    <div style={{
                                        width: 4,
                                        height: 4,
                                        borderRadius: '50%',
                                        background: color,
                                    }} />
                                )}
                            </div>

                            {/* City label */}
                            {(isActive || isHovered) && (
                                <div style={{
                                    position: 'absolute',
                                    left: size + 4,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: color,
                                    color: 'white',
                                    fontSize: 9,
                                    fontWeight: 700,
                                    padding: '3px 8px',
                                    borderRadius: 100,
                                    whiteSpace: 'nowrap',
                                    fontFamily: 'DM Sans, sans-serif',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                                    letterSpacing: '0.02em',
                                }}>
                                    {city.name}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Popup card */}
            <AnimatePresence>
                {tooltipCity && activeCity === tooltipCity.name && (
                    <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            marginTop: 12,
                            background: '#fff',
                            border: `2px solid ${REGION_COLORS[CITY_PINS[tooltipCity.name]?.region ?? 'north']}`,
                            borderRadius: 12,
                            padding: '14px 16px',
                            boxShadow: '0 8px 32px rgba(75,46,26,0.15)',
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                            <span style={{
                                fontSize: 9, fontWeight: 800, color: '#fff',
                                background: REGION_COLORS[CITY_PINS[tooltipCity.name]?.region ?? 'north'],
                                padding: '2px 8px', borderRadius: 100, textTransform: 'uppercase',
                                letterSpacing: '0.06em',
                            }}>{tooltipCity.type}</span>
                            <button
                                onClick={() => { setTooltipCity(null); onCityClick(tooltipCity.name, CITY_PINS[tooltipCity.name]?.region ?? ''); }}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: 'rgba(75,46,26,0.35)', padding: '0 2px', lineHeight: 1 }}
                            >✕</button>
                        </div>

                        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 15, fontWeight: 700, color: '#2D1A0E', marginBottom: 2 }}>
                            {tooltipCity.name}
                        </div>
                        <div style={{ fontSize: 10, color: 'rgba(75,46,26,0.45)', fontStyle: 'italic', marginBottom: 8 }}>
                            {tooltipCity.nameVi}
                        </div>
                        <p style={{
                            fontSize: 11, color: 'rgba(75,46,26,0.65)', lineHeight: 1.6, margin: '0 0 10px',
                            display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                        }}>
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

            <style>{`
                @keyframes pulse {
                    0% { transform: translate(-50%,-50%) scale(1); opacity: 0.2; }
                    100% { transform: translate(-50%,-50%) scale(2.5); opacity: 0; }
                }
            `}</style>
        </div>
    );
}