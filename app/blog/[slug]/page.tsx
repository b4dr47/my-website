import { getBlogPosts } from "app/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  let posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let posts = getBlogPosts();
  let post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metadata.title,
    description: post.metadata.summary,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let posts = getBlogPosts();
  let post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <section>
      <h1 className="text-2xl font-medium mb-2">{post.metadata.title}</h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        {post.metadata.publishedAt}
      </p>
      <article className="prose dark:prose-invert">
        <MDXRemote source={post.content} />
      </article>
    </section>
  );
}
