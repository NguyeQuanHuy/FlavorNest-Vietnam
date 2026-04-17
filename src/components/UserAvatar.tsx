'use client';

import { useEffect, useState } from 'react';

interface UserAvatarProps {
    src?: string | null;
    name?: string | null;
}

export default function UserAvatar({ src, name }: UserAvatarProps) {
    const [localAvatar, setLocalAvatar] = useState<string | null>(null);

    // Đọc avatar từ localStorage khi component mount
    useEffect(() => {
        try {
            const stored = localStorage.getItem('fn_avatar');
            if (stored) setLocalAvatar(stored);
        } catch { }

        // Lắng nghe sự kiện avatar-updated để tự động refresh
        const handler = (e: Event) => {
            const detail = (e as CustomEvent<string>).detail;
            setLocalAvatar(detail || null);
        };
        window.addEventListener('fn-avatar-updated', handler);

        // Lắng nghe thay đổi localStorage từ tab khác
        const storageHandler = (e: StorageEvent) => {
            if (e.key === 'fn_avatar') {
                setLocalAvatar(e.newValue);
            }
        };
        window.addEventListener('storage', storageHandler);

        return () => {
            window.removeEventListener('fn-avatar-updated', handler);
            window.removeEventListener('storage', storageHandler);
        };
    }, []);

    // Ưu tiên localStorage → fallback src từ session → fallback ui-avatars
    const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'User')}&background=D97706&color=fff&bold=true&size=80`;
    const displaySrc = localAvatar || src || fallbackUrl;

    return (
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#D97706] shadow-sm group-hover:scale-105 transition-transform">
            <img
                src={displaySrc}
                alt={name || 'Avatar'}
                className="w-full h-full object-cover"
                onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = fallbackUrl;
                }}
            />
        </div>
    );
}
