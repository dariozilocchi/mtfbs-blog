import styles from "@/app/page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>INDEX</h1>
            <Link href="/blog">Blog index</Link>
        </main>
    )
}
