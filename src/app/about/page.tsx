import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About | FlavorNest Vietnam',
    description: 'Our story — bringing the soul of Vietnamese cuisine into every modern kitchen.',
}

const VALUES = [
    {
        icon: '🏮',
        title: 'Gìn giữ truyền thống',
        desc: 'Không biến tấu quá đà, giữ nguyên hương vị gốc của từng vùng miền.',
    },
    {
        icon: '👨‍🍳',
        title: 'Đơn giản hóa',
        desc: 'Hướng dẫn chi tiết để ai cũng có thể nấu ngon như đầu bếp tại nhà.',
    },
    {
        icon: '🌿',
        title: 'Sức khỏe làm đầu',
        desc: 'Ưu tiên nguyên liệu tươi sạch, cân bằng dinh dưỡng trong từng bữa ăn.',
    },
]

const STATS = [
    { value: '100+', label: 'Công thức' },
    { value: '3', label: 'Miền ẩm thực' },
    { value: '15K+', label: 'Người nấu' },
    { value: '4.9★', label: 'Đánh giá TB' },
]

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#FAFAF8]">

            {/* ── Hero ─────────────────────────────────────────────────────── */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=1800&q=85"
                    alt="Vietnamese cuisine"
                    fill
                    priority
                    quality={85}
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1C1009]/70 via-[#4B2E1A]/50 to-[#1C1009]/80" />

                <div className="relative z-10 text-center px-5">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-8 h-px bg-[#D97706]" />
                        <span className="text-[#D97706] text-[11px] font-bold uppercase tracking-[.2em]">
                            FlavorNest Vietnam
                        </span>
                        <div className="w-8 h-px bg-[#D97706]" />
                    </div>
                    <h1 className="font-display text-6xl sm:text-7xl font-extrabold text-white leading-tight mb-4">
                        Our <em className="text-[#D97706] not-italic">Story</em>
                    </h1>
                    <p className="text-white/70 text-lg max-w-md mx-auto">
                        Mang linh hồn bếp Việt vào từng gian bếp hiện đại.
                    </p>
                </div>
            </section>

            {/* ── Stats bar ────────────────────────────────────────────────── */}
            <section className="bg-[#4B2E1A]">
                <div className="max-w-5xl mx-auto px-5 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {STATS.map((s, i) => (
                        <div key={i} className="text-center">
                            <p className="font-display text-3xl font-extrabold text-[#D97706]">{s.value}</p>
                            <p className="text-white/55 text-xs mt-1 uppercase tracking-wider">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Story section ─────────────────────────────────────────────── */}
            <section className="max-w-5xl mx-auto px-5 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-px bg-[#D97706]" />
                            <span className="text-[#D97706] text-[11px] font-bold uppercase tracking-[.2em]">
                                Câu chuyện của chúng tôi
                            </span>
                        </div>
                        <h2 className="font-display text-4xl font-extrabold text-[#4B2E1A] leading-tight mb-6">
                            Những món ngon nhất nằm trong{' '}
                            <em className="text-[#D97706] not-italic">căn bếp của mẹ.</em>
                        </h2>
                        <div className="space-y-5 text-[#4B2E1A]/65 leading-relaxed">
                            <p>
                                FlavorNest bắt đầu từ một niềm tin đơn giản: Những món ăn Việt Nam ngon nhất không nằm ở những nhà hàng 5 sao, mà nằm trong căn bếp của những người bà, người mẹ.
                            </p>
                            <p>
                                Chúng tôi đã đi dọc dải đất hình chữ S, từ những gánh phở đêm Hà Nội đến những tô bún mắm đậm đà miền Tây, để thu thập và chuẩn hóa những công thức "không viết thành lời".
                            </p>
                            <p>
                                Mỗi công thức trên FlavorNest đều được thử nghiệm nhiều lần trong bếp thật, với nguyên liệu thật — để bạn tự tin nấu ngay lần đầu tiên.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl shadow-[#4B2E1A]/15 rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/Pho.jpg"
                                alt="Authentic Vietnamese Pho"
                                width={600}
                                height={600}
                                className="w-full aspect-square object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-5 -left-5 bg-[#D97706] text-white px-6 py-4 rounded-2xl shadow-xl shadow-[#D97706]/30">
                            <p className="text-2xl font-extrabold leading-none">100%</p>
                            <p className="text-[10px] uppercase font-bold tracking-widest opacity-80 mt-0.5">Authentic</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Values ───────────────────────────────────────────────────── */}
            <section className="bg-[#F5EDE3] py-24 px-5">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <div className="w-6 h-px bg-[#D97706]" />
                            <span className="text-[#D97706] text-[11px] font-bold uppercase tracking-[.2em]">
                                Giá trị cốt lõi
                            </span>
                            <div className="w-6 h-px bg-[#D97706]" />
                        </div>
                        <h2 className="font-display text-4xl font-extrabold text-[#4B2E1A]">
                            Điều chúng tôi <em className="text-[#D97706] not-italic">tin tưởng</em>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {VALUES.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-3xl p-8 border border-[#D97706]/8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group"
                            >
                                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="font-display text-lg font-bold text-[#4B2E1A] mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-[#4B2E1A]/55 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────────────────────── */}
            <section className="py-24 px-5">
                <div className="max-w-3xl mx-auto bg-[#4B2E1A] rounded-[32px] p-14 text-center relative overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D97706]/15 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#166534]/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10">
                        <p className="text-4xl mb-5">🪺</p>
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
                            Bạn đã sẵn sàng vào bếp{' '}
                            <em className="text-[#D97706] not-italic">cùng chúng tôi?</em>
                        </h2>
                        <p className="text-white/55 mb-8 max-w-sm mx-auto">
                            Khám phá 100+ công thức Việt Nam được kiểm chứng — từ Hà Nội, Huế đến Sài Gòn.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link
                                href="/recipes"
                                className="inline-flex items-center justify-center gap-2 bg-[#D97706] hover:bg-[#B45309] text-white font-bold px-8 py-4 rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D97706]/30"
                            >
                                Khám phá công thức →
                            </Link>
                            <Link
                                href="/stories"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl border border-white/20 transition-all hover:-translate-y-0.5"
                            >
                                Đọc Kitchen Stories
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}