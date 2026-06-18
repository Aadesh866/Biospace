export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-brand-orange mx-auto mb-4"></div>
        <p className="text-brand-gray-600 font-medium">Loading BIOSPACE...</p>
      </div>
    </div>
  )
}