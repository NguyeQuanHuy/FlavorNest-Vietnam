'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { useRef, useState, useEffect } from 'react';

export default function VietnameseSpringRollsStoryPage() {
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
        headline: 'Vietnamese Spring Rolls: Fresh (Gỏi Cuốn) vs Fried (Chả Giò) — The Complete Guide',
        description:
            'Everything you need to know about Vietnamese spring rolls — the difference between gỏi cuốn and chả giò, the regional names (nem cuốn, nem rán), the history, and how to make both at home.',
        image: 'https://flavor-nest-vietnam.vercel.app/images/stories/vietnamese-spring-rolls-hero.jpg',
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
            'vietnamese spring rolls, goi cuon, cha gio, nem ran, nem cuon, summer rolls, fresh spring rolls, fried spring rolls, vietnamese rice paper rolls, peanut sauce',
    };

    return (
        <>
            <Script
                id="spring-rolls-schema"
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
                            src="/images/stories/vietnamese-spring-rolls-hero.jpg"
                            alt="Vietnamese fresh spring rolls (gỏi cuốn) with shrimp, herbs and peanut sauce"
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
                            {[['Home', '/'], ['Stories', '/stories'], ['Vietnamese Classics', '']].map(([label, href], i) => (
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
                            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.24em', color: '#D97706', textTransform: 'uppercase' }}>Vietnamese Classics · Longread</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(48px, 8vw, 104px)', fontWeight: 700, color: 'white', margin: '0 0 32px', lineHeight: 0.95, letterSpacing: '-0.02em' }}
                        >
                            Spring<br /><span style={{ color: '#D97706', fontStyle: 'italic', fontWeight: 400 }}>Rolls.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(17px, 2vw, 20px)', maxWidth: 640, lineHeight: 1.7, margin: 0 }}
                        >
                            The complete story of Vietnamese spring rolls — fresh and fried, gỏi cuốn and chả giò, the regional names, the contested origins, and the surprisingly precise art of rolling rice paper.
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
                        There is a small confusion that follows Vietnamese spring rolls across every restaurant menu in the Western world. Two different dishes share one English name. One is cool, fresh, and translucent. The other is hot, crispy, and golden. Both are called "spring rolls." Both are Vietnamese. They are not the same food.
                    </motion.p>

                    <Section>
                        <DropCap>I</DropCap>n a small kitchen in District 1 of Saigon, a woman is rolling fresh rice paper around a layer of shrimp, herbs, pork, and rice vermicelli. The motion is fast — one continuous turn of the wrist that closes the roll without trapping air, without tearing the paper, without spilling the contents. She can make twenty in three minutes. She has been making them since 1991. Across the street, in another kitchen, a man is folding stiffer rice paper around ground pork, glass noodles, and wood ear mushrooms, then dropping the closed rolls into a wok of hot oil where they puff and crackle and turn the color of dark honey. He calls his rolls <em>chả giò</em>. She calls hers <em>gỏi cuốn</em>. Most Western menus translate both as "spring rolls," and the resulting confusion has lasted for fifty years.
                    </Section>

                    <Section>
                        The confusion is so widespread that it has its own SEO problem. The most common Google query about Vietnamese rolls is some version of "what is the difference between gỏi cuốn and chả giò" — a question asked tens of thousands of times each month, in a dozen languages, by diners who have ordered one expecting the other and felt either delighted or betrayed by the result. The answer is simple in principle and instructive in detail. Two dishes. One technique in common. Almost everything else different.
                    </Section>

                    <PullQuote>
                        "Strictly speaking, gỏi cuốn is a fresh roll made with rehydrated rice paper. Broadly speaking, the term spring roll can also include rice paper rolls that have been deep fried." — Peter Cuong Franklin, chef of Anan Saigon
                    </PullQuote>

                    <InlineImage
                        src="/images/stories/spring-rolls-comparison.jpg"
                        alt="Fresh and fried Vietnamese spring rolls side by side"
                        caption="Two dishes, one English name. Gỏi cuốn (left): fresh, cool, herb-forward. Chả giò (right): hot, crispy, golden. The wrappers are the same material. Everything else is different."
                    />

                    <H2>What Each Roll Actually Is</H2>

                    <Section>
                        <strong>Gỏi cuốn</strong>, the fresh version, is what most Western diners call "summer rolls" or "fresh spring rolls" or sometimes simply "Vietnamese rolls." It is a translucent rice paper wrapper around a cool filling of shrimp, sliced pork belly, rice vermicelli noodles, lettuce, and a generous handful of fresh herbs — Thai basil, mint, sometimes Vietnamese coriander. The wrapper is rehydrated by a brief dip in warm water, then rolled tight around the filling while still flexible. The finished roll is served cold or at room temperature, dipped into either a peanut-hoisin sauce or a thinned fish sauce. It is, by any reasonable measure, one of the lightest and most refreshing appetizers in any cuisine.
                    </Section>

                    <Section>
                        <strong>Chả giò</strong>, the fried version, is a different animal entirely. The wrapper is still rice paper, but applied differently — not rehydrated and rolled, but used while drier, with the filling sealed inside before the whole roll is deep-fried. Inside is a savory mixture of ground pork, glass noodles, wood ear mushrooms, shredded carrot, and either jicama (in the south) or crab (in the north). The frying produces a crust that does not just crisp but <em>shatters</em> — a series of small bubbles in the rice paper that collapse with a distinctive sound on the first bite. The roll is served hot, often wrapped again in a lettuce leaf with fresh herbs before being dipped in <em>nước chấm</em>.
                    </Section>

                    <Section>
                        The two dishes feel like opposites, and in important ways they are. Gỏi cuốn is cool. Chả giò is hot. Gỏi cuốn is herbal. Chả giò is meaty. Gỏi cuốn is finished by the cook. Chả giò is finished by the eater, in a small ritual of wrapping that turns the second dish into half a salad. The only ingredient they share, beyond fish sauce, is the rice paper itself — and even that is used in opposite ways, soft and flexible in one case, dry and crisp in the other.
                    </Section>

                    <SectionDivider />

                    <H2>The Regional Names Problem</H2>

                    <Section>
                        The dishes are made more confusing by the fact that Vietnam itself does not agree on what to call them. The names change depending on which region of the country you are in, and the casual cook from one province will often be genuinely surprised to learn that the casual cook from another province uses an entirely different word for the same food.
                    </Section>

                    <Section>
                        <strong>In southern Vietnam</strong>, where most Vietnamese-American food traditions originated, the fresh roll is called <em>gỏi cuốn</em> — literally "salad roll." The fried version is <em>chả giò</em>, pronounced roughly "cha yo," meaning "rolled sausage." Most Western menus use these southern names by default, because most diaspora Vietnamese restaurants were founded by people from the south after 1975.
                    </Section>

                    <Section>
                        <strong>In northern Vietnam</strong>, the same two dishes have different names. The fresh roll is <em>nem cuốn</em>. The fried version is <em>nem rán</em>, meaning literally "fried nem." The northern fried version traditionally uses crab in the filling, where the southern version uses pork and jicama.
                    </Section>

                    <Section>
                        <strong>In central Vietnam</strong>, around Hue and Hội An, the fresh version is sometimes called simply <em>bánh tráng cuốn</em> — "rice paper roll" — with no distinguishing adjective at all. The naming is less standardized here, and asking for spring rolls in Hue often produces a brief negotiation about exactly what you mean.
                    </Section>

                    <Section>
                        For Western cooks following recipes, this matters more than it sounds. A recipe that calls for <em>nem rán</em> assumes crab in the filling. A recipe for <em>chả giò</em> assumes pork. A recipe for <em>gỏi cuốn</em> assumes shrimp. The recipes are not interchangeable, even though all three are sometimes translated as "Vietnamese spring rolls."
                    </Section>

                    <PullQuote>
                        Three regions, two cooking methods, six names, one ingredient in common. Vietnamese spring rolls are not a single dish — they are a category.
                    </PullQuote>

                    <H2>Where Spring Rolls Came From</H2>

                    <Section>
                        The honest answer to where Vietnamese spring rolls originated is: not Vietnam, exactly. Most food historians agree that the spring roll concept arrived in Vietnam from China, brought by Chinese immigrants during the early migrations that began as early as the second century CE. The original Chinese spring roll — <em>chūn juǎn</em>, literally "spring scroll" — was a thin wheat-flour wrapper folded around seasonal spring vegetables and eaten during Lunar New Year celebrations. The dish was practical, portable, and tied to the rituals of welcoming spring after a long northern winter.
                    </Section>

                    <Section>
                        What Vietnam did with the concept, over the following centuries, was transform it. The wheat wrapper became rice paper — <em>bánh tráng</em> — which Vietnam could produce cheaply from its abundant rice harvests. The cabbage and bamboo shoot filling of the Chinese version was replaced with what was actually available: shrimp from the coast, pork from the village pig, herbs from the kitchen garden, the rice vermicelli that came out of every Vietnamese mill. And at some point — the historians cannot agree on exactly when — somebody had the idea to skip the cooking step entirely. The wrapper was rehydrated in warm water rather than fried. The filling went in cool. The roll was served fresh.
                    </Section>

                    <Section>
                        This was the moment gỏi cuốn was born — and it was, in the truest sense, a Vietnamese invention. Nothing in Chinese cuisine quite resembled it. The combination of cool rice paper, raw herbs, cooked shrimp, and cold noodles is unmistakably southern Vietnamese in logic. The dish almost certainly originated in the warm southern delta, where the climate made cool foods more appealing than hot ones, and where the herb gardens of the Mekong provided the ingredients in abundance.
                    </Section>

                    <Section>
                        There is a charming legend, occasionally repeated, that gỏi cuốn was invented during the reign of King Nguyễn Huệ Quang Trung in the late 1700s, when soldiers on a long march needed portable food that did not need cooking. The story is probably apocryphal — the historical record is thin — but it captures something true about the dish. Gỏi cuốn is fundamentally <em>portable</em>. It travels. It does not require a stove. It can be made anywhere a cook has access to clean water and fresh ingredients. This is one of the reasons it spread so quickly through the Vietnamese diaspora.
                    </Section>

                    <SectionDivider />

                    <H2>The Sauces That Define Them</H2>

                    <Section>
                        The two rolls require two different dipping sauces, and the choice of sauce is not optional. The wrong sauce on the right roll will diminish both. The Vietnamese cook does not negotiate on this.
                    </Section>

                    <Section>
                        <strong>For gỏi cuốn</strong>, the traditional sauce is <em>tương xào</em> — a thick peanut-hoisin sauce. It is made by sautéing minced garlic in oil, then adding hoisin sauce and a tablespoon of smooth peanut butter, thinning with a little coconut water or stock, finishing with chopped roasted peanuts and a pinch of chili. The result is rich, sweet, slightly tangy, with enough body to cling to the cool rice paper. The Vietnamese-American diaspora version sometimes simplifies this to a hoisin-peanut blend straight from the bottle. The simpler version works, but loses the cooked aromatics that elevate the original.
                    </Section>

                    <Section>
                        <strong>For chả giò</strong>, the sauce is <em>nước chấm</em> — the universal Vietnamese dipping sauce that also accompanies bún chả, bánh xèo, and dozens of other dishes. It is fish sauce thinned with water, sweetened with sugar, sharpened with lime and rice vinegar, finished with minced garlic, chili, and sometimes shreds of pickled carrot. The sauce is bright, acidic, and salty — exactly the counterweight a deep-fried roll needs. Pour it generously over the chả giò after wrapping each one in a lettuce leaf with herbs. The result is one of the most balanced appetizer experiences in any cuisine.
                    </Section>

                    <Section>
                        A small dispute: some Vietnamese-American restaurants serve gỏi cuốn with peanut-hoisin sauce <em>and</em> a small dish of nước chấm on the side, letting the diner choose. This is a diaspora innovation and, to most traditional Vietnamese cooks, slightly suspect. The peanut-hoisin is the correct sauce. Nước chấm on a fresh roll is, at best, a backup plan.
                    </Section>

                    <InlineImage
                        src="/images/stories/spring-rolls-peanut-sauce.jpg"
                        alt="A bowl of peanut sauce next to fresh spring rolls"
                        caption="The peanut-hoisin sauce — tương xào — is not optional for gỏi cuốn. Sautéed garlic, hoisin, peanut butter, coconut water, chopped peanuts. Five minutes of cooking elevates a bottled sauce into something that belongs in the dish."
                    />

                    <SectionDivider />

                    <H2>How to Roll Rice Paper (The Actual Hard Part)</H2>

                    <Section>
                        The single biggest barrier to making good gỏi cuốn at home is the rolling. Rice paper is unforgiving. Soak it too briefly and it tears when you wrap. Soak it too long and it turns into a sticky mess that adheres to your hands, to the cutting board, and to itself. The window between underhydrated and overhydrated is roughly fifteen seconds, and that window depends on the specific brand of rice paper, the temperature of the water, and the humidity of the kitchen.
                    </Section>

                    <Section>
                        Here is the method that works:
                    </Section>

                    <Section>
                        <strong>One:</strong> Fill a shallow pie dish or deep plate with warm — not hot — water. The water should feel just slightly warmer than your hand.
                    </Section>

                    <Section>
                        <strong>Two:</strong> Take one sheet of rice paper. Submerge it for about ten seconds — count slowly, "one Mississippi, two Mississippi" — until the paper has just begun to soften but is still stiff at the edges.
                    </Section>

                    <Section>
                        <strong>Three:</strong> Lift the paper out and lay it flat on a clean work surface. A lightly oiled wooden cutting board works better than a plate — the rice paper will not stick as aggressively.
                    </Section>

                    <Section>
                        <strong>Four:</strong> The paper will continue to soften on the board over the next thirty seconds. Wait until it is fully pliable but not yet sticky-soft. This is the rolling window.
                    </Section>

                    <Section>
                        <strong>Five:</strong> Add your filling in a horizontal line about a third of the way up from the bottom edge. Less filling than you think — overstuffed rolls split.
                    </Section>

                    <Section>
                        <strong>Six:</strong> Fold the bottom edge up over the filling. Fold the left and right sides in toward the center. Then roll the whole bundle up tightly, like a small burrito, ending with the seam on the bottom.
                    </Section>

                    <Section>
                        The first three rolls you make will be ugly. The next ten will be passable. By the twentieth, you will have the rhythm, and the rolls will start to look like the ones at restaurants. The skill is not difficult — it is just unfamiliar. A Vietnamese mother who has made these for thirty years can make a perfect roll in eight seconds. You will get there.
                    </Section>

                    <PullQuote>
                        The technique is not hard. The technique is just specific. Twenty rolls in, you have it. Until then, expect failure with grace.
                    </PullQuote>

                    <H2>The Filling Variations Worth Knowing</H2>

                    <Section>
                        The traditional gỏi cuốn is shrimp and pork. Most Vietnamese kitchens, however, do not feel particularly bound to the traditional version. A few worthwhile variations:
                    </Section>

                    <Section>
                        <strong>Gỏi cuốn tôm thịt:</strong> The classic. Boiled shrimp split lengthwise, sliced pork belly, rice vermicelli, lettuce, mint, Thai basil. Served with peanut-hoisin sauce.
                    </Section>

                    <Section>
                        <strong>Gỏi cuốn nem nướng:</strong> Filled with grilled lemongrass pork sausages (nem nướng) instead of boiled pork. Heavier, smokier, served as a small meal rather than an appetizer. Originated in Nha Trang on the central coast.
                    </Section>

                    <Section>
                        <strong>Gỏi cuốn chay (vegetarian):</strong> Tofu, mushrooms, pickled carrot, fresh herbs, sometimes a thin slice of avocado. Made with a peanut sauce that uses miso or soy paste instead of hoisin to maintain vegetarian integrity.
                    </Section>

                    <Section>
                        <strong>Bò bía:</strong> A Saigon-Hokkien hybrid filled with Chinese sausage (lạp xưởng), egg, jicama, shrimp, and lettuce. Often called "Vietnamese-Chinese spring roll" abroad. A small Saigon street food specialty.
                    </Section>

                    <Section>
                        For chả giò, the regional split is stricter: northern <em>nem rán</em> uses crab and pork in the filling, while southern <em>chả giò</em> uses pork with jicama or taro. The northern version is, in my view, slightly more sophisticated. The southern version is more forgiving for home cooks.
                    </Section>

                    <SectionDivider />

                    <H2>Why These Rolls Conquered the World</H2>

                    <Section>
                        In 2011, CNN published a list of the world's fifty most delicious foods, compiled by a panel of food writers and chefs across multiple continents. Vietnamese spring rolls came in at number thirty — ahead of many far better-known dishes from far better-publicized cuisines. The ranking was, depending on your view, either an absurdly low position for one of Asia's great inventions, or an extraordinarily high one for a dish that most Westerners could not have named twenty years earlier.
                    </Section>

                    <Section>
                        What Vietnamese spring rolls have, that competing rolls and wraps from other cuisines do not, is a combination of three qualities that turn out to be globally appealing. They are <strong>healthy</strong> — at least the fresh version is, with no oil and a high proportion of fresh herbs and vegetables. They are <strong>customizable</strong> — every roll can be filled differently, allowing diners to adapt the dish to their preferences without losing its identity. And they are <strong>communal</strong> — the traditional Vietnamese way to eat gỏi cuốn is for the entire table to roll their own at the table, from a central platter of ingredients, turning the meal into a small craft activity that families and friends can do together.
                    </Section>

                    <Section>
                        The communal dimension is, in some ways, the most important. Most Western restaurants serve gỏi cuốn pre-rolled, as an appetizer. The traditional Vietnamese family meal does the opposite. The ingredients arrive at the table on separate plates — rice paper sheets, a bowl of warm water, the shrimp, the herbs, the noodles, the sauces. Each diner makes their own. The first roll is always slightly imperfect. By the third, everyone is good at it. The meal becomes a small craft, and the conversation around it becomes the actual point of dinner.
                    </Section>

                    <Section>
                        This is, I think, the deepest thing about Vietnamese spring rolls. They are not just food. They are an invitation. The cook does not finish the dish. The cook prepares the ingredients and trusts the table to assemble them. There is a generosity built into the structure of the meal that no plated appetizer can match.
                    </Section>

                    <SectionDivider />

                    <H2>A Final Note</H2>

                    <Section>
                        It is late afternoon at a small house in the Mekong Delta. A family is preparing dinner. On the table: a stack of rice paper, a shallow dish of warm water, a plate of boiled shrimp split lengthwise, a plate of sliced pork, a small mountain of fresh herbs from the garden, a bowl of cooked rice vermicelli, a small bowl of peanut-hoisin sauce. The grandmother does not have to explain how it works. The grandchildren, even the youngest, already know. Everyone reaches in. The rice paper softens. The herbs go in. The rolls get made. The conversation continues.
                    </Section>

                    <Section>
                        Across town, in another house, a different family is making chả giò. The ground pork has been mixed with wood ear mushrooms and glass noodles. The rice paper is being folded around small portions of filling, then dropped into hot oil, where it puffs and crackles into golden brown. The smell — pork fat, fish sauce, the slight nutty perfume of frying rice paper — fills the entire kitchen. The first batch comes out. Someone wraps one in a lettuce leaf with herbs, dips it in nước chấm, and bites. The crackle is audible from across the room.
                    </Section>

                    <Section>
                        Two dishes, two methods, two families, two endings. Both, in their own way, are Vietnamese spring rolls. Both belong on the menu. Both deserve their own name in English, and one day, perhaps, they will get one. For now, they share a single confusing label and a single unbroken tradition that has lasted, in some form, for as long as Vietnamese people have been wrapping things in rice paper to eat them.
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
                        {['#VietnameseSpringRolls', '#GoiCuon', '#ChaGio', '#NemRan', '#SummerRolls', '#RicePaperRolls', '#VietnameseCooking', '#Longread'].map(tag => (
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
                            CONTINUE READING
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <Link href="/stories/the-soul-of-vietnamese-cooking-fish-sauce" style={{ color: '#2D1A0E', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none' }}>
                                The Soul of Vietnamese Cooking: Fish Sauce →
                            </Link>
                            <Link href="/stories/vietnamese-herb-plate-guide" style={{ color: '#2D1A0E', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none' }}>
                                The Vietnamese Herb Plate Guide →
                            </Link>
                            <Link href="/stories/the-art-of-banh-mi" style={{ color: '#2D1A0E', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none' }}>
                                The Art of Bánh Mì →
                            </Link>
                            <Link href="/stories/vietnam-street-food-culture-story" style={{ color: '#2D1A0E', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none' }}>
                                Vietnam Street Food Culture →
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