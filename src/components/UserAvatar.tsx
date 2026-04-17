'use client';

import { useEffect, useState } from 'react';

interface UserAvatarProps {
    src?: string | null;
    name?: string | null;
}

export default function UserAvatar({ src, name }: UserAvatarProps) {
    const [localAvatar, setLocalAvatar] = useState<string | null>(null);

    useEffect(() => {
        try {
            const stored = localStorage.getItem('fn_avatar');
            if (stored) setLocalAvatar(stored);
        } catch { }

        const handler = (e: Event) => {
            const detail = (e as CustomEvent<string>).detail;
            setLocalAvatar(detail || null);
        };
        window.addEventListener('fn-avatar-updated', handler);

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

    const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'User')}&background=D97706&color=fff&bold=true&size=80`;
    const displaySrc = localAvatar || src || fallbackUrl;

    return (
        <div
            style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid #D97706',
                boxShadow: '0 1px 4px rgba(75,46,26,0.15)',
                flexShrink: 0,
            }}
            className="group-hover:scale-105 transition-transform"
        >
            <img
                src={displaySrc}
                alt={name || 'Avatar'}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                }}
                onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = fallbackUrl;
                }}
            />
        </div>
    );
}
