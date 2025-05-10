// next-sitemap.config.ts
import type { IConfig } from 'next-sitemap';

const config: IConfig = {
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

export default config;
