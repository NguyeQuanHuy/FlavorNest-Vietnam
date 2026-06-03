// src/components/seo/BreadcrumbSchema.tsx
export function BreadcrumbSchema({ slug, title }: { slug: string; title: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',
        item: 'https://flavor-nest-vietnam.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'Recipes',
        item: 'https://flavor-nest-vietnam.vercel.app/recipes' },
      { '@type': 'ListItem', position: 3, name: title,
        item: `https://flavor-nest-vietnam.vercel.app/recipes/${slug}` },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
