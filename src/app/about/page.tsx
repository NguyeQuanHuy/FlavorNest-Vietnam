import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#F9F6F2] text-[#2D1B0D]">

            {/* 1. HERO SECTION: Giới thiệu ngắn gọn */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-[#2D1B0D]">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/hero-bg.jpg"
                        className="w-full h-full object-cover"
                        alt="About FlavorNest"
                    />
                </div>
                <div className="relative z-10 text-center">
                    <img src="/logo.png" className="h-20 w-auto mx-auto mb-6 brightness-0 invert" alt="Flavor Nest Logo" />
                    <h1 className="text-white text-6xl font-serif font-bold">Our <span className="italic text-orange-500">Story</span></h1>
                    <div className="h-1 w-20 bg-orange-500 mx-auto mt-6"></div>
                </div>
            </section>

            {/* 2. NỘI DUNG CHÍNH */}
            <section className="max-w-5xl mx-auto px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl font-serif font-bold mb-8 leading-tight">
                            Mang linh hồn bếp Việt <br />vào từng <span className="text-orange-500 italic">gian bếp hiện đại.</span>
                        </h2>
                        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                            <p>
                                **FlavorNest** bắt đầu từ một niềm tin đơn giản: Những món ăn Việt Nam ngon nhất không nằm ở những nhà hàng 5 sao, mà nằm trong căn bếp của những người bà, người mẹ.
                            </p>
                            <p>
                                Chúng tôi đã đi dọc dải đất hình chữ S, từ những gánh phở đêm Hà Nội đến những tô bún mắm đậm đà miền Tây, để thu thập và chuẩn hóa những công thức "không viết thành lời".
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="rounded-[40px] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white">
                            <img src="/Pho.jpg" alt="Cooking" className="w-full aspect-square object-cover" />
                        </div>
                        {/* Nhãn nhỏ trang trí */}
                        <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
                            <p className="text-3xl font-bold">100%</p>
                            <p className="text-xs uppercase font-bold tracking-widest">Authentic</p>
                        </div>
                    </div>
                </div>

                {/* 3. BA GIÁ TRỊ CỐT LÕI */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32">
                    {[
                        { title: "Gìn giữ truyền thống", desc: "Không biến tấu quá đà, giữ nguyên hương vị gốc của từng vùng miền.", icon: "🏮" },
                        { title: "Đơn giản hóa", desc: "Hướng dẫn chi tiết để ai cũng có thể nấu ngon như đầu bếp tại nhà.", icon: "👨‍🍳" },
                        { title: "Sức khỏe làm đầu", desc: "Ưu tiên nguyên liệu tươi sạch, cân bằng dinh dưỡng trong từng bữa ăn.", icon: "🌿" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-10 rounded-[30px] shadow-lg border border-orange-50 hover:shadow-orange-100 transition-all text-center group">
                            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* 4. CALL TO ACTION */}
                <div className="mt-32 bg-[#2D1B0D] rounded-[40px] p-16 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    <h2 className="text-white text-4xl font-serif mb-8 relative z-10">Bạn đã sẵn sàng cùng <span className="text-orange-500 italic">FlavorNest</span> vào bếp?</h2>
                    <Link href="/" className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-all relative z-10">
                        Khám phá công thức ngay →
                    </Link>
                </div>
            </section>

        </main>
    );
}