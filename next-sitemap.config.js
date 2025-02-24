



const siteUrl = "https://www.mcodevbytes.in";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
 
  additionalPaths: async (config) => {
    const dynamicRoutes = [
      "/services/web-development",
    "/services/app-development",
    "/services/digital-marketing",
    "/services/branding",
    "/services/ecommerce-solutions",
    "/services/seo-services",
    "/services/cloud-solutions",
    "/services/analytics-reporting",
    "/products/ezzy-cartz",
    "/products/host-my-cv",
    "/products/creator-mind",
    ];
    return dynamicRoutes.map((route) => ({
      loc: route,
      lastmod: new Date().toISOString(),
    }));
  },
};