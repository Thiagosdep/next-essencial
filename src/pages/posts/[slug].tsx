import { GetStaticProps } from 'next';
import { SEO } from '../../components/SEO';
import styles from './slug.module.scss';
import { useRouter } from 'next/router';

interface IPost {
  slug: string;
  title: string;
  content: string;
  updatedAt: string;
}

interface IPostProps {
  post: IPost;
}

export default function Post({ post }: IPostProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <SEO title="Post" />
      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<IPostProps> = async context => {
  const { slug } = context.params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/posts/${slug}`,
  );
  const data = await response.json();
  const post = {
    slug: data.id,
    title: data.title,
    content: data.content,
    updatedAt: new Date(data.updatedAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  };
  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 12, // 12 hours In seconds!
  };
};
