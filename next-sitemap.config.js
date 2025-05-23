/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://caffee-darchin.vercel.app/',
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
  