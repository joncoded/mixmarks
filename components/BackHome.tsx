import Link from "next/link"

export default function BackHome() {
  return (
  
    <div className="mb-8">
      <Link href="/" className="text-blue-500 hover:underline">
        <span aria-hidden="true">←</span> Back to home 
      </Link>
    </div>
  
  )
}