// src/components/seo/WebsiteSchema.tsx — đặt trong layout.tsx 1 lần duy nhất
export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'FlavorNest Vietnam',
    url: 'https://flavor-nest-vietnam.vercel.app',
    description: 'Authentic Vietnamese recipes for the global diaspora',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://flavor-nest-vietnam.vercel.app/recipes?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
