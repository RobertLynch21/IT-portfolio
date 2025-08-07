import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'

interface CodeProps {
  children: string
  [key: string]: unknown
}

function Code({ children, ...props }: CodeProps) {
  const codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
  code: Code,
}

interface MdxContentProps {
  source: string
}

export default function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose prose-gray max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-pre:bg-gray-900 prose-pre:text-gray-100">
      <MDXRemote source={source} components={components} />
    </div>
  )
}
