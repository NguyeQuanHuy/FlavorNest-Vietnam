'use client';

interface Props {
    region: 'north' | 'central' | 'south';
    size?: number;
}

export default function VietnamMap({ region, size = 200 }: Props) {
    const ACTIVE = '#D97706';
    const INACTIVE = 'rgba(75,46,26,0.12)';
    const STROKE = 'rgba(75,46,26,0.5)';

    return (
        <svg viewBox="0 0 200 480" width={size} height={size * 2.4} fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 6px 16px rgba(75,46,26,0.1))' }}>
            {/* Northern — wider top, mountainous */}
            <path
                d="M 60 20 Q 110 8, 165 30 Q 175 55, 158 85 Q 145 110, 130 130 Q 115 145, 105 155 L 95 155 Q 78 140, 65 115 Q 50 85, 50 55 Q 50 30, 60 20 Z"
                fill={region === 'north' ? ACTIVE : INACTIVE}
                stroke={STROKE}
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            {/* Central — narrow S-curve coast */}
            <path
                d="M 95 155 L 105 155 Q 118 165, 125 185 Q 130 215, 122 250 Q 110 290, 100 320 L 88 320 Q 78 290, 80 255 Q 84 215, 88 185 Q 90 165, 95 155 Z"
                fill={region === 'central' ? ACTIVE : INACTIVE}
                stroke={STROKE}
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            {/* Southern — wider delta */}
            <path
                d="M 88 320 L 100 320 Q 115 335, 125 360 Q 132 385, 125 410 Q 115 435, 90 448 Q 60 455, 35 440 Q 20 420, 28 390 Q 40 360, 60 340 Q 75 325, 88 320 Z"
                fill={region === 'south' ? ACTIVE : INACTIVE}
                stroke={STROKE}
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            {/* Pulse marker */}
            {region === 'north' && (
                <>
                    <circle cx="105" cy="80" r="6" fill="#D97706" opacity="0.3">
                        <animate attributeName="r" values="6;14;6" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="105" cy="80" r="5" fill="#D97706" stroke="white" strokeWidth="2" />
                </>
            )}
            {region === 'central' && (
                <>
                    <circle cx="103" cy="240" r="6" fill="#D97706" opacity="0.3">
                        <animate attributeName="r" values="6;14;6" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="103" cy="240" r="5" fill="#D97706" stroke="white" strokeWidth="2" />
                </>
            )}
            {region === 'south' && (
                <>
                    <circle cx="78" cy="395" r="6" fill="#D97706" opacity="0.3">
                        <animate attributeName="r" values="6;14;6" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="78" cy="395" r="5" fill="#D97706" stroke="white" strokeWidth="2" />
                </>
            )}
        </svg>
    );
}