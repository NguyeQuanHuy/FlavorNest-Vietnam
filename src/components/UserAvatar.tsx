'use client' // Quan trọng nhất là dòng này

export default function UserAvatar({ src, name }: { src?: string | null, name?: string | null }) {
    const fallbackUrl = `https://ui-avatars.com/api/?name=${name || 'User'}&background=D97706&color=fff`;

    return (
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#D97706] shadow-sm group-hover:scale-105 transition-transform">
            <img
                src={src || fallbackUrl}
                alt="Avatar"
                className="w-full h-full object-cover"
                onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = fallbackUrl;
                }}
            />
        </div>
    );
}