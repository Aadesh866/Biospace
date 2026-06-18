'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Award, Users, Target, ShieldCheck, ChevronRight } from 'lucide-react'

export default function AboutPage() {
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
          <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Since 2010</span>
          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 drop-shadow-xl">
            Designing <span className="gradient-text">Dreams</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 drop-shadow-md leading-relaxed">
            We don't just design spaces; we craft experiences. For over a decade, BIOSPACE has been at the forefront of premium interior architecture.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative h-[600px] rounded-3xl overflow-hidden shadow-premium group"
            >
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Living_room_%28Unsplash%29.jpg"
                alt="Our Studio"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-brand-gray-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <h2 className="font-heading font-bold text-4xl text-brand-gray-900">Our Story</h2>
              <div className="w-20 h-1.5 bg-brand-orange rounded-full shadow-glow"></div>
              <p className="text-lg text-brand-gray-600 leading-relaxed">
                Founded with a rebellious spirit and a lofty objective: to offer designer interior solutions at revolutionary scale, while leading the way for socially conscious businesses.
              </p>
              <p className="text-lg text-brand-gray-600 leading-relaxed">
                Every great design begins with an even better story. Ours started when a group of visionary architects realized the massive gap between ultra-luxury design and accessible pricing. We bridged that gap.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-brand-gray-50 p-6 rounded-2xl border border-brand-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl font-bold text-brand-orange mb-2">14+</div>
                  <div className="text-sm font-semibold text-brand-gray-500 uppercase">Years Experience</div>
                </div>
                <div className="bg-brand-gray-50 p-6 rounded-2xl border border-brand-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl font-bold text-brand-orange mb-2">50+</div>
                  <div className="text-sm font-semibold text-brand-gray-500 uppercase">In-house Designers</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy / Values */}
      <section className="section-padding bg-brand-gray-50 overflow-hidden">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl text-brand-gray-900 mb-4">Our Philosophy</h2>
            <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">The pillars that define every blueprint we draw.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Target size={32} />, title: "Precision", desc: "Millimeter perfect execution driven by German technology." },
              { icon: <Award size={32} />, title: "Quality", desc: "Sourcing only the finest materials globally for unmatched durability." },
              { icon: <Users size={32} />, title: "Client First", desc: "Your vision is our command. Complete transparency at every step." },
              { icon: <ShieldCheck size={32} />, title: "Integrity", desc: "We stand by our work. Our 30-year warranty is our bond." }
            ].map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-brand-gray-200 text-center group hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  {val.icon}
                </div>
                <h3 className="font-bold text-xl text-brand-gray-900 mb-3">{val.title}</h3>
                <p className="text-brand-gray-600">{val.desc}</p>
              </motion.div>
            ))}
          </div>
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
          <div className="bg-brand-gray-900 rounded-3xl p-12 md:p-20 shadow-premium border border-brand-gray-800 max-w-5xl mx-auto relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-white">
                Be Part of Our Story
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's write the next chapter together. Transform your house into a masterpiece with BIOSPACE.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="shadow-glow hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1 bg-brand-orange text-white hover:bg-brand-orange-600 border-none">
                  <Link href="/contact" className="flex items-center">
                    Contact Us <ChevronRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
