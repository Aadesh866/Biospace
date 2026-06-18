'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  ChefHat, 
  Bed, 
  Sofa, 
  Lightbulb, 
  Home, 
  Building,
  ArrowRight,
  Clock,
  Shield,
  Star
} from 'lucide-react'
import { motion } from 'framer-motion'

const ServicesSection = () => {
  const services = [
    {
      icon: <ChefHat className="h-8 w-8" />,
      title: "Modular Kitchens",
      description: "Premium kitchens with German hardware, soft-close mechanisms, and 30-year warranty. Custom designs with islands, storage solutions, and integrated appliances.",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ra20705_kitchen_stainless_steel.JPG",
      priceRange: "₹2.5L - ₹8L",
      timeline: "3-5 Days",
      warranty: "30 Years",
      features: [
        "German Hardware",
        "Quartz Countertops", 
        "Soft Close Mechanisms",
        "Custom Storage"
      ],
      popular: true
    },
    {
      icon: <Bed className="h-8 w-8" />,
      title: "Custom Wardrobes",
      description: "Space-optimized wardrobes with smart compartments, sliding doors, LED lighting, and premium laminates. Perfect organization for every bedroom.",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/26/PAX_wardrobe_at_IKEA_Xihongmen_%2820150423113022%29.jpg",
      priceRange: "₹1.8L - ₹5L",
      timeline: "2-4 Days",
      warranty: "15 Years",
      features: [
        "Smart Storage",
        "Sliding Doors",
        "LED Lighting", 
        "Mirror Inserts"
      ],
      popular: false
    },
    {
      icon: <Sofa className="h-8 w-8" />,
      title: "Living Room Design",
      description: "Complete entertainment and seating solutions with custom sofas, TV units, coffee tables, and ambient lighting for the perfect gathering space.",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg",
      priceRange: "₹2L - ₹6L",
      timeline: "4-6 Days",
      warranty: "10 Years",
      features: [
        "Custom Sofas",
        "TV Units",
        "Coffee Tables",
        "Ambient Lighting"
      ],
      popular: false
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "False Ceilings",
      description: "Designer ceilings with integrated LED lighting, acoustic solutions, and modern aesthetics. Transform your room's ambiance completely.",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg",
      priceRange: "₹150 - ₹300/sqft",
      timeline: "2-3 Days",
      warranty: "10 Years",
      features: [
        "LED Integration",
        "Acoustic Design",
        "Modern Patterns",
        "Easy Maintenance"
      ],
      popular: false
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Complete Renovation",
      description: "End-to-end home transformation including civil work, electrical, plumbing, flooring, painting, and all interior furniture in one package.",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Living_room_%28Unsplash%29.jpg",
      priceRange: "₹3L - ₹16L/BHK",
      timeline: "7-14 Days",
      warranty: "15 Years",
      features: [
        "Civil Work",
        "Electrical & Plumbing",
        "Complete Interiors",
        "Turnkey Solution"
      ],
      popular: true
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Commercial Interiors",
      description: "Professional office spaces, retail stores, and showrooms with ergonomic design, brand integration, and productivity-focused layouts.",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg",
      priceRange: "Custom Quote",
      timeline: "5-15 Days",
      warranty: "10 Years",
      features: [
        "Office Planning",
        "Brand Integration",
        "Ergonomic Design",
        "Professional Setup"
      ],
      popular: false
    }
  ]

  const highlights = [
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Lightning Fast",
      description: "Most projects completed within 1 week"
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: "Long Warranty",
      description: "Up to 30 years on kitchen interiors"
    },
    {
      icon: <Star className="h-6 w-6 text-brand-orange-500" />,
      title: "Premium Quality",
      description: "German hardware and premium materials"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-brand-gray-900">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-brand-gray-600 leading-relaxed mb-8">
            From modular kitchens to complete home renovations - we deliver premium interior solutions 
            with lightning-fast execution and industry-leading warranties.
          </p>
          
          {/* Key Highlights */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {highlights.map((highlight, index) => (
              <motion.div whileHover={{ scale: 1.05 }} key={index} className="flex items-center space-x-3 bg-white/40 backdrop-blur-md border border-white/60 shadow-premium p-4 rounded-xl transition-all duration-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                  {highlight.icon}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-brand-gray-900 text-sm">
                    {highlight.title}
                  </div>
                  <div className="text-brand-gray-600 text-xs">
                    {highlight.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group border border-brand-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden h-full hover:-translate-y-2 bg-white">
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}

                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-brand-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {service.priceRange}
                  </span>
                </div>

                {/* Service Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm text-white">
                    {service.icon}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-heading font-bold text-xl mb-3 text-brand-gray-900 group-hover:text-brand-orange-500 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-brand-gray-600 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Service Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                  <div>
                    <span className="text-brand-gray-500">Timeline:</span>
                    <div className="font-semibold text-brand-gray-900">{service.timeline}</div>
                  </div>
                  <div>
                    <span className="text-brand-gray-500">Warranty:</span>
                    <div className="font-semibold text-brand-gray-900">{service.warranty}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-1">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-brand-gray-600">
                        <div className="w-1 h-1 bg-brand-orange-500 rounded-full mr-2"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-brand-orange-500 group-hover:text-white group-hover:border-brand-orange-500 transition-all"
                  asChild
                >
                  <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>

        {/* Service Process */}
        <div className="bg-brand-gray-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-3xl mb-4 text-brand-gray-900">
              How It Works
            </h3>
            <p className="text-brand-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures your project is completed quickly without compromising on quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Book Consultation",
                description: "Call or fill our form. We visit within 24-48 hours for free consultation and measurements."
              },
              {
                step: "02", 
                title: "Custom Design",
                description: "Our experts create a personalized design plan tailored to your space, style, and budget."
              },
              {
                step: "03",
                title: "Quick Execution",
                description: "We start implementation on Day 2. Most projects completed within 1 week with daily updates."
              },
              {
                step: "04",
                title: "Final Handover",
                description: "Quality check, cleanup, and handover. Your warranty coverage starts immediately."
              }
            ].map((process, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-orange-500 text-white font-bold text-xl mb-4 shadow-glow group-hover:scale-110 transition-transform">
                  {process.step}
                </div>
                <h4 className="font-semibold text-lg text-brand-gray-900 mb-3">
                  {process.title}
                </h4>
                <p className="text-brand-gray-600 text-sm leading-relaxed">
                  {process.description}
                </p>
                
                {/* Connection Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-brand-orange-200 -z-10">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-brand-orange-200 rounded-full shadow-glow"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <h3 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Get a detailed quote for your dream interior. Our experts will visit your site within 24-48 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-white text-brand-orange-500 hover:bg-brand-gray-50 font-semibold"
                >
                  <Link href="/contact">
                    Get Free Consultation
                  </Link>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                  className="border-white text-white hover:bg-white hover:text-brand-orange-500 font-semibold"
                >
                  <Link href="/services">
                    View All Services
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection