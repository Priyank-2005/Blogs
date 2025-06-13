import { notFound } from 'next/navigation';
import posts from '../../data/posts.json';
import '../../../styles/Post.css';

type PostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}


export default function PostPage({ params }: PostPageProps) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <div className="post-container">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
