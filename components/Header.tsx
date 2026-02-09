'use client'

import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { useState } from 'react'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-black text-white z-50">
      <div className="container max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading text-xl font-bold hover:opacity-80 transition-opacity">
          MixMarks
        </Link>
        
        <div className="relative">
          <Link className="font-heading mr-2" href="/">home</Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="px-4 py-2 rounded hover:bg-gray-800 transition-colors font-heading"
            aria-label="Toggle theme menu"
          >
            {theme === 'light' && '☀️'}
            {theme === 'dark' && '🌙'}
            {theme === 'system' && '💻'}
            <span className="ml-2">{theme}</span>
          </button>
          
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded shadow-lg overflow-hidden">
              <button
                onClick={() => {
                  setTheme('light')
                  setMenuOpen(false)
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-700 transition-colors"
              >
                ☀️ light
              </button>
              <button
                onClick={() => {
                  setTheme('dark')
                  setMenuOpen(false)
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-700 transition-colors"
              >
                🌙 dark
              </button>
              <button
                onClick={() => {
                  setTheme('system')
                  setMenuOpen(false)
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-700 transition-colors"
              >
                💻 system
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
