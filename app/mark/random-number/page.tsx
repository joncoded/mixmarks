'use client'

import { useState } from 'react'
import { metadata } from './metadata' 
import MarkContainer from '@/components/MarkContainer'

export default function RandomNumber() {
  const [min, setMin] = useState('1')
  const [max, setMax] = useState('100')
  const [count, setCount] = useState('1')
  const [results, setResults] = useState<number[]>([])

  const generate = () => {
    const minNum = parseInt(min)
    const maxNum = parseInt(max)
    const countNum = parseInt(count)

    if (isNaN(minNum) || isNaN(maxNum) || isNaN(countNum)) {
      return
    }

    if (minNum >= maxNum) {
      return
    }

    const numbers: number[] = []
    for (let i = 0; i < countNum; i++) {
      const random = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
      if (!numbers.includes(random)) {
        numbers.push(random)
      } else {
        i-- // try again if duplicate
      }
    }
    setResults(numbers)
  }

  return (
    <MarkContainer>
      <h1 className="font-heading text-4xl font-bold mb-4">{metadata.title}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">{metadata.description}</p>

      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="min" className="block font-heading text-lg mb-2">
            Minimum
          </label>
          <input
            id="min"
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="max" className="block font-heading text-lg mb-2">
            Maximum
          </label>
          <input
            id="max"
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="count" className="block font-heading text-lg mb-2">
            How many numbers?
          </label>
          <input
            id="count"
            type="number"
            value={count}
            min="1"
            max="100"
            onChange={(e) => setCount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={generate}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-heading text-lg"
        >
          Generate
        </button>
      </div>

      {results.length > 0 && (
        <div>
          <h2 className="font-heading text-2xl font-semibold mb-4">Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {results.map((num, idx) => (
              <div
                key={idx}
                className="p-4 border border-gray-300 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-800 text-center"
              >
                <span className="font-heading text-2xl font-bold">{num}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </MarkContainer>
  )
}
