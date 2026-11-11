// Signature dishes per province (34 units, from 1 July 2025) — keyed by ProvinceShape.code.
// `slug` links to an existing FlavorNest recipe; `from` names the pre-2025 province a dish comes from.

export interface Specialty { vi: string; en: string; slug?: string; from?: string }

export const PROVINCE_SPECIALTIES: Record<string, Specialty[]> = {
    // ── NORTH ──
    '01': [
        { vi: `Phở Bò Hà Nội`, en: 'Hanoi beef pho', slug: 'pho-bo-ha-noi' },
        { vi: `Bún Chả`, en: 'Grilled pork & vermicelli', slug: 'bun-cha-hanoi' },
        { vi: `Chả Cá Lã Vọng`, en: 'Turmeric fish with dill', slug: 'cha-ca-la-vong' },
        { vi: `Bánh Cuốn`, en: 'Steamed rice rolls', slug: 'banh-cuon-ha-noi' },
    ],
    '02': [
        { vi: `Nem Bùi`, en: 'Pork & roasted rice nem', slug: 'nem-bui-bac-ninh' },
        { vi: `Gà Hồ`, en: 'Hồ village heritage chicken', slug: 'ga-ho-bac-ninh' },
        { vi: `Bánh Phu Thê`, en: 'Đình Bảng wedding cake' },
        { vi: `Vải Thiều Lục Ngạn`, en: 'Lục Ngạn lychee', from: 'Bắc Giang' },
    ],
    '03': [
        { vi: `Chả Mực Hạ Long`, en: 'Hand-pounded squid cakes', slug: 'cha-muc-ha-long' },
        { vi: `Bánh Cuốn Chả Mực`, en: 'Rice rolls with squid cake', slug: 'banh-cuon-cha-muc' },
        { vi: `Gà Đồi Tiên Yên`, en: 'Tiên Yên hill chicken', slug: 'ga-doi-tien-yen' },
        { vi: `Sá Sùng Quan Lạn`, en: 'Dried peanut worm' },
    ],
    '04': [
        { vi: `Bánh Đa Cua`, en: 'Red noodle crab soup', slug: 'banh-da-cua-hai-phong' },
        { vi: `Bánh Mì Cay`, en: 'Spicy mini bánh mì', slug: 'banh-mi-cay-hai-phong' },
        { vi: `Nem Cua Bể`, en: 'Square sea-crab spring rolls', slug: 'nem-cua-be-hai-phong' },
        { vi: `Bánh Đậu Xanh`, en: 'Mung bean cakes', from: 'Hải Dương' },
    ],
    '05': [
        { vi: `Bánh Cuốn Chả`, en: 'Rice rolls with cinnamon pork', slug: 'banh-cuon-hung-yen' },
        { vi: `Bánh Cáy`, en: 'Puffed rice & ginger bar', slug: 'banh-cay-thai-binh', from: 'Thái Bình' },
        { vi: `Nhãn Lồng`, en: 'Hưng Yên longan' },
    ],
    '06': [
        { vi: `Cơm Cháy`, en: 'Crispy rice crust', slug: 'com-chay-ninh-binh' },
        { vi: `Thịt Dê Núi`, en: 'Mountain goat', slug: 'thit-de-ninh-binh' },
        { vi: `Cá Kho Làng Vũ Đại`, en: 'Vũ Đại clay-pot fish', slug: 'ca-kho-lang-vu-dai', from: 'Hà Nam' },
        { vi: `Phở Bò Nam Định`, en: 'Nam Định beef pho', from: 'Nam Định' },
    ],
    '07': [
        { vi: `Bánh Cuốn Cao Bằng`, en: 'Rice rolls in bone broth', slug: 'banh-cuon-cao-bang' },
        { vi: `Bánh Áp Chao`, en: 'Fried rice-flour cakes', slug: 'banh-ap-chao-cao-bang' },
        { vi: `Bánh Coóng Phù`, en: 'Tày fried sesame balls', slug: 'banh-coong-phi' },
        { vi: `Hạt Dẻ Trùng Khánh`, en: 'Trùng Khánh chestnuts' },
    ],
    '08': [
        { vi: `Cháo Ấu Tẩu`, en: 'Bitter-root porridge', slug: 'chao-au-tau', from: 'Hà Giang' },
        { vi: `Phở Chua`, en: 'Sour cold pho', slug: 'pho-chua-ha-giang', from: 'Hà Giang' },
        { vi: `Xôi Ngũ Sắc`, en: 'Five-colour sticky rice', slug: 'xoi-ngu-sac-ha-giang' },
        { vi: `Bánh Cuốn Trứng`, en: 'Egg-filled rice rolls', slug: 'banh-cuon-trung-ha-giang', from: 'Hà Giang' },
    ],
    '09': [
        { vi: `Thắng Cố Bắc Hà`, en: 'Hmong horse stew', slug: 'thang-co' },
        { vi: `Thịt Lợn Cắp Nách`, en: 'Highland small-pig roast', slug: 'thit-lon-cap-nach' },
        { vi: `Cá Hồi Sa Pa`, en: 'Sa Pa cold-water salmon' },
        { vi: `Cốm Tú Lệ`, en: 'Young green sticky rice', from: 'Yên Bái' },
    ],
    '10': [
        { vi: `Trà Tân Cương`, en: 'Tân Cương green tea' },
        { vi: `Bánh Chưng Bờ Đậu`, en: 'Square sticky rice cake', slug: 'banh-chung' },
        { vi: `Miến Dong Na Rì`, en: 'Arrowroot glass noodles', from: 'Bắc Kạn' },
    ],
    '11': [
        { vi: `Vịt Quay Mắc Mật`, en: 'Mắc mật-leaf roast duck', slug: 'vit-quay-lang-son' },
        { vi: `Phở Chua`, en: 'Sour cold pho', slug: 'pho-chua-lang-son' },
        { vi: `Khâu Nhục`, en: 'Taro & pork belly steam' },
    ],
    '12': [
        { vi: `Bánh Chưng – Bánh Giầy`, en: 'Hùng Kings offering cakes', slug: 'banh-chung' },
        { vi: `Gà Đồi Tam Đảo`, en: 'Tam Đảo hill chicken', slug: 'ga-doi-tam-dao', from: 'Vĩnh Phúc' },
        { vi: `Thịt Chua Thanh Sơn`, en: 'Fermented pork' },
        { vi: `Cơm Lam`, en: 'Bamboo-tube rice', from: 'Hòa Bình' },
    ],
    '13': [
        { vi: `Pa Pỉnh Tộp`, en: 'Thái folded grilled fish', slug: 'pa-pinh-top' },
        { vi: `Thịt Trâu Gác Bếp`, en: 'Smoked buffalo jerky', slug: 'thit-trau-gac-bep' },
        { vi: `Xôi Nếp Nương`, en: 'Hill sticky rice' },
    ],
    '14': [
        { vi: `Cá Nướng Sông Đà`, en: 'Đà River grilled fish' },
        { vi: `Mèn Mén`, en: 'Steamed maize grits' },
        { vi: `Thịt Lợn Gác Bếp`, en: 'Smoked pork' },
    ],
    '15': [
        { vi: `Thịt Trâu Sấy`, en: 'Dried buffalo', slug: 'thit-trau-say-son-la' },
        { vi: `Bê Chao Mộc Châu`, en: 'Twice-cooked veal' },
        { vi: `Sữa Mộc Châu`, en: 'Mộc Châu dairy' },
    ],
    // ── CENTRAL ──
    '16': [
        { vi: `Nem Chua`, en: 'Fermented pork rolls', slug: 'nem-chua-thanh-hoa' },
        { vi: `Bánh Đa Cua`, en: 'Field-crab noodle soup', slug: 'banh-da-cua-thanh-hoa' },
        { vi: `Bánh Gai Tứ Trụ`, en: 'Black ramie-leaf cake', slug: 'banh-gai-tu-tru' },
        { vi: `Gỏi Nhệch Nga Sơn`, en: 'Raw eel salad', slug: 'goi-nhech-nga-son' },
    ],
    '17': [
        { vi: `Cháo Lươn`, en: 'Eel porridge', slug: 'chao-luon-nghe-an' },
        { vi: `Bánh Đúc Lạc`, en: 'Peanut rice pudding', slug: 'banh-duc-lac' },
        { vi: `Cam Vinh`, en: 'Vinh oranges' },
        { vi: `Tương Nam Đàn`, en: 'Fermented soybean sauce' },
    ],
    '18': [
        { vi: `Bánh Gai Đức Thọ`, en: 'Ramie-leaf cake', slug: 'banh-gai-duc-tho' },
        { vi: `Cháo Canh`, en: 'Hand-cut noodle soup', slug: 'chao-canh-ha-tinh' },
        { vi: `Bánh Đa Vừng`, en: 'Sesame rice crackers', slug: 'banh-da-vung-ha-tinh' },
        { vi: `Kẹo Cu Đơ`, en: 'Peanut molasses candy' },
    ],
    '19': [
        { vi: `Bánh Bột Lọc`, en: 'Tapioca shrimp dumplings', slug: 'banh-bot-loc-quang-tri' },
        { vi: `Cháo Canh`, en: 'Quảng Bình noodle soup', slug: 'chao-canh-quang-binh', from: 'Quảng Bình' },
        { vi: `Bánh Xèo Khoái`, en: 'Quảng Bình crispy crêpe', slug: 'banh-xeo-khoai-quang-binh', from: 'Quảng Bình' },
        { vi: `Chả Cá Bảo Ninh`, en: 'Bảo Ninh fish cakes', slug: 'cha-ca-bao-ninh', from: 'Quảng Bình' },
    ],
    '20': [
        { vi: `Bún Bò Huế`, en: 'Spicy lemongrass beef noodles', slug: 'bun-bo-hue' },
        { vi: `Cơm Hến`, en: 'Baby clam rice', slug: 'com-hen-hue' },
        { vi: `Bánh Bèo Chén`, en: 'Steamed rice cups', slug: 'banh-beo-chen' },
        { vi: `Nem Lụi`, en: 'Lemongrass pork skewers', slug: 'nem-lui-hue' },
    ],
    '21': [
        { vi: `Mì Quảng`, en: 'Turmeric noodles', slug: 'mi-quang' },
        { vi: `Cao Lầu`, en: 'Hội An pork noodles', slug: 'cao-lau', from: 'Quảng Nam' },
        { vi: `Cơm Gà Hội An`, en: 'Hội An chicken rice', slug: 'com-ga-hoi-an', from: 'Quảng Nam' },
        { vi: `Bánh Tráng Cuốn Thịt Heo`, en: 'Pork & rice paper rolls', slug: 'banh-trang-cuon-thit-heo-da-nang' },
    ],
    '22': [
        { vi: `Bánh Xèo Tôm Nhảy`, en: 'Jumping-shrimp crêpe', slug: 'banh-xeo-tom-nhay-mo-duc' },
        { vi: `Cháo Lươn`, en: 'Eel porridge', slug: 'chao-luon-quang-ngai' },
        { vi: `Bánh Ướt Lòng Gà`, en: 'Rice sheets & chicken offal', slug: 'banh-uot-long-ga-kon-tum', from: 'Kon Tum' },
        { vi: `Gỏi Lá`, en: 'Forest-leaf salad', from: 'Kon Tum' },
    ],
    '23': [
        { vi: `Nem Nướng Ninh Hòa`, en: 'Grilled pork sausage rolls', slug: 'nem-nuong-ninh-hoa' },
        { vi: `Bún Chả Cá`, en: 'Nha Trang fish cake noodles', slug: 'bun-ca-nha-trang' },
        { vi: `Bánh Căn Phan Rang`, en: 'Clay-mould rice cakes', slug: 'banh-can-phan-rang', from: 'Ninh Thuận' },
        { vi: `Yến Sào`, en: 'Swiftlet nest' },
    ],
    '24': [
        { vi: `Bánh Xèo Bình Định`, en: 'Mini shrimp crêpes', slug: 'banh-xeo-binh-dinh', from: 'Bình Định' },
        { vi: `Bún Chả Cá Quy Nhơn`, en: 'Quy Nhơn fish cake noodles', slug: 'bun-cha-ca-quy-nhon', from: 'Bình Định' },
        { vi: `Nem Chợ Huyện`, en: 'Chợ Huyện fermented pork', slug: 'nem-cho-huyen', from: 'Bình Định' },
        { vi: `Phở Khô Gia Lai`, en: 'Two-bowl dry pho' },
    ],
    '25': [
        { vi: `Gà Nướng Bản Đôn`, en: 'Bản Đôn grilled chicken', slug: 'ga-nuong-ban-don' },
        { vi: `Cà Phê Buôn Ma Thuột`, en: 'Highland robusta coffee' },
        { vi: `Bánh Canh Chả Cá`, en: 'Fish cake noodle soup', slug: 'banh-canh-cha-ca', from: 'Phú Yên' },
        { vi: `Bún Bò Phú Yên`, en: 'Phú Yên beef noodles', slug: 'bun-bo-phu-yen', from: 'Phú Yên' },
    ],
    // ── SOUTH ──
    '26': [
        { vi: `Bánh Căn Đà Lạt`, en: 'Highland rice pancakes', slug: 'banh-can-da-lat' },
        { vi: `Bánh Mì Xíu Mại`, en: 'Meatball bánh mì', slug: 'banh-mi-xiu-mai-da-lat' },
        { vi: `Bánh Tráng Nướng`, en: 'Grilled rice paper “pizza”', slug: 'banh-trang-nuong-da-lat' },
        { vi: `Lẩu Thả Phan Thiết`, en: 'Phan Thiết fish hotpot', slug: 'lau-tha-phan-thiet', from: 'Bình Thuận' },
    ],
    '27': [
        { vi: `Bánh Tráng Phơi Sương`, en: 'Dew-dried rice paper', slug: 'banh-trang-phoi-suong-trang-bang' },
        { vi: `Bánh Canh Trảng Bàng`, en: 'Trảng Bàng noodle soup', slug: 'banh-canh-trang-bang' },
        { vi: `Muối Tôm`, en: 'Shrimp salt' },
        { vi: `Lạp Xưởng Cần Đước`, en: 'Cần Đước sausage', from: 'Long An' },
    ],
    '28': [
        { vi: `Bưởi Tân Triều`, en: 'Tân Triều pomelo' },
        { vi: `Chôm Chôm Long Khánh`, en: 'Long Khánh rambutan' },
        { vi: `Hạt Điều`, en: 'Cashew nuts', from: 'Bình Phước' },
    ],
    '30': [
        { vi: `Bánh Canh Bến Có`, en: 'Bến Có noodle soup', slug: 'banh-canh-ben-co', from: 'Trà Vinh' },
        { vi: `Cháo Ám`, en: 'Smoked fish porridge', slug: 'chao-am-tra-vinh', from: 'Trà Vinh' },
        { vi: `Bánh Xèo Nhân Dừa`, en: 'Coconut-filled crêpe', slug: 'banh-xeo-nhan-dua', from: 'Bến Tre' },
        { vi: `Kẹo Dừa`, en: 'Coconut candy', from: 'Bến Tre' },
    ],
    '31': [
        { vi: `Hủ Tiếu Mỹ Tho`, en: 'Mỹ Tho noodle soup', from: 'Tiền Giang' },
        { vi: `Hủ Tiếu Sa Đéc`, en: 'Sa Đéc noodle soup', slug: 'hu-tieu-sa-dec' },
        { vi: `Nem Lai Vung`, en: 'Lai Vung fermented pork', slug: 'nem-lai-vung' },
        { vi: `Bánh Xèo Bông Điên Điển`, en: 'Sesbania flower crêpe', slug: 'banh-xeo-bong-dien-dien' },
    ],
    '32': [
        { vi: `Bún Cá Châu Đốc`, en: 'Turmeric fish noodles', slug: 'bun-ca-chau-doc' },
        { vi: `Bún Mắm`, en: 'Fermented fish noodles', slug: 'bun-mam-an-giang' },
        { vi: `Bánh Bò Thốt Nốt`, en: 'Palm sugar sponge cake', slug: 'banh-bo-thot-not' },
        { vi: `Nước Mắm Phú Quốc`, en: 'Phú Quốc fish sauce', from: 'Kiên Giang' },
    ],
    '33': [
        { vi: `Bánh Cống`, en: 'Crispy shrimp rice cups', slug: 'banh-cong-can-tho' },
        { vi: `Bánh Pía`, en: 'Durian mooncake pastry', slug: 'banh-pia-soc-trang', from: 'Sóc Trăng' },
        { vi: `Lẩu Mắm`, en: 'Fermented fish hotpot', slug: 'lau-mam-soc-trang', from: 'Sóc Trăng' },
        { vi: `Bánh Tét Lá Cẩm`, en: 'Purple sticky rice log', slug: 'banh-tet-la-cam-can-tho' },
    ],
    '34': [
        { vi: `Ba Khía Muối`, en: 'Salted marsh crab', slug: 'ba-khia-muoi' },
        { vi: `Lẩu Mắm U Minh`, en: 'U Minh fish-paste hotpot', slug: 'lau-mam-u' },
        { vi: `Cua Cà Mau`, en: 'Cà Mau mud crab' },
        { vi: `Bánh Tằm Khoai Mì`, en: 'Cassava “silkworm” cake', from: 'Bạc Liêu' },
    ],
    '79': [
        { vi: `Cơm Tấm`, en: 'Broken rice plate', slug: 'com-tam-saigon' },
        { vi: `Bánh Mì Sài Gòn`, en: 'Saigon bánh mì', slug: 'banh-mi-sai-gon' },
        { vi: `Hủ Tiếu Nam Vang`, en: 'Phnom Penh-style noodles', slug: 'hu-tieu-nam-vang' },
        { vi: `Bánh Khọt`, en: 'Vũng Tàu mini pancakes', from: 'Bà Rịa - Vũng Tàu' },
    ],
}
