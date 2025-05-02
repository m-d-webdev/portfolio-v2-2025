/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://iderkaoui.site',
    generateRobotsTxt: true,
    // Define the languages your site supports
    // Replace with your actual supported languages
    alternateRefs: [
        {
            href: 'https://iderkaoui.site/en',
            hreflang: 'en',
        },
        {
            href: 'https://iderkaoui.site/fr',
            hreflang: 'fr',
        },
        {
            href: 'https://iderkaoui.site/ar',
            hreflang: 'es',
        },
        // Add more languages as needed
    ],
    // Exclude the language path parameter pages themselves
    exclude: ['/**/[lang]', '/**/[lang]/**'],
    // Transform the dynamic paths to include all language variations
    transform: async (config, path) => {
        // Define your supported languages
        const languages = ['en', 'fr', 'ar']; // Replace with your actual languages

        // If this is a dynamic language route that needs to be processed
        if (path.includes('/[lang]/') || path === '/[lang]') {
            // Create entries for each language
            return languages.map(lang => ({
                loc: path.replace('[lang]', lang),
                changefreq: config.changefreq,
                priority: config.priority,
                lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
                alternateRefs: config.alternateRefs?.map(alternate => ({
                    href: alternate.href,
                    hreflang: alternate.hreflang,
                })),
            }));
        }

        // Return normal config for non-language paths
        return {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs,
        };
    },
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
    outDir: 'public',
};