"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  NAV_LINKS,
  RECIPE_CATEGORIES,
  RECIPE_REGIONS,
} from "@/lib/nav-data";
import RecipesDropdown from "./RecipesDropdown";
import StoriesDropdown from "./StoriesDropdown";
import { useSession, signOut } from "next-auth/react";
import SearchModal from "./SearchModal";
import { useFavorites } from "@/hooks/useFavorites";
import { useState, useRef, useEffect } from 'react';

// Các trang có background sáng — navbar luôn dùng dark mode
const LIGHT_BG_PAGES = ["/favorites", "/recipes", "/stories", "/about", "/auth"];

export default function Navbar() {
  const pathname = usePathname();
  const isLightPage = LIGHT_BG_PAGES.some((p) => pathname?.startsWith(p));
  const [scrolled, setScrolled] = useState(false);
  const forceScrolled = isLightPage || scrolled;
  const [recipesOpen, setRecipesOpen] = useState(false);
  const [storiesOpen, setStoriesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const { data: session } = useSession();
  const { favorites, hydrated } = useFavorites();
  const favCount = hydrated ? favorites.length : 0;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          background: forceScrolled
            ? "rgba(245, 237, 227, 0.72)"
            : "rgba(245, 237, 227, 0.02)",
          borderBottomColor: forceScrolled
            ? "rgba(75, 46, 26, 0.08)"
            : "rgba(245, 237, 227, 0.12)",
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-40"
        style={{
          backdropFilter: forceScrolled
            ? "blur(20px) saturate(180%)"
            : "blur(8px) saturate(140%)",
          WebkitBackdropFilter: forceScrolled
            ? "blur(20px) saturate(180%)"
            : "blur(8px) saturate(140%)",
          borderBottom: "1px solid",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 lg:px-8">
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5"
            style={{ textDecoration: "none" }}
          >
            <Image
              src="/logo.svg"
              alt="FlavorNest"
              width={36}
              height={36}
              priority
              style={{
                filter: forceScrolled
                  ? "none"
                  : "drop-shadow(0 2px 6px rgba(0,0,0,0.25))",
                transition: "filter 0.3s",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: forceScrolled ? "#2D1A0E" : "#F5EDE3",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: "-0.3px",
                transition: "color 0.3s",
              }}
            >
              FlavorNest
            </span>
          </Link>

          {/* ── Desktop nav links ── */}
          <div className="hidden lg:flex items-center gap-1 relative">
            {NAV_LINKS.map((link) => {
              const isRecipes = link.label === "Recipes";
              const isStories = link.label === "Stories";
              const isActive =
                (isRecipes && recipesOpen) || (isStories && storiesOpen);

              const handleEnter = () => {
                if (closeTimer.current) clearTimeout(closeTimer.current);
                if (isRecipes) { setRecipesOpen(true); setStoriesOpen(false); }
                if (isStories) { setStoriesOpen(true); setRecipesOpen(false); }
              };

              const handleLeave = () => {
                closeTimer.current = setTimeout(() => {
                  if (isRecipes) setRecipesOpen(false);
                  if (isStories) setStoriesOpen(false);
                }, 120);
              };

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 transition-all duration-200"
                    style={{
                      padding: link.hasDropdown
                        ? "8px 14px 8px 16px"
                        : "8px 16px",
                      background: isActive
                        ? forceScrolled
                          ? "rgba(75,46,26,0.08)"
                          : "rgba(245,237,227,0.15)"
                        : "transparent",
                      color: forceScrolled
                        ? "rgba(45,26,14,0.85)"
                        : "rgba(245,237,227,0.85)",
                      fontSize: 14,
                      fontWeight: isActive ? 600 : 500,
                      borderRadius: 8,
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <motion.svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          d="M3 5L6 8L9 5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    )}
                  </Link>

                  {isRecipes && (
                    <RecipesDropdown
                      isOpen={recipesOpen}
                      onClose={() => setRecipesOpen(false)}
                    />
                  )}
                  {isStories && (
                    <StoriesDropdown
                      isOpen={storiesOpen}
                      onClose={() => setStoriesOpen(false)}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Right actions ── */}
          <div className="flex items-center gap-2.5">
            {/* Search */}
            <button
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="hidden sm:flex items-center justify-center transition-all duration-200"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: `1px solid ${forceScrolled ? "rgba(75,46,26,0.15)" : "rgba(245,237,227,0.2)"
                  }`,
                background: forceScrolled
                  ? "rgba(75,46,26,0.04)"
                  : "rgba(245,237,227,0.08)",
                color: forceScrolled ? "#2D1A0E" : "#F5EDE3",
                cursor: "pointer",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M20 20L16.5 16.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* ── Favorites heart icon ── */}
            <Link
              href="/favorites"
              aria-label={`Favorites${favCount > 0 ? ` (${favCount})` : ""}`}
              className="hidden sm:flex items-center justify-center transition-all duration-200"
              style={{
                position: "relative",
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: `1px solid ${forceScrolled ? "rgba(75,46,26,0.15)" : "rgba(245,237,227,0.2)"
                  }`,
                background: forceScrolled
                  ? "rgba(75,46,26,0.04)"
                  : "rgba(245,237,227,0.08)",
                color: favCount > 0 ? "#D97706" : forceScrolled ? "#2D1A0E" : "#F5EDE3",
                textDecoration: "none",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={favCount > 0 ? "#D97706" : "none"}
                style={{ transition: "fill 0.2s" }}
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Badge số lượng */}
              <AnimatePresence>
                {hydrated && favCount > 0 && (
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
                      background: "linear-gradient(135deg, #D97706, #B45309)",
                      color: "#fff",
                      fontSize: 9,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingInline: 3,
                      boxShadow: "0 1px 4px rgba(217,119,6,0.5)",
                      border: "1.5px solid",
                      borderColor: forceScrolled ? "#F5EDE3" : "rgba(255,255,255,0.3)",
                      lineHeight: 1,
                    }}
                  >
                    {favCount > 99 ? "99+" : favCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            {/* Auth */}
            {session?.user ? (
              <div className="hidden sm:flex items-center gap-2">
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    border: "2px solid #D97706",
                    overflow: "hidden",
                    flexShrink: 0,
                    background: "#4B2E1A",
                  }}
                >
                  <img
                    src={session.user.image ?? "/logo.svg"}
                    alt={session.user.name ?? "User"}
                    width={34}
                    height={34}
                    referrerPolicy="no-referrer"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: forceScrolled ? "#2D1A0E" : "#F5EDE3",
                  }}
                >
                  {session.user.name?.split(" ")[0]}
                </span>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 999,
                    background: "transparent",
                    border: `1px solid ${forceScrolled
                      ? "rgba(75,46,26,0.3)"
                      : "rgba(245,237,227,0.4)"
                      }`,
                    color: forceScrolled ? "#4B2E1A" : "#F5EDE3",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Log out
                </button>
              </div>
            ) : (
              <Link
                href="/auth/signin"
                className="hidden sm:inline-flex transition-all duration-200"
                style={{
                  padding: "8px 18px",
                  borderRadius: 999,
                  background: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
                  color: "#F5EDE3",
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(217, 119, 6, 0.35)",
                }}
              >
                Sign in
              </Link>
            )}

            {/* Mobile hamburger */}
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex items-center justify-center"
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: forceScrolled
                  ? "rgba(75,46,26,0.06)"
                  : "rgba(245,237,227,0.1)",
                border: `1px solid ${forceScrolled ? "rgba(75,46,26,0.1)" : "rgba(245,237,227,0.15)"
                  }`,
                color: forceScrolled ? "#2D1A0E" : "#F5EDE3",
                cursor: "pointer",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M3 5H15M3 9H15M3 13H15"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50"
              style={{
                background: "rgba(45, 26, 14, 0.5)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
              }}
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.y > 120 || info.velocity.y > 500) {
                  setMobileOpen(false);
                }
              }}
              className="fixed bottom-0 left-0 right-0 z-50 flex flex-col"
              style={{
                height: "92vh",
                background: "#F5EDE3",
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                boxShadow: "0 -10px 40px rgba(45,26,14,0.25)",
              }}
            >
              {/* Drag handle */}
              <div className="flex justify-center pt-3 pb-2 flex-shrink-0">
                <div
                  style={{
                    width: 40,
                    height: 4,
                    borderRadius: 999,
                    background: "rgba(75,46,26,0.2)",
                  }}
                />
              </div>

              {/* Header */}
              <div
                className="flex items-center justify-between px-6 pb-4 flex-shrink-0"
                style={{ borderBottom: "1px solid rgba(75,46,26,0.08)" }}
              >
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/logo.svg"
                    alt="FlavorNest"
                    width={36}
                    height={36}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      color: "#2D1A0E",
                      fontSize: 18,
                      fontWeight: 600,
                    }}
                  >
                    FlavorNest
                  </span>
                </div>
                <button
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(75,46,26,0.06)",
                    border: "none",
                    color: "#2D1A0E",
                    cursor: "pointer",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 4L12 12M12 4L4 12"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto px-6 py-5">
                {NAV_LINKS.map((link) => {
                  const isRecipes = link.label === "Recipes";
                  const expanded = mobileExpanded === link.label;

                  if (link.hasDropdown && isRecipes) {
                    return (
                      <div key={link.label} className="mb-1">
                        <button
                          onClick={() =>
                            setMobileExpanded(expanded ? null : link.label)
                          }
                          className="w-full flex items-center justify-between py-4"
                          style={{
                            fontFamily: "var(--font-playfair), Georgia, serif",
                            fontSize: 20,
                            fontWeight: 600,
                            color: "#2D1A0E",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            textAlign: "left",
                          }}
                        >
                          {link.label}
                          <motion.svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            animate={{ rotate: expanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ color: "#D97706" }}
                          >
                            <path
                              d="M4 6L8 10L12 6"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </motion.svg>
                        </button>

                        <AnimatePresence>
                          {expanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              style={{ overflow: "hidden" }}
                            >
                              <div className="pb-4">
                                <div
                                  style={{
                                    fontSize: 11,
                                    fontWeight: 600,
                                    letterSpacing: "1.5px",
                                    color: "#D97706",
                                    textTransform: "uppercase",
                                    marginTop: 8,
                                    marginBottom: 10,
                                  }}
                                >
                                  Categories
                                </div>
                                <div className="grid grid-cols-2 gap-2 mb-5">
                                  {RECIPE_CATEGORIES.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="flex flex-col gap-2 p-3"
                                      style={{
                                        borderRadius: 14,
                                        background: "#FFFFFF",
                                        border:
                                          "1px solid rgba(75,46,26,0.08)",
                                        textDecoration: "none",
                                      }}
                                    >
                                      <div
                                        className="relative w-full overflow-hidden"
                                        style={{
                                          aspectRatio: "4/3",
                                          borderRadius: 10,
                                        }}
                                      >
                                        <Image
                                          src={item.image}
                                          alt={item.name}
                                          fill
                                          sizes="(max-width: 768px) 45vw, 200px"
                                          className="object-cover"
                                        />
                                      </div>
                                      <div>
                                        <div
                                          style={{
                                            fontFamily:
                                              "var(--font-playfair), Georgia, serif",
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: "#2D1A0E",
                                          }}
                                        >
                                          {item.name}
                                        </div>
                                        <div
                                          style={{
                                            fontSize: 11,
                                            color: "rgba(75,46,26,0.6)",
                                            marginTop: 2,
                                          }}
                                        >
                                          {item.description}
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>

                                <div
                                  style={{
                                    fontSize: 11,
                                    fontWeight: 600,
                                    letterSpacing: "1.5px",
                                    color: "#D97706",
                                    textTransform: "uppercase",
                                    marginBottom: 10,
                                  }}
                                >
                                  Regions
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                  {RECIPE_REGIONS.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="flex flex-col gap-2 p-3"
                                      style={{
                                        borderRadius: 14,
                                        background: "#FFFFFF",
                                        border:
                                          "1px solid rgba(75,46,26,0.08)",
                                        textDecoration: "none",
                                      }}
                                    >
                                      <div
                                        className="relative w-full overflow-hidden"
                                        style={{
                                          aspectRatio: "4/3",
                                          borderRadius: 10,
                                        }}
                                      >
                                        <Image
                                          src={item.image}
                                          alt={item.name}
                                          fill
                                          sizes="(max-width: 768px) 45vw, 200px"
                                          className="object-cover"
                                        />
                                      </div>
                                      <div>
                                        <div
                                          style={{
                                            fontFamily:
                                              "var(--font-playfair), Georgia, serif",
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: "#2D1A0E",
                                          }}
                                        >
                                          {item.name}
                                        </div>
                                        <div
                                          style={{
                                            fontSize: 11,
                                            color: "rgba(75,46,26,0.6)",
                                            marginTop: 2,
                                          }}
                                        >
                                          {item.description}
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        <div
                          style={{
                            height: 1,
                            background: "rgba(75,46,26,0.06)",
                          }}
                        />
                      </div>
                    );
                  }

                  return (
                    <div key={link.label}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-4"
                        style={{
                          fontFamily: "var(--font-playfair), Georgia, serif",
                          fontSize: 20,
                          fontWeight: 600,
                          color: "#2D1A0E",
                          textDecoration: "none",
                        }}
                      >
                        {link.label}
                      </Link>
                      <div
                        style={{
                          height: 1,
                          background: "rgba(75,46,26,0.06)",
                        }}
                      />
                    </div>
                  );
                })}

                {/* ── Favorites link in mobile menu ── */}
                <div>
                  <Link
                    href="/favorites"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-4"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: 20,
                      fontWeight: 600,
                      color: "#2D1A0E",
                      textDecoration: "none",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill={favCount > 0 ? "#D97706" : "none"}
                      style={{ transition: "fill 0.2s", flexShrink: 0 }}
                    >
                      <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"
                        stroke="#D97706"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Favorites
                    {hydrated && favCount > 0 && (
                      <span
                        style={{
                          marginLeft: "auto",
                          minWidth: 22,
                          height: 22,
                          borderRadius: 999,
                          background:
                            "linear-gradient(135deg, #D97706, #B45309)",
                          color: "#fff",
                          fontSize: 11,
                          fontWeight: 700,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          paddingInline: 6,
                        }}
                      >
                        {favCount}
                      </span>
                    )}
                  </Link>
                  <div
                    style={{ height: 1, background: "rgba(75,46,26,0.06)" }}
                  />
                </div>
              </div>

              {/* Bottom auth section */}
              <div
                className="px-6 py-4 flex-shrink-0"
                style={{ borderTop: "1px solid rgba(75,46,26,0.08)" }}
              >
                {session?.user ? (
                  <div
                    className="flex items-center gap-3 mb-3 p-3"
                    style={{
                      background: "#fff",
                      borderRadius: 14,
                      border: "1px solid rgba(75,46,26,0.08)",
                    }}
                  >
                    <Image
                      src={session.user.image ?? "/logo.svg"}
                      alt={session.user.name ?? "User"}
                      width={40}
                      height={40}
                      style={{ borderRadius: "50%", border: "2px solid #D97706" }}
                    />
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontWeight: 600,
                          color: "#2D1A0E",
                          fontSize: 14,
                        }}
                      >
                        {session.user.name}
                      </div>
                      <div style={{ fontSize: 12, color: "#9B7B60" }}>
                        {session.user.email}
                      </div>
                    </div>
                    <button
                      onClick={() => signOut({ callbackUrl: "/" })}
                      style={{
                        fontSize: 12,
                        color: "#DC2626",
                        fontWeight: 600,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Xuất
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/auth/signin"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center w-full"
                    style={{
                      padding: "14px",
                      borderRadius: 999,
                      background:
                        "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
                      color: "#F5EDE3",
                      fontSize: 15,
                      fontWeight: 600,
                      textDecoration: "none",
                      boxShadow: "0 6px 18px rgba(217, 119, 6, 0.35)",
                    }}
                  >
                    Sign in
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
