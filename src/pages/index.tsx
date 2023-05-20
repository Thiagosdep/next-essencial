import { GetServerSideProps } from 'next';

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
