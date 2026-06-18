'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function InspirationGallery() {
  const items = [
    {
      title: 'Living Room',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg',
      href: '/services/living-room',
      span: 'md:col-span-2 md:row-span-2'
    },
    {
      title: 'Master Bedroom',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/PAX_wardrobe_at_IKEA_Xihongmen_%2820150423113022%29.jpg',
      href: '/services/master-bedroom',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      title: 'False Ceiling',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg',
      href: '/services/false-ceilings',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      title: 'Kitchen',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Ra20705_kitchen_stainless_steel.JPG',
      href: '/services/modular-kitchens',
      span: 'md:col-span-2 md:row-span-2'
    },
    {
      title: 'Wardrobe',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/PAX_wardrobe_at_IKEA_Xihongmen_%2820150423113022%29.jpg',
      href: '/services/custom-wardrobes',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      title: 'Renovation',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Living_room_%28Unsplash%29.jpg',
      href: '/services/complete-renovation',
      span: 'md:col-span-1 md:row-span-1'
    }
  ]

  return (
    <section className="section-padding bg-brand-gray-50">
      <div className="container overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10"
        >
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-brand-gray-900 mb-4">
              Inspiration for home interior designs
            </h2>
            <p className="text-lg text-brand-gray-600">
              Give your home a new look with these interior design ideas curated for you
            </p>
          </div>
          <Link href="/projects" className="text-brand-orange-500 font-semibold hover:underline mt-4 md:mt-0 flex items-center">
            View All <span className="ml-1">›</span>
          </Link>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${item.span} h-full`}
            >
              <Link 
                href={item.href} 
                className="group relative overflow-hidden rounded-xl block h-full w-full shadow-md hover:shadow-premium transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg inline-block text-brand-gray-900 font-semibold text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-sm">
                    {item.title}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
