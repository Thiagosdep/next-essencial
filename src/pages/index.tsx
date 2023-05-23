import { GetServerSideProps } from 'next';
import { SEO } from '../components/SEO';

interface IPost {
  id: string;
  title: string;
}

interface IHomeProps {
  posts: IPost[];
}

export default function Home({ posts }: IHomeProps) {
  return (
    <div>
      <SEO title="Home" excludeTitleSuffix />
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  const response = await fetch('http://localhost:3333/posts');
  const posts: IPost[] = await response.json();

  return {
    props: {
      posts,
    },
  };
};
