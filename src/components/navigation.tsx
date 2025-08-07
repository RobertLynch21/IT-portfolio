'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ThemeToggle } from './theme-toggle'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-md dark:border-gray-800/50 dark:bg-gray-900/80">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link 
          href="/" 
          className="text-xl font-bold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 transition-colors"
        >
          Robert Lynch
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    pathname === item.href
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 md:hidden">
          <nav className="container mx-auto max-w-6xl px-6 py-4">
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-base font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                      pathname === item.href
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
