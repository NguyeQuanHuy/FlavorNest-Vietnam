import Link from 'next/link';

export default function StoryDetailPage({ params }: { params: { slug: string } }) {
    // Dữ liệu mẫu (Sau này bạn có thể tách ra file riêng)
    const storyData = {
        "the-symphony-of-hanoi-dawn": {
            title: "The Symphony of Hanoi's Dawn",
            dish: "Traditional Beef Pho",
            image: "/Pho.jpg",
            content: `
        Khi những tia nắng đầu tiên chưa kịp chạm tới những mái ngói rêu phong của phố cổ Hà Nội, mùi hương nồng nàn của quế và hồi đã len lỏi khắp các ngõ nhỏ. Đó là lúc những nồi nước dùng Phở bắt đầu "thì thầm".

        Phở không dành cho những người vội vã. Để có được sự tinh khiết trong vắt như gương, người nấu phải kiên nhẫn hầm xương bò suốt 10 tiếng đồng hồ, tỉ mẩn vớt từng lớp bọt. Phở Hà Nội nguyên bản không cần quá nhiều gia vị cầu kỳ, chỉ cần một chút gừng nướng, hành tây nướng cháy xém, và quan trọng nhất là cái "tâm" của người đứng bếp. 
        
        Bát phở bốc khói nghi ngút, lát thịt bò thái mỏng như tờ giấy, điểm xuyết màu xanh của hành lá... tất cả hòa quyện tạo nên một trải nghiệm mà người ta gọi là "tinh hoa ẩm thực Việt".`,
            author: "FlavorNest Team",
            date: "Oct 24, 2023"
        },
        "the-sizzle-of-the-south": {
            title: "The Sizzle of the South",
            dish: "Crispy Bánh Xèo",
            image: "/banh-xeo.jpg",
            content: "Nội dung đầy đủ của Bánh Xèo sẽ nằm ở đây..."
        }
    };

    // Lấy dữ liệu bài viết dựa trên slug, nếu không có lấy mặc định Phở
    const story = storyData[params.slug as keyof typeof storyData] || storyData["the-symphony-of-hanoi-dawn"];

    return (
        <main className="bg-[#F9F6F2] min-h-screen pb-24">
            {/* 1. Header Ảnh lớn */}
            <div className="relative h-[70vh] w-full">
                <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8">
                    <p className="uppercase tracking-[0.3em] font-bold text-sm mb-4 text-orange-400">{story.dish}</p>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold text-center max-w-4xl">{story.title}</h1>
                </div>
                <Link href="/stories" className="absolute top-10 left-10 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-white font-bold border border-white/20 hover:bg-white/40 transition-all">
                    ← Back to Stories
                </Link>
            </div>

            {/* 2. Nội dung bài viết */}
            <article className="max-w-3xl mx-auto px-8 -mt-20 relative z-10">
                <div className="bg-white p-12 md:p-20 rounded-[40px] shadow-2xl shadow-orange-900/10">
                    <div className="flex items-center gap-4 mb-10 pb-10 border-b border-orange-100">
                        <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">FN</div>
                        <div>
                            <p className="font-bold text-[#2D1B0D]">{story.author}</p>
                            <p className="text-xs text-gray-400">{story.date} • 5 min read</p>
                        </div>
                    </div>

                    {/* Chữ rơi (Drop cap) và nội dung */}
                    <div className="prose prose-orange prose-lg">
                        <p className="text-xl leading-relaxed text-gray-700 whitespace-pre-line first-letter:text-7xl first-letter:font-bold first-letter:text-orange-500 first-letter:mr-3 first-letter:float-left">
                            {story.content}
                        </p>
                    </div>

                    {/* Nút chia sẻ hoặc kết bài */}
                    <div className="mt-16 pt-10 border-t border-orange-100 text-center">
                        <p className="italic text-gray-400 mb-6">"Cooking is the art of storytelling through taste."</p>
                        <button className="bg-[#2D1B0D] text-white px-10 py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-lg">
                            Explore Pho Recipes
                        </button>
                    </div>
                </div>
            </article>
        </main>
    );
}