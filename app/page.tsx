'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

type MarkMetadata = {
  title: string
  description: string
  slug: string
  emoji?: string
}

export default function Home() {

  const showCount = 12
  const [marks, setMarks] = useState<MarkMetadata[]>([])
  const [displayCount, setDisplayCount] = useState(showCount)

  useEffect(() => {
    fetch('/api/marks')
      .then(res => res.json())
      .then(data => setMarks(data))
  }, [])

  const visibleMarks = marks.slice(0, displayCount)
  const hasMore = displayCount < marks.length

  return (
    <div className="container mx-auto px-4 py-12">

      <h1 className="font-heading text-5xl font-bold mb-4">MixMarks</h1>
      <p className="text-xl mb-6 md:mb-12 text-gray-600 dark:text-gray-400">
        a Next.js platform for "marks" (i.e. mini-apps like calculators and generators)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleMarks.map((mark) => (
          <Link
            key={mark.slug}
            href={`/mark/${mark.slug}`}
            className="block p-6 border border-gray-300 dark:border-gray-700 rounded-lg hover:shadow-lg hover:border-gray-400 dark:hover:border-gray-600 transition-all"
          >
            <h2 className="font-heading text-2xl font-semibold mb-2 flex items-start gap-2">
              {mark.emoji && <span aria-hidden="true" className="text-2xl">{mark.emoji} </span>}<span>{mark.title}</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {mark.description}
            </p>
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setDisplayCount(prev => prev + showCount)}
            className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-opacity font-heading font-semibold"
          >
            Show More
          </button>
        </div>
      )}

      {marks.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-500 mt-12">
          No marks available yet &mdash; add some in the /app/mark directory!
        </p>
      )}

      <h2 className="font-heading text-2xl font-bold mt-12 mb-4">MixMarks (as a platform)</h2>
      
      <div className="text-xl mb-12 text-gray-600 dark:text-gray-400">
        <p>Feel free to use this as a platform for your own mini-apps: </p>
        <ul className="list-disc ml-6 my-4 space-y-2">
          <li>the home page will automatically list all published "marks" in the /app/mark directory</li>
          <li>create your own "marks" one-by-one using next.js / react / javascript / html or whatever!</li>
          <li>each mark will contain a metadata file that contains the title, description and visibility on the home page</li>
        </ul>
        <p className="my-4">Get the code from <a href="https://github.com/joncoded/mixmarks" target="_blank"><button className="rounded-none bg-black dark:bg-white text-white dark:text-black px-4 py-2">GitHub <span aria-hidden="true">🐙</span></button></a></p>
      </div>      

    </div>
  )
}
