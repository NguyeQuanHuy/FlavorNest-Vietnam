"use client";

import Link from "next/link";
import { STORY_TOPICS, STORY_REGIONS, type NavItem } from "@/lib/nav-data";

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
        className="nav-label"
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "1.4px",
          color: "#2D1A0E",
          textTransform: "uppercase",
          display: "inline-block",
        }}
      >
        {item.name}
      </span>
    </Link>
  );
}

export default function StoriesDropdown({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .nav-label {
          border-bottom: 2px solid transparent;
          padding-bottom: 2px;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .nav-row:hover .nav-label {
          color: #D97706;
          border-bottom-color: #D97706;
        }
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
              Topics
            </div>
            {STORY_TOPICS.map((item) => (
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
              By Region
            </div>
            {STORY_REGIONS.map((item) => (
              <NavItemRow key={item.href} item={item} />
            ))}
          </div>
        </div>

        <Link
          href="/stories"
          className="flex items-center justify-center gap-1.5 transition-colors duration-150"
          style={{
            padding: "14px",
            background: "#D97706",
            color: "#F5EDE3",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "1.5px",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
            onMouseEnter={(e) => {
            e.currentTarget.style.background = "#B45309";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#D97706";
          }}
        >
          Read all stories →
        </Link>
      </div>
    </>
  );
}
