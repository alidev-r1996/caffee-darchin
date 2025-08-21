/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://cafe-darchin.ir",
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
