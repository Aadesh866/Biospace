'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Clock, Shield, Star, MessageCircle, Phone, ArrowRight, Play } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg',
      title: 'Your Dream Home, Delivered in Under a Week',
      subtitle: 'Premium interior design with 30-year warranty on kitchens',
      highlight: '24-48 Hour Site Visits'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/22_West_-_home_office.jpg',
      title: 'Modular Kitchens That Last Decades',
      subtitle: 'German hardware and premium materials with unmatched 30-year warranty',
      highlight: '30 Year Kitchen Warranty'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Living_room_%28Unsplash%29.jpg',
      title: 'Complete Home Makeovers',
      subtitle: 'From modular kitchens to full renovations - we handle everything A to Z',
      highlight: 'End-to-End Solutions'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const trustIndicators = [
    {
      icon: <Clock className="h-6 w-6" />,
      text: "24-48hr Site Visit",
      subtext: "Guaranteed response"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      text: "30 Year Warranty",
      subtext: "Kitchen guarantee"
    },
    {
      icon: <Star className="h-6 w-6" />,
      text: "1000+ Projects",
      subtext: "Satisfied customers"
    }
  ]

  const quickActions = []

  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-white px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Highlight Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-brand-orange-500/90 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 shadow-glow">
              <Star className="h-4 w-4 mr-2" />
              {slides[currentSlide].highlight}
            </div>

            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight drop-shadow-xl">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed drop-shadow-md">
              {slides[currentSlide].subtitle}
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-3 space-y-2 sm:space-y-0 text-center sm:text-left">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-brand-orange-400 shadow-premium">
                    {indicator.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-lg drop-shadow-md">{indicator.text}</div>
                    <div className="text-sm text-gray-300 drop-shadow-sm">{indicator.subtext}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" asChild className="bg-brand-orange-500 hover:bg-brand-orange-600 text-lg px-8 py-6 shadow-glow hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1">
                <Link href="/contact" className="flex items-center">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-brand-gray-900 backdrop-blur-sm shadow-premium hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1"
              >
                <Link href="/projects" className="flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  View Projects
                </Link>
              </Button>
            </div>

            {/* Removed Quick Contact Actions */}
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex flex-col space-y-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-premium hover:shadow-premium-hover transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-brand-orange-500 rounded-xl flex items-center justify-center shadow-glow">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl drop-shadow-md">Lightning Fast Service</h3>
                  <p className="text-gray-300 drop-shadow-sm">Site visit in 24-48hrs, project done in 1 week</p>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-premium hover:shadow-premium-hover transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl drop-shadow-md">Industry-Best Warranty</h3>
                  <p className="text-gray-300 drop-shadow-sm">30 years on kitchens, 10-15 years overall</p>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-premium hover:shadow-premium-hover transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl drop-shadow-md">Proven Excellence</h3>
                  <p className="text-gray-300 drop-shadow-sm">1000+ completed projects, 98% satisfaction</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats moved to HeroStatsSection */}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-brand-orange-500 w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}