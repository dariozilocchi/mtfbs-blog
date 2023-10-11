import client from "@/client";
import {PostSkeleton} from "@/components";
import PostCard from "@/components/PostCard/PostCard";
import {Post} from "@/types";
import styles from "./PostsGrid.module.css";

type SkeletonPost = {
    key: string
    post?: Post;
};

async function sleep(seconds: number) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
}

async function getPosts(skeleton: boolean): Promise<SkeletonPost[]> {
    if (skeleton) {
        return [...new Array(6)].map((_, i) => ({
            key: `skeleton_${i}`,
        }))
    }

    await sleep(5);
    const posts = await client.fetch<Post[]>(`*[_type == 'post'] {
      "key": _id,
      title,
      "slug": slug.current,
      "image": mainImage.asset,
      "imageLqip": mainImage.asset->metadata.lqip,
      publishedAt
    }`);

    // New comment
    return posts.map((post) => ({
        key: post.key,
        post
    }))
}

type PostsGridProps = {
    skeleton?: boolean;
}

async function PostsGrid({skeleton}: PostsGridProps) {
    const posts = await getPosts(skeleton || false);

    return (
        <ul className={styles.grid}>
            {posts?.map(({key, post}) => <li key={key}>
                {post ? <PostCard post={post}/> : <PostSkeleton/>}
            </li>)}
        </ul>
    )
}

export default PostsGrid;
