import BackHome from "./BackHome"

export default function MarkContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <BackHome />
      {children}
    </div>      
  )
}