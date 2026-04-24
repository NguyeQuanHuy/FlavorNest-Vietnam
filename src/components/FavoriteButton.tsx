"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useFavorites, type FavoriteRecipe } from "@/hooks/useFavorites";

interface FavoriteButtonProps {
  recipe: Omit<FavoriteRecipe, "savedAt">;
  size?: number;
  /** "overlay" = floating on card image, "inline" = plain icon button */
  variant?: "overlay" | "inline";
  className?: string;
}

export default function FavoriteButton({
  recipe,
  size = 36,
  variant = "overlay",
  className = "",
}: FavoriteButtonProps) {
  const { isFavorited, toggleFavorite, hydrated } = useFavorites();
  const active = hydrated && isFavorited(recipe.id);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(recipe);
  };

  const overlayStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: "50%",
    background: active
      ? "rgba(217, 119, 6, 0.92)"
      : "rgba(245, 237, 227, 0.82)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    border: `1.5px solid ${active ? "rgba(217,119,6,0.4)" : "rgba(75,46,26,0.12)"}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: active
      ? "0 4px 14px rgba(217,119,6,0.4)"
      : "0 2px 8px rgba(45,26,14,0.15)",
    transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
  };

  const inlineStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: "50%",
    background: "transparent",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: active ? "#D97706" : "rgba(75,46,26,0.45)",
    transition: "color 0.2s",
  };

  return (
    <motion.button
      aria-label={active ? "Bỏ yêu thích" : "Lưu yêu thích"}
      onClick={handleClick}
      whileTap={{ scale: 0.85 }}
      style={variant === "overlay" ? overlayStyle : inlineStyle}
      className={className}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.svg
          key={active ? "filled" : "empty"}
          width={size * 0.44}
          height={size * 0.44}
          viewBox="0 0 24 24"
          fill={active ? "#F5EDE3" : "none"}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.18, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            stroke={active ? "none" : "rgba(75,46,26,0.55)"}
            strokeWidth={active ? 0 : 1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </AnimatePresence>

      {/* Ripple burst on add */}
      <AnimatePresence>
        {active && (
          <motion.span
            key="ripple"
            initial={{ scale: 0.5, opacity: 0.6 }}
            animate={{ scale: 2.2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              position: "absolute",
              width: size * 0.5,
              height: size * 0.5,
              borderRadius: "50%",
              background: "#D97706",
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
}
