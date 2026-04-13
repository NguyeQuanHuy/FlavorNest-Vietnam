export default function Hero() {
    return (
        <section className="relative h-[85vh] w-full flex items-center overflow-hidden">
            {/* 1. Ảnh nền từ thư mục public */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.jpg"
                    className="w-full h-full object-cover"
                    alt="Vietnamese Food Background"
                    // Thêm dòng này để xử lý nếu ảnh lỗi nó sẽ hiện màu nền xám nhẹ
                    onError={(e) => { e.currentTarget.style.backgroundColor = '#333' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
            </div>

            {/* 2. Nội dung chữ */}
            <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
                <div className="max-w-2xl">
                    <h1 className="text-white text-6xl md:text-7xl font-display font-bold leading-[1.1]">
                        Your Nest of <br />
                        <span className="italic text-fn-amber font-normal serif">Authentic</span> <br />
                        Vietnamese <br />
                        Flavors.
                    </h1>

                    <p className="text-white/90 mt-6 text-lg max-w-lg leading-relaxed">
                        Made Simple at Home. <span className="text-white font-bold underline decoration-fn-amber underline-offset-4">100+ authentic recipes</span> from Hanoi, Hue and Saigon.
                    </p>

                    <div className="flex gap-4 mt-10">
                        <button className="bg-fn-amber hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg">
                            📖 Explore All Recipes →
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold transition-all">
                            Browse Categories
                        </button>
                    </div>
                </div>
            </div>

            {/* 4. Nhãn Beef Pho nhỏ ở góc phải */}
            <div className="absolute bottom-12 right-12 z-10 bg-black/50 backdrop-blur-xl p-3 rounded-2xl flex items-center gap-3 border border-white/10 shadow-2xl">
                <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-fn-amber/30">
                    {/* Đảm bảo bạn cũng có file pho-bo.jpg trong thư mục public nhé */}
                    <img
                        src="/pho-bo.jpg"
                        className="w-full h-full object-cover"
                        alt="Beef Pho mini"
                    />
                </div>
                <div className="pr-4">
                    <p className="text-white text-sm font-bold">Beef Pho</p>
                    <p className="text-fn-amber text-[10px] font-bold italic">⭐ MOST POPULAR</p>
                </div>
            </div>
        </section>
    );
}