
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export interface StoryData {
    slug: string;
    category: string;
    categoryHref: string;
    tag: string;
    tagColor: string;
    title: string;
    subtitle: string;
    date: string;
    readTime: string;
    heroImage: string;
    sections: {
        heading?: string;
        body: string;
        pullQuote?: string;
        image?: string;
        imageCaption?: string;
    }[];
    relatedLinks?: { label: string; href: string; emoji: string }[];
}

export default function StoryLayout({ story }: { story: StoryData }) {
    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&display=swap');
                * { box-sizing: border-box; }
                .story-body p { font-size: 17px; line-height: 1.85; color: rgba(45,26,14,0.8); margin: 0 0 24px; }
                .story-body h2 { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; color: #2D1A0E; margin: 48px 0 16px; }
            `}</style>

            {/* HERO */}
            <section style={{ position: 'relative', height: 'clamp(380px, 55vw, 580px)', background: '#1a1410', overflow: 'hidden' }}>
                <Image src={story.heroImage} alt={story.title} fill style={{ objectFit: 'cover', opacity: 0.65 }} priority quality={90} sizes="100vw" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,8,4,0.97) 0%, rgba(13,8,4,0.4) 60%, transparent 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 48px', maxWidth: 800, margin: '0 auto' }}>
                    <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, marginBottom: 20 }}>
                        {[['Home', '/'], ['Stories', '/stories'], [story.category, story.categoryHref], [story.title, '']].map(([label, href], i) => (
                            <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                {i > 0 && <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>}
                                {href ? <Link href={href} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>{label}</Link>
                                    : <span style={{ color: '#D97706' }}>{label}</span>}
                            </span>
                        ))}
                    </nav>
                    <div style={{ display: 'inline-block', background: story.tagColor, color: 'white', fontSize: 10, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 100, marginBottom: 16 }}>{story.tag}</div>
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 800, color: 'white', margin: '0 0 12px', lineHeight: 1.1 }}>{story.title}</h1>
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 17, margin: '0 0 20px', fontStyle: 'italic' }}>{story.subtitle}</p>
                    <div style={{ display: 'flex', gap: 16, fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>
                        <span>{story.date}</span>
                        <span>·</span>
                        <span>{story.readTime}</span>
                    </div>
                </div>
            </section>

            {/* BODY */}
            <article style={{ maxWidth: 720, margin: '0 auto', padding: '56px 24px 80px' }}>
                {story.sections.map((section, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
                        {section.heading && <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#2D1A0E', margin: '48px 0 16px' }}>{section.heading}</h2>}
                        <p style={{ fontSize: 17, lineHeight: 1.85, color: 'rgba(45,26,14,0.8)', margin: '0 0 24px' }}>{section.body}</p>
                        {section.pullQuote && (
                            <blockquote style={{ borderLeft: '3px solid #D97706', margin: '32px 0', padding: '4px 0 4px 24px' }}>
                                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontStyle: 'italic', color: '#4B2E1A', lineHeight: 1.5, margin: 0 }}>{section.pullQuote}</p>
                            </blockquote>
                        )}
                        {section.image && (
                            <div style={{ margin: '32px 0', borderRadius: 16, overflow: 'hidden', position: 'relative', height: 360 }}>
                                <Image src={section.image} alt={section.imageCaption || ''} fill style={{ objectFit: 'cover' }} sizes="720px" />
                                {section.imageCaption && <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(75,46,26,0.4)', marginTop: 10, fontStyle: 'italic' }}>{section.imageCaption}</p>}
                            </div>
                        )}
                    </motion.div>
                ))}
            </article>

            {/* RELATED */}
            {story.relatedLinks && (
                <section style={{ background: '#2D1A0E', padding: '56px 24px 72px' }}>
                    <div style={{ maxWidth: 800, margin: '0 auto' }}>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase', marginBottom: 24 }}>Keep Reading</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 }}>
                            {story.relatedLinks.map(link => (
                                <Link key={link.href} href={link.href} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '20px 16px', borderRadius: 18, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none', transition: 'all 0.2s' }}
                                    onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(217,119,6,0.4)'; el.style.background = 'rgba(217,119,6,0.07)'; el.style.transform = 'translateY(-4px)'; }}
                                    onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(255,255,255,0.08)'; el.style.background = 'rgba(255,255,255,0.03)'; el.style.transform = 'none'; }}>
                                    <span style={{ fontSize: 26 }}>{link.emoji}</span>
                                    <span style={{ fontSize: 13, fontWeight: 600, color: 'white', textAlign: 'center' }}>{link.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}