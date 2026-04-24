"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useFavorites } from "@/hooks/useFavorites";

interface NavFavoriteIconProps {
  scrolled: boolean;
}

export default function NavFavoriteIcon({ scrolled }: NavFavoriteIconProps) {
  const { count, hydrated } = useFavorites();

  return (
    <Link
      href="/favorites"
      aria-label={`Yêu thích (${count})`}
      style={{ position: "relative", display: "inline-flex" }}
    >
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center"
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: `1px solid ${
            scrolled ? "rgba(75,46,26,0.15)" : "rgba(245,237,227,0.2)"
          }`,
          background: scrolled
            ? "rgba(75,46,26,0.04)"
            : "rgba(245,237,227,0.08)",
          color: scrolled ? "#2D1A0E" : "#F5EDE3",
          cursor: "pointer",
          position: "relative",
        }}
      >
        {/* Heart icon */}
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill={hydrated && count > 0 ? "#D97706" : "none"}
          style={{ transition: "fill 0.25s ease" }}
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            stroke={
              hydrated && count > 0
                ? "#D97706"
                : scrolled
                ? "rgba(45,26,14,0.7)"
                : "rgba(245,237,227,0.8)"
            }
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Badge */}
        <AnimatePresence>
          {hydrated && count > 0 && (
            <motion.span
              key="badge"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
              style={{
                position: "absolute",
                top: -4,
                right: -4,
                minWidth: 16,
                height: 16,
                borderRadius: 999,
                background: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
                color: "#F5EDE3",
                fontSize: 9,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 4px",
                border: "1.5px solid #F5EDE3",
                boxShadow: "0 2px 6px rgba(217,119,6,0.45)",
                lineHeight: 1,
              }}
            >
              {count > 99 ? "99+" : count}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
}
