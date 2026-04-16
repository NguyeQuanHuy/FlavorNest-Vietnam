'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function SweetMangoStickyRicePage() {
    const [activeTab, setActiveTab] = useState<'ingredients' | 'steps'>('ingredients');
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        if (typeof window !== 'undefined') {
            const favorites = JSON.parse(localStorage.getItem('fn_favorites') || '[]');
            const recipeId = 'sweet-mango-sticky-rice';
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
        { item: 'Gạo nếp cái hoa vàng', amount: '300 g' },
        { item: 'Xoài cát Hòa Lộc chín', amount: '2 quả lớn' },
        { item: 'Nước cốt dừa', amount: '400 ml' },
        { item: 'Đường thốt nốt', amount: '80 g' },
        { item: 'Muối biển', amount: '½ thìa cà phê' },
        { item: 'Lá dứa tươi', amount: '4 lá' },
        { item: 'Bột năng', amount: '1 thìa cà phê' },
        { item: 'Mè rang (vừng trắng)', amount: '2 thìa canh' },
        { item: 'Đậu xanh đã hấp chín', amount: '50 g (tùy chọn)' },
    ];

    const steps = [
        {
            title: 'Ngâm gạo nếp qua đêm',
            description:
                'Vo gạo nếp 3-4 lần cho đến khi nước trong, rồi ngâm với nước lạnh ngập mặt gạo khoảng 2 đốt tay. Để ngâm tối thiểu 6 giờ, tốt nhất là qua đêm. Đây là bước quyết định độ dẻo thơm của xôi — không nên rút gọn.',
        },
        {
            title: 'Hấp xôi với lá dứa',
            description:
                'Xả gạo cho ráo nước. Lót lá dứa xuống đáy xửng hấp, trải đều gạo nếp lên trên, đậy lá dứa còn lại lên mặt. Hấp lửa vừa trong 30-35 phút. Khoảng giữa chừng, dùng đũa xới nhẹ để xôi chín đều, không bị nhão ở giữa.',
        },
        {
            title: 'Nấu nước cốt dừa',
            description:
                'Trong lúc đợi xôi, cho 300ml nước cốt dừa, 80g đường thốt nốt và ½ thìa muối vào nồi nhỏ. Đun lửa nhỏ, khuấy liên tục cho đường tan và hỗn hợp hơi sôi lăn tăn. Đừng để sôi mạnh — nước cốt dừa sẽ bị tách dầu và mất vị béo mịn.',
        },
        {
            title: 'Trộn xôi với nước cốt dừa',
            description:
                'Khi xôi vừa chín, trút ngay ra tô lớn còn nóng. Rưới từ từ 2/3 nước cốt dừa đã nấu vào, trộn nhẹ tay cho xôi ngấm đều. Đậy kín bằng khăn ẩm, để xôi "nghỉ" 10-15 phút cho hạt nếp nở bung và thấm trọn vị béo ngọt.',
        },
        {
            title: 'Nấu sốt dừa đặc',
            description:
                'Phần nước cốt dừa còn lại (100ml) cho vào chảo, đun ấm cùng 1 thìa bột năng pha với chút nước lạnh. Khuấy đều cho sánh nhẹ — đây là lớp sốt rưới lên trên khi phục vụ, tạo độ bóng và béo đậm.',
        },
        {
            title: 'Bày trí và thưởng thức',
            description:
                'Gọt xoài, cắt lát dày 1cm theo chiều dài quả. Xếp một phần xôi nhỏ lên đĩa, đặt vài lát xoài bên cạnh. Rưới sốt dừa đặc lên xôi, rắc mè rang và đậu xanh lên trên. Ăn ngay khi xôi còn ấm — khoảnh khắc xoài mát lạnh gặp xôi ấm nóng chính là linh hồn của món này.',
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
                            'url(https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1600&q=80)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'linear-gradient(180deg, rgba(45,26,14,0.15) 0%, rgba(45,26,14,0.85) 100%)',
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
                                EASY · 30 PHÚT + NGÂM GẠO
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
                            Sweet Mango Sticky Rice
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
                            Xôi Xoài
                        </p>
                        <p
                            style={{
                                color: 'rgba(255,255,255,0.85)',
                                fontSize: '1.1rem',
                                maxWidth: '600px',
                                lineHeight: 1.6,
                            }}
                        >
                            Xoài Cát Hòa Lộc vàng óng bên cạnh xôi nếp dẻo thơm, chan lớp nước cốt dừa béo
                            ngậy — món tráng miệng khiến mùa hè miền Nam trở nên đáng nhớ.
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
                        { label: 'Thời gian', value: '30 phút' },
                        { label: 'Ngâm gạo', value: 'Qua đêm' },
                        { label: 'Khẩu phần', value: '4 người' },
                        { label: 'Đánh giá', value: '★ 4.8' },
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
                    Hương Vị Mùa Hè Miền Nam
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
                        Ở Cái Bè, Tiền Giang — vương quốc của xoài Cát Hòa Lộc — người dân bản địa có một
                        câu nói: <em>"Xoài chín, xôi mới đúng vị"</em>. Không phải ngẫu nhiên mà xôi xoài
                        luôn xuất hiện vào cuối xuân đầu hè, khi những trái xoài cuối vụ đạt độ ngọt đỉnh
                        cao, thịt vàng mịn như mật ong.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        Bí quyết của xôi xoài nằm ở sự <strong>tương phản</strong> — thứ mà ẩm thực Việt Nam
                        tôn thờ. Xoài lạnh tan trong miệng, xôi nếp còn ấm bùi bùi, nước cốt dừa béo ngậy
                        nhưng không ngấy, mè rang thơm giòn tạo điểm nhấn. Bốn yếu tố, bốn kết cấu, hòa hợp
                        trong một thìa.
                    </p>
                    <p>
                        Món này không phải là dessert Thái như nhiều người vẫn lầm — dù cùng chung khu vực,
                        phiên bản Việt nhẹ nhàng hơn, ít đường hơn, và có thói quen thêm đậu xanh hấp để tăng
                        chiều sâu hương vị.
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
                            'Chọn xoài Cát Hòa Lộc chín cây — vỏ vàng óng, cuống còn xanh, bấm nhẹ hơi mềm. Tuyệt đối tránh xoài ép chín bằng hóa chất.',
                            'Ngâm gạo đủ thời gian là yếu tố sống còn — gạo ngâm thiếu sẽ cho xôi cứng ở giữa dù bên ngoài mềm.',
                            'Nước cốt dừa phải là loại tươi hoặc hộp cao cấp (không pha nước), thành phần 100% dừa thì hương vị mới chuẩn.',
                            'Ăn khi xôi còn ấm và xoài mát lạnh — sự tương phản nhiệt độ chính là điểm nhấn khiến món này đặc biệt.',
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