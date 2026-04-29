export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://portofolio.bgas.my.id/sitemap.xml',
  }
}
