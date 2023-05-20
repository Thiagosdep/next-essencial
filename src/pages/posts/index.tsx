import { GetStaticProps } from 'next';

export interface IPost {
  id: string;
  title: string;
}

interface IPostsProps {
  posts: IPost[];
}

export default function Posts({ posts }: IPostsProps) {
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

export const getStaticProps: GetStaticProps<IPostsProps> = async () => {
  const response = await fetch('http://localhost:3333/posts');
  const posts: IPost[] = await response.json();

  return {
    props: {
      posts,
    },
    revalidate: 60 * 10, // In seconds!
  };
};
