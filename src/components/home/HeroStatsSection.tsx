'use client'

import { motion } from 'framer-motion'

export default function HeroStatsSection() {
  return (
    <section className="relative bg-gray-100 py-12 border-b border-gray-200 overflow-hidden">
      {/* Decorative blobs for glassmorphism refraction */}
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-brand-orange-500/20 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <motion.div whileHover={{ y: -5 }} className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white shadow-lg transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-brand-orange-500 mb-2">1000+</div>
            <div className="text-lg text-brand-gray-700 font-medium">Projects</div>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white shadow-lg transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-brand-orange-500 mb-2">15+</div>
            <div className="text-lg text-brand-gray-700 font-medium">Cities</div>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white shadow-lg transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-brand-orange-500 mb-2">7</div>
            <div className="text-lg text-brand-gray-700 font-medium">Days Avg</div>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white shadow-lg transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-brand-orange-500 mb-2">30</div>
            <div className="text-lg text-brand-gray-700 font-medium">Yr Warranty</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
