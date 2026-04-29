"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useFavorites } from "@/hooks/useFavorites";
import { FNIcon } from "@/components/Icons";

export default function FavoritesPage() {
  const { favorites, hydrated, removeFavorite, clearFavorites } = useFavorites();

  if (!hydrated) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "#F5EDE3" }}
      >
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ color: "#D97706", fontSize: 16, fontWeight: 500 }}
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen pt-24 pb-20 px-4"
      style={{ background: "#F5EDE3" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#D97706">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <h1
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(28px, 5vw, 42px)",
                fontWeight: 700,
                color: "#2D1A0E",
                lineHeight: 1.1,
              }}
            >
              My Favorites
            </h1>
          </div>
          <p style={{ color: "rgba(75,46,26,0.6)", fontSize: 15 }}>
            {favorites.length > 0
              ? `${favorites.length} Saved Recipes`
              : "No recipes saved yet."}
          </p>
        </motion.div>

        {/* Empty state */}
        <AnimatePresence mode="wait">
          {favorites.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ marginBottom: 20, color: "#D97706" }}
              >
                <FNIcon name="favorite" size={64} color="#D97706" />
              </motion.div>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: 24,
                  fontWeight: 600,
                  color: "#2D1A0E",
                  marginBottom: 10,
                }}
              >
                No favorite dishes yet
              </h2>
              <p style={{
                color: "rgba(75,46,26,0.55)", fontSize: 15,
                maxWidth: 340, marginBottom: 28, lineHeight: 1.6,
                display: "inline-flex", alignItems: "center", gap: 6, justifyContent: "center"
              }}>
                Tap <FNIcon name="favorite" size={14} color="#D97706" filled /> to save your favorites.
              </p>
              <Link
                href="/recipes"
                style={{
                  padding: "12px 28px",
                  borderRadius: 999,
                  background: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
                  color: "#F5EDE3",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 6px 18px rgba(217,119,6,0.35)",
                }}
              >
                Explore recipes
              </Link>
            </motion.div>
          ) : (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {/* Clear all */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => {
                    if (confirm("Xóa tất cả yêu thích?")) clearFavorites();
                  }}
                  style={{
                    fontSize: 13,
                    color: "rgba(75,46,26,0.5)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                    textUnderlineOffset: 3,
                  }}
                >
                  Remove all
                </button>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {favorites
                    .slice()
                    .sort((a, b) => b.savedAt - a.savedAt)
                    .map((recipe, i) => (
                      <motion.div
                        key={recipe.slug}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        style={{
                          background: "#FFFFFF",
                          borderRadius: 20,
                          overflow: "hidden",
                          border: "1px solid rgba(75,46,26,0.08)",
                          boxShadow: "0 2px 12px rgba(45,26,14,0.06)",
                        }}
                      >
                        {/* Image */}
                        <Link href={`/recipes/${recipe.slug}`} style={{ display: "block" }}>
                          <div
                            style={{
                              position: "relative",
                              aspectRatio: "4/3",
                              overflow: "hidden",
                            }}
                          >
                            <Image
                              src={recipe.image}
                              alt={recipe.title}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                              onMouseEnter={(e) =>
                              ((e.currentTarget as HTMLImageElement).style.transform =
                                "scale(1.05)")
                              }
                              onMouseLeave={(e) =>
                              ((e.currentTarget as HTMLImageElement).style.transform =
                                "scale(1)")
                              }
                            />
                            {/* Remove button */}
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                removeFavorite(recipe.id);
                              }}
                              aria-label="Bỏ yêu thích"
                              style={{
                                position: "absolute",
                                top: 10,
                                right: 10,
                                width: 34,
                                height: 34,
                                borderRadius: "50%",
                                background: "rgba(217,119,6,0.9)",
                                backdropFilter: "blur(8px)",
                                border: "none",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                boxShadow: "0 2px 8px rgba(217,119,6,0.4)",
                              }}
                            >
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="#F5EDE3">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                              </svg>
                            </button>
                          </div>
                        </Link>

                        {/* Content */}
                        <div className="p-4">
                          {recipe.category && (
                            <span
                              style={{
                                fontSize: 11,
                                fontWeight: 600,
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                                color: "#D97706",
                              }}
                            >
                              {recipe.category}
                            </span>
                          )}
                          <Link href={`/recipes/${recipe.slug}`} style={{ textDecoration: "none" }}>
                            <h3
                              style={{
                                fontFamily: "var(--font-playfair), Georgia, serif",
                                fontSize: 17,
                                fontWeight: 600,
                                color: "#2D1A0E",
                                marginTop: 4,
                                lineHeight: 1.35,
                              }}
                            >
                              {recipe.title}
                            </h3>
                          </Link>
                          {recipe.cookTime && (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 5,
                                marginTop: 8,
                                color: "rgba(75,46,26,0.55)",
                                fontSize: 13,
                              }}
                            >
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                                <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                              </svg>
                              {recipe.cookTime}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
