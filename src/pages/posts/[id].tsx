import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { IPost } from '.';

interface IComment {
  id: string;
  body: string;
}

interface ICommentsProps {
  comments: IComment[];
}

export default function Post({ comments }: ICommentsProps) {
  const {
    query: { id },
  } = useRouter();

  return (
    <>
      <h1>Post {id}</h1>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('http://localhost:3333/posts');
  const posts: IPost[] = await response.json();

  const paths = posts.map(post => {
    return { params: { id: String(post.id) } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ICommentsProps> = async context => {
  const { id } = context.params;
  const response = await fetch(`http://localhost:3333/comments?postId=${id}`);
  const comments: IComment[] = await response.json();

  return {
    props: {
      comments,
    },
    revalidate: 60, // In seconds!
  };
};
