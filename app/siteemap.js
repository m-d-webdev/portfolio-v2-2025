import { locales } from "@/lib/server-i18n";

export default async function sitemap() {
    const baseUrl = 'https://iderkaoui.site/';

    let staticRoutes = []
    locales.map(l => {
        staticRoutes.push(
            {
                url: `${baseUrl}/${l}`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 1.0,
            },
            {
                url: `${baseUrl}/${l}/me`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
            },
            {
                url: `${baseUrl}/${l}/contact-me`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            },
            {
                url: `${baseUrl}/${l}/my-projects`,
                lastModified: new Date(),
                changeFrequency: 'monjthly',
                priority: 0.6,
            },
            {
                url: `${baseUrl}/${l}/my-experiences`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.5,
            },
        )
    }

    )


    // Combine all routes
    return staticRoutes;
}