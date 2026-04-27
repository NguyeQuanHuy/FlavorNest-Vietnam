"use client";

import { useState, useRef, useEffect } from 'react';
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FNIcon } from "@/components/Icons";
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

// Các trang có background sáng — navbar luôn dùng dark mode
const LIGHT_BG_PAGES = ["/favorites", "/recipes", "/stories", "/about", "/auth", "/privacy", "/impressum"];

export default function Navbar() {
  const pathname = usePathname();
  const isLightPage = LIGHT_BG_PAGES.some((p) => pathname?.startsWith(p));
  const [scrolled, setScrolled] = useState(false);
  const forceScrolled = false; // Always dark mode
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
          background: "rgba(45, 26, 14, 0.85)",
          borderBottomColor: "rgba(245, 237, 227, 0.12)",
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-[100]"
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
            className="flex items-center gap-1 group"
            style={{ textDecoration: "none" }}
          >
            <Image
              src="/logo.png"
              alt="FlavorNest"
              width={56}
              height={56}
              priority
              className="transition-transform duration-300 group-hover:scale-110"
              style={{
                filter: forceScrolled
                  ? "drop-shadow(0 2px 6px rgba(217, 119, 6, 0.3))"
                  : "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4))",
                transition: "filter 0.3s",
              }}
            />
            <div className="flex flex-col leading-none">
              <span
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: forceScrolled ? "#2D1A0E" : "#F5EDE3",
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: "-0.3px",
                  transition: "color 0.3s",
                }}
              >
                FlavorNest
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  color: forceScrolled ? "#D97706" : "#D97706",
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  marginTop: 2,
                  transition: "color 0.3s",
                }}
              >
                Vietnam Gourmet
              </span>
            </div>
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
              <FNIcon name="search" size={15} />
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
              <FNIcon
                name="favorite"
                size={16}
                color="currentColor"
                className={favCount > 0 ? "fn-heart-filled" : ""}
              />

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
                    src={session.user.image ?? "/logo.png"}
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
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen(prev => !prev)}
              className="lg:hidden flex items-center justify-center"
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#FFFFFF",
                boxShadow: "0 4px 14px rgba(217,119,6,0.45), inset 0 1px 0 rgba(255,255,255,0.2)",
                transition: "all 0.25s ease",
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
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 320 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x > 120 || info.velocity.x > 500) {
                  setMobileOpen(false);
                }
              }}
              className="fixed top-0 right-0 bottom-0 z-50 flex flex-col"
              style={{
                width: "min(86vw, 380px)",
                background: "#F5EDE3",
                borderTopLeftRadius: 24,
                borderBottomLeftRadius: 24,
                boxShadow: "-10px 0 40px rgba(45,26,14,0.25)",
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-6 pt-6 pb-4 flex-shrink-0"
                style={{ borderBottom: "1px solid rgba(75,46,26,0.08)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Menu
                </span>
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
                  <FNIcon name="close" size={16} />
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
                    <FNIcon
                      name="favorite"
                      size={20}
                      color="#D97706"
                    />
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
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    margin: '0 0 16px',
                    padding: '14px 16px',
                    background: 'white',
                    borderRadius: 18,
                    border: '1px solid rgba(75,46,26,0.08)',
                  }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
                      border: '2px solid #D97706', overflow: 'hidden', background: '#4B2E1A',
                    }}>
                      <img
                        src={session.user.image ?? '/logo.png'}
                        alt={session.user.name ?? 'User'}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: '#2D1A0E', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {session.user.name}
                      </p>
                      <p style={{ fontSize: 11, color: 'rgba(75,46,26,0.45)', margin: '2px 0 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {session.user.email}
                      </p>
                    </div>
                    <button
                      onClick={() => signOut({ callbackUrl: '/' })}
                      style={{
                        fontSize: 12, fontWeight: 700, color: '#D97706',
                        background: 'rgba(217,119,6,0.08)', border: '1px solid rgba(217,119,6,0.2)',
                        borderRadius: 8, padding: '6px 10px', cursor: 'pointer', flexShrink: 0,
                      }}
                    >
                      Sign out
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
