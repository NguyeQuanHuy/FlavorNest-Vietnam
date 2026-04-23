"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RECIPE_CATEGORIES, RECIPE_REGIONS, type NavItem } from "@/lib/nav-data";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

// Variants tách ra để reuse và clean
const dropdownVariants = {
    hidden: {
        opacity: 0,
        y: -8,
        scale: 0.98,
        transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] },
    },
};

const columnVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.04, delayChildren: 0.08 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -6 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
    },
};

function NavItemCard({ item }: { item: NavItem }) {
    return (
        <motion.div variants={itemVariants}>
            <Link
                href={item.href}
                className="group flex items-center gap-3 p-2.5 rounded-xl transition-all duration-250"
                style={{
                    textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(217, 119, 6, 0.08)";
                    e.currentTarget.style.transform = "translateX(2px)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.transform = "translateX(0)";
                }}
            >
                {/* Thumbnail */}
                <div
                    className="relative flex-shrink-0 overflow-hidden transition-all duration-250 group-hover:shadow-md"
                    style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        border: "1px solid rgba(75,46,26,0.08)",
                    }}
                >
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="44px"
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                    <div
                        style={{
                            fontFamily: '"Playfair Display", Georgia, serif',
                            fontSize: 15,
                            fontWeight: 600,
                            color: "#2D1A0E",
                            lineHeight: 1.3,
                        }}
                    >
                        {item.name}
                    </div>
                    <div
                        style={{
                            fontSize: 12,
                            color: "rgba(75,46,26,0.6)",
                            marginTop: 2,
                        }}
                    >
                        {item.description}
                    </div>
                </div>

                {/* Arrow — ẩn, hover mới hiện */}
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-all duration-250 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                    style={{ color: "#D97706" }}
                >
                    <path
                        d="M5 3L9 7L5 11"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Link>
        </motion.div>
    );
}

export default function RecipesDropdown({ isOpen, onClose }: Props) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute left-1/2 -translate-x-1/2 z-50"
                    style={{
                        top: "calc(100% + 12px)",
                        width: 620,
                        borderRadius: 20,
                        overflow: "hidden",
                        background: "rgba(255, 252, 248, 0.96)",
                        backdropFilter: "blur(40px) saturate(180%)",
                        WebkitBackdropFilter: "blur(40px) saturate(180%)",
                        border: "1px solid rgba(255,255,255,0.6)",
                        boxShadow:
                            "0 20px 60px -10px rgba(45,26,14,0.35), 0 8px 20px -8px rgba(45,26,14,0.2), inset 0 1px 0 rgba(255,255,255,0.9)",
                        transformOrigin: "top center",
                    }}
                    onMouseLeave={onClose}
                >
                    {/* Arrow pointer */}
                    <div
                        style={{
                            position: "absolute",
                            top: -7,
                            left: "50%",
                            transform: "translateX(-50%) rotate(45deg)",
                            width: 14,
                            height: 14,
                            background: "rgba(255, 252, 248, 0.96)",
                            borderLeft: "1px solid rgba(255,255,255,0.6)",
                            borderTop: "1px solid rgba(255,255,255,0.6)",
                            backdropFilter: "blur(40px)",
                        }}
                    />

                    {/* Body: 2 cột */}
                    <div className="grid grid-cols-2 gap-7 px-6 pt-6 pb-4">
                        {/* Categories */}
                        <motion.div variants={columnVariants}>
                            <div className="flex items-center gap-2 mb-3.5">
                                <div style={{ width: 20, height: 1, background: "#D97706" }} />
                                <span
                                    style={{
                                        fontFamily: '"DM Sans", sans-serif',
                                        fontSize: 11,
                                        fontWeight: 600,
                                        letterSpacing: "1.5px",
                                        color: "#D97706",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Categories
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                {RECIPE_CATEGORIES.map((item) => (
                                    <NavItemCard key={item.href} item={item} />
                                ))}
                            </div>
                        </motion.div>

                        {/* Regions */}
                        <motion.div variants={columnVariants} className="relative">
                            {/* Divider gradient bên trái cột */}
                            <div
                                style={{
                                    position: "absolute",
                                    left: -14,
                                    top: 4,
                                    bottom: 4,
                                    width: 1,
                                    background:
                                        "linear-gradient(180deg, transparent 0%, rgba(75,46,26,0.12) 20%, rgba(75,46,26,0.12) 80%, transparent 100%)",
                                }}
                            />
                            <div className="flex items-center gap-2 mb-3.5">
                                <div style={{ width: 20, height: 1, background: "#D97706" }} />
                                <span
                                    style={{
                                        fontFamily: '"DM Sans", sans-serif',
                                        fontSize: 11,
                                        fontWeight: 600,
                                        letterSpacing: "1.5px",
                                        color: "#D97706",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Regions
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                {RECIPE_REGIONS.map((item) => (
                                    <NavItemCard key={item.href} item={item} />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Footer */}
                    <div
                        className="flex items-center justify-between px-6 py-3.5"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(245,237,227,0) 0%, rgba(245,237,227,0.6) 100%)",
                            borderTop: "1px solid rgba(75,46,26,0.08)",
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <motion.div
                                animate={{ scale: [1, 1.15, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    background: "#D97706",
                                    boxShadow: "0 0 0 3px rgba(217,119,6,0.2)",
                                }}
                            />
                            <span
                                style={{
                                    fontSize: 12,
                                    color: "rgba(75,46,26,0.7)",
                                    fontWeight: 500,
                                }}
                            >
                                100+ authentic recipes
                            </span>
                        </div>

                        <Link
                            href="/recipes"
                            className="flex items-center gap-1.5 transition-all duration-200"
                            style={{
                                padding: "8px 14px",
                                borderRadius: 999,
                                background: "#4B2E1A",
                                color: "#F5EDE3",
                                fontSize: 12,
                                fontWeight: 600,
                                textDecoration: "none",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#2D1A0E";
                                e.currentTarget.style.transform = "translateX(2px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "#4B2E1A";
                                e.currentTarget.style.transform = "translateX(0)";
                            }}
                        >
                            Explore all recipes
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path
                                    d="M4 2L8 6L4 10"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}