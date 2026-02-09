'use client'

import { useState } from 'react'
import { metadata } from './metadata'
import MarkContainer from '@/components/MarkContainer'

export default function CompoundInterest() {
  const [principal, setPrincipal] = useState('')
  const [rate, setRate] = useState('')
  const [time, setTime] = useState('')
  const [frequency, setFrequency] = useState('12')
  const [result, setResult] = useState<{
    finalAmount: number
    interest: number
  } | null>(null)

  const calculate = () => {
    const p = parseFloat(principal)
    const r = parseFloat(rate) / 100
    const t = parseFloat(time)
    const n = parseFloat(frequency)

    if (isNaN(p) || isNaN(r) || isNaN(t) || isNaN(n)) {
      return
    }

    const amount = p * Math.pow(1 + r / n, n * t)
    const interest = amount - p

    setResult({
      finalAmount: amount,
      interest: interest,
    })
  }

  return (
    <MarkContainer>
      <h1 className="font-heading text-4xl font-bold mb-4">{metadata.title}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">{metadata.description}</p>

      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="principal" className="block font-heading text-lg mb-2">
            Principal Amount ($)
          </label>
          <input
            id="principal"
            type="number"
            step="any"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="1000"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="rate" className="block font-heading text-lg mb-2">
            Annual Interest Rate (%)
          </label>
          <input
            id="rate"
            type="number"
            step="any"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="5"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="time" className="block font-heading text-lg mb-2">
            Time Period (years)
          </label>
          <input
            id="time"
            type="number"
            step="any"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="10"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="frequency" className="block font-heading text-lg mb-2">
            Compound Frequency
          </label>
          <select
            id="frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="1">Annually</option>
            <option value="2">Semi-annually</option>
            <option value="4">Quarterly</option>
            <option value="12">Monthly</option>
            <option value="365">Daily</option>
          </select>
        </div>

        <button
          onClick={calculate}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-heading text-lg"
        >
          Calculate
        </button>
      </div>

      {result && (
        <div className="space-y-4">
          <div className="p-6 border border-gray-300 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-800">
            <h2 className="font-heading text-lg mb-2 text-gray-600 dark:text-gray-400">
              Final Amount
            </h2>
            <p className="text-3xl font-heading font-bold text-green-600 dark:text-green-400">
              ${result.finalAmount.toFixed(2)}
            </p>
          </div>

          <div className="p-6 border border-gray-300 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-800">
            <h2 className="font-heading text-lg mb-2 text-gray-600 dark:text-gray-400">
              Total Interest Earned
            </h2>
            <p className="text-3xl font-heading font-bold text-blue-600 dark:text-blue-400">
              ${result.interest.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </MarkContainer>
  )
}
