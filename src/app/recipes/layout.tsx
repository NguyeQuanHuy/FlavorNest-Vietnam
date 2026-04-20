'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function RecipesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Logic đơn giản để lấy tên trang hiện tại từ URL (ví dụ: /recipes/breakfast -> Breakfast)
  const currentPage = pathname.split('/').pop()?.replace(/-/g, ' ') || ''

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Thanh Breadcrumb Cố định - Được tối ưu z-index và background */}
      <nav style={{ 
          position: 'sticky', 
          top: 0, 
          zIndex: 1000, 
          background: 'rgba(250, 250, 247, 0.95)', 
          backdropFilter: 'blur(12px)', 
          borderBottom: '1px solid rgba(75,46,26,0.08)',
          padding: '14px 24px',
          width: '100%'
      }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
             <Link href="/" style={{ color: 'rgba(75,46,26,0.45)', textDecoration: 'none', fontWeight: 500 }}>Home</Link>
             <span style={{ color: 'rgba(75,46,26,0.3)' }}>›</span>
             <Link href="/recipes" style={{ color: 'rgba(75,46,26,0.45)', textDecoration: 'none', fontWeight: 500 }}>Recipes</Link>
             <span style={{ color: 'rgba(75,46,26,0.3)' }}>›</span>
             <span style={{ color: '#D97706', fontWeight: 600, textTransform: 'capitalize' }}>
                {currentPage || 'Category'}
             </span>
          </div>
      </nav>

      {/* Nội dung trang con - Dùng flex-1 để đảm bảo không bị lỗi layout */}
      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  )
}
