// src/components/Icons.tsx
type IconProps = {
  size?: number;
  color?: string;
  className?: string;
};

const defaultProps = {
  size: 24,
  color: "#D97706",
};

export const IconHome = ({ size = 24, color = "#D97706", className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    <polyline points="2,12 14,2 26,12" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="6" y="12" width="16" height="12" rx="1.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="11" y="18" width="6" height="6" rx="1" stroke={color} strokeWidth="1.8"/>
  </svg>
);

export const IconRecipe = ({ size = 24, color = "#D97706", className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    <rect x="5" y="2" width="18" height="24" rx="2" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="9" y1="9" x2="19" y2="9" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="9" y1="14" x2="19" y2="14" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="9" y1="19" x2="15" y2="19" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const IconSearch = ({ size = 24, color = "#D97706", className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="18" y1="18" x2="25" y2="25" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const IconHeart = ({ size = 24, color = "#D97706", filled = false, className }: IconProps & { filled?: boolean }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    <path
      d="M14,24 C9,19 2,14 2,8 C2,4 5,2 9,5 C11,6 13,8 14,10 C15,8 17,6 19,5 C23,2 26,4 26,8 C26,14 19,19 14,24 Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={filled ? color : "none"}
    />
  </svg>
);

export const IconShare = ({ size = 24, color = "#D97706", className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    <circle cx="21" cy="6" r="3" stroke={color} strokeWidth="1.8"/>
    <circle cx="7" cy="14" r="3" stroke={color} strokeWidth="1.8"/>
    <circle cx="21" cy="22" r="3" stroke={color} strokeWidth="1.8"/>
    <line x1="10" y1="12" x2="18" y2="8" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="10" y1="16" x2="18" y2="20" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const IconUser = ({ size = 24, color = "#D97706", className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    <circle cx="14" cy="9" r="6" stroke={color} strokeWidth="1.8"/>
    <path d="M3,26 C3,19 8,15 14,15 C20,15 25,19 25,26" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const IconFilter = ({ size = 24, color = "#D97706", className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    <line x1="3" y1="7" x2="25" y2="7" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="7" y1="14" x2="21" y2="14" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="11" y1="21" x2="17" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const IconBowl = ({ size = 24, color = "#D97706", className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    <path d="M3,11 C3,20 8,24 14,24 C20,24 25,20 25,11 Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="3" y1="11" x2="25" y2="11" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M9,3 Q11,0 14,3 Q17,6 19,3" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
  </svg>
);

export const IconClock = ({ size = 24, color = "#D97706", className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    <circle cx="14" cy="14" r="11" stroke={color} strokeWidth="1.8"/>
    <line x1="14" y1="7" x2="14" y2="14" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="14" y1="14" x2="20" y2="18" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const IconFire = ({ size = 24, color = "#D97706", className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    <path d="M14,2 C14,2 21,10 21,17 C21,22 18,26 14,26 C10,26 7,22 7,17 C7,11 10,7 14,2 Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11,18 C11,18 13,16 16,19" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
  </svg>
);

export const IconLeaf = ({ size = 24, color = "#D97706", className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    <path d="M14,24 C4,18 4,4 14,2 C24,4 24,18 14,24 Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="14" y1="2" x2="14" y2="24" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const IconBookmark = ({ size = 24, color = "#D97706", className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    <path d="M6,2 L22,2 L22,26 L14,19 L6,26 Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconStar = ({ size = 24, color = "#D97706", className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    <polygon points="14,2 17,10 26,10 19,16 22,24 14,19 6,24 9,16 2,10 11,10" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconMenu = ({ size = 24, color = "#D97706", className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    <line x1="3" y1="8" x2="25" y2="8" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="3" y1="14" x2="25" y2="14" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="3" y1="20" x2="18" y2="20" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const IconArrow = ({ size = 24, color = "#D97706", className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    <line x1="3" y1="14" x2="25" y2="14" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <polyline points="17,6 25,14 17,22" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconChopsticks = ({ size = 24, color = "#D97706", className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    <line x1="10" y1="2" x2="12" y2="26" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="18" y1="2" x2="16" y2="26" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

// FNIcon wrapper — dùng cho Navbar và toàn site
type FNIconProps = {
  name: string;
  size?: number;
  color?: string;
  className?: string;
  filled?: boolean;
};

export function FNIcon({ name, size = 24, color = "#D97706", className, filled }: FNIconProps) {#D97706", className }: FNIconProps) {
  const props = { size, color, className };
  switch (name) {
    case "home":       return <IconHome {...props} />;
    case "recipe":     return <IconRecipe {...props} />;
    case "search":     return <IconSearch {...props} />;
    case "favorite": return <IconHeart size={size} color={color} className={className} filled={filled ?? color !== "#9CA3AF"} />;
    case "share":      return <IconShare {...props} />;
    case "user":       return <IconUser {...props} />;
    case "filter":     return <IconFilter {...props} />;
    case "bowl":       return <IconBowl {...props} />;
    case "clock":      return <IconClock {...props} />;
    case "fire":       return <IconFire {...props} />;
    case "leaf":       return <IconLeaf {...props} />;
    case "bookmark":   return <IconBookmark {...props} />;
    case "star":       return <IconStar {...props} />;
    case "menu":       return <IconMenu {...props} />;
    case "arrow":      return <IconArrow {...props} />;
    case "chopsticks": return <IconChopsticks {...props} />;
    case "close":
      return (
        <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
          <line x1="6" y1="6" x2="22" y2="22" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="22" y1="6" x2="6" y2="22" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      );
    default: return null;
  }
