/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'siteUrlNotConfigured.com',
    generateRobotsTxt: true,
}