import {MetadataRoute} from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                disallow: [
                    "/harming/humans",
                    "/ignoring/human/orders",
                    "/harm/to/self",
                ],
            },
            {
                userAgent: "*",
                disallow: ["/api"],
            },
        ],
        host: process.env.NEXT_PUBLIC_FRONTEND_HOST,
        sitemap: `${process.env.NEXT_PUBLIC_FRONTEND_SCHEMA}://${process.env.NEXT_PUBLIC_FRONTEND_HOST}/sitemap.xml`,
    };
}
