import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import MdxContent from "@/components/mdx-content";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Robert Lynch`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20"></div>
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-400/10 to-pink-400/10 blur-3xl"></div>
      
      <div className="relative container mx-auto max-w-4xl px-6 py-20">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>

        <article>
          <header className="mb-8">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100 sm:text-5xl">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </span>
            </div>
          </header>

          <div className="rounded-xl border border-gray-200 bg-white/50 backdrop-blur p-8 dark:border-gray-700 dark:bg-gray-800/50">
            <MdxContent source={post.content} />
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all posts
          </Link>
        </div>
      </div>
    </div>
  );
}
