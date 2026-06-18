'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import {
  Phone,
  MessageCircle,
  Clock,
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  Send,
  MapPin,
  Home,
  DollarSign
} from 'lucide-react'

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bhkType: '',
    city: '',
    budget: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Quick quote form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        bhkType: '',
        city: '',
        budget: ''
      })
    }, 3000)
  }

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Now",
      subtitle: "Instant Response",
      description: "Speak with our experts immediately",
      action: "Call +91 98765 43210",
      href: "tel:+919876543210",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp Chat", 
      subtitle: "Quick & Easy",
      description: "Share photos and get instant quotes",
      action: "Start WhatsApp Chat",
      href: "https://wa.me/919876543210?text=Hi,%20I%20need%20a%20quote%20for%20interior%20design",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: <Send className="h-6 w-6" />,
      title: "Schedule Visit",
      subtitle: "24-48 Hours",
      description: "Free site visit and consultation",
      action: "Schedule Now",
      href: "/contact",
      color: "bg-brand-orange-500 hover:bg-brand-orange-600"
    }
  ]

  const pricingTiers = [
    {
      type: "2 BHK",
      priceRange: "₹3 - ₹7 Lakhs",
      popular: false,
      features: [
        "Modular Kitchen",
        "Master Bedroom Wardrobe",
        "Living Room TV Unit", 
        "False Ceiling",
        "Premium Paint"
      ]
    },
    {
      type: "3 BHK", 
      priceRange: "₹4 - ₹12 Lakhs",
      popular: true,
      features: [
        "Complete Kitchen with Island",
        "All Bedroom Wardrobes",
        "Living & Dining Setup",
        "Designer False Ceiling",
        "Premium Finishes"
      ]
    },
    {
      type: "4+ BHK",
      priceRange: "₹8 - ₹16 Lakhs", 
      popular: false,
      features: [
        "Luxury Kitchen Design",
        "Walk-in Wardrobes",
        "Complete Living Area",
        "Designer Lighting",
        "Premium Materials"
      ]
    }
  ]

  const guarantees = [
    {
      icon: <Clock className="h-5 w-5 text-blue-500" />,
      text: "24-48 Hour Site Visit Guaranteed"
    },
    {
      icon: <Shield className="h-5 w-5 text-green-500" />,
      text: "30 Year Kitchen Warranty"
    },
    {
      icon: <Star className="h-5 w-5 text-brand-orange-500" />,
      text: "1000+ Successful Projects"
    }
  ]

  return (
    <section className="section-padding bg-brand-gray-50">
      <div className="container">
        {/* Main CTA Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-brand-gray-900">
            Ready to Transform Your <span className="gradient-text">Space?</span>
          </h2>
          <p className="text-xl text-brand-gray-600 leading-relaxed mb-8">
            Get your dream interior in under a week with India's fastest interior design service. 
            Join 1000+ satisfied customers who chose BIOSPACE for speed, quality, and peace of mind.
          </p>
          
          {/* Guarantees */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center space-x-2">
                {guarantee.icon}
                <span className="text-sm font-medium text-brand-gray-700">
                  {guarantee.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Quick Quote Form */}
          <Card className="border-2 border-brand-orange-500 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold text-center">
                Get Free Quote in 30 Seconds
              </CardTitle>
              <p className="text-center opacity-90">
                Fill out this quick form and we'll contact you within 2 hours
              </p>
            </CardHeader>
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-brand-gray-600">
                    We've received your request. Our team will contact you within 2 hours 
                    to schedule your free site visit.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-brand-gray-700 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-brand-gray-700 font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-brand-gray-700 font-medium">
                        Property Type
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('bhkType', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select BHK" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1bhk">1 BHK</SelectItem>
                          <SelectItem value="2bhk">2 BHK</SelectItem>
                          <SelectItem value="3bhk">3 BHK</SelectItem>
                          <SelectItem value="4bhk">4+ BHK</SelectItem>
                          <SelectItem value="villa">Villa</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-brand-gray-700 font-medium">
                        Budget Range
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3-5l">₹3 - ₹5 Lakhs</SelectItem>
                          <SelectItem value="5-8l">₹5 - ₹8 Lakhs</SelectItem>
                          <SelectItem value="8-12l">₹8 - ₹12 Lakhs</SelectItem>
                          <SelectItem value="12l+">Above ₹12 Lakhs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="city" className="text-brand-gray-700 font-medium">
                      City *
                    </Label>
                    <Input
                      id="city"
                      type="text"
                      placeholder="Mumbai, Delhi, Bangalore, etc."
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-orange-500 hover:bg-brand-orange-600 text-lg py-6"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Get Free Quote
                  </Button>

                  <div className="text-center text-sm text-brand-gray-500">
                    ✓ No spam calls ✓ Free consultation ✓ 24-48 hour response
                  </div>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-2xl text-brand-gray-900 text-center lg:text-left">
              Or Contact Us Directly
            </h3>
            
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full text-white ${method.color}`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-brand-gray-900">
                          {method.title}
                        </h4>
                        <p className="text-brand-orange-600 font-medium text-sm">
                          {method.subtitle}
                        </p>
                        <p className="text-brand-gray-600 text-sm">
                          {method.description}
                        </p>
                      </div>
                      <Button asChild className={method.color}>
                        {method.href.startsWith('http') || method.href.startsWith('tel:') ? (
                          <a href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                            {method.action}
                          </a>
                        ) : (
                          <Link href={method.href}>
                            {method.action}
                          </Link>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-3xl mb-4 text-brand-gray-900">
              Transparent Pricing
            </h3>
            <p className="text-brand-gray-600 max-w-2xl mx-auto">
              No hidden costs, no surprise charges. What you see is what you pay. 
              All prices include design, materials, and installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative ${tier.popular ? 'border-2 border-brand-orange-500 shadow-xl' : 'border shadow-lg'}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <Home className="h-12 w-12 mx-auto mb-4 text-brand-orange-500" />
                    <h4 className="font-heading font-bold text-2xl mb-2 text-brand-gray-900">
                      {tier.type}
                    </h4>
                    <div className="text-3xl font-bold text-brand-orange-500 mb-4">
                      {tier.priceRange}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-brand-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    asChild 
                    className={`w-full ${tier.popular ? 'bg-brand-orange-500 hover:bg-brand-orange-600' : ''}`}
                    variant={tier.popular ? 'default' : 'outline'}
                  >
                    <Link href="/contact">Get Quote for {tier.type}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-brand-gray-900 to-brand-gray-800 text-white border-0">
            <CardContent className="p-12">
              <h3 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                Don't Wait - Transform Your Home Today!
              </h3>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-brand-gray-300">
                Limited time offer: Book your consultation this month and get priority scheduling. 
                Our calendar fills up fast!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-brand-orange-500 hover:bg-brand-orange-600 font-semibold text-lg px-8 py-4"
                >
                  <Link href="/contact" className="flex items-center">
                    Schedule Free Visit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                  className="border-white text-white hover:bg-white hover:text-brand-gray-900 font-semibold text-lg px-8 py-4"
                >
                  <a 
                    href="https://wa.me/919876543210?text=I%20want%20to%20book%20a%20priority%20consultation%20this%20month"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    WhatsApp Now
                    <MessageCircle className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              
              <div className="text-sm text-brand-gray-400">
                ⚡ Fast Track Booking ⚡ Priority Scheduling ⚡ Same Week Start
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default CTASection