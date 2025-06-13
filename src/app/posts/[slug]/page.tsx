import { notFound } from 'next/navigation';
import posts from '../../data/posts.json';
import '../../../styles/Post.css';

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  if (!post) return notFound();

  return (
    <div className="post-container">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}