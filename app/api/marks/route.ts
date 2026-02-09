import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

type MarkMetadata = {
  title: string
  description: string
  slug: string
  emoji?: string
}

async function getMarks(): Promise<MarkMetadata[]> {
  const marksDir = path.join(process.cwd(), 'app', 'mark')
  
  try {
    const entries = await fs.readdir(marksDir, { withFileTypes: true })
    const marks: MarkMetadata[] = []
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        try {
          const metadataPath = path.join(marksDir, entry.name, 'metadata.ts')
          const metadataContent = await fs.readFile(metadataPath, 'utf-8')
          
          const titleMatch = metadataContent.match(/title:\s*['"]([^'"]+)['"]/)
          const descriptionMatch = metadataContent.match(/description:\s*['"]([^'"]+)['"]/)
          const publishedMatch = metadataContent.match(/published:\s*(true|false)/)
          const emojiMatch = metadataContent.match(/emoji:\s*['"]([^'"]+)['"]/)
          
          if (titleMatch && descriptionMatch && publishedMatch && publishedMatch[1] === 'true') {
            marks.push({
              title: titleMatch[1],
              description: descriptionMatch[1],
              slug: entry.name,
              emoji: emojiMatch ? emojiMatch[1] : "",
            })
          }
        } catch (error) {
          console.error(`Error reading metadata for ${entry.name}:`, error)
        }
      }
    }
    
    return marks
  } catch (error) {
    return []
  }
}

export async function GET() {
  const marks = await getMarks()
  return NextResponse.json(marks)
}
