'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CheckCircle, Shield, Award, Clock } from 'lucide-react'

// Dummy data dictionary
const serviceDataMap: Record<string, any> = {
  'modular-kitchens': {
    title: 'Modular Kitchens',
    subtitle: 'German hardware, 30-year warranty, lightning fast execution.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Ra20705_kitchen_stainless_steel.JPG',
    description: 'Transform your cooking space with our premium modular kitchens. We use high-quality water-resistant plywood, German Hettich & Blum hardware, and exquisite finishes to give you a kitchen that lasts decades.',
    features: ['German Hardware', 'Quartz Countertops', 'Soft Close Mechanisms', 'Custom Storage'],
    questions: [
      { id: 'layout', label: 'Kitchen Layout', type: 'select', options: ['L-Shape', 'U-Shape', 'Parallel', 'Straight', 'Island'] },
      { id: 'style', label: 'Preferred Style', type: 'select', options: ['Modern Minimalist', 'Classic Traditional', 'Industrial', 'Contemporary'] }
    ]
  },
  'custom-wardrobes': {
    title: 'Custom Wardrobes',
    subtitle: 'Maximize storage without compromising on style.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/PAX_wardrobe_at_IKEA_Xihongmen_%2820150423113022%29.jpg',
    description: 'Our custom-built wardrobes are designed to maximize every inch of your space. With smart compartments, sliding door mechanisms, and built-in lighting, we make organization beautiful.',
    features: ['Smart Storage', 'Sliding Doors', 'LED Lighting', 'Mirror Inserts'],
    questions: [
      { id: 'type', label: 'Wardrobe Type', type: 'select', options: ['Sliding Door', 'Hinged Door', 'Walk-in Closet'] },
      { id: 'size', label: 'Approximate Size', type: 'text', placeholder: 'e.g., 8ft x 9ft' }
    ]
  },
  'complete-renovation': {
    title: 'Complete Home Renovation',
    subtitle: 'End-to-end turnkey solutions for your entire home.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Living_room_%28Unsplash%29.jpg',
    description: 'Don\'t deal with multiple contractors. We handle civil work, plumbing, electrical, false ceilings, painting, and full interior furnishing all under one roof with a dedicated project manager.',
    features: ['Civil Work', 'Electrical & Plumbing', 'Complete Interiors', 'Turnkey Solution'],
    questions: [
      { id: 'scope', label: 'Scope of Work', type: 'select', options: ['Full Home (Civil + Interiors)', 'Only Interiors', 'Partial Renovation'] },
      { id: 'bhk', label: 'Property Size', type: 'select', options: ['1 BHK', '2 BHK', '3 BHK', '4+ BHK', 'Villa'] }
    ]
  }
}

export default function ServiceDetailPage() {
  const params = useParams()
  const id = params.id as string

  // Fallback data if id is not in map
  const data = serviceDataMap[id] || {
    title: id.replace('-', ' ').toUpperCase(),
    subtitle: 'Premium interior solutions tailored for you.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Living_room_%28Unsplash%29.jpg',
    description: 'We provide expert interior design services with top-quality materials and rapid execution. Our team of specialists ensures your vision becomes reality within days, not months.',
    features: ['Premium Materials', 'Expert Execution', 'Dedicated Manager', 'On-time Delivery'],
    questions: [
      { id: 'requirement', label: 'Specific Requirement', type: 'text', placeholder: 'Describe what you are looking for' }
    ]
  }

  const [formData, setFormData] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Banner */}
      <div className="relative h-[40vh] md:h-[60vh] w-full">
        <Image src={data.image} alt={data.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-gray-900 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12">
          <div className="container">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading">{data.title}</h1>
            <p className="text-xl text-gray-200 max-w-2xl">{data.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="container mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-brand-gray-900 mb-6 font-heading">Overview</h2>
              <p className="text-lg text-brand-gray-600 leading-relaxed">{data.description}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-brand-gray-900 mb-6 font-heading">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-center p-4 bg-brand-gray-50 rounded-xl border border-brand-gray-200">
                    <CheckCircle className="text-brand-orange-500 mr-3" size={24} />
                    <span className="font-semibold text-brand-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Specialized Questionnaire Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-2xl border border-brand-gray-200 p-8">
              <h3 className="text-2xl font-bold text-brand-gray-900 mb-2 font-heading">Get a Custom Quote</h3>
              <p className="text-brand-gray-600 mb-6 text-sm">Tell us about your {data.title.toLowerCase()} requirements and we'll prepare a specialized proposal.</p>
              
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="mx-auto text-green-500 mb-4 h-16 w-16" />
                  <h4 className="text-xl font-bold text-brand-gray-900">Request Sent!</h4>
                  <p className="text-brand-gray-600 mt-2">Our specialist will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label>Full Name</Label>
                    <Input required placeholder="John Doe" onChange={(e) => handleInputChange('name', e.target.value)} />
                  </div>
                  <div>
                    <Label>Phone Number</Label>
                    <Input required placeholder="+91 98765 43210" onChange={(e) => handleInputChange('phone', e.target.value)} />
                  </div>

                  {data.questions.map((q: any) => (
                    <div key={q.id}>
                      <Label>{q.label}</Label>
                      {q.type === 'select' ? (
                        <select 
                          className="w-full px-3 py-2 border border-brand-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange-500"
                          onChange={(e) => handleInputChange(q.id, e.target.value)}
                        >
                          <option value="">Select an option</option>
                          {q.options.map((opt: string) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <Input placeholder={q.placeholder} onChange={(e) => handleInputChange(q.id, e.target.value)} />
                      )}
                    </div>
                  ))}

                  <Button type="submit" className="w-full bg-brand-orange-500 hover:bg-brand-orange-600 text-white mt-6 py-6 text-lg">
                    Request Consultation
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
