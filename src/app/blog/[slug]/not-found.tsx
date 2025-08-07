import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-20">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100 sm:text-5xl">
          Post Not Found
        </h1>
        <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
          The blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </div>
    </div>
  );
}
