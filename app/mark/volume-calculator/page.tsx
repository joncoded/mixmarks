'use client'

import { useState } from 'react'
import { metadata } from './metadata'
import MarkContainer from '@/components/MarkContainer'

type Shape = 'cube' | 'sphere' | 'cylinder' | 'cone' | 'rectangular-prism'

export default function VolumeCalculator() {
  const [shape, setShape] = useState<Shape>('cube')
  const [side, setSide] = useState('')
  const [radius, setRadius] = useState('')
  const [height, setHeight] = useState('')
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const calculate = () => {
    let volume = 0

    switch (shape) {
      case 'cube':
        const s = parseFloat(side)
        volume = s * s * s
        break
      case 'sphere':
        const r = parseFloat(radius)
        volume = (4 / 3) * Math.PI * r * r * r
        break
      case 'cylinder':
        const rc = parseFloat(radius)
        const hc = parseFloat(height)
        volume = Math.PI * rc * rc * hc
        break
      case 'cone':
        const rcone = parseFloat(radius)
        const hcone = parseFloat(height)
        volume = (1 / 3) * Math.PI * rcone * rcone * hcone
        break
      case 'rectangular-prism':
        const l = parseFloat(length)
        const w = parseFloat(width)
        const h = parseFloat(height)
        volume = l * w * h
        break
    }

    setResult(volume)
  }

  return (
    <MarkContainer>
      <h1 className="font-heading text-4xl font-bold mb-4">{metadata.emoji && <span aria-hidden="true">{metadata.emoji}</span>} {metadata.title}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">{metadata.description}</p>

      <div className="mb-6">
        <label htmlFor="shape" className="block font-heading text-lg mb-2">
          Select Shape
        </label>
        <select
          id="shape"
          value={shape}
          onChange={(e) => {
            setShape(e.target.value as Shape)
            setResult(null)
          }}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="cube">Cube</option>
          <option value="sphere">Sphere</option>
          <option value="cylinder">Cylinder</option>
          <option value="cone">Cone</option>
          <option value="rectangular-prism">Rectangular Prism</option>
        </select>
      </div>

      <div className="space-y-4 mb-6">
        {shape === 'cube' && (
          <div>
            <label htmlFor="side" className="block font-heading text-lg mb-2">
              Side Length
            </label>
            <input
              id="side"
              type="number"
              step="any"
              value={side}
              onChange={(e) => setSide(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {shape === 'sphere' && (
          <div>
            <label htmlFor="radius" className="block font-heading text-lg mb-2">
              Radius
            </label>
            <input
              id="radius"
              type="number"
              step="any"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {(shape === 'cylinder' || shape === 'cone') && (
          <>
            <div>
              <label htmlFor="radius" className="block font-heading text-lg mb-2">
                Radius
              </label>
              <input
                id="radius"
                type="number"
                step="any"
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="height" className="block font-heading text-lg mb-2">
                Height
              </label>
              <input
                id="height"
                type="number"
                step="any"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </>
        )}

        {shape === 'rectangular-prism' && (
          <>
            <div>
              <label htmlFor="length" className="block font-heading text-lg mb-2">
                Length
              </label>
              <input
                id="length"
                type="number"
                step="any"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="width" className="block font-heading text-lg mb-2">
                Width
              </label>
              <input
                id="width"
                type="number"
                step="any"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="height" className="block font-heading text-lg mb-2">
                Height
              </label>
              <input
                id="height"
                type="number"
                step="any"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </>
        )}

        <button
          onClick={calculate}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-heading text-lg"
        >
          Calculate
        </button>
      </div>

      {result !== null && (
        <div className="p-6 border border-gray-300 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-800">
          <h2 className="font-heading text-2xl font-semibold mb-2">Volume</h2>
          <p className="text-3xl font-heading font-bold">
            {result.toFixed(4).replace(/\.?0+$/, '')} cubic units
          </p>
        </div>
      )}
    </MarkContainer>
  )
}
