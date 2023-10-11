import client from "@/client";
import {Post} from "@/types";
import {MetadataRoute} from "next";

function toAbsoluteUrl(url: string) {
    return `${process.env.NEXT_PUBLIC_FRONTEND_SCHEMA}://${process.env.NEXT_PUBLIC_FRONTEND_HOST}/${url}`;
}

async function getPostsRoutes() {
    const posts = await client.fetch<Post[]>(`*[_type == 'post'] {
      "slug": slug.current,
      "updatedAt": _updatedAt
    }`);

    return posts.map(({slug, updatedAt}) => ({
        url: toAbsoluteUrl(`blog/${slug}`),
        priority: 2,
        lastModified: updatedAt,
    }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getPostsRoutes();

    return [
        {
            url: toAbsoluteUrl(''),
            priority: 1,
            lastModified: new Date().toISOString(),
        },
        {
            url: toAbsoluteUrl(`blog`),
            priority: 1,
            lastModified: new Date().toISOString(),
        },
        ...posts];
}
