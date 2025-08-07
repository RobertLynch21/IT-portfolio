import { Calendar, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20"></div>
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-400/10 to-pink-400/10 blur-3xl"></div>
      
      <div className="relative container mx-auto max-w-4xl px-6 py-20">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100 sm:text-5xl">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Passionate developer and IT specialist with a love for creating innovative solutions
          </p>
        </div>

        {/* Bio Section */}
        <section className="mb-16">
          <div className="rounded-xl border border-gray-200 bg-white/50 backdrop-blur p-8 dark:border-gray-700 dark:bg-gray-800/50">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
              Who I Am
            </h2>
            <div className="prose prose-gray max-w-none dark:prose-invert">
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                I&apos;m Robert Lynch, a dedicated full-stack developer and IT specialist with a passion 
                for crafting robust, scalable solutions. With expertise spanning from frontend 
                development with React and TypeScript to backend systems and infrastructure, 
                I thrive on solving complex technical challenges.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                My journey in technology has led me through various roles where I&apos;ve developed 
                strong skills in web development, system administration, and project management. 
                I believe in writing clean, maintainable code and creating user experiences that 
                truly make a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-px bg-gray-300 dark:bg-gray-600 md:left-8"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {/* Experience Item 1 */}
              <div className="relative flex items-start">
                <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 md:left-4">
                  <div className="h-3 w-3 rounded-full bg-white"></div>
                </div>
                <div className="ml-16 md:ml-20">
                  <div className="rounded-xl border border-gray-200 bg-white/50 backdrop-blur p-6 dark:border-gray-700 dark:bg-gray-800/50">
                    <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        Senior Developer / IT Specialist
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          2020 - Present
                        </span>
                      </div>
                    </div>
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      Leading full-stack development projects and managing IT infrastructure. 
                      Responsible for architecting scalable solutions and mentoring junior developers.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>Developed and maintained complex web applications using React, TypeScript, and Node.js</li>
                      <li>Managed cloud infrastructure and deployment pipelines</li>
                      <li>Led technical decision-making and code reviews</li>
                      <li>Collaborated with cross-functional teams to deliver high-quality software</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="relative flex items-start">
                <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 md:left-4">
                  <div className="h-3 w-3 rounded-full bg-white"></div>
                </div>
                <div className="ml-16 md:ml-20">
                  <div className="rounded-xl border border-gray-200 bg-white/50 backdrop-blur p-6 dark:border-gray-700 dark:bg-gray-800/50">
                    <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        Full Stack Developer
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          2018 - 2020
                        </span>
                      </div>
                    </div>
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      Developed web applications and implemented database solutions. 
                      Focused on creating responsive, user-friendly interfaces and robust backend systems.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>Built modern web applications using JavaScript frameworks</li>
                      <li>Designed and implemented RESTful APIs</li>
                      <li>Worked with SQL and NoSQL databases</li>
                      <li>Participated in agile development processes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experience Item 3 */}
              <div className="relative flex items-start">
                <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 md:left-4">
                  <div className="h-3 w-3 rounded-full bg-white"></div>
                </div>
                <div className="ml-16 md:ml-20">
                  <div className="rounded-xl border border-gray-200 bg-white/50 backdrop-blur p-6 dark:border-gray-700 dark:bg-gray-800/50">
                    <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        Junior Developer / IT Support
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          2016 - 2018
                        </span>
                      </div>
                    </div>
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      Started my professional journey in software development while providing 
                      IT support and learning various programming languages and technologies.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>Provided technical support and troubleshooting</li>
                      <li>Learned web development fundamentals</li>
                      <li>Assisted with system administration tasks</li>
                      <li>Contributed to small development projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Technical Skills
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white/50 backdrop-blur p-6 dark:border-gray-700 dark:bg-gray-800/50">
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Languages & Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'HTML5', 'CSS3'].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="rounded-xl border border-gray-200 bg-white/50 backdrop-blur p-6 dark:border-gray-700 dark:bg-gray-800/50">
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB', 'Linux', 'Nginx', 'CI/CD'].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="rounded-xl border border-gray-200 bg-white/50 backdrop-blur p-8 text-center dark:border-gray-700 dark:bg-gray-800/50">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
              Let&apos;s Connect
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              I&apos;m always open to discussing new opportunities and interesting projects.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/RobertLynch21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-900 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/robertflynch/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                LinkedIn
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
