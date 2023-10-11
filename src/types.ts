import {SanityImageSource} from "@sanity/image-url/lib/types/types";

export type Post = {
    key: string;
    title: string;
    slug: string;
    image: SanityImageSource;
    imageLqip?: string;
    publishedAt: string;
    updatedAt: string;
};