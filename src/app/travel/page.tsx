'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import VietnamMap from './VietnamMap';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CalendarDays, Sparkles, BedDouble, MapPin, AlertTriangle, Map as MapIcon, ChevronDown, Clock, UtensilsCrossed, Banknote, Users, Leaf, Snowflake, Sunrise } from 'lucide-react';

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

const REGION_COVERS: Record<string, string> = {
    north: '/images/recipes/pho-bo-ha-noi.jpg',
    central: '/images/travel/travel-centre.jpg',
    south: '/images/recipes/banh-xeo-mekong.jpg',
};

const serif = { fontFamily: "'Playfair Display', Georgia, serif" };
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const RULES = [
    { Icon: Sunrise, rule: 'Eat early', detail: 'The best street food is gone by 9am. Phở, bánh cuốn and xôi are morning dishes.' },
    { Icon: Users, rule: 'Follow the queue', detail: 'A queue at one stall and none next door? Join the queue. Every time.' },
    { Icon: UtensilsCrossed, rule: 'Sit on the stool', detail: 'The best food is served on plastic stools. Tablecloths usually mean higher prices, not better food.' },
    { Icon: Banknote, rule: 'Bring cash', detail: 'Street food is cash only. Carry small VND notes; asking the price is normal.' },
    { Icon: Leaf, rule: 'Use the herb plate', detail: 'The basket of greens is not garnish — it is half the dish. Add generously.' },
    { Icon: Snowflake, rule: 'Ice is fine', detail: 'In cities, the tube-shaped machine ice is made from filtered water.' },
];

