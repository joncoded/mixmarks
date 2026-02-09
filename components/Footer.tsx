'use client'

import Link from 'next/link'

export function Footer() {  

  return (
    <footer className=" bg-black dark:bg-gray-900/80 backdrop-blur-md border-t   border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between py-10 font-heading">
          <div>
            <p>
              <Link 
                href="/" 
                className="text-2xl text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                MixMarks            
              </Link>
            </p>
            <p className="text-md text-white">
                a Next.js platform for "marks" (i.e. mini-apps like calculators and generators)
            </p>
            
          </div>
          <div>
            <p className="text-md text-white">a <a href="https://joncoded.com" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">joncoded.com</a> and <a href="https://claude.ai" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">claude.ai</a> project</p>
          </div>
        </div>
        
      </nav>
    </footer>
  )
}
