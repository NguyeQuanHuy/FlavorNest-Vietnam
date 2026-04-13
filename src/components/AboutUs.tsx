export default function AboutUs() {
    const reasons = [
        {
            icon: "🏠", // Thay bằng icon SVG hoặc hình ảnh thật nếu có
            title: "Truly Authentic Recipes",
            description: "Sourced from Vietnamese home cooks and street vendors — not fusion menus.",
            bgColor: "bg-fn-amber/10"
        },
        {
            icon: "🌿",
            title: "Fresh, Healthy & Balanced",
            description: "Vietnamese cuisine is naturally nutritious — herbs, veg and lean proteins.",
            bgColor: "bg-green-50"
        },
        {
            icon: "👨‍🍳",
            title: "Beginner-Friendly Steps",
            description: "Clear instructions with Western ingredient swaps — anyone can cook Vietnamese.",
            bgColor: "bg-gray-100"
        }
    ];

    return (
        <section className="bg-fn-beige py-24 px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

                {/* 1. Bố cục Ảnh (Cột Trái) - Phần phức tạp nhất */}
                <div className="relative group">
                    {/* Bức ảnh gia vị lớn (Thay bằng link ảnh xịn của bạn) */}
                    <div className="relative rounded-[40px] overflow-hidden shadow-xl aspect-square border border-fn-amber/5">
                        <img
                            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            alt="Vietnamese Spices"
                        />
                        {/* Hiệu ứng khuyết góc bằng Gradient trắng */}
                        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-fn-beige via-fn-beige to-transparent"></div>
                    </div>

                    {/* Hộp cam nổi bật (100+ Free Recipes) */}
                    <div className="absolute top-10 right-10 bg-fn-amber p-6 rounded-3xl text-center shadow-2xl transition-all duration-300 hover:-translate-y-2 group-hover:shadow-orange-900/30">
                        <p className="text-white text-5xl font-extrabold tracking-tighter">100<span className="text-3xl">+</span></p>
                        <p className="text-white text-xs mt-1 uppercase font-bold tracking-widest opacity-80">Free Recipes</p>
                    </div>

                    {/* Nhãn xếp hạng (4.9 2,400+ cooks) */}
                    <div className="absolute -bottom-8 right-1/4 bg-white/60 backdrop-blur-xl px-5 py-4 rounded-3xl flex items-center gap-3 border border-fn-amber/10 shadow-lg">
                        <span className="text-fn-amber text-2xl">⭐</span>
                        <div>
                            <p className="text-fn-brown text-xl font-bold tracking-tight">4.9</p>
                            <p className="text-fn-brown/50 text-[10px] uppercase font-medium tracking-wider">2,400+ cooks</p>
                        </div>
                    </div>
                </div>

                {/* 2. Nội dung chữ (Cột Phải) */}
                <div className="pl-10">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-[1px] w-12 bg-fn-amber"></div>
                        <span className="text-fn-amber uppercase tracking-widest text-xs font-bold">Why FlavorNest?</span>
                    </div>

                    <h2 className="text-fn-brown text-6xl font-display font-bold leading-tight mb-8">
                        Your Home.<br />
                        Our <span className="italic text-fn-amber font-normal serif">Nest</span>.
                    </h2>

                    <p className="text-fn-brown/70 text-lg leading-relaxed mb-12 max-w-lg">
                        We spent two years eating across Vietnam — from Hanoi's dawn pho stalls to Hue's royal kitchens and Saigon's vibrant street corners — so you can cook the real thing tonight.
                    </p>

                    {/* Danh sách 3 lý do */}
                    <div className="space-y-6">
                        {reasons.map((reason, index) => (
                            <div key={index} className="flex items-center gap-6 group">
                                <div className={`${reason.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-transform group-hover:scale-110 shadow-inner`}>
                                    {reason.icon}
                                </div>
                                <div>
                                    <h4 className="text-fn-brown text-lg font-bold mb-1 group-hover:text-fn-amber transition-colors">
                                        {reason.title}
                                    </h4>
                                    <p className="text-fn-brown/60 text-sm leading-relaxed max-w-sm">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="mt-16 text-fn-amber font-bold flex items-center gap-2 group hover:translate-x-1 transition-transform">
                        Our full story <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}