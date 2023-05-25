import { GetStaticProps } from 'next';
import { SEO } from '../../components/SEO';
import Link from 'next/link';
import styles from './posts.module.scss';

interface IPost {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

interface IPostReturn {
  id: string;
  title: string;
  content: string;
  description: string;
  updatedAt: Date;
}
interface IPostsProps {
  posts: IPost[];
}

export default function Posts({ posts }: IPostsProps) {
  return (
    <>
      <SEO title="Posts" />
      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map(post => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              <a>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<IPostsProps> = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts`);
  const posts: IPost[] = (await response.json()).map((post: IPostReturn) => ({
    slug: post.id,
    title: post.title,
    excerpt: post.description,
    updatedAt: new Date(post.updatedAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }));

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 12, // 12 horas in seconds!
  };
};
