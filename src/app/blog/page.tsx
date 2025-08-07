import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background Elements for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20"></div>
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-400/10 to-pink-400/10 blur-3xl"></div>
      
      <div className="relative container mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100 sm:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Thoughts on development, technology, and everything in between
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              No blog posts found. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white/50 backdrop-blur p-6 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:bg-gray-800"
              >
                <div className="flex-1">
                  <h2 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <div className="mb-4 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
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
                  
                  <p className="mb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors mt-auto"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
