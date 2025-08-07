import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robert Lynch - Developer & IT Specialist",
  description: "Portfolio of Robert Lynch - Full-stack developer and IT specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors`}
      >
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="border-t border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-gray-900">
            <div className="container mx-auto max-w-6xl px-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © 2025 Robert Lynch. Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
