export default function RecipesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* Thanh Breadcrumb Cố định */}
      <div style={{ 
          position: 'sticky', 
          top: 0, // Dính sát mép trên
          zIndex: 50, 
          background: 'rgba(255, 255, 255, 0.8)', // Nền trắng mờ
          backdropFilter: 'blur(10px)', // Hiệu ứng kính mờ hiện đại
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          padding: '12px 24px'
      }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', fontSize: 13 }}>
             {/* Bạn có thể dùng logic tự động lấy đường dẫn ở đây */}
             <span style={{ color: '#666' }}>Home › Recipes</span>
          </div>
      </div>

      {/* Nội dung thay đổi của từng trang con */}
      {children}
    </div>
  )
}
