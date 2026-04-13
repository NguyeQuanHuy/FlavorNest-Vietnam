export default function Categories() {
    const categories = [
        { name: "Phở", count: 12, icon: "🍜" },
        { name: "Bún", count: 9, icon: "🥢" },
        { name: "Bánh Mì", count: 7, icon: "🥖" },
        { name: "Fresh Rolls", count: 6, icon: "🌯" },
        { name: "Cơm Tấm", count: 8, icon: "🍚" },
        { name: "Street Food", count: 14, icon: "🏮" },
    ];

    return (
        <section className="bg-[#2D1B0D] py-20 px-8 relative overflow-hidden">
            {/* Họa tiết kẻ sọc chéo mờ phía sau */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}>
            </div>

            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="h-[1px] w-12 bg-fn-amber"></div>
                    <span className="text-fn-amber uppercase tracking-widest text-xs font-bold">Browse by type</span>
                    <div className="h-[1px] w-12 bg-fn-amber"></div>
                </div>

                <h2 className="text-white text-5xl font-display mb-16">
                    Popular <span className="italic text-fn-amber font-normal">Categories</span>
                </h2>

                {/* Lưới các danh mục */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((cat, index) => (
                        <div key={index} className="group cursor-pointer border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 hover:border-fn-amber/50">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 block">
                                {cat.icon}
                            </div>
                            <h3 className="text-white font-bold text-lg mb-1">{cat.name}</h3>
                            <p className="text-white/40 text-xs uppercase tracking-tighter">{cat.count} recipes</p>
                        </div>
                    ))}
                </div>

                <button className="mt-16 px-8 py-3 rounded-xl border border-white/20 text-white/80 font-bold hover:bg-white hover:text-black transition-all">
                    Browse All Categories →
                </button>
            </div>
        </section>
    );
}