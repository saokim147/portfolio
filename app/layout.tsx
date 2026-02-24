import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vuong Hoang Thinh | Software Developer',
  description: 'Portfolio of Vuong Hoang Thinh - Software Developer specializing in full-stack web development with ASP.NET, React, and Python.',
  keywords: ['Vuong Hoang Thinh', 'Software Developer', 'Full Stack', 'ASP.NET', 'React', 'Python'],
  authors: [{ name: 'Vuong Hoang Thinh' }],
  openGraph: {
    title: 'Vuong Hoang Thinh | Software Developer',
    description: 'Portfolio of Vuong Hoang Thinh - Software Developer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-text antialiased">
        {children}
      </body>
    </html>
  )
}
