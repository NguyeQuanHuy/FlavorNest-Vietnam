"use client";

import { FNIcon } from "@/components/Icons";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useFavorites } from "@/hooks/useFavorites";

function ConfirmModal({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed", inset: 0, zIndex: 999,
        background: "rgba(45,26,14,0.5)",
        backdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "0 24px",
      }}
      onClick={onCancel}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ type: "spring", damping: 28, stiffness: 320 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#FFFFFF",
          borderRadius: 24,
          padding: "32px 28px 24px",
          maxWidth: 360,
          width: "100%",
          boxShadow: "0 24px 60px rgba(45,26,14,0.2)",
        }}
      >
        <div style={{ fontSize: 40, textAlign: "center", marginBottom: 16 }}>🗑️</div>
        <h3 style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: 20, fontWeight: 700,
          color: "#2D1A0E", textAlign: "center", marginBottom: 8,
        }}>
          Remove all favorites?
        </h3>
        <p style={{
          color: "rgba(75,46,26,0.55)", fontSize: 14,
          textAlign: "center", lineHeight: 1.6, marginBottom: 24,
        }}>
          This will clear all your saved recipes. This action cannot be undone.
        </p>
        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={onCancel}
            style={{
              flex: 1, padding: "12px",
              borderRadius: 999, border: "1.5px solid rgba(75,46,26,0.15)",
              background: "transparent", color: "rgba(75,46,26,0.6)",
              fontSize: 14, fontWeight: 600, cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            style={{
              flex: 1, padding: "12px",
              borderRadius: 999, border: "none",
              background: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
              color: "#F5EDE3",
              fontSize: 14, fontWeight: 600, cursor: "pointer",
              boxShadow: "0 4px 14px rgba(217,119,6,0.35)",
            }}
          >
            Remove all
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FavoritesPage() {
  const { favorites, hydrated, removeFavorite, clearFavorites } = useFavorites();
  const [showConfirm, setShowConfirm] = useState(false);

  if (!hydrated) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#F5EDE3" }}>
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
    <div className="min-h-screen pt-24 pb-20 px-4" style={{ background: "#F5EDE3" }}>
      <AnimatePresence>
        {showConfirm && (
          <ConfirmModal
            onConfirm={() => { clearFavorites(); setShowConfirm(false); }}
            onCancel={() => setShowConfirm(false)}
          />
        )}
      </AnimatePresence>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <FNIcon name="favorite" size={28} color="#D97706" filled />
            <h1 style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 700, color: "#2D1A0E", lineHeight: 1.1,
            }}>
              My Favorites
            </h1>
          </div>
          <p style={{ color: "rgba(75,46,26,0.6)", fontSize: 15 }}>
            {favorites.length > 0 ? `${favorites.length} Saved Recipes` : "No recipes saved yet."}
          </p>
        </motion.div>

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
                style={{ fontSize: 64, marginBottom: 20 }}
              >
                🍜
              </motion.div>
              <h2 style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: 24, fontWeight: 600, color: "#2D1A0E", marginBottom: 10,
              }}>
                No favorite dishes yet
              </h2>
              <p style={{
                color: "rgba(75,46,26,0.55)", fontSize: 15,
                maxWidth: 340, marginBottom: 28, lineHeight: 1.6,
              }}>
                Tap the ❤️ icon on recipes to save your favorites.
              </p>
              <Link href="/recipes" style={{
                padding: "12px 28px", borderRadius: 999,
                background: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
                color: "#F5EDE3", fontSize: 14, fontWeight: 600,
                textDecoration: "none", boxShadow: "0 6px 18px rgba(217,119,6,0.35)",
              }}>
                Explore recipes
              </Link>
            </motion.div>
          ) : (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setShowConfirm(true)}
                  style={{
                    fontSize: 13, color: "rgba(75,46,26,0.5)",
                    background: "none", border: "none", cursor: "pointer",
                    textDecoration: "underline", textUnderlineOffset: 3,
                  }}
                >
                  Remove favorite dishes
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {favorites.slice().sort((a, b) => b.savedAt - a.savedAt).map((recipe, i) => (
                    <motion.div
                      key={recipe.id} layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      style={{
                        background: "#FFFFFF", borderRadius: 20, overflow: "hidden",
                        border: "1px solid rgba(75,46,26,0.08)",
                        boxShadow: "0 2px 12px rgba(45,26,14,0.06)",
                      }}
                    >
                      <Link href={`/recipes/${recipe.slug}`} style={{ display: "block" }}>
                        <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                          <Image
                            src={recipe.image} alt={recipe.title} fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
                          />
                          <button
                            onClick={(e) => { e.preventDefault(); removeFavorite(recipe.id || recipe.slug); }}
                            aria-label="Bỏ yêu thích"
                            style={{
                              position: "absolute", top: 10, right: 10,
                              width: 34, height: 34, borderRadius: "50%",
                              background: "rgba(217,119,6,0.9)", backdropFilter: "blur(8px)",
                              border: "none", display: "flex", alignItems: "center",
                              justifyContent: "center", cursor: "pointer",
                              boxShadow: "0 2px 8px rgba(217,119,6,0.4)",
                            }}
                          >
                            <FNIcon name="favorite" size={14} color="#F5EDE3" filled />
                          </button>
                        </div>
                      </Link>
                      <div className="p-4">
                        {recipe.category && (
                          <span style={{
                            fontSize: 11, fontWeight: 600, letterSpacing: "1px",
                            textTransform: "uppercase", color: "#D97706",
                          }}>
                            {recipe.category}
                          </span>
                        )}
                        <Link href={`/recipes/${recipe.slug}`} style={{ textDecoration: "none" }}>
                          <h3 style={{
                            fontFamily: "var(--font-playfair), Georgia, serif",
                            fontSize: 17, fontWeight: 600, color: "#2D1A0E",
                            marginTop: 4, lineHeight: 1.35,
                          }}>
                            {recipe.title}
                          </h3>
                        </Link>
                        {recipe.cookTime && (
                          <div style={{
                            display: "flex", alignItems: "center", gap: 5,
                            marginTop: 8, color: "rgba(75,46,26,0.55)", fontSize: 13,
                          }}>
                            <FNIcon name="clock" size={13} color="rgba(75,46,26,0.55)" />
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
