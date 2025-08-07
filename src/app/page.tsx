import Link from "next/link";
import { Github, Linkedin, ExternalLink, Code, Server, Database } from "lucide-react";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20"></div>
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-400/10 to-pink-400/10 blur-3xl"></div>
      
      <div className="relative container mx-auto max-w-6xl px-6">
        {/* Hero Section */}
        <section className="flex min-h-[90vh] flex-col justify-center items-center text-center py-20">
          <div className="max-w-4xl mx-auto">
            {/* Avatar/Profile Image Placeholder */}
            <div className="mb-8 mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
              <div className="h-full w-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <span className="text-3xl font-bold text-gray-700 dark:text-gray-300">RL</span>
              </div>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Robert Lynch
              </span>
            </h1>
            <p className="mb-8 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 sm:text-2xl">
              Full-stack developer and IT specialist crafting digital solutions 
              with passion and precision.
            </p>
            
            {/* Feature Pills */}
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
                <Code className="h-4 w-4" />
                Full-Stack Development
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-200">
                <Server className="h-4 w-4" />
                System Administration
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-200">
                <Database className="h-4 w-4" />
                Database Design
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                About Me
                <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white/80 backdrop-blur px-8 py-4 text-sm font-medium text-gray-700 hover:bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-900 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Read Blog
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Support Mindset</div>
            </div>
          </div>
        </section>
        
        {/* Social Links */}
        <section className="py-16">
          <div className="flex justify-center gap-6 max-w-md mx-auto">
            <a
              href="https://github.com/RobertLynch21"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white/80 backdrop-blur text-gray-600 hover:bg-white hover:text-gray-900 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-offset-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/robertflynch/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white/80 backdrop-blur text-gray-600 hover:bg-white hover:text-gray-900 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-offset-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://robertlynch.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white/80 backdrop-blur text-gray-600 hover:bg-white hover:text-gray-900 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-offset-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              aria-label="Website"
            >
              <ExternalLink className="h-6 w-6" />
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
              Skills & Technologies
            </h2>
            <p className="mb-16 text-lg text-gray-600 dark:text-gray-400">
              Technologies I work with daily
            </p>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group rounded-xl border border-gray-200 bg-white/50 backdrop-blur p-8 hover:bg-white hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-4 mx-auto h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Frontend
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center justify-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                    React / Next.js
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                    TypeScript
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                    HTML5 / CSS3
                  </li>
                </ul>
              </div>
              
              <div className="group rounded-xl border border-gray-200 bg-white/50 backdrop-blur p-8 hover:bg-white hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-4 mx-auto h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Backend
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center justify-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                    Node.js
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                    Python
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                    PostgreSQL
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                    REST APIs
                  </li>
                </ul>
              </div>
              
              <div className="group rounded-xl border border-gray-200 bg-white/50 backdrop-blur p-8 hover:bg-white hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
                <div className="mb-4 mx-auto h-12 w-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                  DevOps & Tools
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center justify-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                    Docker
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                    AWS
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                    Git
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                    Linux
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
