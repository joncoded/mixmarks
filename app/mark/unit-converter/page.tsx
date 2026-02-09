'use client'

import MarkContainer from "@/components/MarkContainer"
import { useState } from 'react'
import { metadata } from './metadata'

type UnitType = 'length' | 'mass' | 'time' | 'temperature' | 'energy' | 'area' | 'volume'

const conversions = {
  length: {
    meters: 1,
    kilometers: 0.001,
    miles: 0.000621371,
    feet: 3.28084,
    inches: 39.3701,
    centimeters: 100,
    yards: 1.09361,
  },
  mass: {
    grams: 1,
    kilograms: 0.001,
    pounds: 0.00220462,
    ounces: 0.035274,
    tons: 0.000001,
  },
  time: {
    seconds: 1,
    minutes: 0.0166667,
    hours: 0.000277778,
    days: 0.0000115741,
    weeks: 0.00000165344,
  },
  area: {
    'square meters': 1,
    'square kilometers': 0.000001,
    'square miles': 3.861e-7,
    'square feet': 10.7639,
    acres: 0.000247105,
  },
  volume: {
    liters: 1,
    milliliters: 1000,
    gallons: 0.264172,
    'cubic meters': 0.001,
    'cubic feet': 0.0353147,
  },
}

function parseInput(input: string): { value: number; unit: string; type: UnitType } | null {
  const normalized = input.toLowerCase().trim()
  
  const patterns = [
    { regex: /(\d+\.?\d*)\s*(meters?|m(?![il]))(?:\s|$)/, type: 'length' as UnitType, unit: 'meters' },
    { regex: /(\d+\.?\d*)\s*(kilometers?|km)(?:\s|$)/, type: 'length' as UnitType, unit: 'kilometers' },
    { regex: /(\d+\.?\d*)\s*(miles?|mi)(?:\s|$)/, type: 'length' as UnitType, unit: 'miles' },
    { regex: /(\d+\.?\d*)\s*(feet|ft)(?:\s|$)/, type: 'length' as UnitType, unit: 'feet' },
    { regex: /(\d+\.?\d*)\s*(inches?|in)(?:\s|$)/, type: 'length' as UnitType, unit: 'inches' },
    { regex: /(\d+\.?\d*)\s*(centimeters?|cm)(?:\s|$)/, type: 'length' as UnitType, unit: 'centimeters' },
    { regex: /(\d+\.?\d*)\s*(yards?|yd)(?:\s|$)/, type: 'length' as UnitType, unit: 'yards' },
    
    { regex: /(\d+\.?\d*)\s*(grams?|g(?![al]))(?:\s|$)/, type: 'mass' as UnitType, unit: 'grams' },
    { regex: /(\d+\.?\d*)\s*(kilograms?|kg)(?:\s|$)/, type: 'mass' as UnitType, unit: 'kilograms' },
    { regex: /(\d+\.?\d*)\s*(pounds?|lbs?|lb)(?:\s|$)/, type: 'mass' as UnitType, unit: 'pounds' },
    { regex: /(\d+\.?\d*)\s*(ounces?|oz)(?:\s|$)/, type: 'mass' as UnitType, unit: 'ounces' },
    { regex: /(\d+\.?\d*)\s*(tons?)(?:\s|$)/, type: 'mass' as UnitType, unit: 'tons' },
    
    { regex: /(\d+\.?\d*)\s*(seconds?|sec|s(?!\w))(?:\s|$)/, type: 'time' as UnitType, unit: 'seconds' },
    { regex: /(\d+\.?\d*)\s*(minutes?|min)(?:\s|$)/, type: 'time' as UnitType, unit: 'minutes' },
    { regex: /(\d+\.?\d*)\s*(hours?|hr|h(?!\w))(?:\s|$)/, type: 'time' as UnitType, unit: 'hours' },
    { regex: /(\d+\.?\d*)\s*(days?)(?:\s|$)/, type: 'time' as UnitType, unit: 'days' },
    { regex: /(\d+\.?\d*)\s*(weeks?)(?:\s|$)/, type: 'time' as UnitType, unit: 'weeks' },
    
    { regex: /(\d+\.?\d*)\s*(liters?|l(?![bs]))(?:\s|$)/, type: 'volume' as UnitType, unit: 'liters' },
    { regex: /(\d+\.?\d*)\s*(milliliters?|ml)(?:\s|$)/, type: 'volume' as UnitType, unit: 'milliliters' },
    { regex: /(\d+\.?\d*)\s*(gallons?|gal)(?:\s|$)/, type: 'volume' as UnitType, unit: 'gallons' },
  ]

  for (const pattern of patterns) {
    const match = normalized.match(pattern.regex)
    if (match) {
      return {
        value: parseFloat(match[1]),
        unit: pattern.unit,
        type: pattern.type,
      }
    }
  }

  return null
}

function convert(value: number, fromUnit: string, type: UnitType): Record<string, string> {
  const units = conversions[type] as Record<string, number>
  const baseValue = value / units[fromUnit]
  const results: Record<string, string> = {}

  for (const [unit, factor] of Object.entries(units)) {
    if (unit !== fromUnit) {
      const converted = baseValue * factor
      results[unit] = converted.toFixed(4).replace(/\.?0+$/, '')
    }
  }

  return results
}

export default function UnitConverter() {
  const [input, setInput] = useState('')
  const [results, setResults] = useState<Record<string, string> | null>(null)
  const [error, setError] = useState('')

  const handleConvert = () => {
    const parsed = parseInput(input)
    
    if (!parsed) {
      setError('Could not parse input. Try something like "2 miles" or "100 grams"')
      setResults(null)
      return
    }

    setError('')
    const converted = convert(parsed.value, parsed.unit, parsed.type)
    setResults(converted)
  }

  return (
    <MarkContainer>
      <h1 className="font-heading text-4xl font-bold mb-4">{metadata.title}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">{metadata.description}</p>

      <div className="mb-6">
        <label htmlFor="unit-input" className="block font-heading text-lg mb-2">
          Enter a value with unit
        </label>
        <div className="flex gap-2">
          <input
            id="unit-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleConvert()}
            placeholder="e.g., 2 miles, 100 grams, 5 hours"
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleConvert}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-heading"
          >
            Convert
          </button>
        </div>
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </div>

      {results && (
        <div className="space-y-3">
          <h2 className="font-heading text-2xl font-semibold mb-4">Results</h2>
          {Object.entries(results).map(([unit, value]) => (
            <div
              key={unit}
              className="p-4 border border-gray-300 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-800"
            >
              <span className="font-heading font-semibold">{value}</span> {unit}
            </div>
          ))}
        </div>
      )}
    </MarkContainer>
  )
}
