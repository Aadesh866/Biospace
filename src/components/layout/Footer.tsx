import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Star,
  Award,
  Users,
  Home
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ]

  const services = [
    { label: 'Modular Kitchens', href: '/services#modular-kitchens' },
    { label: 'Custom Wardrobes', href: '/services#custom-wardrobes' },
    { label: 'Living Room Design', href: '/services#living-room' },
    { label: 'False Ceilings', href: '/services#false-ceilings' },
    { label: 'Complete Renovation', href: '/services#complete-renovation' },
    { label: 'Commercial Interiors', href: '/services#commercial-interiors' },
  ]

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://facebook.com/biospace', 
      label: 'Facebook' 
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/biospace_interiors', 
      label: 'Instagram' 
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/biospace', 
      label: 'Twitter' 
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/company/biospace', 
      label: 'LinkedIn' 
    },
  ]

  const trustIndicators = [
    { 
      icon: Award, 
      value: '30 Years', 
      label: 'Kitchen Warranty' 
    },
    { 
      icon: Clock, 
      value: '24-48hrs', 
      label: 'Site Visit' 
    },
    { 
      icon: Users, 
      value: '1000+', 
      label: 'Happy Customers' 
    },
    { 
      icon: Star, 
      value: '4.9/5', 
      label: 'Customer Rating' 
    },
  ]

  return (
    <footer className="bg-brand-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative h-12 w-12">
                <Image
                  src="/images/Logo.jpeg"
                  alt="BIOSPACE Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl">BIOSPACE</h3>
                <p className="text-sm text-brand-gray-300">Interior Design Excellence</p>
              </div>
            </div>
            
            <p className="text-brand-gray-300 mb-6 leading-relaxed">
              Transform your space with BIOSPACE - India's fastest interior design firm. 
              We deliver premium makeovers in under a week with industry-leading 30-year warranties.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <indicator.icon className="h-6 w-6 text-brand-orange-500" />
                  </div>
                  <div className="font-bold text-lg text-brand-orange-500">
                    {indicator.value}
                  </div>
                  <div className="text-xs text-brand-gray-300">
                    {indicator.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-gray-800 hover:bg-brand-orange-500 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-brand-gray-300 hover:text-brand-orange-500 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Services</h4>
            <nav className="space-y-3">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="block text-brand-gray-300 hover:text-brand-orange-500 transition-colors duration-300"
                >
                  {service.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Get In Touch</h4>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-brand-gray-300">
                    123 Design Street,<br />
                    Bandra West, Mumbai - 400050<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-orange-500 flex-shrink-0" />
                <a 
                  href="tel:+919876543210"
                  className="text-brand-gray-300 hover:text-brand-orange-500 transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-orange-500 flex-shrink-0" />
                <a 
                  href="mailto:info@biospace.in"
                  className="text-brand-gray-300 hover:text-brand-orange-500 transition-colors"
                >
                  info@biospace.in
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-brand-orange-500 flex-shrink-0" />
                <a 
                  href="https://wa.me/919876543210?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20BIOSPACE%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gray-300 hover:text-brand-orange-500 transition-colors"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-brand-gray-800 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Clock className="h-5 w-5 text-brand-orange-500" />
                <h5 className="font-semibold">Business Hours</h5>
              </div>
              <div className="space-y-1 text-sm text-brand-gray-300">
                <div className="flex justify-between">
                  <span>Mon - Sat</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="text-xs text-brand-orange-500 mt-2">
                  Emergency consultations available 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-brand-gray-800">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="font-heading font-semibold text-lg mb-2">
                Stay Updated with Latest Designs
              </h4>
              <p className="text-brand-gray-300">
                Get interior design tips, project updates, and exclusive offers.
              </p>
            </div>
            
            <div className="flex w-full md:w-auto max-w-md space-x-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-brand-gray-800 border-brand-gray-700 text-white placeholder:text-brand-gray-400"
              />
              <Button className="bg-brand-orange-500 hover:bg-brand-orange-600 shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-gray-800 py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-brand-gray-300">
                © {currentYear} BIOSPACE Interior Design. All rights reserved.
              </p>
              <p className="text-sm text-brand-gray-400">
                Transforming spaces, creating experiences since 2020.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link 
                href="/privacy-policy" 
                className="text-sm text-brand-gray-300 hover:text-brand-orange-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-sm text-brand-gray-300 hover:text-brand-orange-500 transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="/sitemap" 
                className="text-sm text-brand-gray-300 hover:text-brand-orange-500 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/919876543210?text=Hi,%20I%20need%20help%20with%20interior%20design"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </footer>
  )
}

export default Footer