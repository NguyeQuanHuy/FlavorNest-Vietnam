'use client';

import { useEffect, useState } from 'react';
import { NORTH_PROVINCES, CENTRAL_PROVINCES, SOUTH_PROVINCES } from './vietnam-regions';

interface Props {
    region: 'north' | 'central' | 'south';
    size?: number;
}

export default function VietnamMap({ region, size = 200 }: Props) {
    const [svg, setSvg] = useState<string>('');

    useEffect(() => {
        fetch('/images/vietnam-map.svg')
            .then(r => r.text())
            .then(setSvg);
    }, []);

    if (!svg) return <div style={{ width: size, height: size * 2.4 }} />;

    const activeIds =
        region === 'north' ? NORTH_PROVINCES :
            region === 'central' ? CENTRAL_PROVINCES :
                SOUTH_PROVINCES;

    // Inject style + sizing into SVG
    const styled = svg
        .replace('<svg', `<svg width="${size}" height="${size * 2.4}" data-region="${region}"`)
        .replace('</svg>', `<style>
            [id^="VN"] { fill: rgba(75,46,26,0.1); stroke: rgba(75,46,26,0.25); transition: fill 0.4s; }
            ${activeIds.map(id => `#${id}`).join(', ')} { fill: #D97706 !important; stroke: #B45309; }
        </style></svg>`);

    return (
        <div
            style={{ filter: 'drop-shadow(0 6px 16px rgba(75,46,26,0.12))' }}
            dangerouslySetInnerHTML={{ __html: styled }}
        />
    );
}