'use client';

import {urlFor} from "@/client";
import {Post} from "@/types";
import Image from "next/image";
import {FC, useState} from "react";
import styles from "./PostCard.module.css";

type PostPreviewProps = {
    post: Post;
}

const PostCard: FC<PostPreviewProps> = ({post}) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div className={styles.box + " " + (active ? styles.active : "")} /*href={`/blog/${post.slug}`}*/
             onClick={handleClick}>
            <Image
                alt="preview"
                src={urlFor(post.image).url()}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                // placeholder="blur"
                // blurDataURL={post.imageLqip}
            />
            <span className={styles.title}>{post.title}</span>
        </div>
    )
}

export default PostCard;
