import {PostsGrid} from "@/components";
import Link from "next/link";
import {Suspense} from 'react'
import styles from '../page.module.css'

export default async function page() {
    return (
        <main className={styles.main}>
            <h1>BLOG</h1>
            <Suspense fallback={<PostsGrid skeleton/>}>
                <PostsGrid/>
            </Suspense>
            <Link href="/">Back</Link>
        </main>
    )
}
