'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MapPin, Clock, IndianRupee, Filter } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'kitchen', label: 'Modular Kitchens' },
    { id: 'bedroom', label: 'Bedrooms' },
    { id: 'living', label: 'Living Rooms' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'renovation', label: 'Complete Renovation' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Modern 3 BHK Renovation',
      location: 'Bandra West, Mumbai',
      type: 'renovation',
      duration: '8 Days',
      budget: '₹12.5 Lakhs',
      area: '1200 sq ft',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg',
      description: 'Complete transformation of a 3 BHK apartment with modular kitchen, custom wardrobes, and living room redesign.',
      features: ['Modular Kitchen with Island', 'Master Bedroom Wardrobe', 'False Ceiling with LED Lights', 'Premium Wooden Flooring']
    },
    {
      id: 2,
      title: 'Luxury Modular Kitchen',
      location: 'Koramangala, Bangalore',
      type: 'kitchen',
      duration: '4 Days',
      budget: '₹6.8 Lakhs',
      area: '180 sq ft',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Ra20705_kitchen_stainless_steel.JPG',
      description: 'High-end modular kitchen with German hardware, granite countertops, and premium storage solutions.',
      features: ['German Hettich Hardware', 'Granite Countertops', 'Soft Close Mechanisms', 'Integrated Appliances']
    },
    {
      id: 3,
      title: 'Contemporary Office Space',
      location: 'Cyber City, Gurgaon',
      type: 'commercial',
      duration: '12 Days',
      budget: '₹18 Lakhs',
      area: '2500 sq ft',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg',
      description: 'Modern office interior with ergonomic workstations, meeting rooms, and brand integration elements.',
      features: ['Ergonomic Workstations', 'Glass Partition Walls', 'Conference Room Setup', 'Brand Color Integration']
    },
    {
      id: 4,
      title: 'Master Bedroom Makeover',
      location: 'Anna Nagar, Chennai',
      type: 'bedroom',
      duration: '5 Days',
      budget: '₹4.2 Lakhs',
      area: '250 sq ft',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/PAX_wardrobe_at_IKEA_Xihongmen_%2820150423113022%29.jpg',
      description: 'Elegant master bedroom with walk-in wardrobe, study unit, and ambient lighting design.',
      features: ['Walk-in Wardrobe', 'Study Unit with Storage', 'Ambient LED Lighting', 'Premium Laminates']
    },
    {
      id: 5,
      title: 'Spacious Living Room Design',
      location: 'Hinjewadi, Pune',
      type: 'living',
      duration: '6 Days',
      budget: '₹8.5 Lakhs',
      area: '400 sq ft',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg',
      description: 'Open-plan living room with custom entertainment unit, seating area, and designer false ceiling.',
      features: ['Custom Entertainment Unit', 'Sectional Sofa Set', 'Designer False Ceiling', 'Integrated Sound System']
    },
    {
      id: 6,
      title: 'Compact 2 BHK Interior',
      location: 'Dwarka, New Delhi',
      type: 'renovation',
      duration: '7 Days',
      budget: '₹5.8 Lakhs',
      area: '850 sq ft',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Living_room_%28Unsplash%29.jpg',
      description: 'Space-optimized 2 BHK design with smart storage solutions and multi-functional furniture.',
      features: ['Space-Saving Kitchen', 'Foldable Dining Table', 'Multi-Storage Wardrobes', 'Compact Bathroom Design']
    },
    {
      id: 7,
      title: 'Premium Kitchen Island Design',
      location: 'Whitefield, Bangalore',
      type: 'kitchen',
      duration: '5 Days',
      budget: '₹9.2 Lakhs',
      area: '220 sq ft',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Ra20705_kitchen_stainless_steel.JPG',
      description: 'Luxury kitchen with central island, premium appliances, and sophisticated storage systems.',
      features: ['Central Kitchen Island', 'Premium Built-in Appliances', 'Wine Storage Unit', 'Quartz Countertops']
    },
    {
      id: 8,
      title: 'Retail Showroom Interior',
      location: 'Phoenix Mall, Mumbai',
      type: 'commercial',
      duration: '10 Days',
      budget: '₹15 Lakhs',
      area: '1800 sq ft',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg',
      description: 'Attractive retail space with product display units, customer seating area, and brand showcasing.',
      features: ['Custom Display Units', 'Product Showcase Lighting', 'Customer Lounge Area', 'Brand Wall Graphics']
    }
  ]

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === selectedFilter)

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
            Our <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 drop-shadow-md">
            Explore our portfolio of 1000+ successful projects across Mumbai, Delhi, Bangalore, Pune, and Chennai. 
            Each completed with our signature speed and quality.
          </p>
        </motion.div>
      </section>

      {/* Featured Project */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-heading font-bold text-3xl text-brand-gray-900 mb-2">Featured Project</h2>
            <p className="text-brand-gray-600">Explore our finest work to get inspired.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-premium h-[500px] mb-12 group"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Living_room_%28Unsplash%29.jpg"
              alt="Featured Project"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
              <span className="bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-bold self-start mb-4 shadow-glow">Project of the Month</span>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Luxury 4 BHK Penthouse</h3>
              <p className="text-gray-200 text-lg max-w-2xl mb-6 drop-shadow-md">A completely custom, ultra-premium interior execution including a state-of-the-art modular kitchen and imported Italian marble finishes.</p>
              <Button size="lg" asChild className="self-start shadow-glow hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1">
                <Link href="/projects/featured">Read Case Study</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-brand-gray-50 py-8 sticky top-16 z-40 shadow-sm border-b border-brand-gray-200">
        <div className="container">
          <div className="flex items-center justify-center">
            <Filter className="text-brand-orange mr-3" size={20} />
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={selectedFilter === filter.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedFilter(filter.id)}
                  className="text-sm"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-gray-50 overflow-hidden">
        <div className="container">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.id} 
                  className="bg-white rounded-2xl shadow-sm border border-brand-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                        {project.budget}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/95 backdrop-blur-sm text-brand-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
                        {project.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-xl mb-2 text-brand-gray-900 group-hover:text-brand-orange-500 transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center text-brand-gray-500 mb-4">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm font-medium">{project.location}</span>
                    </div>
                    
                    <p className="text-brand-gray-600 text-sm mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-5 p-4 bg-brand-gray-50 rounded-xl">
                      <div>
                        <div className="text-xs text-brand-gray-500 uppercase tracking-wider mb-1">Area</div>
                        <div className="font-semibold text-brand-gray-900">{project.area}</div>
                      </div>
                      <div>
                        <div className="text-xs text-brand-gray-500 uppercase tracking-wider mb-1">Timeline</div>
                        <div className="font-semibold text-brand-gray-900">{project.duration}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {project.features.slice(0, 2).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-brand-gray-600">
                          <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2 shadow-glow"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                      {project.features.length > 2 && (
                        <div className="text-xs font-semibold text-brand-orange mt-2 bg-brand-orange/10 inline-block px-2 py-1 rounded">
                          +{project.features.length - 2} more features
                        </div>
                      )}
                    </div>
                    
                    <Button variant="outline" className="w-full hover:bg-brand-orange-500 hover:text-white hover:border-brand-orange-500 transition-colors" size="sm" asChild>
                      <Link href={`/projects/${project.id}`}>View Details</Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 section-padding overflow-hidden">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white"
          >
            {[
              { num: "1000+", label: "Projects Completed" },
              { num: "15+", label: "Cities Served" },
              { num: "7", label: "Days Avg Timeline" },
              { num: "98%", label: "Client Satisfaction" }
            ].map((stat, i) => (
              <motion.div key={i} whileHover={{ scale: 1.1 }} className="p-4">
                <div className="text-5xl font-heading font-bold mb-3 drop-shadow-md">{stat.num}</div>
                <div className="text-lg font-medium opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white section-padding overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container text-center"
        >
          <div className="bg-brand-gray-50 rounded-3xl p-12 md:p-16 shadow-inner border border-brand-gray-100 max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-4xl mb-6 text-brand-gray-900">
              Ready to See Your Project Here?
            </h2>
            <p className="text-xl text-brand-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join 1000+ satisfied customers who transformed their spaces with BIOSPACE. 
              Get your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="shadow-glow hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <Link href="/contact">Schedule Site Visit</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}