/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://caffee-darchin.ir',
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
  