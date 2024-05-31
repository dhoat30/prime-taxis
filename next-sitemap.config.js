/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://primetaxis.co.nz',
    generateRobotsTxt: true,
    sitemapSize: 1000,

};
