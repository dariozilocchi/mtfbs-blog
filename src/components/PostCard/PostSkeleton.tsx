import {FC} from "react";
import styles from "./PostCard.module.css";

const PostSkeleton: FC = () => {
    return (
        <div className={styles.box}>
            <span className={styles.title}>Loading...</span>
        </div>
    )
}

export default PostSkeleton;
