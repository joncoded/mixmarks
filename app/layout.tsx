import type { Metadata } from 'next'
import { Barlow_Semi_Condensed, Spectral } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Footer } from '@/components/Footer'

const barlow = Barlow_Semi_Condensed({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow',
})

const spectral = Spectral({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-spectral',
})

export const metadata: Metadata = {
  title: 'MixMarks - mini-app portfolio platform',
  description: 'A platform of mini-apps and tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${barlow.variable} ${spectral.variable} font-body bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider>
          <Header />
          <main className="pt-16 min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
