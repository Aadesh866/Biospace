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
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Ra20705_kitchen_stainless_steel.JPG',
      href: '/services/modular-kitchens'
    },
    {
      title: 'Full Home Interiors',
      description: 'Turnkey interior solutions for your home',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg',
      href: '/services/complete-renovation'
    },
    {
      title: 'Luxury Interiors',
      description: 'Tailored interiors that redefine elegance',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Living_room_%28Unsplash%29.jpg',
      href: '/services/luxury-interiors'
    },
    {
      title: 'Renovations',
      description: 'Expert solutions to upgrade your home',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Living_room_%28Unsplash%29.jpg',
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
                <Card className="w-full flex flex-col border border-white/60 bg-white/40 backdrop-blur-md shadow-premium hover:shadow-premium-hover overflow-hidden transition-all duration-300 hover:-translate-y-2">
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
