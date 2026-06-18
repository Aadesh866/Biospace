'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    bhkType: '',
    budget: '',
    timeline: '',
    address: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        bhkType: '',
        budget: '',
        timeline: '',
        address: '',
        message: ''
      })
    }, 3000)
  }

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
            Contact <span className="gradient-text">BIOSPACE</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 drop-shadow-md">
            Ready to transform your space? Get in touch for a free consultation. 
            We'll visit your site within 24-48 hours and provide a detailed quote.
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-brand-gray-200"
            >
              <h2 className="font-heading font-bold text-3xl mb-4 text-brand-gray-900">
                Get Your Free Quote
              </h2>
              <p className="text-brand-gray-600 mb-8">
                Fill out the form below and our experts will contact you within 2 hours to schedule your site visit.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                  <h3 className="font-semibold text-xl text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    Your inquiry has been submitted successfully. Our team will contact you within 2 hours to schedule your site visit.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-brand-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-brand-gray-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      >
                        <option value="">Select project type</option>
                        <option value="modular-kitchen">Modular Kitchen</option>
                        <option value="wardrobes">Custom Wardrobes</option>
                        <option value="living-room">Living Room Design</option>
                        <option value="false-ceiling">False Ceiling</option>
                        <option value="complete-renovation">Complete Renovation</option>
                        <option value="commercial">Commercial Interior</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-gray-700 mb-2">
                        Property Type
                      </label>
                      <select
                        name="bhkType"
                        value={formData.bhkType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      >
                        <option value="">Select BHK type</option>
                        <option value="1bhk">1 BHK</option>
                        <option value="2bhk">2 BHK</option>
                        <option value="3bhk">3 BHK</option>
                        <option value="4bhk">4+ BHK</option>
                        <option value="villa">Villa/Independent House</option>
                        <option value="commercial">Commercial Space</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-brand-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-3l">Under ₹3 Lakhs</option>
                        <option value="3l-5l">₹3 - ₹5 Lakhs</option>
                        <option value="5l-8l">₹5 - ₹8 Lakhs</option>
                        <option value="8l-12l">₹8 - ₹12 Lakhs</option>
                        <option value="12l-20l">₹12 - ₹20 Lakhs</option>
                        <option value="above-20l">Above ₹20 Lakhs</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-gray-700 mb-2">
                        Preferred Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP (Within 1 week)</option>
                        <option value="1month">Within 1 month</option>
                        <option value="3months">Within 3 months</option>
                        <option value="6months">Within 6 months</option>
                        <option value="planning">Just planning/exploring</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-gray-700 mb-2">
                      Property Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      placeholder="Area, City - for site visit scheduling"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-gray-700 mb-2">
                      Additional Requirements
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      placeholder="Tell us more about your project requirements, preferences, or any specific questions you have..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full shadow-glow hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1">
                    <Send className="mr-2" size={20} />
                    Submit Inquiry
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info & Quick Actions */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="font-heading font-bold text-3xl mb-8 text-brand-gray-900">
                Get in Touch
              </h2>

              {/* Contact Methods */}
              <div className="space-y-6 mb-10">
                {[
                  { icon: <Phone size={24} />, title: "Phone", desc: "Call us for immediate assistance", link: "tel:+919876543210", linkText: "+91 98765 43210" },
                  { icon: <MessageCircle size={24} />, title: "WhatsApp", desc: "Quick chat and project images", link: "https://wa.me/919876543210", linkText: "Chat on WhatsApp" },
                  { icon: <Mail size={24} />, title: "Email", desc: "Detailed project discussions", link: "mailto:info@biospace.in", linkText: "info@biospace.in" },
                  { icon: <MapPin size={24} />, title: "Office", desc: "Visit our design studio", isAddress: true }
                ].map((item, i) => (
                  <motion.div key={i} whileHover={{ x: 10 }} className="flex items-start space-x-5 group">
                    <div className="bg-brand-gray-50 group-hover:bg-brand-orange-50 p-4 rounded-2xl shadow-sm transition-colors duration-300">
                      <div className="text-brand-orange group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <div className="pt-2">
                      <h3 className="font-semibold text-lg text-brand-gray-900 mb-1">{item.title}</h3>
                      <p className="text-brand-gray-500 text-sm mb-2">{item.desc}</p>
                      {item.isAddress ? (
                        <address className="text-brand-gray-700 not-italic font-medium leading-relaxed">
                          123 Design Street,<br />
                          Bandra West, Mumbai - 400050<br />
                          Maharashtra, India
                        </address>
                      ) : (
                        <a href={item.link} className="text-brand-orange font-semibold hover:underline">
                          {item.linkText}
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-brand-gray-900 to-brand-gray-800 text-white rounded-3xl p-8 mb-10 shadow-premium">
                <div className="flex items-center mb-6">
                  <Clock className="text-brand-orange mr-3" size={24} />
                  <h3 className="font-heading font-bold text-xl">Business Hours</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-brand-gray-700 pb-3">
                    <span className="text-gray-300">Monday - Saturday</span>
                    <span className="font-semibold">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-gray-300">Sunday</span>
                    <span className="font-semibold">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="bg-brand-orange/20 text-brand-orange-400 font-medium px-4 py-2 rounded-lg text-sm text-center mt-4 border border-brand-orange/30">
                    Emergency consultations available 24/7
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white p-6 rounded-2xl border border-brand-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-3xl font-heading font-bold text-brand-orange mb-2">24-48h</div>
                  <div className="text-sm font-medium text-brand-gray-600 uppercase tracking-wider">Site Visit</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-brand-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-3xl font-heading font-bold text-brand-orange mb-2">30 Yrs</div>
                  <div className="text-sm font-medium text-brand-gray-600 uppercase tracking-wider">Warranty</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-brand-gray-50 section-padding">
        <div className="container">
          <h2 className="font-heading font-bold text-4xl text-center mb-12 text-brand-gray-900">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "How quickly can you visit my site?",
                a: "We schedule site visits within 24-48 hours of your inquiry. For urgent projects, same-day visits can be arranged."
              },
              {
                q: "What is included in the free consultation?",
                a: "Our free consultation includes site measurement, design discussion, material selection guidance, timeline planning, and detailed cost breakdown."
              },
              {
                q: "Do you really complete projects in 1 week?",
                a: "Yes! Our average completion time is 5-7 days for standard projects. This includes modular kitchens, wardrobes, and living room designs. Larger renovations may take 10-14 days."
              },
              {
                q: "How does the 30-year warranty work?",
                a: "Our 30-year warranty covers structural integrity, hardware functionality, and manufacturing defects for modular kitchens. Other furniture comes with 10-15 year warranty."
              },
              {
                q: "What cities do you serve?",
                a: "We currently serve Mumbai, Delhi NCR, Bangalore, Pune, and Chennai. We're expanding to more cities based on demand."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-brand-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300">
                <h3 className="font-semibold text-lg text-brand-gray-900 mb-3">{faq.q}</h3>
                <p className="text-brand-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}