'use client';


interface Props {
    region: 'north' | 'central' | 'south';
    size?: number;
}

export default function VietnamMap({ region, size = 200 }: Props) {
    const ACTIVE = '#D97706';
    const INACTIVE = 'rgba(75,46,26,0.15)';
    const STROKE = 'rgba(75,46,26,0.35)';

    return (
        <svg viewBox="0 0 240 480" width={size} height={size * 2} fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 4px 12px rgba(75,46,26,0.08))' }}>
            {/* Northern Vietnam */}
            <path
                d="M 30 30 Q 100 10, 200 50 L 215 90 Q 200 130, 180 160 L 145 175 Q 110 165, 80 145 Q 50 120, 30 90 Z"
                fill={region === 'north' ? ACTIVE : INACTIVE}
                stroke={STROKE}
                strokeWidth="1.2"
            />
            {/* Central Vietnam */}
            <path
                d="M 145 175 L 180 160 Q 195 195, 175 240 Q 160 290, 140 320 L 110 310 Q 100 270, 110 230 Q 125 200, 145 175 Z"
                fill={region === 'central' ? ACTIVE : INACTIVE}
                stroke={STROKE}
                strokeWidth="1.2"
            />
            {/* Southern Vietnam */}
            <path
                d="M 110 310 L 140 320 Q 155 350, 145 390 Q 130 425, 95 445 Q 60 455, 35 430 Q 25 400, 50 365 Q 80 335, 110 310 Z"
                fill={region === 'south' ? ACTIVE : INACTIVE}
                stroke={STROKE}
                strokeWidth="1.2"
            />
            {/* Active region pulse marker */}
            {region === 'north' && (
                <circle cx="120" cy="80" r="5" fill="#D97706" stroke="white" strokeWidth="2">
                    <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
                </circle>
            )}
            {region === 'central' && (
                <circle cx="155" cy="240" r="5" fill="#D97706" stroke="white" strokeWidth="2">
                    <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
                </circle>
            )}
            {region === 'south' && (
                <circle cx="90" cy="400" r="5" fill="#D97706" stroke="white" strokeWidth="2">
                    <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
                </circle>
            )}
        </svg>
    );
}