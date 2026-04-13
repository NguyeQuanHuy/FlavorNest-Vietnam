
import Image from 'next/image';
import Link from 'next/link';

export default function RecipeCard({ title, image, description, id, category, difficulty, time, rating }: any) {
    return (
        <div className="bg-white rounded-[32px] overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-black/5">
            {/* Phần ảnh có Badge thời gian và nhãn */}
            <div className="relative h-56 w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                        ✨ New
                    </span>
                </div>
                <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-full font-medium">
                    {time || "40 min"}
                </div>
            </div>

            {/* Nội dung bên dưới */}
            <div className="p-6">
                <div className="flex gap-2 mb-3">
                    <span className="bg-orange-50 text-orange-700 text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider">
                        {category || "RECIPE"}
                    </span>
                    <span className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider">
                        {difficulty || "EASY"}
                    </span>
                </div>

                <h3 className="font-display text-xl text-[#4B2E1A] leading-tight mb-2 group-hover:text-orange-600 transition-colors">
                    {title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                    {description}
                </p>

                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-1">
                        <span className="text-orange-400 text-sm">★★★★★</span>
                        <span className="text-gray-400 text-xs font-medium">{rating || "4.8"}</span>
                    </div>

                    <Link href={`/recipes/${id}`}>
                        <button className="text-[#D97706] font-bold text-sm hover:translate-x-1 transition-transform cursor-pointer">
                            Cook it →
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}