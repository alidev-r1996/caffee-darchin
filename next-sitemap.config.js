/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://cafe-darchin.vercel.app/',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/dashboard'],
        },
      ],
    },
  };
  