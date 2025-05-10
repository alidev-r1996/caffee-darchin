/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://cafe-darchin.ir',
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
  