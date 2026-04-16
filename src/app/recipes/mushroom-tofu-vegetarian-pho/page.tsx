'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function MushroomTofuVegetarianPhoPage() {
    const [activeTab, setActiveTab] = useState<'ingredients' | 'steps'>('ingredients');
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        if (typeof window !== 'undefined') {
            const favorites = JSON.parse(localStorage.getItem('fn_favorites') || '[]');
            const recipeId = 'mushroom-tofu-vegetarian-pho';
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
        { item: 'Bánh phở tươi', amount: '400 g' },
        { item: 'Đậu hũ non chiên vàng', amount: '200 g' },
        { item: 'Nấm hương khô', amount: '30 g' },
        { item: 'Nấm đùi gà', amount: '200 g' },
        { item: 'Nấm rơm tươi', amount: '150 g' },
        { item: 'Củ cải trắng', amount: '300 g' },
        { item: 'Cà rốt', amount: '1 củ' },
        { item: 'Hành tây', amount: '1 củ lớn' },
        { item: 'Gừng tươi', amount: '1 nhánh (50g)' },
        { item: 'Quế cây · Hoa hồi · Thảo quả', amount: 'mỗi loại 1 ít' },
        { item: 'Nước tương · đường phèn · muối', amount: 'gia giảm' },
        { item: 'Rau thơm ăn kèm (húng quế, ngò gai, giá)', amount: '1 đĩa lớn' },
    ];

    const steps = [
        {
            title: 'Nướng thơm hành gừng và gia vị',
            description:
                'Nướng trực tiếp hành tây và gừng trên lửa (hoặc dùng chảo khô) cho đến khi cháy xém vỏ ngoài, dậy mùi thơm đặc trưng. Đây là bí quyết tạo nên mùi hương "phở" kinh điển — nhiều người bỏ qua bước này sẽ thấy nước dùng nhạt nhòa. Bóc vỏ ngoài đã cháy, giữ lại phần ruột thơm.',
        },
        {
            title: 'Rang gia vị thuốc bắc',
            description:
                'Cho quế, hoa hồi, thảo quả (đã đập dập) vào chảo khô, rang lửa nhỏ 2-3 phút đến khi dậy mùi. Gói tất cả vào túi vải mỏng hoặc rây — giúp dễ vớt ra khi nước dùng xong, tránh vị chát nếu ninh quá lâu.',
        },
        {
            title: 'Ninh nước dùng rau củ',
            description:
                'Cho 3 lít nước vào nồi lớn cùng củ cải trắng cắt khúc, cà rốt, hành gừng nướng, nấm hương khô và túi gia vị. Đun sôi rồi hạ lửa nhỏ nhất, ninh liu riu 60 phút. Đừng khuấy và đừng đậy nắp — nước dùng cần bay hơi bớt để cô đặc vị ngọt thanh từ rau củ.',
        },
        {
            title: 'Xào nấm tạo vị đậm đà',
            description:
                'Xé nấm đùi gà và nấm rơm thành miếng vừa ăn. Xào với một chút dầu nóng ở lửa lớn, nêm 1 thìa nước tương cho nấm ra nước và "caramel hóa" bề mặt. Bước này tạo umami mạnh — linh hồn thay thế cho thịt trong phở chay.',
        },
        {
            title: 'Hoàn thiện nước dùng',
            description:
                'Lọc nước dùng qua rây để có nước trong vắt. Nêm với 2 thìa nước tương, 1 thìa đường phèn, ½ thìa muối — điều chỉnh theo khẩu vị. Cho nấm đã xào và đậu hũ chiên vào nước dùng, đun sôi lại 5 phút để các nguyên liệu thấm vị.',
        },
        {
            title: 'Trụng bánh phở và bày tô',
            description:
                'Trụng nhanh bánh phở tươi qua nước sôi (khoảng 10 giây), vớt ra để ráo rồi cho vào tô. Xếp nấm và đậu hũ lên trên, rưới nước dùng nóng ngập bánh. Trang trí với hành lá thái nhỏ, rau mùi, hạt tiêu. Phục vụ kèm đĩa rau thơm, giá đỗ, chanh và ớt tươi.',
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
                            'url(https://images.unsplash.com/photo-1585103228236-9b6fdce30f21?w=1600&q=80)',
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
                                    backgroundColor: '#5A7A3F',
                                    color: '#FFF',
                                    padding: '6px 14px',
                                    borderRadius: '999px',
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    letterSpacing: '1px',
                                }}
                            >
                                VEGETARIAN
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
                                EASY · 1 GIỜ
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
                            Mushroom & Tofu Vegetarian Pho
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
                            Phở Chay
                        </p>
                        <p
                            style={{
                                color: 'rgba(255,255,255,0.85)',
                                fontSize: '1.1rem',
                                maxWidth: '600px',
                                lineHeight: 1.6,
                            }}
                        >
                            Hương phở quế hồi thơm nức, thay xương bằng ba loại nấm umami và đậu hũ vàng ruộm —
                            một bát phở chay nhẹ bụng nhưng đậm đà như phở bò Hà Nội.
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
                        { label: 'Thời gian', value: '1 giờ' },
                        { label: 'Độ khó', value: 'Dễ' },
                        { label: 'Khẩu phần', value: '4 người' },
                        { label: 'Đánh giá', value: '★ 4.7' },
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
                    Linh Hồn Phở Không Cần Thịt
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
                        Phở chay không phải là phở bò "thiếu thịt". Trong các ngôi chùa ở Huế và Đà Lạt, nơi
                        nghệ thuật ẩm thực chay đã được gọt giũa hàng thế kỷ, phở chay là một tác phẩm độc
                        lập — với triết lý riêng, kỹ thuật riêng, và hương vị riêng biệt.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        Bí mật nằm ở <strong>ba loại nấm</strong>: nấm hương tạo chiều sâu, nấm đùi gà tạo kết
                        cấu giòn dai thay thế cho thịt nạm, nấm rơm tạo độ mềm mịn. Khi kết hợp với củ cải
                        trắng ninh nhừ — loại củ có vị ngọt thanh tự nhiên — bạn sẽ có một nước dùng trong
                        vắt nhưng đậm đà khiến người ăn quên rằng mình đang ăn chay.
                    </p>
                    <p>
                        Quế hồi thảo quả vẫn giữ nguyên như phở truyền thống — bởi đó là DNA của phở, không
                        thể thay đổi. Chỉ thay nguồn umami từ động vật bằng thực vật, nhưng hương hồn món ăn
                        vẫn nguyên vẹn. Đó là cái hay của ẩm thực Việt Nam — luôn biết cách thích nghi mà không
                        đánh mất bản sắc.
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
                            'Nấm hương khô ngâm nước ấm 20 phút trước khi dùng — giữ lại nước ngâm, cho vào nồi nước dùng sẽ tăng umami đáng kể.',
                            'Nướng hành gừng là bước bắt buộc — đừng thay bằng cho thẳng vào nồi. Khói từ vỏ cháy chính là "hương phở" người ta nhớ mãi.',
                            'Gia vị quế hồi chỉ nên ninh 30-40 phút rồi vớt ra — nếu ninh quá lâu, nước dùng sẽ chuyển vị chát và đục.',
                            'Đậu hũ chiên giòn từ trước, chỉ cho vào nước dùng 5 phút cuối — tránh bị nhão mất kết cấu.',
                            'Đừng bỏ qua đĩa rau thơm ăn kèm — húng quế và ngò gai là phần không thể thiếu, định hình ký ức về "phở Việt Nam đúng điệu".',
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