export default function TravelPage() {
    const [activeRegion, setActiveRegion] = useState<string>(REGIONS[0].id);
    const [activeCity, setActiveCity] = useState<string | null>(null);
    const [mapOpen, setMapOpen] = useState(false);

    const region = REGIONS.find(r => r.id === activeRegion) ?? REGIONS[0];
    const cities = region.cities.filter(c => !activeCity || c.name === activeCity);

    const pickRegion = (id: string, scroll = true) => {
        setActiveRegion(id);
        setActiveCity(null);
        if (scroll) setTimeout(() => document.getElementById('travel-region')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
    };

    const map = (
        <VietnamMap
            cities={REGIONS.flatMap(r => r.cities.map(c => ({ ...c, region: r.id })))}
            activeCity={activeCity}
            activeRegion={activeRegion}
            onCityClick={(cityName, regionId) => { setActiveRegion(regionId); setActiveCity(activeCity === cityName ? null : cityName); }}
            onRegionClick={regionId => pickRegion(regionId, false)}
        />
    );

    return (
        <main className="min-h-screen" style={{ background: '#FBF8F4', fontFamily: "'DM Sans', sans-serif" }}>

            {/* ═══ HERO ═══ */}
            <section className="relative flex min-h-[72vh] items-end overflow-hidden sm:min-h-[78vh]" style={{ background: '#1C1009' }}>
                <Image src="/images/travel/travel-hero.jpg" alt="Boats on the river in Hội An at sunset" fill priority sizes="100vw" className="object-cover" style={{ objectPosition: 'center 60%' }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,11,5,0.92) 0%, rgba(20,11,5,0.5) 50%, rgba(20,11,5,0.2) 100%)' }} />
                <div className="relative mx-auto w-full max-w-[1200px] px-5 pb-12 pt-32 sm:px-6 sm:pb-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }}>
                        <div className="mb-4 flex items-center gap-2">
                            <span className="h-px w-8" style={{ background: '#F59E0B' }} />
                            <span className="text-[11px] font-bold uppercase" style={{ color: '#F59E0B', letterSpacing: '0.18em' }}>Food travel guide</span>
                        </div>
                        <h1 className="max-w-3xl font-bold leading-[1.02]" style={{ ...serif, color: '#F5EDE3', fontSize: 'clamp(2.5rem, 8vw, 5.5rem)' }}>
                            Eat your way <em style={{ color: '#F59E0B' }}>through Vietnam</em>
                        </h1>
                        <p className="mt-5 max-w-xl text-[16px] leading-[1.7] sm:text-[18px]" style={{ color: 'rgba(245,237,227,0.8)' }}>
                            2,000 km of coastline, three food cultures and the best street food in the world — city by city.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-2">
                            {REGIONS.map(r => (
                                <button
                                    key={r.id}
                                    onClick={() => pickRegion(r.id)}
                                    className="rounded-full px-4 py-2.5 text-[14px] font-semibold backdrop-blur-md transition-colors hover:bg-white/20"
                                    style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', color: '#F5EDE3' }}
                                >
                                    {r.name} <span className="ml-1 opacity-60">· {r.cities.length}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══ REGION PICKER ═══ */}
            <section className="mx-auto max-w-[1200px] px-5 pt-14 sm:px-6 sm:pt-20" aria-labelledby="regions-heading">
                <h2 id="regions-heading" className="mb-6 font-bold leading-tight" style={{ ...serif, fontSize: 'clamp(1.7rem, 3.6vw, 2.4rem)', color: '#2D1A0E' }}>
                    Choose a region
                </h2>
                <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
                    {REGIONS.map(r => {
                        const on = r.id === activeRegion;
                        return (
                            <button
                                key={r.id}
                                onClick={() => pickRegion(r.id)}
                                aria-pressed={on}
                                className="group relative w-[78%] flex-shrink-0 snap-start overflow-hidden rounded-[22px] text-left outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-[#D97706] sm:w-auto"
                                style={{ boxShadow: on ? `0 0 0 3px ${r.color}, 0 18px 40px -20px rgba(45,26,14,0.5)` : '0 0 0 1px rgba(75,46,26,0.08)' }}
                            >
                                <div className="relative aspect-[4/3]">
                                    <Image src={REGION_COVERS[r.id]} alt="" fill sizes="(max-width:640px) 80vw, 380px" className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,11,5,0.88) 0%, rgba(20,11,5,0.2) 55%, transparent 80%)' }} />
                                    <div className="absolute inset-x-0 bottom-0 p-5">
                                        <p className="text-[12px] italic" style={{ ...serif, color: 'rgba(245,237,227,0.75)' }}>{r.nameVi}</p>
                                        <h3 className="text-[24px] font-bold leading-tight text-white" style={serif}>{r.name}</h3>
                                        <p className="mt-1 line-clamp-2 text-[13px] leading-snug" style={{ color: 'rgba(245,237,227,0.75)' }}>{r.tagline}</p>
                                    </div>
                                    {on && (
                                        <span className="absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold text-white" style={{ background: r.color }}>Selected</span>
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* ═══ REGION DETAIL ═══ */}
            <section id="travel-region" className="mx-auto max-w-[1200px] scroll-mt-24 px-5 py-14 sm:px-6 sm:py-20">
                <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-14">

                    {/* Map — sticky sidebar on desktop, collapsible card on mobile */}
                    <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
                        <div className="hidden rounded-3xl border border-[rgba(75,46,26,0.08)] bg-white p-5 lg:block">
                            <p className="mb-3 text-center text-[11px] font-bold uppercase" style={{ color: '#D97706', letterSpacing: '0.14em' }}>Tap a city</p>
                            {map}
                        </div>
                        <div className="overflow-hidden rounded-2xl border border-[rgba(75,46,26,0.1)] bg-white lg:hidden">
                            <button
                                onClick={() => setMapOpen(o => !o)}
                                aria-expanded={mapOpen}
                                className="flex w-full items-center justify-between px-4 py-3.5 text-[14px] font-semibold"
                                style={{ color: '#2D1A0E' }}
                            >
                                <span className="flex items-center gap-2"><MapIcon size={17} color="#D97706" /> {mapOpen ? 'Hide map' : 'Show on map'}</span>
                                <ChevronDown size={18} className="transition-transform" style={{ transform: mapOpen ? 'rotate(180deg)' : undefined, color: '#8A6E58' }} />
                            </button>
                            <AnimatePresence initial={false}>
                                {mapOpen && (
                                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.3, ease: EASE }} className="overflow-hidden">
                                        <div className="mx-auto max-w-[280px] px-4 pb-4">{map}</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </aside>

                    {/* Content */}
                    <AnimatePresence mode="wait">
                        <motion.div key={region.id} className="min-w-0" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35, ease: EASE }}>
                            <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase" style={{ color: region.color, letterSpacing: '0.12em' }}>
                                <span className="h-1.5 w-1.5 rounded-full" style={{ background: region.color }} /> {region.nameVi}
                            </div>
                            <h2 className="font-bold leading-[1.08]" style={{ ...serif, fontSize: 'clamp(2rem, 4.4vw, 3rem)', color: '#2D1A0E' }}>{region.name}</h2>
                            <p className="mt-3 max-w-2xl text-[16px] leading-relaxed" style={{ color: 'rgba(75,46,26,0.65)' }}>{region.tagline}</p>

                            {/* quick facts */}
                            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                <div className="flex items-start gap-3 rounded-2xl bg-white p-4" style={{ border: '1px solid rgba(75,46,26,0.08)' }}>
                                    <CalendarDays size={19} color="#D97706" className="mt-0.5 flex-shrink-0" />
                                    <div><p className="text-[11px] font-bold uppercase" style={{ color: 'rgba(75,46,26,0.5)', letterSpacing: '0.08em' }}>Best season</p><p className="text-[15px] font-semibold" style={{ color: '#2D1A0E' }}>{region.season}</p></div>
                                </div>
                                <div className="flex items-start gap-3 rounded-2xl bg-white p-4" style={{ border: '1px solid rgba(75,46,26,0.08)' }}>
                                    <UtensilsCrossed size={19} color="#D97706" className="mt-0.5 flex-shrink-0" />
                                    <div><p className="text-[11px] font-bold uppercase" style={{ color: 'rgba(75,46,26,0.5)', letterSpacing: '0.08em' }}>Must eat</p><p className="text-[15px] font-semibold" style={{ color: '#2D1A0E' }}>{region.mustEat}</p></div>
                                </div>
                            </div>

                            {/* city chips */}
                            <div className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden">
                                {[null, ...region.cities.map(c => c.name)].map(name => {
                                    const on = activeCity === name;
                                    return (
                                        <button
                                            key={name ?? 'all'}
                                            aria-pressed={on}
                                            onClick={() => setActiveCity(name)}
                                            className="relative flex-shrink-0 rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors"
                                            style={{ color: on ? '#fff' : '#4B2E1A' }}
                                        >
                                            {on && <motion.span layoutId="travel-city-chip" className="absolute inset-0 rounded-full" style={{ background: '#2D1A0E' }} transition={{ type: 'spring', stiffness: 420, damping: 36 }} />}
                                            {!on && <span className="absolute inset-0 rounded-full border border-[rgba(75,46,26,0.14)] bg-white" />}
                                            <span className="relative">{name ?? 'All cities'}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* city cards */}
                            <div className="mt-6 space-y-4">
                                {cities.map((city, i) => (
                                    <motion.article
                                        key={city.name}
                                        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(i, 5) * 0.05, duration: 0.3 }}
                                        className="overflow-hidden rounded-3xl bg-white"
                                        style={{ border: '1px solid rgba(75,46,26,0.08)' }}
                                    >
                                        <div className="p-5 sm:p-7">
                                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                                <h3 className="text-[26px] font-bold leading-tight" style={{ ...serif, color: '#2D1A0E' }}>{city.name}</h3>
                                                <span className="text-[15px] italic" style={{ ...serif, color: 'rgba(75,46,26,0.5)' }}>{city.nameVi}</span>
                                                <span className="ml-auto rounded-full px-2.5 py-1 text-[11px] font-semibold" style={{ background: `${region.color}14`, color: region.color }}>{city.type}</span>
                                            </div>
                                            <p className="mt-3 text-[15px] leading-[1.75]" style={{ color: 'rgba(45,26,14,0.78)' }}>{city.desc}</p>

                                            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                                                {[
                                                    { Icon: CalendarDays, label: 'Best time', value: city.bestTime },
                                                    { Icon: Sparkles, label: 'Highlights', value: city.highlight },
                                                    { Icon: BedDouble, label: 'Where to stay', value: city.stay },
                                                    { Icon: MapPin, label: 'Food streets', value: city.foodStreet },
                                                ].map(({ Icon, label, value }) => (
                                                    <div key={label} className="flex gap-3">
                                                        <Icon size={17} className="mt-0.5 flex-shrink-0" color="#B45309" aria-hidden />
                                                        <div>
                                                            <dt className="text-[11px] font-bold uppercase" style={{ color: 'rgba(75,46,26,0.5)', letterSpacing: '0.08em' }}>{label}</dt>
                                                            <dd className="text-[14px] leading-relaxed" style={{ color: '#2D1A0E' }}>{value}</dd>
                                                        </div>
                                                    </div>
                                                ))}
                                            </dl>

                                            {city.avoid && (
                                                <p className="mt-4 flex items-start gap-2 rounded-xl px-3.5 py-2.5 text-[13px] leading-snug" style={{ background: '#FEF3C7', color: '#92400E' }}>
                                                    <AlertTriangle size={15} className="mt-0.5 flex-shrink-0" /> <span><strong>Avoid:</strong> {city.avoid}</span>
                                                </p>
                                            )}
                                        </div>
                                        <Link
                                            href={city.bestDishSlug === 'recipes' ? '/recipes' : `/recipes/${city.bestDishSlug}`}
                                            className="group flex items-center justify-between border-t px-5 py-4 text-[14px] font-semibold transition-colors hover:bg-[#FBF8F4] sm:px-7"
                                            style={{ borderColor: 'rgba(75,46,26,0.07)', color: '#2D1A0E', textDecoration: 'none' }}
                                        >
                                            <span className="flex items-center gap-2"><UtensilsCrossed size={16} color="#D97706" /> Cook the local dish: {city.bestDish}</span>
                                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </motion.article>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* ═══ FOOD ROUTES ═══ */}
            <section className="border-t px-5 py-16 sm:px-6 sm:py-20" style={{ borderColor: 'rgba(75,46,26,0.08)' }}>
                <div className="mx-auto max-w-[1200px]">
                    <h2 className="font-bold leading-tight" style={{ ...serif, fontSize: 'clamp(1.7rem, 3.6vw, 2.4rem)', color: '#2D1A0E' }}>Suggested food routes</h2>
                    <p className="mt-2 text-[15px]" style={{ color: 'rgba(75,46,26,0.6)' }}>Itineraries built around eating, not sightseeing.</p>
                    <div className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
                        {FOOD_ROUTES.map((route, i) => {
                            const stops = route.cities.split('→').map(s => s.trim());
                            return (
                                <motion.div
                                    key={route.name}
                                    initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                                    className="flex w-[78%] flex-shrink-0 snap-start flex-col rounded-3xl bg-white p-6 sm:w-auto"
                                    style={{ border: '1px solid rgba(75,46,26,0.08)' }}
                                >
                                    <span className="mb-4 flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-bold" style={{ background: '#FEF3C7', color: '#B45309' }}>
                                        <Clock size={13} /> {route.days} days
                                    </span>
                                    <h3 className="text-[20px] font-bold leading-tight" style={{ ...serif, color: '#2D1A0E' }}>{route.name}</h3>
                                    <ol className="my-4 space-y-2 border-l-2 pl-4" style={{ borderColor: 'rgba(217,119,6,0.3)' }}>
                                        {stops.map((s, si) => (
                                            <li key={s} className="relative text-[14px] font-medium" style={{ color: '#4B2E1A' }}>
                                                <span className="absolute -left-[21.5px] top-1.5 h-2.5 w-2.5 rounded-full" style={{ background: si === 0 || si === stops.length - 1 ? '#D97706' : '#FBF8F4', border: '2px solid #D97706' }} />
                                                {s}
                                            </li>
                                        ))}
                                    </ol>
                                    <p className="mt-auto text-[13.5px] leading-relaxed" style={{ color: 'rgba(75,46,26,0.6)' }}>{route.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══ RULES ═══ */}
            <section className="px-5 pb-20 sm:px-6">
                <div className="mx-auto max-w-[1200px] rounded-[28px] px-6 py-10 sm:px-10 sm:py-12" style={{ background: '#2D1A0E' }}>
                    <h2 className="font-bold leading-tight" style={{ ...serif, fontSize: 'clamp(1.7rem, 3.6vw, 2.3rem)', color: '#F5EDE3' }}>Eating in Vietnam: <em style={{ color: '#F59E0B' }}>the rules</em></h2>
                    <p className="mt-2 text-[15px]" style={{ color: 'rgba(245,237,227,0.6)' }}>What every first-time food traveller should know.</p>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {RULES.map(({ Icon, rule, detail }) => (
                            <div key={rule} className="flex gap-4 rounded-2xl p-4" style={{ background: 'rgba(245,237,227,0.05)', border: '1px solid rgba(245,237,227,0.08)' }}>
                                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl" style={{ background: 'rgba(217,119,6,0.16)', color: '#F59E0B' }}><Icon size={19} /></span>
                                <div>
                                    <h3 className="text-[15px] font-semibold" style={{ color: '#F5EDE3' }}>{rule}</h3>
                                    <p className="mt-1 text-[13.5px] leading-relaxed" style={{ color: 'rgba(245,237,227,0.6)' }}>{detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
