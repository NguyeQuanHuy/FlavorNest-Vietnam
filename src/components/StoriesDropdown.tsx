"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { STORY_TOPICS, STORY_REGIONS, type NavItem } from "@/lib/nav-data";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const COLUMNS: { title: string; items: NavItem[] }[] = [
  { title: "Topics", items: STORY_TOPICS },
  { title: "Featured stories", items: STORY_REGIONS },
];

function NavItemRow({ item }: { item: NavItem }) {
  return (
    <Link
      href={item.href}
      className="group block rounded-[10px] px-3 py-2.5 transition-colors duration-150 hover:bg-[#FAF6F0]"
      style={{ textDecoration: "none" }}
    >
      <span className="block text-[14.5px] font-semibold text-[#2D1A0E] transition-colors duration-150 group-hover:text-[#D97706]">
        {item.name}
      </span>
      <span className="mt-0.5 block text-[12.5px] leading-snug text-[rgba(75,46,26,0.55)]">
        {item.description}
      </span>
    </Link>
  );
}

export default function StoriesDropdown({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="absolute left-1/2 z-50 -translate-x-1/2 pt-3" style={{ top: "100%", width: 540 }} onMouseLeave={onClose}>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl border border-[rgba(75,46,26,0.1)] bg-white px-3 pb-3 pt-4"
        style={{ boxShadow: "0 18px 48px rgba(45,26,14,0.18)", fontFamily: "var(--font-dm-sans), sans-serif" }}
      >
        <div className="grid grid-cols-2 gap-2">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="px-3 pb-1.5 text-[10.5px] font-bold uppercase tracking-[0.1em] text-[rgba(75,46,26,0.45)]">
                {col.title}
              </div>
              {col.items.map((item) => (
                <NavItemRow key={item.href} item={item} />
              ))}
            </div>
          ))}
        </div>

        <div className="mx-3 mt-2 flex items-center justify-between border-t border-[rgba(75,46,26,0.08)] pt-3">
          <span className="text-[12.5px] text-[rgba(75,46,26,0.5)]">The people and places behind the food</span>
          <Link
            href="/stories"
            className="text-[13px] font-semibold text-[#D97706] transition-colors hover:text-[#B45309]"
            style={{ textDecoration: "none" }}
          >
            All stories →
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
