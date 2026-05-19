'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { useRef, useState, useEffect } from 'react';

export default function FishSauceGuidePage() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    const { scrollYProgress } = useScroll({
        target: mounted ? scrollRef : undefined,
        offset: ['start start', 'end end'],
    });

    const progressBar = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    // ── SEO Article Schema ──
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'The Soul of Vietnamese Cooking: A Complete Guide to Fish Sauce (Nước Mắm)',
        description:
            'Everything you need to know about Vietnamese fish sauce — how it\'s made, how to choose a good one, the regional differences between Phú Quốc and Phan Thiết, and what to substitute when you can\'t find it.',
        image: 'https://flavor-nest-vietnam.vercel.app/images/stories/fish-sauce-hero.jpg',
        author: {
            '@type': 'Person',
            name: 'Quan Huy Nguyen',
        },
        publisher: {
            '@type': 'Organization',
            name: 'FlavorNest Vietnam',
            logo: {
                '@type': 'ImageObject',
                url: 'https://flavor-nest-vietnam.vercel.app/logo.png',
            },
        },
        datePublished: '2026-05-19',
        dateModified: '2026-05-19',
        keywords:
            'fish sauce, nước mắm, vietnamese fish sauce, phu quoc fish sauce, fish sauce substitute, what is fish sauce, how to use fish sauce, best fish sauce brand',
    };

    return (
        <>
            <Script
                id="fish-sauce-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <article ref={scrollRef} style={{ backgroundColor: '#FAFAF7' }}>
                {/* Reading Progress Bar */}
                <motion.div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        height: '3px',
                        backgroundColor: '#D97706',
                        width: progressBar,
                        zIndex: 100,
                        transformOrigin: 'left',
                    }}
                />

                {/* ── HERO SECTION ── */}
                <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0 }}>
                        <Image
                            src="/images/stories/fish-sauce-hero.jpg"
                            alt="Wooden barrels of fermenting Vietnamese fish sauce in Phú Quốc"
                            fill
                            priority
                            quality={85}
                            sizes="100vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>

                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,8,4,0.85) 0%, rgba(26,18,8,0.75) 60%, rgba(35,22,8,0.7) 100%)' }} />
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 65% 50%, rgba(217,119,6,0.18) 0%, transparent 55%)', pointerEvents: 'none' }} />

                    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 24px 80px', position: 'relative', width: '100%' }}>
                        <motion.nav
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 28 }}
                        >
                            {[['Home', '/'], ['Stories', '/stories'], ['Field Guide', '']].map(([label, href], i) => (
                                <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    {i > 0 && <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>}
                                    {href ? <Link href={href} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: 500 }}>{label}</Link>
                                        : <span style={{ color: '#D97706', fontWeight: 600 }}>{label}</span>}
                                </span>
                            ))}
                        </motion.nav>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}
                        >
                            <div style={{ width: 32, height: 2, background: '#D97706' }} />
                            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.24em', color: '#D97706', textTransform: 'uppercase' }}>Field Guide · Reference</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(48px, 8vw, 104px)', fontWeight: 700, color: 'white', margin: '0 0 32px', lineHeight: 0.95, letterSpacing: '-0.02em' }}
                        >
                            Nước<br /><span style={{ color: '#D97706', fontStyle: 'italic', fontWeight: 400 }}>Mắm.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(17px, 2vw, 20px)', maxWidth: 640, lineHeight: 1.7, margin: 0 }}
                        >
                            A complete guide to Vietnamese fish sauce — how it's made, how to choose one, why the good stuff costs five times more than supermarket bottles, and what to do when you can't find it at all.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ delay: 1.5, duration: 2.5, repeat: Infinity }}
                        style={{
                            position: 'absolute',
                            bottom: '24px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'rgba(255,255,255,0.6)',
                            fontSize: '11px',
                            letterSpacing: '2px',
                            fontFamily: 'DM Sans, sans-serif',
                            textAlign: 'center',
                        }}
                    >
                        SCROLL TO READ ↓
                    </motion.div>
                </section>

                {/* Article Body */}
                <div
                    style={{
                        maxWidth: '780px',
                        margin: '0 auto',
                        padding: '80px 24px 40px',
                        fontFamily: 'Georgia, "Iowan Old Style", "Palatino Linotype", serif',
                        color: '#2D1A0E',
                    }}
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            fontSize: '1.45rem',
                            lineHeight: 1.65,
                            fontStyle: 'italic',
                            color: '#4B2E1A',
                            marginBottom: '48px',
                            paddingLeft: '24px',
                            borderLeft: '3px solid #D97706',
                        }}
                    >
                        Take all the salt out of Vietnamese cooking, and the cuisine survives. Take away fish sauce, and it does not. Every dipping sauce, every soup base, every marinade, every stir-fry — the same dark amber liquid quietly underpins them all.
                    </motion.p>

                    <Section>
                        <DropCap>I</DropCap>n a small wooden warehouse on Phú Quốc, an island in the Gulf of Thailand off the southern Vietnamese coast, three hundred barrels of fermenting anchovies sit in near-darkness. Each barrel is taller than a man, made of <em>boi loi</em> wood, and contains roughly twelve tonnes of fish layered with sea salt at a precise ratio of three to one. The barrels have been sitting like this for eighteen months, sometimes two years. The fish are slowly turning, in the careful chemistry of enzymatic autolysis, into one of the most concentrated savory liquids on Earth.
                    </Section>

                    <Section>
                        This is <em>nước mắm</em> — Vietnamese fish sauce — and it is the single most important ingredient in Vietnamese cooking. Not chili. Not lemongrass. Not even rice. The salt-and-fish ferment that drips, drop by drop, out of those Phú Quốc barrels is the chemical foundation that gives Vietnamese food its specific weight, its character, its umami depth. A bowl of phở without fish sauce in the broth is a bowl of beef tea. A plate of bún chả without nước chấm is a plate of grilled meat. Strip away the dark amber liquid, and the cuisine collapses into its components.
                    </Section>

                    <PullQuote>
                        Vietnamese cooking is not seasoned with salt. It is seasoned with fish.
                    </PullQuote>

                    <InlineImage
                        src="/images/stories/fish-sauce-barrels.jpg"
                        alt="Traditional wooden barrels of fish sauce fermenting in Phú Quốc"
                        caption="Phú Quốc fish sauce barrels: each holds twelve tonnes of anchovies fermenting in sea salt for 12-24 months. The wood, the climate, the specific cá cơm fish — all are protected by EU geographical indication."
                    />

                    <H2>What Fish Sauce Actually Is</H2>

                    <Section>
                        At its simplest, nước mắm is the liquid produced when fish proteins break down in salt. Anchovies — small, oily, abundant in the warm waters of Southeast Asia — are layered with sea salt and pressed into wooden barrels. The salt does two things at once: it draws moisture out of the fish through osmosis, and it kills off the harmful bacteria that would otherwise spoil the catch. What it does not kill is the enzymes inside the fish themselves, which slowly continue to digest the proteins from the inside out. Over twelve to twenty-four months, the fish liquefy. The result is a clear amber liquid, the color of weak tea, with an aroma that announces itself across an entire room.
                    </Section>

                    <Section>
                        The product is the most concentrated source of natural glutamates available in any kitchen — more than aged Parmesan, more than dashi, more than even soy sauce. A single tablespoon of high-quality fish sauce contains more free amino acids than a small steak. This is why a few drops can transform a dish: the glutamates trigger the umami receptors on the tongue directly, in a way that few other ingredients manage.
                    </Section>

                    <Section>
                        Vietnam did not invent fermented fish sauce. The technique appears in cuisines from ancient Rome (where it was called <em>garum</em> and prized above almost any other ingredient) to coastal China, Thailand, the Philippines, and Cambodia. What Vietnam did — and what makes Vietnamese fish sauce distinct from its regional cousins — is refine the process into something that, at its best, achieves an extraordinary balance of complexity, clarity, and salinity. A great Vietnamese nước mắm is not just salty. It is salty, sweet, slightly funky, faintly caramelized, and impossibly clean.
                    </Section>

                    <SectionDivider />

                    <H2>How to Read a Fish Sauce Label</H2>

                    <Section>
                        The single most important number on any bottle of fish sauce is <strong>degrees N</strong> — degrees of nitrogen — abbreviated as <em>độ đạm</em> on Vietnamese labels. This figure measures the protein content of the sauce, and it is the closest thing to an objective quality grade in the entire category. The scale runs roughly from 10°N (industrial, heavily diluted) to 40°N+ (premium, made from the first pressing of the fermentation).
                    </Section>

                    <Section>
                        Here is what those numbers mean in practice:
                    </Section>

                    <Section>
                        <strong>10–20°N (industrial):</strong> Mass-market supermarket fish sauce. Often made from a single short fermentation, then diluted, sugared, and color-corrected. Functional for cooking, lacks depth. Brands: most generic bottles sold outside Asia.
                    </Section>

                    <Section>
                        <strong>20–30°N (mid-tier):</strong> The everyday cooking fish sauce in most Vietnamese kitchens. Three Crabs and Squid brands sit here. Good enough for marinades and stir-fries. Not what you want in a finishing dip.
                    </Section>

                    <Section>
                        <strong>30–40°N (premium):</strong> The first or second pressing from a long fermentation. Used for dipping sauces (<em>nước chấm</em>) and for finishing dishes. Phú Quốc and Phan Thiết premium brands. Significantly more expensive — typically four to ten times the supermarket price.
                    </Section>

                    <Section>
                        <strong>40°N+ (exceptional):</strong> The pure first pressing, called <em>nước mắm nhĩ</em> or <em>nước mắm cốt</em> in Vietnamese. Made only from the small clear stream that drips out of the barrel before any water is added back. Used sparingly, drop by drop, on raw seafood, fresh herbs, or as the centerpiece of a dipping bowl. The good stuff costs the equivalent of forty euros a liter.
                    </Section>

                    <PullQuote>
                        Degrees N is the only number on the bottle that actually matters. Everything else is marketing.
                    </PullQuote>

                    <H2>The Regional Styles</H2>

                    <Section>
                        Vietnam has two great fish sauce regions, and a quiet rivalry between them that has lasted for generations.
                    </Section>

                    <Section>
                        <strong>Phú Quốc</strong> is the most famous. The island sits in the Gulf of Thailand, surrounded by waters thick with <em>cá cơm than</em> — black anchovies — the small oily fish considered the gold standard for fermentation. The Phú Quốc style ferments these anchovies in wooden barrels for twelve to fifteen months, producing a sauce that is dark amber, slightly sweet, with a clean umami finish. In 2012, the European Union granted Phú Quốc fish sauce a <strong>Protected Geographical Indication</strong> — the same legal protection given to Champagne, Parmigiano Reggiano, and Roquefort. Any sauce labeled "Phú Quốc" sold in the EU must, by law, come from the island, made by traditional methods, with the specific fish caught in the surrounding waters.
                    </Section>

                    <Section>
                        <strong>Phan Thiết</strong> is the other great region, on the south-central coast. The Phan Thiết style uses a different anchovy species and a shorter fermentation, producing a lighter, sharper, more aggressively salty sauce. Many Vietnamese cooks prefer Phan Thiết for marinades, where the sharper edge cuts through fatty meat. Phú Quốc is more often preferred for finishing dips, where its smoother character pairs better with raw fish and herbs.
                    </Section>

                    <Section>
                        Beyond these two, there are smaller regional traditions worth knowing about. <strong>Nha Trang</strong> on the central coast produces an excellent middle-ground style. <strong>Cát Hải</strong> in the north makes a thicker, darker sauce favored in Hanoi cooking. And in my own home province of <strong>Phú Yên</strong>, small family operations still make <em>mắm cá cơm</em> — the same anchovy ferment but in clay jars rather than wooden barrels, producing a sauce with a slightly different mineral character that locals will defend against any other region.
                    </Section>

                    <SectionDivider />

                    <H2>How to Use Fish Sauce</H2>

                    <Section>
                        Fish sauce serves three roles in Vietnamese cooking: as a seasoning during cooking, as a marinade base, and as a finishing dip.
                    </Section>

                    <Section>
                        <strong>In broths and soups</strong>, fish sauce is added near the end of cooking, never at the start. Long simmering breaks down the volatile compounds that give the sauce its character, leaving only the salinity. A few tablespoons stirred into a finished phở broth in the last twenty minutes give the depth that salt alone cannot. The same is true for <em>canh chua</em>, <em>bún bò Huế</em>, and most other Vietnamese soups.
                    </Section>

                    <Section>
                        <strong>In marinades</strong>, fish sauce is the workhorse. The amino acids tenderize the protein. The salt season it. The natural sugars promote caramelization on the grill. A classic Vietnamese marinade — for grilled pork in bún chả, for example — is little more than fish sauce, sugar, lemongrass, garlic, and pepper. There is no soy sauce. There is no oyster sauce. The fish sauce does all of it.
                    </Section>

                    <Section>
                        <strong>In dipping sauces</strong>, fish sauce is the centerpiece. The classic <em>nước chấm</em> — the universal Vietnamese dipping sauce that appears on every table — is fish sauce thinned with water, sweetened with sugar, sharpened with lime juice and rice vinegar, and finished with garlic and chili. The ratio is something every Vietnamese cook knows by feel: roughly 3 parts water, 2 parts sugar, 2 parts fish sauce, 1 part lime, plus garlic and chili to taste. This single sauce, with minor variations, accompanies bánh xèo, bún chả, summer rolls, fresh shrimp, grilled meat platters — almost the entire repertoire of the Vietnamese table.
                    </Section>

                    <PullQuote>
                        The fish sauce in the bottle is potential. The fish sauce in nước chấm is the dish.
                    </PullQuote>

                    <InlineImage
                        src="/images/stories/fish-sauce-nuoc-cham.jpg"
                        alt="A small bowl of nuoc cham with chopped chili and garlic"
                        caption="Nước chấm: fish sauce + water + sugar + lime + garlic + chili. Six ingredients, infinite variations, on every Vietnamese table at every meal."
                    />

                    <SectionDivider />

                    <H2>The Best Brands to Buy</H2>

                    <Section>
                        For cooks outside Vietnam, choosing a good fish sauce at a Western grocery store is genuinely difficult. Most of what is labeled "fish sauce" in mainstream supermarkets is industrial 10-15°N product that should not be in a Vietnamese kitchen. Some specific recommendations that work:
                    </Section>

                    <Section>
                        <strong>Red Boat (40°N or 50°N):</strong> Premium Phú Quốc-style sauce produced specifically for the international market. Available in most well-stocked grocery stores in the US and Europe. Genuinely excellent. The 50°N version is one of the best fish sauces available outside Vietnam.
                    </Section>

                    <Section>
                        <strong>Mega Chef (30°N):</strong> Thai-produced but made to Vietnamese specifications. Widely available, reliable, good for everyday cooking.
                    </Section>

                    <Section>
                        <strong>Three Crabs (25°N):</strong> The default workhorse in many Vietnamese-American kitchens. Mid-tier quality, very affordable, fine for marinades and stir-fries.
                    </Section>

                    <Section>
                        <strong>Phú Quốc brands at Vietnamese groceries:</strong> If you have access to a Vietnamese grocery store, look for brands like Khải Hoàn, Hưng Thành, or Thanh Hà. These are the brands Vietnamese cooks buy at home, often in the 35-40°N range.
                    </Section>

                    <Section>
                        Avoid: anything labeled "Vietnamese-style" without specifying degrees N, anything sweetened or colored, and anything from a brand that does not say where the sauce was produced.
                    </Section>

                    <H2>What to Use When You Can't Find Fish Sauce</H2>

                    <Section>
                        Some honest substitutions, ranked from best to worst:
                    </Section>

                    <Section>
                        <strong>1. Soy sauce + anchovy paste:</strong> Three parts good soy sauce to one part anchovy paste, blended smooth. The closest functional substitute, capturing both the salinity and the fish character.
                    </Section>

                    <Section>
                        <strong>2. Soy sauce + Worcestershire:</strong> Two parts soy to one part Worcestershire. Both are fermented, both contain anchovies (Worcestershire literally lists them as an ingredient). Less elegant but workable.
                    </Section>

                    <Section>
                        <strong>3. Light soy sauce alone:</strong> Misses the umami depth entirely but provides salinity. A genuine compromise — the dish will taste flatter, but not bad.
                    </Section>

                    <Section>
                        For vegetarians, the question is harder. Some Vietnamese Buddhist temples produce a <em>nước tương chay</em> — vegetarian fish sauce made from fermented soy and pineapple — that approximates the function. Bragg's Liquid Aminos, mixed with a little miso, also works. None of these are quite the real thing, but for a vegetarian Vietnamese recipe, they are honest approximations.
                    </Section>

                    <SectionDivider />

                    <H2>A Note on the Smell</H2>

                    <Section>
                        The biggest barrier to fish sauce, for cooks who have never used it before, is the aroma straight from the bottle. It smells, frankly, like fish — strong, slightly fermented, with a top note that some find genuinely off-putting on first encounter. This is normal. This is also misleading. The smell of raw fish sauce is not the smell of fish sauce in a finished dish. Heat, dilution, and the other ingredients in a recipe transform the character entirely. The funky top note disappears within seconds of contact with hot oil or hot broth. What remains is the umami depth, the salinity, and a slight savory richness that has nothing fish-like about it at all.
                    </Section>

                    <Section>
                        Anyone who has eaten Caesar salad has eaten fish sauce, more or less — the anchovies in the dressing are the same family of small oily fish, fermented for a much shorter time, producing a less concentrated version of the same chemistry. The Worcestershire sauce on a steak in a London pub is the same thing again. Vietnamese fish sauce is not exotic. It is the same ancient technique that produced Roman garum, modern Worcestershire, and Italian colatura di alici — perfected, in this specific case, on a Vietnamese island for two thousand years.
                    </Section>

                    <Section>
                        The trick is to commit. Buy a bottle. Use it generously. Cook one Vietnamese recipe with it, then another. Within a week, the smell of the bottle will stop registering at all. Within a month, you will not understand how anyone cooks Southeast Asian food without it.
                    </Section>

                    <SectionDivider />

                    <H2>A Final Note</H2>

                    <Section>
                        My grandmother, in a small house in Phú Yên, kept her own clay jar of <em>mắm cá cơm</em> on the back porch. It was the only ingredient in her kitchen she would not let me touch as a child, on the entirely justified grounds that I would break the jar or spoil the seal. The fish were caught by my grandfather and his neighbors at dawn. The salt came from the salt pans an hour up the coast at Tuy Hòa. The whole operation took eighteen months from the catch to the first usable spoonful, and the result was the single most valued thing in her pantry.
                    </Section>

                    <Section>
                        When she gave a small jar to my mother as a wedding gift, it was meant to last a year. It lasted four months. My mother, in her own kitchen, used it on almost everything. The clay jar is empty now and has been for a long time, but I think of it every time I unscrew a new bottle of Red Boat. The chemistry is the same. The patience is the same. Somewhere on Phú Quốc, in a warehouse I have never visited, three hundred wooden barrels are doing the work my grandmother used to do on her back porch, slowly turning a catch of anchovies into the foundation of an entire cuisine.
                    </Section>

                    <Section>
                        This is what fish sauce is. Not just a seasoning. A two-thousand-year-old solution to the problem of how to preserve a coastal harvest through a long monsoon season — which, somewhere along the way, became the soul of the food a country eats.
                    </Section>

                    <SectionDivider />

                    {/* Tags */}
                    <div
                        style={{
                            marginTop: '32px',
                            display: 'flex',
                            gap: '8px',
                            flexWrap: 'wrap',
                        }}
                    >
                        {['#FishSauce', '#NuocMam', '#PhuQuoc', '#VietnameseCooking', '#FieldGuide', '#FoodHistory'].map(tag => (
                            <span
                                key={tag}
                                style={{
                                    padding: '6px 14px',
                                    backgroundColor: 'rgba(217,119,6,0.08)',
                                    color: '#D97706',
                                    borderRadius: '999px',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    fontFamily: 'DM Sans, sans-serif',
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Related */}
                    <div
                        style={{
                            marginTop: '48px',
                            padding: '32px',
                            backgroundColor: '#F5EDE3',
                            borderRadius: '20px',
                        }}
                    >
                        <p
                            style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '11px',
                                color: '#D97706',
                                fontWeight: 700,
                                letterSpacing: '2px',
                                marginBottom: '16px',
                            }}
                        >
                            COOK WITH FISH SAUCE
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <Link href="/recipes/pho-bo" style={{ color: '#2D1A0E', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none' }}>
                                Hanoi Beef Pho Recipe →
                            </Link>
                            <Link href="/stories/vietnamese-herb-plate-guide" style={{ color: '#2D1A0E', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none' }}>
                                The Vietnamese Herb Plate Guide →
                            </Link>
                            <Link href="/stories/the-art-of-banh-mi" style={{ color: '#2D1A0E', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none' }}>
                                The Art of Bánh Mì →
                            </Link>
                            <Link href="/stories/secrets-of-the-south-banh-xeo" style={{ color: '#2D1A0E', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none' }}>
                                Secrets of the South: Bánh Xèo →
                            </Link>
                        </div>
                    </div>

                    <div style={{ marginTop: '48px', textAlign: 'center' }}>
                        <Link href="/stories" style={{ color: '#D97706', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}>
                            ← Back to all stories
                        </Link>
                    </div>
                </div>
            </article>
        </>
    );
}

// ── Sub-components ──

function Section({ children }: { children: React.ReactNode }) {
    return (
        <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            style={{
                fontSize: '1.15rem',
                lineHeight: 1.85,
                marginBottom: '28px',
                color: '#2D1A0E',
            }}
        >
            {children}
        </motion.p>
    );
}

function H2({ children }: { children: React.ReactNode }) {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                fontWeight: 700,
                color: '#2D1A0E',
                marginTop: '40px',
                marginBottom: '20px',
                lineHeight: 1.2,
            }}
        >
            {children}
        </motion.h2>
    );
}

function PullQuote({ children }: { children: React.ReactNode }) {
    return (
        <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
                margin: '48px 0',
                padding: '24px 0',
                borderTop: '2px solid #D97706',
                borderBottom: '2px solid #D97706',
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                lineHeight: 1.4,
                color: '#4B2E1A',
                textAlign: 'center',
                fontWeight: 400,
            }}
        >
            {children}
        </motion.blockquote>
    );
}

function DropCap({ children }: { children: React.ReactNode }) {
    return (
        <span
            style={{
                float: 'left',
                fontFamily: 'Playfair Display, serif',
                fontSize: '5rem',
                fontWeight: 700,
                lineHeight: 0.85,
                color: '#D97706',
                paddingRight: '12px',
                paddingTop: '6px',
            }}
        >
            {children}
        </span>
    );
}

function SectionDivider() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '48px 0',
                gap: '12px',
            }}
        >
            {[0, 1, 2].map(i => (
                <span
                    key={i}
                    style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: '#D97706',
                        opacity: 0.6,
                    }}
                />
            ))}
        </div>
    );
}

function InlineImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
    return (
        <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            style={{ margin: '56px 0' }}
        >
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16 / 10',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: '#EFE6DA',
                    boxShadow: '0 16px 40px rgba(75,46,26,0.12)',
                }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    quality={85}
                    sizes="(max-width: 780px) 100vw, 780px"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <figcaption
                style={{
                    marginTop: '14px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    color: '#8B6F5A',
                    fontStyle: 'italic',
                    textAlign: 'center',
                    lineHeight: 1.6,
                    padding: '0 8px',
                }}
            >
                {caption}
            </figcaption>
        </motion.figure>
    );
}
