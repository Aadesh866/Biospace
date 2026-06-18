'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Home, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Testimonial {
  id: number
  name: string
  location: string
  projectType: string
  bhkSize: string
  timeline: string
  rating: number
  content: string
  highlight: string
  completedDate: string
  projectValue: string
}

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya & Rajesh Sharma",
      location: "Bandra West, Mumbai",
      projectType: "Complete 3 BHK Renovation",
      bhkSize: "3 BHK",
      timeline: "6 Days",
      rating: 5,
      content: "BIOSPACE transformed our entire 3 BHK in just 6 days! They visited within 24 hours of our call, and the execution was flawless. The 30-year kitchen warranty gives us complete peace of mind. The modular kitchen is stunning and the wardrobes are perfectly customized.",
      highlight: "Completed in 6 days with 30-year warranty",
      completedDate: "March 2024",
      projectValue: "₹8.5 Lakhs"
    },
    {
      id: 2,
      name: "Amit Gupta",
      location: "Koramangala, Bangalore",
      projectType: "Modular Kitchen with Island",
      bhkSize: "2 BHK",
      timeline: "4 Days",
      rating: 5,
      content: "The speed of execution is unbelievable! BIOSPACE delivered a premium modular kitchen with central island in just 4 days. German hardware, quartz countertops, and impeccable finish. My wife is absolutely thrilled with the storage solutions.",
      highlight: "German hardware with lightning-fast delivery",
      completedDate: "February 2024", 
      projectValue: "₹6.2 Lakhs"
    },
    {
      id: 3,
      name: "Sneha Reddy",
      location: "Anna Nagar, Chennai",
      projectType: "Master Bedroom & Wardrobe",
      bhkSize: "3 BHK",
      timeline: "3 Days",
      rating: 5,
      content: "I was skeptical about the 1-week promise, but BIOSPACE delivered our master bedroom makeover in just 3 days! The walk-in wardrobe is a dream come true. Professional team, zero delays, and the 15-year warranty is fantastic.",
      highlight: "Walk-in wardrobe completed in 3 days",
      completedDate: "April 2024",
      projectValue: "₹4.8 Lakhs"
    },
    {
      id: 4,
      name: "Vikram & Kavitha Nair",
      location: "Whitefield, Bangalore", 
      projectType: "Living Room + False Ceiling",
      bhkSize: "4 BHK",
      timeline: "5 Days",
      rating: 5,
      content: "The living room transformation exceeded our expectations! Custom sofa set, entertainment unit, and designer false ceiling - all completed in 5 days. The attention to detail and quality of materials is outstanding. Highly recommend BIOSPACE!",
      highlight: "Designer false ceiling with integrated lighting",
      completedDate: "January 2024",
      projectValue: "₹7.2 Lakhs"
    },
    {
      id: 5,
      name: "Rohit & Meera Agarwal",
      location: "Dwarka, New Delhi",
      projectType: "Complete 2 BHK Interior",
      bhkSize: "2 BHK", 
      timeline: "7 Days",
      rating: 5,
      content: "From bare walls to fully furnished home in 7 days! BIOSPACE handled everything - modular kitchen, wardrobes, false ceiling, painting. The transparent pricing with no hidden costs was refreshing. Our friends are amazed by the transformation.",
      highlight: "Complete home makeover with transparent pricing",
      completedDate: "March 2024",
      projectValue: "₹5.9 Lakhs"
    },
    {
      id: 6,
      name: "Deepa Krishnan",
      location: "Hinjewadi, Pune",
      projectType: "Office Interior Design",
      bhkSize: "Commercial",
      timeline: "8 Days", 
      rating: 5,
      content: "BIOSPACE designed our startup office beautifully! Ergonomic workstations, meeting rooms, and a welcoming reception area. The team understood our brand perfectly and delivered a space that impresses clients and motivates employees.",
      highlight: "Professional office space with brand integration",
      completedDate: "February 2024",
      projectValue: "₹12.5 Lakhs"
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
    setIsAutoPlaying(false)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          "h-5 w-5",
          i < rating ? "text-brand-orange-500 fill-current" : "text-brand-gray-300"
        )}
      />
    ))
  }

  const currentTestimonialData = testimonials[currentTestimonial]

  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-brand-gray-900">
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="text-xl text-brand-gray-600 leading-relaxed">
            Real experiences from real customers who transformed their spaces with BIOSPACE. 
            Every review reflects our commitment to speed, quality, and customer satisfaction.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card className="bg-brand-gray-50 border border-brand-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="h-12 w-12 text-brand-orange-500 opacity-20" />
                    <div className="flex items-center space-x-1">
                      {renderStars(currentTestimonialData.rating)}
                    </div>
                  </div>

                  <blockquote className="text-lg md:text-xl text-brand-gray-700 leading-relaxed mb-6 italic">
                    "{currentTestimonialData.content}"
                  </blockquote>

                  <div className="border-l-4 border-brand-orange-500 pl-4 mb-6">
                    <p className="font-semibold text-brand-orange-600 mb-1">
                      Key Highlight
                    </p>
                    <p className="text-brand-gray-800 font-medium">
                      {currentTestimonialData.highlight}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-xl text-brand-gray-900 mb-1">
                        {currentTestimonialData.name}
                      </h4>
                      <div className="flex items-center text-brand-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{currentTestimonialData.location}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-brand-orange-600 text-lg">
                        {currentTestimonialData.projectValue}
                      </div>
                      <div className="text-sm text-brand-gray-500">
                        {currentTestimonialData.completedDate}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details Card */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-brand-orange-500 to-brand-orange-600 rounded-2xl p-6 text-white">
                    <h5 className="font-semibold text-lg mb-4">Project Details</h5>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Home className="h-5 w-5 mr-2 opacity-80" />
                          <span className="text-sm opacity-80">Property</span>
                        </div>
                        <span className="font-medium">{currentTestimonialData.bhkSize}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 mr-2 opacity-80" />
                          <span className="text-sm opacity-80">Timeline</span>
                        </div>
                        <span className="font-medium">{currentTestimonialData.timeline}</span>
                      </div>

                      <div className="border-t border-white/20 pt-4">
                        <div className="text-sm opacity-80 mb-1">Service Type</div>
                        <div className="font-medium">{currentTestimonialData.projectType}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full border-brand-orange-500 text-brand-orange-500 hover:bg-brand-orange-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentTestimonial
                    ? "bg-brand-orange-500 w-8"
                    : "bg-brand-gray-300 hover:bg-brand-orange-300"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full border-brand-orange-500 text-brand-orange-500 hover:bg-brand-orange-50"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Stats Summary */}
        <div className="bg-brand-gray-50 rounded-2xl p-8 border border-brand-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-orange-500 mb-2">4.9/5</div>
              <div className="text-brand-gray-600">Average Rating</div>
              <div className="flex justify-center mt-2">
                {renderStars(5)}
              </div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-brand-orange-500 mb-2">1000+</div>
              <div className="text-brand-gray-600">Happy Customers</div>
              <div className="text-sm text-brand-gray-500 mt-1">Across 15+ cities</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-brand-orange-500 mb-2">98%</div>
              <div className="text-brand-gray-600">Satisfaction Rate</div>
              <div className="text-sm text-brand-gray-500 mt-1">Would recommend us</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-brand-orange-500 mb-2">7 Days</div>
              <div className="text-brand-gray-600">Average Timeline</div>
              <div className="text-sm text-brand-gray-500 mt-1">Project completion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection