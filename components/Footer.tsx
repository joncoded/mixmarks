'use client'

import Link from 'next/link'

export function Footer() {  

  return (
    <footer className="bg-black dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800">
      <nav className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
        <p className="text-2xl text-white font-heading">
          <Link 
            href="/" 
            className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            MixMarks            
          </Link>
        </p>

        <p className="text-md text-white">
            a Next.js platform for "marks" (i.e. mini-apps like calculators and generators)
        </p>

        <p className="text-md text-white mt-8">a <a href="https://joncoded.com" className="text-green-600 hover:text-white hover:underline" target="_blank" rel="noopener noreferrer">joncoded.com</a> and <a href="https://claude.ai" className="text-orange-600 hover:text-white hover:underline" target="_blank" rel="noopener noreferrer">claude.ai</a> project</p>
         
        
      </nav>
    </footer>
  )
}
