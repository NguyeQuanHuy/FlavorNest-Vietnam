'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function VietnameseCoffeeTiramisuPage() {
    const [activeTab, setActiveTab] = useState<'ingredients' | 'steps'>('ingredients');
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        if (typeof window !== 'undefined') {
            const favorites = JSON.parse(localStorage.getItem('fn_favorites') || '[]');
            const recipeId = 'vietnamese-coffee-tiramisu';
            if (favorites.includes(recipeId)) {
                localStorage.setItem(
                    'fn_favorites',
                    JSON.stringify(favorites.filter((id: string) => id !== recipeId))
                );
            } else {
                localStorage.setItem('fn_favorites', JSON.stringify([...favorites, recipeId]));
            }
        }
    };

    const ingredients = [
        { item: 'Cà phê phin Việt Nam đậm đặc', amount: '200 ml' },
        { item: 'Sữa đặc có đường Ông Thọ', amount: '80 ml' },
        { item: 'Mascarpone cheese', amount: '500 g' },
        { item: 'Lòng đỏ trứng gà', amount: '4 quả' },
        { item: 'Đường trắng', amount: '100 g' },
        { item: 'Ladyfinger (bánh sampa)', amount: '24 chiếc' },
        { item: 'Rượu Kahlúa hoặc rum', amount: '30 ml (tùy chọn)' },
        { item: 'Bột cacao nguyên chất', amount: '30 g' },
        { item: 'Muối biển', amount: '1 nhúm nhỏ' },
    ];

    const steps = [
        {
            title: 'Pha cà phê phin truyền thống',
            description:
                'Pha 200ml cà phê phin thật đậm đặc, để nguội hoàn toàn. Thêm 80ml sữa đặc Ông Thọ và khuấy đều — đây chính là linh hồn của món này, thay thế cho espresso trong công thức Ý gốc. Hương vị cà phê sữa đá thân thuộc sẽ hòa quyện cùng mascarpone béo ngậy.',
        },
        {
            title: 'Đánh kem mascarpone',
            description:
                'Đánh 4 lòng đỏ trứng với 100g đường trên nồi hấp cách thủy (bain-marie) cho đến khi hỗn hợp sệt, màu vàng nhạt và ấm tay. Nhấc ra, tiếp tục đánh đến khi nguội rồi cho mascarpone vào, khuấy nhẹ nhàng theo một chiều để kem mịn như nhung.',
        },
        {
            title: 'Nhúng bánh sampa',
            description:
                'Nhúng nhanh từng chiếc ladyfinger vào hỗn hợp cà phê sữa đá (thêm rượu nếu thích), khoảng 1 giây mỗi mặt — đừng để quá lâu kẻo bánh nát. Xếp một lớp bánh vào đáy khay hình chữ nhật 20x25cm.',
        },
        {
            title: 'Xếp tầng tiramisu',
            description:
                'Phết một lớp kem mascarpone dày lên trên bánh, dàn phẳng bằng spatula. Tiếp tục thêm lớp bánh nhúng cà phê thứ hai, rồi phủ nốt phần kem còn lại lên trên cùng. Miết nhẹ mặt kem cho thật phẳng.',
        },
        {
            title: 'Ủ lạnh và hoàn thiện',
            description:
                'Bọc kín khay bằng màng bọc thực phẩm, ủ trong tủ lạnh tối thiểu 6 giờ, tốt nhất là qua đêm để các tầng hương vị ngấm vào nhau. Trước khi ăn, rắc một lớp bột cacao nguyên chất dày qua rây lên bề mặt. Cắt miếng vuông và thưởng thức ngay.',
        },
    ];

    return (
        <div style={{ backgroundColor: '#F5EDE3', minHeight: '100vh' }}>
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{
                    position: 'relative',
                    height: '70vh',
                    minHeight: '500px',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage:
                            'url(https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=1600&q=80)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'linear-gradient(180deg, rgba(45,26,14,0.2) 0%, rgba(45,26,14,0.85) 100%)',
                    }}
                />

                <div className="relative h-full flex flex-col justify-end max-w-6xl mx-auto px-6 pb-16">
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <div className="flex gap-2 mb-4">
                            <span
                                style={{
                                    backgroundColor: '#D97706',
                                    color: '#FFF',
                                    padding: '6px 14px',
                                    borderRadius: '999px',
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    letterSpacing: '1px',
                                }}
                            >
                                DESSERT
                            </span>
                            <span
                                style={{
                                    backgroundColor: 'rgba(255,255,255,0.15)',
                                    color: '#FFF',
                                    padding: '6px 14px',
                                    borderRadius: '999px',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    backdropFilter: 'blur(8px)',
                                }}
                            >
                                MEDIUM · 45 PHÚT + 6H ỦI LẠNH
                            </span>
                        </div>

                        <h1
                            style={{
                                fontFamily: 'Playfair Display, serif',
                                color: '#FFF',
                                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                                fontWeight: 700,
                                lineHeight: 1.1,
                                marginBottom: '12px',
                            }}
                        >
                            Vietnamese Coffee Tiramisu
                        </h1>
                        <p
                            style={{
                                fontFamily: 'Playfair Display, serif',
                                fontStyle: 'italic',
                                color: '#D97706',
                                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                                marginBottom: '20px',
                            }}
                        >
                            Tiramisù Cà Phê Sữa Đá
                        </p>
                        <p
                            style={{
                                color: 'rgba(255,255,255,0.85)',
                                fontSize: '1.1rem',
                                maxWidth: '600px',
                                lineHeight: 1.6,
                            }}
                        >
                            Một bản hòa ca giữa nước Ý cổ điển và Sài Gòn hiện đại — nơi mascarpone gặp gỡ
                            cà phê phin sữa đặc, tạo nên dessert vừa quen vừa lạ.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Quick Info Bar */}
            <motion.section
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="max-w-6xl mx-auto px-6 -mt-12 relative z-10"
            >
                <div
                    style={{
                        backgroundColor: '#FFF',
                        borderRadius: '20px',
                        padding: '24px',
                        boxShadow: '0 20px 60px rgba(45,26,14,0.15)',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                        gap: '20px',
                    }}
                >
                    {[
                        { label: 'Thời gian', value: '45 phút' },
                        { label: 'Ủ lạnh', value: '6 giờ' },
                        { label: 'Khẩu phần', value: '8 người' },
                        { label: 'Đánh giá', value: '★ 4.9' },
                        {
                            label: 'Yêu thích',
                            value: isFavorite ? '♥ Đã lưu' : '♡ Lưu món',
                            clickable: true,
                        },
                    ].map((info, i) => (
                        <div
                            key={i}
                            onClick={info.clickable ? toggleFavorite : undefined}
                            style={{
                                textAlign: 'center',
                                cursor: info.clickable ? 'pointer' : 'default',
                                padding: '8px',
                                borderRadius: '12px',
                                transition: 'all 0.2s',
                                color: info.clickable && isFavorite ? '#D97706' : '#4B2E1A',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '11px',
                                    letterSpacing: '1.5px',
                                    color: '#8B6F5A',
                                    marginBottom: '6px',
                                    fontWeight: 600,
                                }}
                            >
                                {info.label.toUpperCase()}
                            </div>
                            <div
                                style={{
                                    fontFamily: 'Playfair Display, serif',
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                }}
                            >
                                {info.value}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* Story Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto px-6 py-20"
            >
                <h2
                    style={{
                        fontFamily: 'Playfair Display, serif',
                        color: '#4B2E1A',
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        marginBottom: '24px',
                        textAlign: 'center',
                    }}
                >
                    Câu Chuyện Đằng Sau Món Ăn
                </h2>
                <div
                    style={{
                        width: '60px',
                        height: '3px',
                        backgroundColor: '#D97706',
                        margin: '0 auto 40px',
                        borderRadius: '2px',
                    }}
                />
                <div
                    style={{
                        fontFamily: 'DM Sans, sans-serif',
                        color: '#4B2E1A',
                        fontSize: '1.1rem',
                        lineHeight: 1.9,
                    }}
                >
                    <p style={{ marginBottom: '20px' }}>
                        Năm 2019, trong một quán cà phê nhỏ ở quận 3 Sài Gòn, một đầu bếp trẻ vừa trở về từ
                        Milan đã thử một điều táo bạo: <em>thay espresso bằng cà phê phin sữa đá</em>. Kết quả
                        khiến cả khách Việt lẫn khách Tây đều sững sờ — tiramisu truyền thống bỗng khoác lên
                        mình một tâm hồn rất Sài Gòn.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        Cái hay của phiên bản này nằm ở sự cân bằng. Sữa đặc Ông Thọ mang đến vị ngọt
                        caramel đặc trưng — thứ mà đường trắng thuần không bao giờ có được. Cà phê phin
                        Robusta Việt Nam đậm và "bittersweet" hơn espresso Ý, giúp xuyên qua lớp mascarpone
                        béo để lại dư vị sâu lắng.
                    </p>
                    <p>
                        Đây không phải là sự bắt chước. Đây là một cuộc đối thoại — giữa hai nền văn hóa cà
                        phê lâu đời, cùng tôn vinh nhau trên một chiếc đĩa dessert.
                    </p>
                </div>
            </motion.section>

            {/* Tabs: Ingredients & Steps */}
            <section className="max-w-4xl mx-auto px-6 pb-20">
                <div
                    style={{
                        backgroundColor: '#FFF',
                        borderRadius: '24px',
                        boxShadow: '0 10px 40px rgba(45,26,14,0.08)',
                        overflow: 'hidden',
                    }}
                >
                    {/* Tab Buttons */}
                    <div style={{ display: 'flex', borderBottom: '1px solid #F5EDE3' }}>
                        {(['ingredients', 'steps'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                style={{
                                    flex: 1,
                                    padding: '20px',
                                    fontFamily: 'Playfair Display, serif',
                                    fontSize: '1.25rem',
                                    fontWeight: 600,
                                    backgroundColor: activeTab === tab ? '#4B2E1A' : 'transparent',
                                    color: activeTab === tab ? '#FFF' : '#4B2E1A',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                }}
                            >
                                {tab === 'ingredients' ? 'Nguyên Liệu' : 'Cách Làm'}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div style={{ padding: '40px' }}>
                        {activeTab === 'ingredients' ? (
                            <motion.ul
                                key="ingredients"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                style={{ listStyle: 'none', padding: 0, margin: 0 }}
                            >
                                {ingredients.map((ing, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            padding: '16px 0',
                                            borderBottom:
                                                i < ingredients.length - 1 ? '1px dashed #F5EDE3' : 'none',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'DM Sans, sans-serif',
                                                color: '#4B2E1A',
                                                fontSize: '1.05rem',
                                            }}
                                        >
                                            {ing.item}
                                        </span>
                                        <span
                                            style={{
                                                fontFamily: 'Playfair Display, serif',
                                                color: '#D97706',
                                                fontWeight: 600,
                                                fontSize: '1rem',
                                            }}
                                        >
                                            {ing.amount}
                                        </span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        ) : (
                            <motion.ol
                                key="steps"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                style={{ listStyle: 'none', padding: 0, margin: 0 }}
                            >
                                {steps.map((step, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        style={{
                                            display: 'flex',
                                            gap: '20px',
                                            marginBottom: i < steps.length - 1 ? '32px' : 0,
                                        }}
                                    >
                                        <div
                                            style={{
                                                flexShrink: 0,
                                                width: '48px',
                                                height: '48px',
                                                borderRadius: '50%',
                                                backgroundColor: '#D97706',
                                                color: '#FFF',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontFamily: 'Playfair Display, serif',
                                                fontSize: '1.25rem',
                                                fontWeight: 700,
                                            }}
                                        >
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h3
                                                style={{
                                                    fontFamily: 'Playfair Display, serif',
                                                    color: '#4B2E1A',
                                                    fontSize: '1.35rem',
                                                    fontWeight: 700,
                                                    marginBottom: '8px',
                                                }}
                                            >
                                                {step.title}
                                            </h3>
                                            <p
                                                style={{
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    color: '#6B5544',
                                                    fontSize: '1rem',
                                                    lineHeight: 1.7,
                                                }}
                                            >
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.li>
                                ))}
                            </motion.ol>
                        )}
                    </div>
                </div>
            </section>

            {/* Chef's Tips */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto px-6 pb-20"
            >
                <div
                    style={{
                        backgroundColor: '#4B2E1A',
                        borderRadius: '20px',
                        padding: '40px',
                        color: '#F5EDE3',
                    }}
                >
                    <h3
                        style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '2rem',
                            fontWeight: 700,
                            marginBottom: '20px',
                            color: '#D97706',
                        }}
                    >
                        Bí Quyết Từ Đầu Bếp
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {[
                            'Dùng cà phê Trung Nguyên hoặc cà phê phin chuẩn — đừng thay bằng cà phê hòa tan, hương sẽ nhạt.',
                            'Mascarpone phải ở nhiệt độ phòng trước khi đánh, tránh kem bị vón cục.',
                            'Nhúng bánh sampa thật nhanh (đếm 1-2-3 rồi nhấc) — bánh ngấm quá sẽ rã, ngấm thiếu sẽ cứng.',
                            'Rắc cacao ngay trước khi phục vụ để lớp cacao không bị ẩm và mất màu.',
                        ].map((tip, i) => (
                            <li
                                key={i}
                                style={{
                                    display: 'flex',
                                    gap: '12px',
                                    marginBottom: '16px',
                                    fontFamily: 'DM Sans, sans-serif',
                                    lineHeight: 1.7,
                                }}
                            >
                                <span style={{ color: '#D97706', fontWeight: 700 }}>✦</span>
                                <span>{tip}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.section>

            {/* Back link */}
            <div className="max-w-6xl mx-auto px-6 pb-16">
                <Link
                    href="/recipes"
                    style={{
                        color: '#D97706',
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 600,
                        textDecoration: 'none',
                    }}
                >
                    ← Quay lại bộ sưu tập công thức
                </Link>
            </div>
        </div>
    );
}