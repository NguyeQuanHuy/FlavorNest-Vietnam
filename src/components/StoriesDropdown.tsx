"use client";

import Image from "next/image";
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
      className="group flex items-center gap-3 px-4 py-2.5 transition-colors duration-100"
      style={{
        textDecoration: "none",
        borderBottom: "1px solid rgba(75,46,26,0.05)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(217, 119, 6, 0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      <Image
        src={item.image}
        alt=""
        width={28}
        height={28}
        className="object-cover flex-shrink-0"
        style={{ borderRadius: 4 }}
      />
      <span
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "1.2px",
          color: "#2D1A0E",
          textTransform: "uppercase",
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
    <div
      className="absolute left-1/2 -translate-x-1/2 z-50"
      style={{
        top: "100%",
        width: 480,
        borderRadius: 4,
        overflow: "hidden",
        background: "#FFFCF8",
        border: "1px solid rgba(75,46,26,0.1)",
        boxShadow: "0 8px 24px rgba(45,26,14,0.12)",
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
              letterSpacing: "1.5px",
              color: "#D97706",
              textTransform: "uppercase",
              padding: "12px 16px 8px",
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
              letterSpacing: "1.5px",
              color: "#D97706",
              textTransform: "uppercase",
              padding: "12px 16px 8px",
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
        className="flex items-center justify-center gap-1.5 transition-colors duration-100"
        style={{
          padding: "10px",
          background: "#4B2E1A",
          color: "#F5EDE3",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "1.2px",
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
        Read all stories →
      </Link>
    </div>
  );
}
