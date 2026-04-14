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
                    { name: "Breakfast", desc: "Món ăn sáng", url: "/recipes/breakfast" },
                    { name: "Main Dishes", desc: "Món chính", url: "/recipes/main-dishes" },
                    { name: "Desserts", desc: "Tráng miệng", url: "/recipes/desserts" },
                    { name: "Specialty Drinks", desc: "Đồ uống đặc biệt", url: "/recipes/drinks" },
                ]
            },
            {
                head: "Regions",
                items: [
                    { name: "Northern Cuisine", desc: "Ẩm thực miền Bắc", url: "/recipes/north" },
                    { name: "Central Cuisine", desc: "Ẩm thực miền Trung", url: "/recipes/central" },
                    { name: "Southern Cuisine", desc: "Ẩm thực miền Nam", url: "/recipes/south" },
                    { name: "Street Food", desc: "Món ăn đường phố", url: "/recipes/street-food" },
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
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-fn-brown/5 p-6 w-[440px] grid grid-cols-2 gap-8">
                    {menu.cols.map((col, idx) => (
                        <div key={idx}>
                            <p className="text-[10px] font-black text-fn-amber uppercase tracking-[0.2em] mb-4 border-b border-fn-amber/10 pb-1">
                                {col.head}
                            </p>
                            <div className="flex flex-col gap-3.5">
                                {col.items.map((item, i) => (
                                    <Link key={i} href={item.url} className="flex flex-col group/item">
                                        <span className="text-sm font-semibold text-fn-brown/80 group-hover/item:text-fn-amber transition-colors">
                                            {item.name}
                                        </span>
                                        {item.desc && (
                                            <span className="text-[10px] text-fn-brown/40 -mt-0.5">
                                                {item.desc}
                                            </span>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="col-span-2 pt-4 border-t border-fn-brown/5 text-center">
                        <Link
                            href={menu.link}
                            className="text-[10px] font-bold text-fn-brown/40 hover:text-fn-amber uppercase tracking-[0.1em] transition-colors"
                        >
                            {menu.title} →
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-fn-brown/5">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">

                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="/" className="flex items-center group">
                        <img
                            src="/logo.png"
                            alt="Flavor Nest Logo"
                            className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
                        />
                        <div className="ml-3 hidden lg:block">
                            <span className="block text-xl font-bold text-fn-brown leading-none">FlavorNest</span>
                            <span className="text-[10px] text-fn-amber font-medium tracking-[0.2em] uppercase">Vietnam Gourmet</span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10 h-full">
                    <Link href="/" className="group relative py-2">
                        <span className="text-fn-brown/70 group-hover:text-fn-amber font-medium transition-colors">Home</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fn-amber transition-all group-hover:w-full" />
                    </Link>

                    <div className="group relative h-full flex items-center">
                        <Link href="/recipes" className="text-fn-brown/70 group-hover:text-fn-amber font-medium transition-colors">
                            Recipes
                        </Link>
                        <DropdownMenu menu={recipesMenu} />
                        <span className="absolute bottom-5 left-0 w-0 h-0.5 bg-fn-amber transition-all group-hover:w-full" />
                    </div>

                    <div className="group relative h-full flex items-center">
                        <Link href="/stories" className="text-fn-brown/70 group-hover:text-fn-amber font-medium transition-colors">
                            Stories
                        </Link>
                        <DropdownMenu menu={storiesMenu} />
                        <span className="absolute bottom-5 left-0 w-0 h-0.5 bg-fn-amber transition-all group-hover:w-full" />
                    </div>

                    <Link href="/about" className="group relative py-2">
                        <span className="text-fn-brown/70 group-hover:text-fn-amber font-medium transition-colors">About</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fn-amber transition-all group-hover:w-full" />
                    </Link>
                </div>

                {/* Right utilities */}
                <div className="flex items-center gap-3 sm:gap-4">
                    <SearchModal />

                    <Link
                        href="/favorites"
                        title="My Favorites"
                        className="p-2.5 text-fn-brown/60 hover:text-red-500 bg-fn-brown/5 hover:bg-red-50 transition-all duration-300 rounded-xl group border border-transparent hover:border-red-100"
                    >
                        <Heart className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </Link>

                    {/* Desktop: Sign In / Avatar */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className="h-8 w-[1px] bg-fn-brown/10" />
                        {session?.user ? (
                            <Link href="/account" className="flex items-center gap-3 group bg-fn-brown/5 p-1 pr-4 rounded-full border border-transparent hover:border-fn-amber/30 hover:bg-white transition-all duration-300 shadow-sm">
                                <div className="relative">
                                    <UserAvatar src={session.user.image || ''} name={session.user.name || ''} />
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                                </div>
                                <div className="flex-col items-start hidden sm:flex">
                                    <span className="text-[9px] uppercase tracking-tighter text-fn-brown/40 font-black">FlavorNest Chef</span>
                                    <span className="text-sm font-bold text-fn-brown group-hover:text-fn-amber transition-colors">{session.user.name}</span>
                                </div>
                            </Link>
                        ) : (
                            <Link href="/login" className="inline-flex items-center justify-center px-7 py-2.5 font-bold text-white bg-fn-brown rounded-full hover:bg-fn-amber transition-all shadow-lg shadow-fn-brown/10">
                                <span className="text-sm tracking-wide">Sign In</span>
                            </Link>
                        )}
                    </div>

                    {/* Mobile: Hamburger */}
                    <MobileMenu />
                </div>
            </div>
        </nav>
    );
}