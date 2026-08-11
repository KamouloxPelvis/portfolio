/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://devopsnotes.org',
  generateRobotsTxt: true, // Génère aussi le fichier robots.txt
  sitemapSize: 7000,
  // Optionnel : exclure certaines routes si besoin
  // exclude: ['/admin/*', '/login'], 
}