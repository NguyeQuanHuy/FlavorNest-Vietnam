'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// ── Data ────────────────────────────────────────────────────────────────────

const REGIONS = [
    {
        id: 'north',
        name: 'The North',
        nameVi: 'Miền Bắc',
        tagline: 'Mountains, history, and the most refined Vietnamese palate',
        color: '#1E40AF',
        accent: '#DBEAFE',
        icon: '⛰',
        mapY: 18,
        season: 'Oct – Apr',
        mustEat: 'Phở bò, bún chả, bánh cuốn',
        cities: [
            {
                name: 'Hanoi',
                nameVi: 'Hà Nội',
                type: 'Capital',
                desc: 'The thousand-year capital where French colonial architecture meets ancient lakes and the world\'s most serious phở culture. Eat in the Old Quarter at 6am — the city is at its best before the heat arrives.',
                highlight: 'Hoan Kiem Lake at dawn, Bún Chả Hương Liên (where Obama ate), the 36 Streets',
                bestDish: 'Phở Bò',
                bestDishSlug: 'pho-bo-ha-noi',
                stay: 'Old Quarter or Tây Hồ (West Lake)',
                bestTime: 'Oct – Dec, Mar – Apr',
                avoid: 'Jul – Aug (oppressive heat and humidity)',
                foodStreet: 'Tống Duy Tân, Đinh Liệt, Lý Quốc Sư',
            },
            {
                name: 'Sapa',
                nameVi: 'Sa Pa',
                type: 'Mountain Town',
                desc: 'Rice terraces cascading down the Hoàng Liên Son mountains, ethnic minority villages, and a coolness that feels miraculous after the lowland heat. The food here — thắng cố, black pork (heo đen), smoked buffalo — is entirely different from any Vietnamese city.',
                highlight: 'Fansipan sunrise, Mường Hoa Valley rice terraces, Bản Cát Cát village',
                bestDish: 'Thịt trâu khô (dried buffalo)',
                bestDishSlug: 'recipes',
                stay: 'Sapa town or a homestay in the valley',
                bestTime: 'Sep – Nov (post-harvest golden terraces), Mar – May',
                avoid: 'Jan – Feb (cold fog, limited visibility)',
                foodStreet: 'Thác Bạc market, local H\'Mong markets',
            },
            {
                name: 'Hạ Long Bay',
                nameVi: 'Vịnh Hạ Long',
                type: 'UNESCO Site',
                desc: '1,969 limestone islands rising from emerald water — one of the most dramatic seascapes in the world. The best food here is the freshest seafood you have ever eaten, grilled on a boat. The worst food is the tourist trap restaurants on the shore.',
                highlight: 'Overnight cruise between the karsts, kayaking through caves, sunrise over the water',
                bestDish: 'Grilled squid with lemongrass',
                bestDishSlug: 'recipes',
                stay: 'Overnight cruise boat — the only way to experience it correctly',
                bestTime: 'Apr – Jun, Sep – Nov',
                avoid: 'Dec – Feb (cold, misty), Jul – Aug (crowded)',
                foodStreet: 'Eat only on the boat',
            },
            {
                name: 'Ninh Bình',
                nameVi: 'Ninh Bình',
                type: 'Ancient Capital',
                desc: 'Limestone karsts rising from rice paddies — inland Hạ Long Bay, as it is called. The ancient capital of Hoa Lư. Tràng An, a UNESCO site of temples and grottoes reached by rowboat. And the dish the province is known for: dê núi (mountain goat) prepared a dozen ways.',
                highlight: 'Tràng An rowboat grottoes, Mùa Hè Bích Động pagoda, Hoa Lư citadel',
                bestDish: 'Dê núi (mountain goat), cơm cháy (scorched rice)',
                bestDishSlug: 'recipes',
                stay: '1-2 nights — better as a day trip from Hanoi',
                bestTime: 'Apr – Jun, Sep – Nov',
                avoid: 'Heavy rain months (Jul – Aug)',
                foodStreet: 'Hoa Lư town center',
            },
        ],
    },
    {
        id: 'central',
        name: 'The Centre',
        nameVi: 'Miền Trung',
        tagline: 'Imperial cuisine, white sand beaches, and the most complex flavors in Vietnam',
        color: '#B45309',
        accent: '#FEF3C7',
        icon: '🏯',
        mapY: 45,
        season: 'Feb – Aug',
        mustEat: 'Bún bò Huế, cao lầu, mì Quảng',
        cities: [
            {
                name: 'Huế',
                nameVi: 'Huế',
                type: 'Imperial City',
                desc: 'The old imperial capital, food capital of Vietnam. The Nguyễn dynasty court cuisine developed dishes so complex and labor-intensive they could only be prepared in palace kitchens. Bún bò Huế, bánh khoái, nem lụi, bánh bèo — the city\'s food alone justifies the trip.',
                highlight: 'Imperial Citadel, Thiên Mụ Pagoda, Thưởng Tứ Gate, Dong Ba market food hall',
                bestDish: 'Bún Bò Huế',
                bestDishSlug: 'hue-spicy-beef-noodle-soup',
                stay: 'Inside the citadel walls or by the Perfume River',
                bestTime: 'Feb – Apr, Aug – Sep',
                avoid: 'Oct – Dec (heavy flooding season)',
                foodStreet: 'Hẻm Phú Cam, Chi Lăng street, Trường Tiền bridge area',
            },
            {
                name: 'Hội An',
                nameVi: 'Hội An',
                type: 'Ancient Town',
                desc: 'The best-preserved ancient trading port in Southeast Asia. Japanese merchant houses, Chinese assembly halls, and French colonial buildings on a single street. Cao lầu — the noodle dish that can only be made correctly with water from a specific ancient well. White Rose dumplings. Bánh Mì Phượng.',
                highlight: 'Ancient Town lantern nights, Cẩm Thanh coconut village, An Bằng beach',
                bestDish: 'Cao Lầu',
                bestDishSlug: 'cao-lau',
                stay: 'Ancient Town walking distance or Cửa Đại beach',
                bestTime: 'Feb – Aug',
                avoid: 'Oct – Nov (flooding in the ancient town)',
                foodStreet: 'Trần Phú street, Phố Hội night market, Phước Kiến street',
            },
            {
                name: 'Đà Nẵng',
                nameVi: 'Đà Nẵng',
                type: 'Beach City',
                desc: 'Vietnam\'s most liveable city — beach at the front door, mountains at the back, excellent food, modern infrastructure. The closest major airport to both Hội An and Huế. Mì Quảng, bún thịt nướng, bánh mì Đà Nẵng — the food culture here is underrated.',
                highlight: 'Mỹ Khê beach, Bà Nà Hills (Golden Bridge), Marble Mountains, Dragon Bridge',
                bestDish: 'Mì Quảng',
                bestDishSlug: 'mi-quang',
                stay: 'Mỹ Khê beach strip or An Thượng area',
                bestTime: 'May – Aug',
                avoid: 'Sep – Dec (typhoon and rain season)',
                foodStreet: 'Nguyễn Chí Thanh street, Trần Phú waterfront',
            },
            {
                name: 'Phú Yên',
                nameVi: 'Phú Yên',
                type: 'Hidden Coast',
                desc: 'The province that inspired this blog — the Yellow Flower on Green Grass coast, as it is known. The most beautiful coastline in central Vietnam, almost entirely undiscovered by international tourists. Cù Mông lagoon, Vũng Rô bay, Mũi Điện cape (Vietnam\'s easternmost point). And bánh canh hẹ — the noodle soup with garlic chives that defines this province.',
                highlight: 'Gành Đá Đĩa basalt columns, Vũng Rô bay, Đại Lãnh beach, Yellow Flower Grass fields in Oct',
                bestDish: 'Bánh Canh Hẹ Phú Yên',
                bestDishSlug: 'phu-yen-cuisine',
                stay: 'Tuy Hòa city or Đại Lãnh beach',
                bestTime: 'Jan – Aug',
                avoid: 'Sep – Dec (heavy rain and occasional flooding)',
                foodStreet: 'Tuy Hòa city center market, Hùng Vương street',
            },
            {
                name: 'Quy Nhơn',
                nameVi: 'Quy Nhơn',
                type: 'Coastal City',
                desc: 'Bình Định province\'s coastal capital — where the Cham towers stand in rice fields and the seafood is extraordinary. Bún chả cá (fish cake noodle soup), bánh hỏi thịt heo, nem nướng. The city is unhurried and uncommercial in a way that the more famous central coast destinations have long ceased to be.',
                highlight: 'Kỳ Co beach, Eo Gió cliff, Quy Hòa beach, Tháp Đôi Cham towers',
                bestDish: 'Bún chả cá Quy Nhơn',
                bestDishSlug: 'recipes',
                stay: 'Downtown near the waterfront',
                bestTime: 'Jan – Aug',
                avoid: 'Sep – Dec (typhoon season)',
                foodStreet: 'Nguyễn Huệ seafood street, Lê Lợi market',
            },
        ],
    },
    {
        id: 'south',
        name: 'The South',
        nameVi: 'Miền Nam',
        tagline: 'Tropical abundance, Mekong flavors, and the city that never sleeps',
        color: '#166534',
        accent: '#DCFCE7',
        icon: '🌴',
        mapY: 72,
        season: 'Nov – Apr',
        mustEat: 'Cơm tấm, hủ tiếu, canh chua',
        cities: [
            {
                name: 'Ho Chi Minh City',
                nameVi: 'Thành phố Hồ Chí Minh',
                type: 'Megacity',
                desc: 'Ten million people, a thousand street food stalls per district, and a food culture so abundant and fast-moving that you could eat three meals a day for a month and still not cover the basics. Cơm tấm before 7am. Bánh mì from Huỳnh Hoa. Bò né at midnight.',
                highlight: 'Bến Thành market, Phạm Ngũ Lão backpacker area, Bình Tây market in Cholon, Bùi Viện walking street',
                bestDish: 'Cơm Tấm',
                bestDishSlug: 'com-tam',
                stay: 'District 1 for first-timers; Bình Thạnh or Thủ Đức for a local feel',
                bestTime: 'Nov – Apr (dry season)',
                avoid: 'May – Oct (daily afternoon downpours, but they pass quickly)',
                foodStreet: 'Vĩnh Khánh seafood alley (D4), Pasteur street, Nguyễn Văn Chiêm area',
            },
            {
                name: 'Mekong Delta',
                nameVi: 'Đồng bằng sông Cửu Long',
                type: 'River Delta',
                desc: 'Nine tributaries of the Mekong river fanning across the southernmost tip of Vietnam. Floating markets, rice paddies, tropical fruit orchards, freshwater fish in every form. Cá lóc (snakehead fish) grilled over rice straw. Bánh xèo Mekong-style with coconut milk. The food of the delta is unlike anything cooked in the cities.',
                highlight: 'Cái Răng floating market (pre-dawn), Bến Tre coconut plantations, Trà Vinh Khmer temples, Cần Thơ riverside',
                bestDish: 'Canh Chua Cá (Mekong sour fish soup)',
                bestDishSlug: 'recipes',
                stay: 'Cần Thơ as base; day trips to floating markets',
                bestTime: 'Nov – Apr',
                avoid: 'Aug – Oct (flooding season — some areas inaccessible)',
                foodStreet: 'Cần Thơ night market, Ninh Kiều riverfront',
            },
            {
                name: 'Phú Quốc',
                nameVi: 'Phú Quốc',
                type: 'Island',
                desc: 'Vietnam\'s largest island and the origin of the world\'s finest fish sauce. White sand, clear water, pepper plantations, and the fish sauce factories that produce the 40°N and 50°N varieties that professionals use worldwide. Bún quậy (Phú Quốc noodle soup), freshly grilled scallops with spring onion oil.',
                highlight: 'Sao Beach, Bãi Dài beach, Dương Đông night market, fish sauce factory tours',
                bestDish: 'Bún quậy Phú Quốc',
                bestDishSlug: 'recipes',
                stay: 'Long Beach area or Bãi Dài for seclusion',
                bestTime: 'Nov – Apr (dry season)',
                avoid: 'Jun – Sep (monsoon — rough seas, limited beach access)',
                foodStreet: 'Dương Đông night market, Dinh Cậu seafood strip',
            },
            {
                name: 'Đà Lạt',
                nameVi: 'Đà Lạt',
                type: 'Highland City',
                desc: 'The City of Eternal Spring — Vietnam\'s highland escape at 1,500m elevation. French colonial villas, flower markets, pine forests, and a cool climate that allows the growing of vegetables and fruits found nowhere else in tropical Vietnam. The origin of bánh tráng nướng (Vietnamese rice paper pizza). Strawberries, artichokes, and the best coffee country in Asia.',
                highlight: 'Xuan Huong Lake, Valley of Love, Trúc Lâm Zen monastery, Đà Lạt flower festival',
                bestDish: 'Bánh Tráng Nướng (Grilled Rice Paper)',
                bestDishSlug: 'recipes',
                stay: 'Central area near Xuan Huong Lake',
                bestTime: 'Nov – Apr (dry, cool)',
                avoid: 'May – Oct (rainy season — but still beautiful)',
                foodStreet: 'Hoa Bình square night market, Phan Đình Phùng street',
            },
            {
                name: 'Vũng Tàu',
                nameVi: 'Vũng Tàu',
                type: 'Beach Resort',
                desc: 'Saigon\'s weekend escape — two hours by ferry or highway. The Bà Rịa coast, a Christ statue on the hill, and some of the best seafood in southern Vietnam at prices that have not yet been inflated by tourism. Bánh khọt (mini coconut rice pancakes) — the dish that defines this city.',
                highlight: 'Front Beach, Back Beach, Lighthouse Hill, Long Hải nearby',
                bestDish: 'Bánh Khọt (Mini Rice Pancakes)',
                bestDishSlug: 'recipes',
                stay: 'Front Beach for convenience',
                bestTime: 'Nov – Apr',
                avoid: 'May – Oct (rough seas, jellyfish)',
                foodStreet: 'Trần Phú seafood street, Quang Trung market area',
            },
        ],
    },
];

