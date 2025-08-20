/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.alidev-r1996.ir",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard"],
      },
    ],
  },
};
