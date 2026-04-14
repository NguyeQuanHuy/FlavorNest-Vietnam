import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'fn-beige': '#FDFCFB',    // Trắng kem sang trọng
                'fn-brown': '#3F2305',    // Nâu đậm cổ điển
                'fn-amber': '#D97706',    // Cam mật ong (điểm nhấn)
            },
            fontFamily: {
                // Biến font này phải khớp với biến bạn đặt trong layout.tsx
                'display': ['var(--font-playfair)', 'serif'],
                'sans': ['var(--font-inter)', 'sans-serif'],
            },
            boxShadow: {
                'fn-card': '0 10px 40px -10px rgba(63, 35, 5, 0.03)',
                'fn-hover': '0 20px 50px -10px rgba(63, 35, 5, 0.08)',
            }
        },
    },
    plugins: [],
};
export default config;