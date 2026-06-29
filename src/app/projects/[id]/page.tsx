'use client'

import React from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MapPin, Clock, CheckCircle, ArrowLeft } from 'lucide-react'

const projectDataMap: Record<string, any> = {
  '1': {
    title: 'Modern 3 BHK Renovation',
    location: 'Bandra West, Mumbai',
    duration: '8 Days',
    budget: '₹12.5 Lakhs',
    area: '1200 sq ft',
    image: '/images/WhatsApp Image 2026-06-11 at 5.30.21 PM.jpeg',
    description: 'A complete transformation of an outdated 3 BHK apartment into a modern, minimalist haven. We completely overhauled the kitchen, added custom wardrobes to all three bedrooms, and created a stunning false ceiling design with ambient LED lighting.',
    features: ['Modular Kitchen with Island', 'Master Bedroom Wardrobe', 'False Ceiling with LED Lights', 'Premium Wooden Flooring', 'Complete Painting'],
    gallery: [
      '/images/WhatsApp Image 2026-06-11 at 5.30.23 PM (1).jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.24 PM.jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.26 PM (2).jpeg'
    ]
  },
  'featured': {
    title: 'Luxury 4 BHK Penthouse',
    location: 'Worli Sea Face, Mumbai',
    duration: '14 Days',
    budget: '₹28 Lakhs',
    area: '3200 sq ft',
    image: '/images/WhatsApp Image 2026-06-11 at 5.34.17 PM (1).jpeg',
    description: 'An ultra-premium interior execution for a 4 BHK penthouse. The project featured imported Italian marble, a state-of-the-art smart modular kitchen, walk-in closets for the master suite, and custom-designed furniture pieces.',
    features: ['Imported Italian Marble', 'Smart Kitchen Appliances', 'Walk-in Closets', 'Home Automation Integration', 'Custom Furniture'],
    gallery: [
      '/images/WhatsApp Image 2026-06-11 at 5.30.27 PM (2).jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.25 PM (1).jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.28 PM (1).jpeg'
    ]
  }
}

export default function ProjectDetailPage() {
  const params = useParams()
  const id = params.id as string

  const data = projectDataMap[id] || {
    title: 'Custom Interior Project',
    location: 'Various Cities',
    duration: '7 Days Avg',
    budget: 'Contact for details',
    area: 'Custom',
    image: '/images/WhatsApp Image 2026-06-11 at 5.30.26 PM (1).jpeg',
    description: 'We executed this project with our signature speed and premium quality. Every detail was meticulously planned to ensure maximum functionality without compromising on aesthetics.',
    features: ['Custom Planning', 'Premium Materials', 'Speedy Execution', '10 Year Warranty'],
    gallery: [
      '/images/WhatsApp Image 2026-06-11 at 5.30.27 PM.jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.28 PM (2).jpeg'
    ]
  }

  return (
    <div className="min-h-screen bg-brand-gray-50 pb-20">
      {/* Hero Banner */}
      <div className="relative h-[50vh] w-full">
        <Image src={data.image} alt={data.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-gray-900 via-brand-gray-900/60 to-transparent" />
        
        <div className="absolute top-8 left-8 z-10">
          <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white hover:text-brand-gray-900 backdrop-blur-md" asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2" size={16} /> Back to Projects
            </Link>
          </Button>
        </div>

        <div className="absolute inset-0 flex flex-col justify-end pb-12">
          <div className="container">
            <div className="flex items-center text-brand-orange-500 mb-4">
              <MapPin size={20} className="mr-2" />
              <span className="font-medium text-lg">{data.location}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">{data.title}</h1>
            
            <div className="flex flex-wrap gap-6 text-white">
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20">
                <div className="text-brand-gray-300 text-sm mb-1">Timeline</div>
                <div className="font-bold text-xl">{data.duration}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20">
                <div className="text-brand-gray-300 text-sm mb-1">Budget</div>
                <div className="font-bold text-xl">{data.budget}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20">
                <div className="text-brand-gray-300 text-sm mb-1">Area</div>
                <div className="font-bold text-xl">{data.area}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-brand-gray-200">
              <h2 className="text-3xl font-bold text-brand-gray-900 mb-6 font-heading">Project Brief</h2>
              <p className="text-lg text-brand-gray-600 leading-relaxed">{data.description}</p>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm border border-brand-gray-200">
              <h2 className="text-3xl font-bold text-brand-gray-900 mb-6 font-heading">Scope of Work</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="text-brand-orange-500 mr-3 flex-shrink-0" size={20} />
                    <span className="text-brand-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-brand-gray-900 mb-6 font-heading">Project Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.gallery.map((img: string, idx: number) => (
                  <div key={idx} className="relative h-64 rounded-xl overflow-hidden shadow-md">
                    <Image src={img} alt={`Gallery Image ${idx + 1}`} fill className="object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-brand-gray-900 text-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 font-heading">Like what you see?</h3>
              <p className="text-brand-gray-300 mb-8">We can deliver a similar premium finish for your space in record time.</p>
              
              <Button size="lg" className="w-full bg-brand-orange-500 hover:bg-brand-orange-600 text-white py-6 text-lg mb-4" asChild>
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-brand-gray-900 py-6 text-lg" asChild>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
