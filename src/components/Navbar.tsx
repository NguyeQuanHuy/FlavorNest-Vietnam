import Link from 'next/link';
import UserAvatar from './UserAvatar';
import SearchModal from './SearchModal';
import MobileMenu from './MobileMenu';
import { Heart } from 'lucide-react';
import { auth } from '../auth';

export default async function Navbar() {
    const session = await auth();

    const recipesMenu = {
        title: "Explore All Recipes",
        link: "/recipes",
        cols: [
            {
                head: "Categories",
                items: [
                    { name: "Breakfast", desc: "", url: "/recipes/breakfast" },
                    { name: "Main Dishes", desc: "", url: "/recipes/main-dishes" },
                    { name: "Desserts", desc: "", url: "/recipes/desserts" },
                    { name: "Specialty Drinks", desc: "", url: "/recipes/drinks" },
                ]
            },
            {
                head: "Regions",
                items: [
                    { name: "Northern Cuisine", desc: "", url: "/recipes/north" },
                    { name: "Central Cuisine", desc: "", url: "/recipes/central" },
                    { name: "Southern Cuisine", desc: "", url: "/recipes/south" },
                    { name: "Street Food", desc: "", url: "/recipes/street-food" },
                ]
            }
        ]
    };

    const storiesMenu = {
        title: "Read All Stories",
        link: "/stories",
        cols: [
            {
                head: "Insights",
                items: [
                    { name: "Culinary Culture", desc: "Traditions & History", url: "/stories/culture" },
                    { name: "Chef's Secrets", desc: "Pro Tips & Techniques", url: "/stories/chef-secrets" },
                ]
            },
            {
                head: "Guides",
                items: [
                    { name: "Travel Guide", desc: "Where to eat in VN", url: "/stories/travel" },
                    { name: "Behind the Scenes", desc: "Our food journey", url: "/stories/about" },
                ]
            }
        ]
    };

    function DropdownMenu({ menu }: { menu: typeof recipesMenu }) {
        return (
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-250 z-50">
                {/* Arrow */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-fn-brown/8 rotate-45 z-10" />
                <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(75,46,26,0.12)] border border-fn-brown/6 p-5 w-[420px] grid grid-cols-2 gap-6 relative">
                    {menu.cols.map((col, idx) => (
                        <div key={idx}>
                            <p className="text-[9px] font-black text-fn-amber uppercase tracking-[0.22em] mb-3 pb-2 border-b border-fn-amber/10">
                                {col.head}
                            </p>
                            <div className="flex flex-col gap-2.5">
                                {col.items.map((item, i) => (
                                    <Link key={i} href={item.url} className="flex flex-col group/item py-0.5 px-2 -mx-2 rounded-lg hover:bg-fn-amber/5 transition-colors">
                                        <span className="text-[13px] font-semibold text-fn-brown/75 group-hover/item:text-fn-amber transition-colors leading-tight">
                                            {item.name}
                                        </span>
                                        {item.desc && (
                                            <span className="text-[10px] text-fn-brown/35 mt-0.5">
                                                {item.desc}
                                            </span>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="col-span-2 pt-3 border-t border-fn-brown/5 flex items-center justify-between">
                        <span className="text-[10px] text-fn-brown/30">100+ authentic recipes</span>
                        <Link href={menu.link} className="text-[11px] font-bold text-fn-amber hover:text-fn-brown transition-colors flex items-center gap-1">
                            {menu.title} →
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-fn-brown/6"
            style={{ boxShadow: '0 1px 0 rgba(75,46,26,0.04), 0 4px 16px rgba(0,0,0,0.04)' }}>
            <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between gap-6">

                {/* ── Logo ── */}
                <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
                    <img
                        src="/logo.png"
                        alt="FlavorNest"
                        className="h-7 w-7 object-contain flex-shrink-0
                        transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="hidden lg:flex flex-col leading-none">
                        <span className="text-[17px] font-bold text-fn-brown tracking-tight">FlavorNest</span>
                        <span className="text-[9px] text-fn-amber font-semibold tracking-[0.22em] uppercase mt-0.5">Vietnam Gourmet</span>
                    </div>
                </Link>

                {/* ── Desktop Nav ── */}
                <div className="hidden md:flex items-center gap-1 h-full flex-1 justify-center">
                    {/* Home */}
                    <Link href="/"
                        className="px-4 py-2 text-[13.5px] font-medium text-fn-brown/65 hover:text-fn-brown hover:bg-fn-brown/5 rounded-xl transition-all duration-200">
                        Home
                    </Link>

                    {/* Recipes dropdown */}
                    <div className="group relative h-full flex items-center">
                        <Link href="/recipes"
                            className="px-4 py-2 text-[13.5px] font-medium text-fn-brown/65 hover:text-fn-brown hover:bg-fn-brown/5 rounded-xl transition-all duration-200 flex items-center gap-1">
                            Recipes
                            <svg className="w-3 h-3 opacity-40 group-hover:opacity-70 transition-all group-hover:rotate-180 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>
                        <DropdownMenu menu={recipesMenu} />
                    </div>

                    {/* Stories dropdown */}
                    <div className="group relative h-full flex items-center">
                        <Link href="/stories"
                            className="px-4 py-2 text-[13.5px] font-medium text-fn-brown/65 hover:text-fn-brown hover:bg-fn-brown/5 rounded-xl transition-all duration-200 flex items-center gap-1">
                            Stories
                            <svg className="w-3 h-3 opacity-40 group-hover:opacity-70 transition-all group-hover:rotate-180 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>
                        <DropdownMenu menu={storiesMenu} />
                    </div>

                    {/* About */}
                    <Link href="/about"
                        className="px-4 py-2 text-[13.5px] font-medium text-fn-brown/65 hover:text-fn-brown hover:bg-fn-brown/5 rounded-xl transition-all duration-200">
                        About
                    </Link>
                </div>

                {/* ── Right utilities ── */}
                <div className="flex items-center gap-2 flex-shrink-0">

                    {/* Search */}
                    <div className="text-fn-brown/50 hover:text-fn-amber transition-colors">
                        <SearchModal />
                    </div>

                    {/* Favorites */}
                    <Link href="/favorites" title="My Favorites"
                        className="w-9 h-9 flex items-center justify-center text-fn-brown/50 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 border border-transparent hover:border-red-100">
                        <Heart className="w-[18px] h-[18px]" />
                    </Link>

                    {/* Divider */}
                    <div className="hidden md:block h-6 w-px bg-fn-brown/10 mx-1" />

                    {/* Desktop: Avatar / Sign In */}
                    <div className="hidden md:flex items-center">
                        {session?.user ? (
                            <Link href="/account"
                                className="flex items-center gap-2.5 group bg-fn-brown/4 hover:bg-fn-amber/8 px-2 py-1.5 pr-3.5 rounded-full border border-fn-brown/8 hover:border-fn-amber/25 transition-all duration-250"
                                style={{ background: 'rgba(75,46,26,0.04)' }}>
                                <div className="relative flex-shrink-0">
                                    <UserAvatar src={session.user.image || ''} name={session.user.name || ''} />
                                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
                                </div>
                                <div className="flex flex-col leading-none">
                                    <span className="text-[8px] uppercase tracking-widest text-fn-brown/35 font-black">Chef</span>
                                    <span className="text-[12.5px] font-bold text-fn-brown group-hover:text-fn-amber transition-colors max-w-[100px] truncate">
                                        {session.user.name?.split(' ').pop()}
                                    </span>
                                </div>
                            </Link>
                        ) : (
                            <Link href="/login"
                                className="inline-flex items-center gap-2 px-5 py-2 text-[13px] font-bold text-white bg-fn-brown hover:bg-fn-amber rounded-full transition-all duration-200 shadow-sm shadow-fn-brown/15 hover:shadow-fn-amber/20 hover:shadow-md">
                                Sign In
                            </Link>
                        )}
                    </div>

                    {/* Mobile menu */}
                    <MobileMenu session={session} />
                </div>
            </div>
        </nav>
    );
}
