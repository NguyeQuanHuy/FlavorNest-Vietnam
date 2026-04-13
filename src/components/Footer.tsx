export default function Footer() {
    return (
        <footer className="bg-white border-t border-fn-amber/10 py-12 mt-20">
            <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <h3 className="font-display font-bold text-xl text-fn-amber mb-4">FlavorNest</h3>
                    <p className="text-fn-brown/60 text-sm">
                        Nơi chia sẻ niềm đam mê ẩm thực Việt Nam qua từng công thức nấu ăn tinh tế.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-fn-brown mb-4">Liên kết</h4>
                    <ul className="text-sm text-fn-brown/60 space-y-2">
                        <li><a href="#" className="hover:text-fn-amber">Về chúng tôi</a></li>
                        <li><a href="#" className="hover:text-fn-amber">Chính sách bảo mật</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-fn-brown mb-4">Kết nối</h4>
                    <div className="flex gap-4">
                        {/* Bạn có thể thêm icon Facebook/Instagram ở đây */}
                        <span className="text-sm text-fn-brown/60">Facebook</span>
                        <span className="text-sm text-fn-brown/60">Instagram</span>
                    </div>
                </div>
            </div>
            <div className="text-center mt-12 pt-8 border-t border-fn-amber/5 text-xs text-fn-brown/40">
                © 2026 FlavorNest Vietnam. All rights reserved.
            </div>
        </footer>
    );
}