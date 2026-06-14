export default function RecipesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div aria-hidden style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(217,119,6,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(217,119,6,0.07) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  )
}