const FOOD_ROUTES = [
    { name: 'The Phở Trail', cities: 'Hanoi → Ninh Bình → Huế', days: 7, desc: 'Track the evolution of Vietnamese noodle soup from Hanoi phở north to the spicy bún bò of the imperial south.' },
    { name: 'Central Coast Feast', cities: 'Đà Nẵng → Hội An → Huế', days: 5, desc: 'The tightest concentration of great food in Vietnam. Three distinct food cultures within 100km.' },
    { name: 'Mekong to Mountain', cities: 'HCMC → Mekong Delta → Đà Lạt', days: 8, desc: 'From the river delta to the highlands — the full range of southern Vietnamese food in one journey.' },
    { name: 'The Full Country', cities: 'Hanoi → Hội An → HCMC', days: 14, desc: 'The classic north-to-south route. Vietnam in its entirety — every region, every climate, every major food culture.' },
];

export default function TravelPage() {
    const [activeRegion, setActiveRegion] = useState<string | null>(null);
    const [activeCity, setActiveCity] = useState<string | null>(null);

    const currentRegion = REGIONS.find(r => r.id === activeRegion);
    const currentCity = currentRegion?.cities.find(c => c.name === activeCity);

    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: 'DM Sans, sans-serif' }}>

            {/* Hero */}
            <div style={{ background: 'linear-gradient(160deg, #2D1A0E 0%, #4B2E1A 60%, #1E3A5F 100%)', padding: '120px 24px 72px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(217,119,6,0.15) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(30,64,175,0.2) 0%, transparent 50%)' }} />
                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                        <div style={{ width: '32px', height: '2px', background: '#D97706' }} />
                        <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2.5px', color: '#D97706', textTransform: 'uppercase' }}>Food Travel Guide</span>
                    </div>
                    <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 700, color: '#F5EDE3', lineHeight: 1.0, marginBottom: '24px', letterSpacing: '-0.02em' }}>
                        Eat Your Way<br />
                        <span style={{ color: '#D97706', fontStyle: 'italic' }}>Through Vietnam</span>
                    </h1>
                    <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.25rem', color: 'rgba(245,237,227,0.7)', maxWidth: '600px', lineHeight: 1.65, marginBottom: '48px' }}>
                        From the mountain villages of the north to the river delta of the south — 2,000 kilometers of coastline, three distinct food cultures, and the most diverse street food in the world.
                    </p>

                    {/* Region pills */}
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        {REGIONS.map(r => (
                            <button key={r.id} onClick={() => { setActiveRegion(activeRegion === r.id ? null : r.id); setActiveCity(null); }}
                                style={{ padding: '10px 20px', borderRadius: '100px', border: `2px solid ${activeRegion === r.id ? r.color : 'rgba(245,237,227,0.2)'}`, background: activeRegion === r.id ? r.color : 'rgba(245,237,227,0.05)', color: activeRegion === r.id ? 'white' : 'rgba(245,237,227,0.8)', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', transition: 'all 0.2s', backdropFilter: 'blur(8px)' }}>
                                {r.icon} {r.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

                {/* Map + Region Overview */}
                <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '48px', margin: '64px 0' }}>

                    {/* SVG Vietnam Map */}
                    <div style={{ position: 'sticky', top: '100px', alignSelf: 'start' }}>
                        <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid rgba(75,46,26,0.08)', boxShadow: '0 4px 24px rgba(75,46,26,0.06)' }}>
                            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>VIETNAM</p>
                            <svg viewBox="0 0 200 500" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
                                {/* Vietnam outline - simplified but recognizable shape */}
                                <defs>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                        <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                    </filter>
                                </defs>

                                {/* Country shape */}
                                <path d="M95,10 L115,12 L130,18 L140,28 L138,40 L130,48 L125,58 L128,68 L135,75 L138,85 L132,95 L125,100 L120,110 L118,125 L122,138 L128,148 L132,158 L130,168 L125,175 L115,180 L105,185 L98,195 L92,205 L88,220 L85,235 L82,248 L80,260 L78,275 L75,290 L72,305 L70,318 L68,330 L65,342 L60,355 L55,368 L52,378 L50,388 L52,398 L58,408 L65,415 L72,420 L78,425 L82,435 L80,445 L75,450 L68,452 L60,450 L52,445 L46,438 L42,428 L44,418 L48,410 L50,400 L48,390 L44,382 L42,372 L44,362 L48,350 L50,340 L52,330 L54,318 L56,305 L58,292 L60,278 L62,265 L64,252 L66,238 L70,225 L74,212 L78,200 L84,188 L88,178 L90,168 L88,158 L84,148 L80,138 L78,128 L76,118 L75,108 L72,98 L68,90 L64,80 L62,70 L64,60 L68,50 L72,40 L78,30 L85,20 L92,12 Z"
                                    fill={activeRegion ? 'rgba(75,46,26,0.08)' : '#F5EDE3'}
                                    stroke="rgba(75,46,26,0.2)" strokeWidth="1.5" />

                                {/* North region */}
                                <path d="M95,10 L115,12 L130,18 L140,28 L138,40 L130,48 L125,58 L128,68 L135,75 L138,85 L132,95 L125,100 L120,110 L118,125 L112,130 L105,128 L98,125 L90,120 L85,112 L80,105 L75,98 L70,90 L66,82 L64,72 L64,60 L68,50 L72,40 L78,30 L85,20 L92,12 Z"
                                    fill={activeRegion === 'north' ? '#1E40AF' : 'rgba(30,64,175,0.1)'}
                                    stroke={activeRegion === 'north' ? '#1E40AF' : 'rgba(30,64,175,0.3)'}
                                    strokeWidth="1"
                                    style={{ cursor: 'pointer', transition: 'all 0.3s' }}
                                    onClick={() => { setActiveRegion(activeRegion === 'north' ? null : 'north'); setActiveCity(null); }}
                                    filter={activeRegion === 'north' ? 'url(#glow)' : undefined}
                                />

                                {/* Central region */}
                                <path d="M112,130 L118,125 L122,138 L128,148 L132,158 L130,168 L125,175 L115,180 L105,185 L98,195 L92,205 L88,220 L85,235 L82,248 L80,260 L78,268 L72,265 L68,258 L65,248 L62,238 L60,225 L58,212 L56,198 L55,185 L54,172 L56,160 L60,150 L64,142 L68,135 L74,130 L80,128 L86,127 L92,127 L98,128 Z"
                                    fill={activeRegion === 'central' ? '#B45309' : 'rgba(180,83,9,0.1)'}
                                    stroke={activeRegion === 'central' ? '#B45309' : 'rgba(180,83,9,0.3)'}
                                    strokeWidth="1"
                                    style={{ cursor: 'pointer', transition: 'all 0.3s' }}
                                    onClick={() => { setActiveRegion(activeRegion === 'central' ? null : 'central'); setActiveCity(null); }}
                                    filter={activeRegion === 'central' ? 'url(#glow)' : undefined}
                                />

                                {/* South region */}
                                <path d="M78,268 L80,260 L82,278 L80,292 L78,305 L75,318 L72,330 L70,342 L68,355 L65,368 L60,380 L55,390 L52,400 L50,410 L46,420 L42,428 L44,438 L50,445 L58,450 L65,452 L72,450 L78,445 L80,435 L78,425 L72,420 L65,415 L58,408 L52,398 L50,388 L52,378 L56,368 L60,355 L65,342 L68,330 L70,318 L72,305 L75,290 L76,278 Z"
                                    fill={activeRegion === 'south' ? '#166534' : 'rgba(22,101,52,0.1)'}
                                    stroke={activeRegion === 'south' ? '#166534' : 'rgba(22,101,52,0.3)'}
                                    strokeWidth="1"
                                    style={{ cursor: 'pointer', transition: 'all 0.3s' }}
                                    onClick={() => { setActiveRegion(activeRegion === 'south' ? null : 'south'); setActiveCity(null); }}
                                    filter={activeRegion === 'south' ? 'url(#glow)' : undefined}
                                />

                                {/* City dots */}
                                {REGIONS.map(region =>
                                    region.cities.map((city, ci) => {
                                        const positions: Record<string, [number, number]> = {
                                            'Hanoi': [88, 72], 'Sapa': [68, 45], 'Hạ Long Bay': [115, 65], 'Ninh Bình': [82, 100],
                                            'Huế': [82, 148], 'Hội An': [78, 170], 'Đà Nẵng': [80, 160], 'Phú Yên': [72, 210], 'Quy Nhơn': [68, 195],
                                            'Ho Chi Minh City': [64, 330], 'Mekong Delta': [58, 370], 'Phú Quốc': [42, 400], 'Đà Lạt': [72, 290], 'Vũng Tàu': [72, 345],
                                        };
                                        const pos = positions[city.name];
                                        if (!pos) return null;
                                        const isActive = activeCity === city.name;
                                        return (
                                            <g key={city.name} style={{ cursor: 'pointer' }} onClick={() => { setActiveRegion(region.id); setActiveCity(city.name === activeCity ? null : city.name); }}>
                                                <circle cx={pos[0]} cy={pos[1]} r={isActive ? 6 : 4} fill={isActive ? region.color : '#fff'} stroke={region.color} strokeWidth="2" />
                                                {isActive && <circle cx={pos[0]} cy={pos[1]} r={10} fill="none" stroke={region.color} strokeWidth="1" opacity="0.4" />}
                                                <text x={pos[0] + 8} y={pos[1] + 4} fontSize="7" fill={isActive ? region.color : 'rgba(75,46,26,0.6)'} fontWeight={isActive ? '700' : '400'} fontFamily="DM Sans, sans-serif">{city.name}</text>
                                            </g>
                                        );
                                    })
                                )}

                                {/* Compass */}
                                <g transform="translate(168, 20)">
                                    <circle cx="0" cy="0" r="12" fill="none" stroke="rgba(75,46,26,0.15)" strokeWidth="1" />
                                    <text x="0" y="-5" textAnchor="middle" fontSize="8" fill="rgba(75,46,26,0.4)" fontFamily="DM Sans">N</text>
                                    <line x1="0" y1="-3" x2="0" y2="-10" stroke="#D97706" strokeWidth="1.5" />
                                    <line x1="0" y1="3" x2="0" y2="10" stroke="rgba(75,46,26,0.3)" strokeWidth="1" />
                                </g>
                            </svg>

                            {/* Legend */}
                            <div style={{ marginTop: '16px', borderTop: '1px solid rgba(75,46,26,0.07)', paddingTop: '12px' }}>
                                {REGIONS.map(r => (
                                    <div key={r.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', cursor: 'pointer' }}
                                        onClick={() => { setActiveRegion(activeRegion === r.id ? null : r.id); setActiveCity(null); }}>
                                        <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: r.color, flexShrink: 0 }} />
                                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: activeRegion === r.id ? r.color : 'rgba(75,46,26,0.6)', fontWeight: activeRegion === r.id ? 700 : 400 }}>{r.name}</span>
                                        <span style={{ fontFamily: 'Georgia, serif', fontSize: '10px', color: 'rgba(75,46,26,0.35)', fontStyle: 'italic', marginLeft: 'auto' }}>{r.season}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Region + City Content */}
                    <div>
                        {!activeRegion && (
                            <div>
                                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: '#2D1A0E', marginBottom: '8px' }}>
                                    Select a Region to Explore
                                </h2>
                                <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: 'rgba(75,46,26,0.55)', marginBottom: '48px', lineHeight: 1.6 }}>
                                    Click a region on the map or use the buttons above. Each region has a completely distinct food culture, climate, and travel character.
                                </p>

                                {/* All regions overview */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                                    {REGIONS.map(r => (
                                        <motion.div key={r.id} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}
                                            onClick={() => setActiveRegion(r.id)}
                                            style={{ background: '#fff', border: `1px solid rgba(75,46,26,0.08)`, borderRadius: '8px', padding: '24px', cursor: 'pointer', borderTop: `4px solid ${r.color}` }}>
                                            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{r.icon}</div>
                                            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 700, color: '#2D1A0E', marginBottom: '4px' }}>{r.name}</h3>
                                            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: r.color, marginBottom: '10px', letterSpacing: '0.5px' }}>{r.nameVi} · Best: {r.season}</p>
                                            <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '13px', color: 'rgba(75,46,26,0.6)', lineHeight: 1.6, marginBottom: '14px' }}>{r.tagline}</p>
                                            <div style={{ padding: '8px 12px', background: `${r.color}10`, borderRadius: '4px' }}>
                                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, color: r.color, letterSpacing: '1px' }}>MUST EAT: </span>
                                                <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#4B2E1A' }}>{r.mustEat}</span>
                                            </div>
                                            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: r.color, fontWeight: 600, marginTop: '14px' }}>{r.cities.length} destinations →</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeRegion && currentRegion && (
                            <AnimatePresence mode="wait">
                                <motion.div key={activeRegion} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>

                                    {/* Region header */}
                                    <div style={{ marginBottom: '32px', paddingBottom: '24px', borderBottom: `2px solid ${currentRegion.color}20` }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                            <span style={{ fontSize: '2rem' }}>{currentRegion.icon}</span>
                                            <div>
                                                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{currentRegion.name}</h2>
                                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: currentRegion.color, fontWeight: 600 }}>{currentRegion.nameVi} · Best season: {currentRegion.season}</span>
                                            </div>
                                        </div>
                                        <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.1rem', color: 'rgba(75,46,26,0.6)', marginBottom: '16px', lineHeight: 1.6 }}>{currentRegion.tagline}</p>
                                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: `${currentRegion.color}15`, borderRadius: '100px' }}>
                                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: currentRegion.color, letterSpacing: '1px' }}>MUST EAT:</span>
                                            <span style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#4B2E1A' }}>{currentRegion.mustEat}</span>
                                        </div>
                                    </div>

                                    {/* City list */}
                                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                                        {currentRegion.cities.map(city => (
                                            <button key={city.name}
                                                onClick={() => setActiveCity(activeCity === city.name ? null : city.name)}
                                                style={{ padding: '7px 16px', borderRadius: '100px', border: `1.5px solid ${activeCity === city.name ? currentRegion.color : 'rgba(75,46,26,0.15)'}`, background: activeCity === city.name ? currentRegion.color : 'transparent', color: activeCity === city.name ? 'white' : 'rgba(75,46,26,0.6)', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', transition: 'all 0.2s' }}>
                                                {city.name}
                                                <span style={{ fontSize: '10px', opacity: 0.7, marginLeft: '4px' }}>({city.type})</span>
                                            </button>
                                        ))}
                                    </div>

                                    {/* City cards */}
                                    <div style={{ display: 'grid', gap: '20px' }}>
                                        {currentRegion.cities.filter(c => !activeCity || c.name === activeCity).map(city => (
                                            <motion.div key={city.name} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
                                                style={{ background: '#fff', border: `1px solid ${activeCity === city.name ? currentRegion.color : 'rgba(75,46,26,0.08)'}`, borderRadius: '8px', overflow: 'hidden', borderLeft: `5px solid ${currentRegion.color}` }}>
                                                <div style={{ padding: '20px 24px', background: activeCity === city.name ? `${currentRegion.color}08` : '#FDFAF7', borderBottom: '1px solid rgba(75,46,26,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                                                    <div>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                                            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{city.name}</h3>
                                                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: '#fff', background: currentRegion.color, padding: '2px 8px', borderRadius: '100px' }}>{city.type}</span>
                                                        </div>
                                                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(75,46,26,0.45)', fontStyle: 'italic' }}>{city.nameVi}</span>
                                                    </div>
                                                    <div style={{ display: 'flex', gap: '8px' }}>
                                                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: '#166534', background: 'rgba(22,101,52,0.08)', padding: '3px 10px', borderRadius: '100px' }}>✓ {city.bestTime}</span>
                                                    </div>
                                                </div>
                                                <div style={{ padding: '20px 24px' }}>
                                                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '14px', lineHeight: 1.75, color: '#4B2E1A', marginBottom: '20px' }}>{city.desc}</p>

                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', marginBottom: '16px' }}>
                                                        {[
                                                            { label: 'HIGHLIGHT', value: city.highlight, color: currentRegion.color },
                                                            { label: 'WHERE TO STAY', value: city.stay, color: '#0369A1' },
                                                            { label: 'FOOD STREETS', value: city.foodStreet, color: '#166534' },
                                                            { label: 'AVOID', value: city.avoid, color: '#DC2626' },
                                                        ].map(item => (
                                                            <div key={item.label} style={{ background: '#FDFAF7', padding: '10px 14px', borderRadius: '4px', borderLeft: `3px solid ${item.color}` }}>
                                                                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: item.color, letterSpacing: '1px', marginBottom: '5px' }}>{item.label}</div>
                                                                <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', margin: 0, lineHeight: 1.5 }}>{item.value}</p>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <Link href={`/recipes/${city.bestDishSlug}`}
                                                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: currentRegion.color, color: 'white', borderRadius: '4px', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600 }}>
                                                        Recipe: {city.bestDish} →
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        )}
                    </div>
                </div>

                {/* Food Routes */}
                <div style={{ margin: '0 0 80px', padding: '48px 0', borderTop: '1px solid rgba(75,46,26,0.08)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                        <div style={{ width: '28px', height: '2px', background: '#D97706' }} />
                        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>Suggested Food Routes</h2>
                    </div>
                    <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: 'rgba(75,46,26,0.55)', marginBottom: '32px' }}>Itineraries built around eating, not sightseeing.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
                        {FOOD_ROUTES.map((route, i) => (
                            <motion.div key={route.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                                style={{ background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '8px', padding: '20px', borderTop: '4px solid #D97706' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{route.name}</h3>
                                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#D97706', background: 'rgba(217,119,6,0.1)', padding: '3px 8px', borderRadius: '100px', flexShrink: 0, marginLeft: '8px' }}>{route.days} days</span>
                                </div>
                                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: '#8B6F5A', marginBottom: '10px', letterSpacing: '0.5px' }}>{route.cities}</p>
                                <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: 'rgba(75,46,26,0.6)', lineHeight: 1.6, margin: 0 }}>{route.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Quick tips */}
                <div style={{ margin: '0 0 80px', background: '#2D1A0E', borderRadius: '12px', padding: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '24px' }}>
                    <div style={{ gridColumn: '1 / -1', marginBottom: '8px' }}>
                        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, color: '#F5EDE3', margin: '0 0 4px' }}>Eating in Vietnam: The Rules</h2>
                        <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: 'rgba(245,237,227,0.5)', fontSize: '14px' }}>What every first-time food traveler needs to know.</p>
                    </div>
                    {[
                        { icon: '🕐', rule: 'Eat early', detail: 'The best street food disappears by 9am. Phở, bánh cuốn, xôi — these are morning dishes. Miss the morning and you miss the point.' },
                        { icon: '🪑', rule: 'Sit down', detail: 'The best food in Vietnam is served at plastic stools on the sidewalk. A proper building and tablecloth means higher prices and usually worse food.' },
                        { icon: '👆', rule: 'Follow the queue', detail: 'If there is a queue at a stall and nothing at the one next to it, join the queue. Every time.' },
                        { icon: '💵', rule: 'Cash only', detail: 'Street food is cash. Carry small denominations of VND. Prices are usually written; if not, asking is expected.' },
                        { icon: '🌿', rule: 'Use the herb plate', detail: 'The plate of green that arrives with your bowl is not garnish. It is half the dish. Add generously.' },
                        { icon: '🧊', rule: 'Ice is fine', detail: 'In urban Vietnam, ice in drinks is safe. The cylindrical machine-made ice found everywhere is filtered water.' },
                    ].map(item => (
                        <div key={item.rule} style={{ padding: '16px', background: 'rgba(245,237,227,0.05)', borderRadius: '8px', border: '1px solid rgba(245,237,227,0.08)' }}>
                            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{item.icon}</div>
                            <h4 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, color: '#D97706', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.rule}</h4>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '12.5px', color: 'rgba(245,237,227,0.6)', lineHeight: 1.6, margin: 0 }}>{item.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}