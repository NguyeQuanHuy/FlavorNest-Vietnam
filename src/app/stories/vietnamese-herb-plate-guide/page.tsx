'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { useRef, useState, useEffect } from 'react';

export default function VietnameseHerbPlateGuidePage() {
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
        headline: 'The Vietnamese Herb Plate: A Complete Field Guide',
        description:
            'A complete guide to the herbs Vietnam eats — what they are, how they taste, how to use them, and what to substitute when you can\'t find them. From perilla to fish mint to Vietnamese coriander.',
        image: 'https://flavor-nest-vietnam.vercel.app/images/stories/vietnamese-herbs-hero.jpg',
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
            'vietnamese herbs, rau thom, vietnamese herb plate, perilla, fish mint, vietnamese coriander, rau ram, asian herbs guide, vietnamese cooking herbs',
    };

    return (
        <>
            <Script
                id="vietnamese-herbs-schema"
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
                        backgroundColor: '#166534',
                        width: progressBar,
                        zIndex: 100,
                        transformOrigin: 'left',
                    }}
                />

                {/* ── HERO SECTION ── */}
                <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0 }}>
                        <Image
                            src="/images/stories/vietnamese-herbs-hero.jpg"
                            alt="A platter of fresh Vietnamese herbs — perilla, basil, mint, fish mint"
                            fill
                            priority
                            quality={85}
                            sizes="100vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>

                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(8,20,12,0.85) 0%, rgba(13,26,18,0.75) 60%, rgba(18,35,22,0.7) 100%)' }} />
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 65% 50%, rgba(22,101,52,0.25) 0%, transparent 55%)', pointerEvents: 'none' }} />

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
                                        : <span style={{ color: '#86EFAC', fontWeight: 600 }}>{label}</span>}
                                </span>
                            ))}
                        </motion.nav>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}
                        >
                            <div style={{ width: 32, height: 2, background: '#86EFAC' }} />
                            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.24em', color: '#86EFAC', textTransform: 'uppercase' }}>Field Guide · Reference</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(48px, 8vw, 104px)', fontWeight: 700, color: 'white', margin: '0 0 32px', lineHeight: 0.95, letterSpacing: '-0.02em' }}
                        >
                            The Herb<br /><span style={{ color: '#86EFAC', fontStyle: 'italic', fontWeight: 400 }}>Plate.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(17px, 2vw, 20px)', maxWidth: 640, lineHeight: 1.7, margin: 0 }}
                        >
                            A complete field guide to the herbs Vietnam eats — what they are, how they taste, how to use them, and what to substitute when you can't find them.
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
                            borderLeft: '3px solid #166534',
                        }}
                    >
                        The first thing a Western diner notices about a Vietnamese table is the herbs. A platter the size of a dinner plate, piled with leaves — some familiar, most not. This is not garnish. This is half the meal.
                    </motion.p>

                    <Section>
                        <DropCap>I</DropCap>n most cuisines, herbs are a finishing touch. A sprig of parsley on the steak. A few basil leaves torn over pasta. In Vietnam, herbs are a structural element. A bowl of phở arrives with a separate plate piled high with green stuff — Thai basil, sawtooth coriander, mint, sometimes fish mint, sometimes culantro — and the diner is expected to add them generously. Not three leaves. Handfuls. A bowl of bún bò Huế without its herb platter is not really bún bò Huế. The dish, in some essential way, is not complete until the eater finishes it themselves.
                    </Section>

                    <Section>
                        This is one of the genuine difficulties of cooking Vietnamese food outside Vietnam. The recipes, even the good ones, often list herbs that the average European or American grocery store has never stocked. <em>Rau răm</em>, the recipe will say. Or <em>rau húng quế</em>, or <em>tía tô</em>, or — most alarmingly — <em>rau diếp cá</em>, fish mint, an herb so polarizing that even some Vietnamese cooks will leave it off the plate.
                    </Section>

                    <Section>
                        What follows is a complete field guide to the herbs you will encounter in real Vietnamese cooking. How to identify them. How they taste. What dishes they belong to. And — for the cook in Berlin or Boston who cannot find <em>rau răm</em> at any price — what to substitute when the real thing is not available.
                    </Section>

                    <PullQuote>
                        Herbs in Vietnam are not garnish. They are the architecture of every dish that contains them.
                    </PullQuote>

                    <InlineImage
                        src="/images/stories/rau-thom-min.jpg"
                        alt="A traditional Vietnamese herb platter with various leaves"
                        caption="The traditional rau thơm platter that accompanies almost every Vietnamese meal — Thai basil, perilla, mint, sawtooth coriander, fish mint, often more."
                    />

                    <SectionDivider />

                    <H2>Thai Basil — Húng Quế</H2>

                    <Section>
                        The most accessible Vietnamese herb for Western cooks, and the most commonly substituted with the wrong thing. Thai basil — <em>húng quế</em> — is a distinct cultivar of Ocimum basilicum, with narrow pointed green leaves, purple stems, and an anise-licorice note that Italian basil entirely lacks. The leaves are firmer and hold their shape in hot broth, which is why they are the basil of choice for pho.
                    </Section>

                    <Section>
                        <strong>Where it appears:</strong> Phở, bánh xèo, bún bò Huế, almost any noodle soup or grilled meat platter.<br />
                        <strong>Taste:</strong> Sweet anise, with a peppery finish. Stronger than Italian basil.<br />
                        <strong>Substitute:</strong> Italian basil works in a pinch but loses the anise note. If you can find Thai basil at a Southeast Asian grocer, always use it. It freezes badly — buy fresh.
                    </Section>

                    <H2>Vietnamese Coriander — Rau Răm</H2>

                    <Section>
                        Confusingly named, because it is not coriander at all. <em>Rau răm</em> (Polygonum odoratum) is a low-growing herb in the buckwheat family, with long pointed dark green leaves often marked with a maroon V-shape near the tip. The flavor is unlike any common Western herb — a sharp, peppery, slightly metallic note that bridges between coriander and arugula.
                    </Section>

                    <Section>
                        <strong>Where it appears:</strong> Eaten with <em>hột vịt lộn</em> (balut), <em>bún thang</em>, chicken salad <em>gỏi gà</em>, almost any duck dish.<br />
                        <strong>Taste:</strong> Peppery, citrusy, slightly soapy on first contact, addictive after the third bite.<br />
                        <strong>Substitute:</strong> Honestly difficult. The closest is a mix of cilantro plus a small pinch of fresh mint plus a few rocket leaves. None of these alone capture it.
                    </Section>

                    <H2>Perilla — Tía Tô</H2>

                    <Section>
                        The Vietnamese cousin of the Japanese shiso, though they are technically the same plant (Perilla frutescens) with different cultivars. <em>Tía tô</em> has leaves that are green on top and dramatic purple-red underneath, giving it an unmistakable two-tone appearance. The flavor is herbaceous and complex — somewhere between mint, basil, and a faint warming note that suggests cinnamon.
                    </Section>

                    <Section>
                        <strong>Where it appears:</strong> Bánh xèo wraps, bún chả, salads, summer rolls, sometimes folded into omelets.<br />
                        <strong>Taste:</strong> Minty-cinnamon-anise, more complex than it sounds.<br />
                        <strong>Substitute:</strong> Japanese shiso if you can find it (same plant). Otherwise, a mix of mint and basil with a pinch of cinnamon. The visual drama of the purple leaf is irreplaceable.
                    </Section>

                    <H2>Fish Mint — Rau Diếp Cá</H2>

                    <Section>
                        The herb that divides every Vietnamese family. <em>Rau diếp cá</em> (Houttuynia cordata) has heart-shaped green leaves and a flavor that lives up to its English name with alarming accuracy — it tastes, unmistakably, of fresh raw fish. Some Vietnamese eaters consider it the apex herb of the country, with a clean ferrous note that cuts through fatty meats like nothing else. Others — including, in my experience, most foreigners — find it impossible on first encounter.
                    </Section>

                    <Section>
                        <strong>Where it appears:</strong> Central Vietnamese cuisine — bánh xèo wraps in Hội An, bún bò Huế, fresh spring rolls.<br />
                        <strong>Taste:</strong> Genuinely fish-like. Metallic, faintly oily, surprisingly cooling.<br />
                        <strong>Substitute:</strong> There is no substitute. Either you find it, or you skip it. Most non-Asian groceries will not stock it. Some Vietnamese groceries in Europe sell it under the name <em>chameleon plant</em>.
                    </Section>

                    <PullQuote>
                        "If you don't eat fish mint on your first visit, you don't really know Vietnam yet."
                    </PullQuote>

                    <SectionDivider />

                    <H2>Sawtooth Coriander — Ngò Gai</H2>

                    <Section>
                        Long, serrated, dark green leaves that resemble dandelion at first glance. <em>Ngò gai</em> (Eryngium foetidum) is also called culantro in English — closely related to cilantro but vastly more concentrated. A single leaf has the flavor of an entire bunch of cilantro, with a slight earthy undertone that pairs beautifully with rich broths.
                    </Section>

                    <Section>
                        <strong>Where it appears:</strong> Bún bò Huế (essential), some pho variations, fish soups.<br />
                        <strong>Taste:</strong> Concentrated cilantro with an earthy, almost mossy depth.<br />
                        <strong>Substitute:</strong> Triple the amount of regular cilantro. You won't get the intensity but you'll approximate the function.
                    </Section>

                    <H2>Vietnamese Mint — Húng Lủi</H2>

                    <Section>
                        Spearmint, essentially — but selected over generations for a particular bright sweetness. <em>Húng lủi</em> is what shows up on the rau thơm platter when someone says simply "mint" in a Vietnamese recipe. The leaves are slightly smaller and more pointed than the spearmint in a Mediterranean salad, but the flavor is recognizable.
                    </Section>

                    <Section>
                        <strong>Where it appears:</strong> Summer rolls, bún chả, bún thịt nướng, virtually any cold rice noodle dish.<br />
                        <strong>Taste:</strong> Clean, sweet, classic spearmint.<br />
                        <strong>Substitute:</strong> Spearmint from any grocery store. This is the easiest swap on the list.
                    </Section>

                    <H2>Asian Coriander — Ngò Rí</H2>

                    <Section>
                        Standard cilantro / coriander — the same plant Europeans and Americans know. <em>Ngò rí</em> (Coriandrum sativum) shows up in almost every Vietnamese dish, finely chopped over phở and bún, scattered over salads, sometimes used in the broth itself. The roots and stems, often discarded in Western kitchens, are used in Vietnamese marinades and stocks for a deeper, earthier flavor.
                    </Section>

                    <Section>
                        <strong>Where it appears:</strong> Almost everywhere.<br />
                        <strong>Taste:</strong> Bright, citrusy, fresh — the flavor your grocery store calls "cilantro."<br />
                        <strong>Substitute:</strong> No need. Available everywhere.
                    </Section>

                    <H2>Rice Paddy Herb — Ngò Om</H2>

                    <Section>
                        A semi-aquatic herb that grows in the flooded paddies of the Mekong Delta. <em>Ngò om</em> (Limnophila aromatica) has small round leaves on slim stems and a distinct flavor — a cross between cumin, citrus, and parsley — that is essential to the sour soups of southern Vietnam.
                    </Section>

                    <Section>
                        <strong>Where it appears:</strong> <em>Canh chua</em> (sour fish soup), some hotpot variations, occasionally in seafood dishes.<br />
                        <strong>Taste:</strong> Cumin-citrus, slightly bitter, completely unique.<br />
                        <strong>Substitute:</strong> Difficult. A mix of cilantro and a tiny pinch of cumin gets you in the general territory.
                    </Section>

                    <SectionDivider />

                    <H2>How to Use the Herb Plate</H2>

                    <Section>
                        The first rule, the one Vietnamese cooks will tell you with mild surprise that it needs to be said at all: <strong>use a lot</strong>. The herb plate that arrives with your phở is not a decorative gesture. It is an ingredient. A Western diner will sometimes pick three leaves of basil and set them politely on top of the broth. A Vietnamese diner will tear an entire bunch into the bowl, push it under with the chopsticks, and then ask for more.
                    </Section>

                    <Section>
                        The second rule: <strong>tear, don't slice</strong>. Herbs in Vietnamese cooking are almost always added whole or torn by hand, never finely chopped (with the exception of the cilantro garnish on top of phở and the scallion in soups). Tearing releases the essential oils gradually as you eat. Chopping releases everything at once, then dissipates within minutes.
                    </Section>

                    <Section>
                        The third rule: <strong>add herbs at the end, not the start</strong>. Heat destroys the volatile compounds that give these herbs their character. Even in dishes where herbs go into the bowl with hot broth — phở, bún bò Huế — they are added by the eater at the table, not by the cook in the kitchen. The cook's job is to provide the platter. The eater's job is to finish the dish.
                    </Section>

                    <PullQuote>
                        Use more than you think. Tear, don't slice. Add them last. These are the three rules that turn a Vietnamese recipe at home into a Vietnamese meal.
                    </PullQuote>

                    <InlineImage
                        src="/images/stories/cho-rau-ha-noi.jpg"
                        alt="A Vietnamese market vendor selling fresh herbs"
                        caption="A morning herb market in Hanoi: rau răm in one basket, tía tô in another, ngò gai bundled with rubber bands. The vendors expect customers to buy by the handful, not the sprig."
                    />

                    <SectionDivider />

                    <H2>Where to Find Vietnamese Herbs Outside Vietnam</H2>

                    <Section>
                        For European and American cooks, sourcing real Vietnamese herbs is the single biggest practical obstacle to cooking authentic Vietnamese food at home. A few suggestions that work:
                    </Section>

                    <Section>
                        <strong>Asian grocery stores</strong> are the obvious first stop. Look for Vietnamese, Thai, Lao, or Cambodian markets specifically — Chinese and Japanese groceries rarely stock the full range. Larger cities have entire Vietnamese supermarkets that carry every herb on this list.
                    </Section>

                    <Section>
                        <strong>Farmers markets in summer</strong> sometimes have small growers who specialize in Asian herbs. In Germany, France, and the UK, demand has grown enough that some specialty growers have started commercial production. Worth asking.
                    </Section>

                    <Section>
                        <strong>Growing your own</strong> is genuinely the best long-term answer. Vietnamese coriander (<em>rau răm</em>) and perilla (<em>tía tô</em>) both grow easily in a sunny window box or balcony, even in cool climates. Thai basil propagates from supermarket stems in a glass of water. Seeds for the rarer herbs are available online from specialty Asian seed suppliers like Kitazawa Seeds.
                    </Section>

                    <Section>
                        And finally, the honest truth that no recipe website wants to say: <strong>make the dish with what you can get</strong>. A bowl of pho with only Italian basil and supermarket cilantro is not the same as the original. It is also not a failure. The dish is more forgiving than the recipe makes it sound. Better an imperfect pho with the herbs you have than no pho at all because you cannot find <em>ngò gai</em>.
                    </Section>

                    <SectionDivider />

                    <H2>A Final Note on Why It Matters</H2>

                    <Section>
                        There is a reason Vietnamese cuisine has the most aromatic herb tradition of any major Asian cuisine. The food is built around contrast. Hot broth meets cool herbs. Rich pork belly meets sharp pickled vegetables. Fatty grilled meat meets the cleansing bite of fish mint. The herbs are not there to make the dish prettier. They are there to do the same structural work that acid does in Italian cooking, or that fat does in French — to provide a counterweight that keeps every bite from becoming heavy.
                    </Section>

                    <Section>
                        This is why a Vietnamese meal eaten without the herb plate tastes flat to anyone who knows the real version. The protein is there. The starch is there. The seasoning is there. But the contrast is gone, and with it, the architecture that makes Vietnamese food taste like Vietnamese food rather than a generic Southeast Asian approximation.
                    </Section>

                    <Section>
                        So next time you make pho at home, do this one thing: buy three times as many herbs as the recipe calls for. Tear them, do not chop them. Add them at the table, not in the kitchen. Watch the bowl change as the herbs sink in. That moment, when the steam carries the perilla and the basil up into the air at the same time, is the moment Vietnamese cooking actually begins.
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
                        {['#VietnameseHerbs', '#RauThom', '#Perilla', '#FishMint', '#VietnameseCooking', '#FieldGuide', '#AsianHerbs'].map(tag => (
                            <span
                                key={tag}
                                style={{
                                    padding: '6px 14px',
                                    backgroundColor: 'rgba(22,101,52,0.08)',
                                    color: '#166534',
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
                            USE THESE HERBS IN
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <Link href="/recipes/pho-bo" style={{ color: '#2D1A0E', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none' }}>
                                Hanoi Beef Pho Recipe →
                            </Link>
                            <Link href="/stories/symphony-of-hanois-dawn" style={{ color: '#2D1A0E', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none' }}>
                                The Symphony of Hanoi's Dawn →
                            </Link>
                            <Link href="/stories/secrets-of-the-south-banh-xeo" style={{ color: '#2D1A0E', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none' }}>
                                Secrets of the South: Bánh Xèo →
                            </Link>
                            <Link href="/stories/the-art-of-banh-mi" style={{ color: '#2D1A0E', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none' }}>
                                The Art of Bánh Mì →
                            </Link>
                        </div>
                    </div>

                    <div style={{ marginTop: '48px', textAlign: 'center' }}>
                        <Link href="/stories" style={{ color: '#166534', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}>
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
                borderTop: '2px solid #166534',
                borderBottom: '2px solid #166534',
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                lineHeight: 1.4,
                color: '#166534',
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
                color: '#166534',
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
                        backgroundColor: '#166534',
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
                    boxShadow: '0 16px 40px rgba(22,101,52,0.12)',
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
