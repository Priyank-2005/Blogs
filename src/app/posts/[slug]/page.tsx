import { notFound } from 'next/navigation';
import posts from '../../data/posts.json';
import '../../../styles/Post.css';

type Params = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: Params) {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) return notFound();
  return (
    <div className="post-container">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
