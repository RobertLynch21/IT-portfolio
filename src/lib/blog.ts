import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  readingTime: string
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.(mdx|md)$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      // Calculate reading time (rough estimate: 200 words per minute)
      const wordsPerMinute = 200
      const wordCount = matterResult.content.split(/\s+/).length
      const readingTime = Math.ceil(wordCount / wordsPerMinute)

      return {
        slug,
        title: matterResult.data.title || 'Untitled',
        date: matterResult.data.date || new Date().toISOString(),
        excerpt: matterResult.data.excerpt || '',
        content: matterResult.content,
        readingTime: `${readingTime} min read`,
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))

  return allPostsData
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    let fileContents: string

    // Try .mdx first, then .md
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, 'utf8')
    } else {
      const mdPath = path.join(postsDirectory, `${slug}.md`)
      if (fs.existsSync(mdPath)) {
        fileContents = fs.readFileSync(mdPath, 'utf8')
      } else {
        return null
      }
    }

    const matterResult = matter(fileContents)

    // Calculate reading time
    const wordsPerMinute = 200
    const wordCount = matterResult.content.split(/\s+/).length
    const readingTime = Math.ceil(wordCount / wordsPerMinute)

    return {
      slug,
      title: matterResult.data.title || 'Untitled',
      date: matterResult.data.date || new Date().toISOString(),
      excerpt: matterResult.data.excerpt || '',
      content: matterResult.content,
      readingTime: `${readingTime} min read`,
    }
  } catch (error) {
    console.error('Error reading post:', error)
    return null
  }
}
