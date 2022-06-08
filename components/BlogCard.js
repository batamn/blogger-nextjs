import Link from 'next/link';
import Image from "next/image";
import styles from '../styles/BlogCard.module.css';
import moment from "moment";


export default function BlogCard({ post }) {
    console.log(post);
    return (
        <div className={styles.card}>
            <Link href={`/posts/${post.slug}`}>
                <div className={styles.imgContainer}>
                    <Image layout='fill' src={post.coverPhoto.url} alt="" />
                </div>
            </Link>
            <div className={styles.text}>
                <h2>{post.title}</h2>
                <div className={styles.details}>
                    <div className={styles.author}>
                        <img src={post.author.avatar.url} alt="" />
                        <h3>{post.author.name}</h3>
                    </div>
                    <div className={styles.date}>
                        <h3>{moment(post.datePublished).format("MMMM d, YYYY")}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}