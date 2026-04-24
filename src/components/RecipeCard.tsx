'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useFavorites } from '@/hooks/useFavorites';

export default function RecipeCard({ title, image, description, id, category, difficulty, time, rating }: any) {
  const { toggle, isFavorite, mounted } = useFavorites();
  const slug = id;
  const liked = mounted && isFavorite(slug);

  return (
    <div className="bg-white rounded-[32px] overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-black/5">
      {/* Ảnh */}
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

        {/* Nút tim */}
        <motion.button
          aria-label={liked ? "Bỏ yêu thích" : "Thêm yêu thích"}
          onClick={(e) => {
            e.preventDefault();
            toggle({ id: slug, slug, title, image, category, cookTime: time });
          }}
          whileTap={{ scale: 0.8 }}
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            width: 34,
            height: 34,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(8px)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.svg
              key={liked ? 'filled' : 'empty'}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.15 }}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill={liked ? '#D97706' : 'none'}
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"
                stroke="#D97706"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Nội dung */}
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
