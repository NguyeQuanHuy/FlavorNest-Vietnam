"use client";

import Link from "next/link";
import { RECIPE_CATEGORIES, RECIPE_REGIONS, type NavItem } from "@/lib/nav-data";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function NavItemRow({ item }: { item: NavItem }) {
  return (
    <Link
      href={item.href}
      className="nav-row group flex items-center px-6 py-3.5 transition-colors duration-150"
      style={{
        textDecoration: "none",
        borderBottom: "1px solid rgba(75,46,26,0.06)",
        position: "relative",
      }}
    >
      <span
        className="accent-stripe"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 3,
          background: "#D97706",
          transform: "scaleY(0)",
          transformOrigin: "center",
          transition: "transform 0.18s ease",
        }}
      />
      <span
        className="nav-label"
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "1.4px",
          color: "#2D1A0E",
          textTransform: "uppercase",
          position: "relative",
          display: "inline-block",
        }}
      >
        {item.name}
        <span
          className="underline-bar"
          style={{
            position: "absolute",
            left: 0,
            bottom: -3,
            height: 1.5,
            width: "100%",
            background: "#D97706",
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.22s ease",
          }}
        />
      </span>
    </Link>
  );
}

export default function RecipesDropdown({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .nav-row:hover { background: rgba(217,119,6,0.05); }
        .nav-row:hover .accent-stripe { transform: scaleY(1); }
        .nav-row:hover .underline-bar { transform: scaleX(1); }
        .nav-row:hover .nav-label { color: #D97706; }
      `}</style>
      <div
        className="absolute left-1/2 -translate-x-1/2 z-50"
        style={{
          top: "100%",
          width: 560,
          borderRadius: 0,
          overflow: "hidden",
          background: "#FFFCF8",
          border: "1px solid rgba(75,46,26,0.12)",
          boxShadow: "0 10px 30px rgba(45,26,14,0.14)",
        }}
        onMouseLeave={onClose}
      >
        <div className="grid grid-cols-2">
          <div style={{ borderRight: "1px solid rgba(75,46,26,0.08)" }}>
            <div
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "2px",
                color: "#D97706",
                textTransform: "uppercase",
                padding: "16px 24px 12px",
                borderBottom: "1px solid rgba(75,46,26,0.08)",
              }}
            >
              Categories
            </div>
            {RECIPE_CATEGORIES.map((item) => (
              <NavItemRow key={item.href} item={item} />
            ))}
          </div>

          <div>
            <div
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "2px",
                color: "#D97706",
                textTransform: "uppercase",
                padding: "16px 24px 12px",
                borderBottom: "1px solid rgba(75,46,26,0.08)",
              }}
            >
              Regions
            </div>
            {RECIPE_REGIONS.map((item) => (
              <NavItemRow key={item.href} item={item} />
            ))}
          </div>
        </div>

        <Link
          href="/recipes"
          className="flex items-center justify-center gap-1.5 transition-colors duration-150"
          style={{
            padding: "14px",
            background: "#4B2E1A",
            color: "#F5EDE3",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "1.5px",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#2D1A0E";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#4B2E1A";
          }}
        >
          Explore all recipes →
        </Link>
      </div>
    </>
  );
}
