import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-brand-orange mb-4">404</h1>
          <h2 className="text-3xl font-heading font-bold text-brand-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-brand-gray-600 mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. 
            Let's get you back to designing beautiful spaces.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/" className="flex items-center">
              <Home className="mr-2" size={20} />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/services" className="flex items-center">
              <ArrowLeft className="mr-2" size={20} />
              View Services
            </Link>
          </Button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-brand-gray-500 mb-4">Need help? Contact us:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919876543210" className="text-brand-orange hover:underline">
              +91 98765 43210
            </a>
            <a href="mailto:info@biospace.in" className="text-brand-orange hover:underline">
              info@biospace.in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}