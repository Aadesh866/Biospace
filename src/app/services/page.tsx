'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check, Clock, Shield, Award } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ServicesPage() {
  const services = [
    {
      id: 'modular-kitchens',
      title: 'Modular Kitchens',
      subtitle: 'Premium kitchen solutions with 30-year warranty',
      description: 'Transform your cooking space with our German hardware modular kitchens. Custom designs, premium materials, and unmatched durability.',
      image: '/images/WhatsApp Image 2026-06-11 at 5.30.18 PM.jpeg',
      priceRange: '₹2.5L - ₹8L',
      timeline: '3-5 Days',
      warranty: '30 Years',
      features: [
        'German Hettich & Blum Hardware',
        'Soft Close Hinges & Drawers',
        'Water-Resistant BWR Plywood',
        'Customizable Storage Solutions',
        'Premium Granite/Quartz Countertops',
        'Integrated Appliance Solutions'
      ],
      highlights: [
        { icon: <Shield size={20} />, text: '30 Year Comprehensive Warranty' },
        { icon: <Award size={20} />, text: 'German Hardware Quality' },
        { icon: <Clock size={20} />, text: '3-5 Days Installation' }
      ]
    },
    {
      id: 'custom-wardrobes',
      title: 'Custom Wardrobes',
      subtitle: 'Space-optimized storage solutions',
      description: 'Maximize your bedroom storage with our custom-designed wardrobes. Smart compartments, premium finishes, and organized living.',
      image: '/images/WhatsApp Image 2026-06-11 at 5.30.25 PM (1).jpeg',
      priceRange: '₹1.8L - ₹5L',
      timeline: '2-4 Days',
      warranty: '15 Years',
      features: [
        'Smart Storage Compartments',
        'Sliding & Hinged Door Options',
        'Mirror & Glass Inserts',
        'LED Strip Lighting',
        'Premium Laminates & Veneers',
        'Accessories & Organizers'
      ],
      highlights: [
        { icon: <Shield size={20} />, text: '15 Year Structural Warranty' },
        { icon: <Award size={20} />, text: 'Space Optimization Expert' },
        { icon: <Clock size={20} />, text: '2-4 Days Completion' }
      ]
    },
    {
      id: 'living-room',
      title: 'Living Room Design',
      subtitle: 'Complete entertainment & seating solutions',
      description: 'Create the perfect gathering space with our custom sofas, TV units, and storage solutions. Comfort meets style.',
      image: '/images/WhatsApp Image 2026-06-11 at 5.30.24 PM (1).jpeg',
      priceRange: '₹2L - ₹6L',
      timeline: '4-6 Days',
      warranty: '10 Years',
      features: [
        'Custom Sofa Manufacturing',
        'Modular TV Units',
        'Coffee Tables & Side Tables',
        'Premium Fabric Selection',
        'Integrated Cable Management',
        'Ambient Lighting Solutions'
      ],
      highlights: [
        { icon: <Shield size={20} />, text: '10 Year Furniture Warranty' },
        { icon: <Award size={20} />, text: 'Premium Fabric Collection' },
        { icon: <Clock size={20} />, text: '4-6 Days Installation' }
      ]
    },
    {
      id: 'false-ceilings',
      title: 'False Ceilings',
      subtitle: 'Elegant ceiling designs with integrated lighting',
      description: 'Add sophistication to your interiors with our designer false ceilings. Acoustic options, LED integration, and modern aesthetics.',
      image: '/images/WhatsApp Image 2026-06-11 at 5.30.26 PM (1).jpeg',
      priceRange: '₹150 - ₹300 per sq ft',
      timeline: '2-3 Days',
      warranty: '10 Years',
      features: [
        'Gypsum & POP Ceiling Options',
        'LED Strip & Cove Lighting',
        'Acoustic Ceiling Solutions',
        'Decorative Design Patterns',
        'Concealed AC & Electrical Work',
        'Easy Maintenance Access'
      ],
      highlights: [
        { icon: <Shield size={20} />, text: '10 Year Structural Warranty' },
        { icon: <Award size={20} />, text: 'Acoustic Engineering' },
        { icon: <Clock size={20} />, text: '2-3 Days Installation' }
      ]
    },
    {
      id: 'complete-renovation',
      title: 'Complete Home Renovation',
      subtitle: 'End-to-end home transformation',
      description: 'Transform your entire home with our comprehensive renovation services. From civil work to final touches - we handle everything.',
      image: '/images/WhatsApp Image 2026-06-11 at 5.30.27 PM.jpeg',
      priceRange: '₹3L - ₹16L per BHK',
      timeline: '7-14 Days',
      warranty: '15 Years',
      features: [
        'Civil & Structural Work',
        'Complete Electrical Rewiring',
        'Plumbing & Bathroom Renovation',
        'Flooring & Wall Treatments',
        'All Interior Furniture',
        'Painting & Finishing Work'
      ],
      highlights: [
        { icon: <Shield size={20} />, text: '15 Year Comprehensive Warranty' },
        { icon: <Award size={20} />, text: 'Licensed Civil Contractors' },
        { icon: <Clock size={20} />, text: '7-14 Days Complete Makeover' }
      ]
    },
    {
      id: 'commercial-interiors',
      title: 'Commercial Interiors',
      subtitle: 'Professional office & retail spaces',
      description: 'Design productive workspaces and attractive retail environments. Brand integration, ergonomic solutions, and modern aesthetics.',
      image: '/images/WhatsApp Image 2026-06-11 at 5.30.28 PM.jpeg',
      priceRange: 'Custom Quote',
      timeline: '5-15 Days',
      warranty: '10 Years',
      features: [
        'Office Space Planning',
        'Reception & Meeting Rooms',
        'Workstation Design',
        'Brand Integration Elements',
        'Retail Store Layouts',
        'Showroom Design Solutions'
      ],
      highlights: [
        { icon: <Shield size={20} />, text: '10 Year Commercial Warranty' },
        { icon: <Award size={20} />, text: 'Ergonomic Design Standards' },
        { icon: <Clock size={20} />, text: '5-15 Days Based on Size' }
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-gray-900 to-brand-gray-800 text-white section-padding overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container text-center"
        >
          <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 drop-shadow-xl">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 drop-shadow-md">
            From modular kitchens to complete home renovations - we deliver premium interior solutions 
            with lightning-fast execution and industry-leading warranties.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="section-padding overflow-hidden">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-premium">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <h2 className="font-heading font-bold text-4xl mb-3 text-brand-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-brand-orange font-medium text-lg mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-brand-gray-600 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    {service.highlights.map((highlight, i) => (
                      <motion.div 
                        whileHover={{ y: -5 }}
                        key={i} 
                        className="flex items-center bg-white border border-brand-gray-200 text-brand-gray-900 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="text-brand-orange mr-2">
                          {highlight.icon}
                        </div>
                        <span className="font-medium text-sm">{highlight.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-brand-gray-50 rounded-2xl border border-brand-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div>
                      <div className="text-sm font-semibold text-brand-gray-500 uppercase tracking-wider mb-1">Price Range</div>
                      <div className="text-brand-gray-900 font-bold text-lg">{service.priceRange}</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-brand-gray-500 uppercase tracking-wider mb-1">Timeline</div>
                      <div className="text-brand-gray-900 font-bold text-lg">{service.timeline}</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-brand-gray-500 uppercase tracking-wider mb-1">Warranty</div>
                      <div className="text-brand-gray-900 font-bold text-lg">{service.warranty}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className="bg-brand-orange/10 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="text-brand-orange flex-shrink-0" size={14} />
                        </div>
                        <span className="text-brand-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button size="lg" asChild className="shadow-glow hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1">
                    <Link href={`/services/${service.id}`}>Learn More & Get Quote</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-brand-gray-600">
              Everything you need to know about our services and process.
            </p>
          </div>
          <div className="space-y-6">
            <div className="border border-brand-gray-200 rounded-lg p-6 shadow-sm hover:shadow-2xl transition-all duration-300">
              <h3 className="font-semibold text-lg text-brand-gray-900 mb-2">How fast can you complete a 2BHK interior?</h3>
              <p className="text-brand-gray-600">On average, we complete 2BHK interiors in 5-7 days. Our lightning-fast execution is powered by our standardized processes and dedicated teams.</p>
            </div>
            <div className="border border-brand-gray-200 rounded-lg p-6 shadow-sm hover:shadow-2xl transition-all duration-300">
              <h3 className="font-semibold text-lg text-brand-gray-900 mb-2">Are there any hidden charges?</h3>
              <p className="text-brand-gray-600">No. We provide 100% transparent pricing before starting the project. What you see on the final quote is exactly what you pay.</p>
            </div>
            <div className="border border-brand-gray-200 rounded-lg p-6 shadow-sm hover:shadow-2xl transition-all duration-300">
              <h3 className="font-semibold text-lg text-brand-gray-900 mb-2">What does the 30-year warranty cover?</h3>
              <p className="text-brand-gray-600">Our 30-year warranty covers all structural components and hardware of our modular kitchens against manufacturing defects and termite issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-gray-50 section-padding overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container text-center"
        >
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-sm hover:shadow-2xl transition-all duration-300 border border-brand-gray-200 max-w-5xl mx-auto hover:-translate-y-2">
            <h2 className="font-heading font-bold text-4xl mb-6 text-brand-gray-900">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-brand-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get a detailed quote for your dream interior. Our experts will visit your site within 24-48 hours and provide a complete 3D plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="shadow-glow hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}