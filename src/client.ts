import {createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import {SanityImageSource} from "@sanity/image-url/lib/types/types";

const client = createClient({
    projectId: "s9y5v1ki",
    dataset: "production",
    apiVersion: "v2021-10-21",
    useCdn: false,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
    return builder.image(source);
};

export default client;
