'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/90 backdrop-blur-sm'
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <div className="relative h-10 w-10">
              <Image
                src="/images/Logo.jpeg"
                alt="BIOSPACE Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-brand-gray-900">
                BIOSPACE
              </span>
              <span className="text-xs text-brand-gray-600 -mt-1">
                Interior Design
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'font-medium transition-all duration-300 hover:text-brand-orange-500 relative',
                  pathname === item.href
                    ? 'text-brand-orange-500'
                    : 'text-brand-gray-700'
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-orange-500 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-brand-orange-500 hover:text-brand-orange-600"
            >
              <a href="tel:+919876543210" className="flex items-center space-x-2">
                <Phone size={16} />
                <span>Call Now</span>
              </a>
            </Button>

            <Button asChild className="bg-brand-orange-500 hover:bg-brand-orange-600">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-brand-gray-700 hover:text-brand-orange-500 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-brand-gray-200 bg-white/95 backdrop-blur-md">
            <nav className="py-4">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={cn(
                      'px-4 py-2 font-medium transition-colors rounded-md',
                      pathname === item.href
                        ? 'text-brand-orange-500 bg-brand-orange-50'
                        : 'text-brand-gray-700 hover:text-brand-orange-500 hover:bg-brand-orange-50'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="px-4 pt-4 border-t border-brand-gray-200 space-y-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full border-brand-orange-500 text-brand-orange-500"
                  >
                    <a href="tel:+919876543210" className="flex items-center justify-center space-x-2">
                      <Phone size={16} />
                      <span>Call +91 98765 43210</span>
                    </a>
                  </Button>

                  <Button 
                    asChild 
                    className="w-full bg-brand-orange-500 hover:bg-brand-orange-600"
                    onClick={closeMenu}
                  >
                    <Link href="/contact">Get Free Quote</Link>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header