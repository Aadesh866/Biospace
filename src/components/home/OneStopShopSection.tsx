'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function OneStopShopSection() {
  const categories = [
    {
      title: 'Modular Interiors',
      description: 'Functional kitchen, wardrobe and storage',
      image: '/images/WhatsApp Image 2026-06-11 at 5.30.20 PM.jpeg',
      href: '/services/modular-kitchens'
    },
    {
      title: 'Full Home Interiors',
      description: 'Turnkey interior solutions for your home',
      image: '/images/WhatsApp Image 2026-06-11 at 5.30.27 PM (1).jpeg',
      href: '/services/complete-renovation'
    },
    {
      title: 'Luxury Interiors',
      description: 'Tailored interiors that redefine elegance',
      image: '/images/WhatsApp Image 2026-06-11 at 5.34.17 PM (1).jpeg',
      href: '/services/luxury-interiors'
    },
    {
      title: 'Renovations',
      description: 'Expert solutions to upgrade your home',
      image: '/images/WhatsApp Image 2026-06-11 at 5.30.27 PM (2).jpeg',
      href: '/services/renovations'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-brand-gray-900 mb-4">
            One-stop shop for all things interiors
          </h2>
          <p className="text-lg md:text-xl text-brand-gray-600 max-w-3xl mx-auto">
            Be it end-to-end interiors, renovation or modular solutions, we have it all for your home 
            or office. With a wide range of furniture & decor, we have your back from start to finish.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={category.href} className="group flex h-full">
                <Card className="w-full flex flex-col border-2 border-brand-gray-200 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="flex flex-col flex-1 p-6 text-center">
                    <h3 className="font-heading font-semibold text-xl text-brand-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-brand-gray-600 text-sm flex-1 mb-4">
                      {category.description}
                    </p>
                    <div className="mt-auto flex justify-center text-brand-orange-500 font-bold group-hover:translate-x-1 transition-transform">
                      <ArrowRight size={20} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
