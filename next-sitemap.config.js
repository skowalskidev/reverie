// next-sitemap.config.js

const fs = require('fs');
const path = require('path');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'siteUrlNotConfigured.com',
    generateRobotsTxt: true,
    additionalPaths: async () => {
        const filePath = path.join(process.cwd(), 'blog');
        const files = fs.readdirSync(filePath);
        const blogPostPaths = files.map(file => ({
            loc: `/blog/${path.basename(file, path.extname(file))}`,
            changefreq: 'daily',
            priority: 0.7,
        }));
        return blogPostPaths;
    },
};
