'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  Clock, 
  Shield, 
  Settings, 
  DollarSign, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { motion } from 'framer-motion'

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Lightning Fast Delivery",
      highlight: "24-48 Hour Site Visits",
      description: "We visit your site within 24-48 hours and complete most projects in under 1 week. Day 1: Site check, Day 2: Implementation begins.",
      stats: "Average 5-7 days completion",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Industry-Leading Warranty",
      highlight: "30 Years Kitchen Warranty", 
      description: "We offer 30-year warranty on modular kitchens and 10-15 years on overall work. Competitors typically offer only 3-5 years.",
      stats: "6x longer than competitors",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "End-to-End Solutions",
      highlight: "Everything from A to Z",
      description: "From civil work to final sofa placement - modular kitchens, custom furniture, false ceilings, wardrobes, electrical, plumbing.",
      stats: "Complete turnkey solutions",
      color: "text-brand-orange-500",
      bgColor: "bg-brand-orange-50"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Transparent Pricing",
      highlight: "No Hidden Costs",
      description: "Clear pricing tiers: 2 BHK ₹3-7L, 3/4 BHK ₹4-16L. What you see is what you pay - no surprises during execution.",
      stats: "Fixed price guarantee", 
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    }
  ]

  const achievements = [
    { 
      icon: <Users className="h-6 w-6" />, 
      number: "1000+", 
      label: "Projects Completed",
      description: "Successfully delivered across Mumbai, Delhi, Bangalore, Pune, Chennai"
    },
    { 
      icon: <Award className="h-6 w-6" />, 
      number: "98%", 
      label: "Customer Satisfaction",
      description: "Based on post-completion surveys and reviews"
    },
    { 
      icon: <Clock className="h-6 w-6" />, 
      number: "7 Days", 
      label: "Average Timeline",
      description: "From design approval to project handover"
    },
    { 
      icon: <Shield className="h-6 w-6" />, 
      number: "15+", 
      label: "Cities Served",
      description: "Expanding rapidly across major Indian metros"
    }
  ]

  const comparison = [
    {
      aspect: "Site Visit Speed",
      biospace: "24-48 Hours",
      others: "1-2 Weeks",
      advantage: "10x Faster"
    },
    {
      aspect: "Project Completion",
      biospace: "Under 1 Week",
      others: "3-6 Weeks", 
      advantage: "5x Faster"
    },
    {
      aspect: "Kitchen Warranty",
      biospace: "30 Years",
      others: "3-5 Years",
      advantage: "6x Longer"
    },
    {
      aspect: "Service Scope",
      biospace: "Complete A-Z",
      others: "Partial Services",
      advantage: "Full Coverage"
    }
  ]

  return (
    <section className="section-padding bg-brand-gray-100">
      <div className="container">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-brand-gray-900">
            Why Choose <span className="gradient-text">BIOSPACE?</span>
          </h2>
          <p className="text-xl text-brand-gray-600 leading-relaxed">
            Experience the BIOSPACE difference - where speed meets quality, backed by industry-leading warranties 
            and unmatched customer satisfaction.
          </p>
        </motion.div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group border border-brand-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 h-full hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2 text-brand-gray-900">
                      {feature.title}
                    </h3>
                    <div className={`font-semibold text-lg ${feature.color}`}>
                      {feature.highlight}
                    </div>
                  </div>
                  <div className={`inline-flex items-center justify-center w-14 h-14 flex-shrink-0 rounded-2xl ${feature.bgColor} group-hover:scale-110 transition-transform duration-300 ml-4`}>
                    <div className={feature.color}>
                      {feature.icon}
                    </div>
                  </div>
                </div>
                
                <p className="text-brand-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-sm font-medium text-brand-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {feature.stats}
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-brand-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_4px_16px_rgba(0,0,0,0.08)] mb-20">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-3xl mb-4 text-brand-gray-900">
              Proven Track Record
            </h3>
            <p className="text-brand-gray-600 max-w-2xl mx-auto">
              Our numbers speak for themselves - delivering excellence across thousands of projects 
              with unwavering commitment to quality and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div 
                whileHover={{ scale: 1.05, boxShadow: '0 12px 32px rgba(0,0,0,0.12)' }} 
                key={index} 
                className="text-center group bg-white border-2 border-brand-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] p-6 rounded-2xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-orange-100 text-brand-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="font-heading font-bold text-3xl text-brand-gray-900 mb-2">
                  {achievement.number}
                </div>
                <div className="font-semibold text-brand-gray-900 mb-2">
                  {achievement.label}
                </div>
                <p className="text-sm text-brand-gray-600">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div className="bg-brand-gray-900 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-3xl mb-4">
              BIOSPACE vs Others
            </h3>
            <p className="text-brand-gray-300 max-w-2xl mx-auto">
              See how we consistently outperform the competition across every metric that matters to you.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-brand-gray-700">
                  <th className="text-left py-4 px-4 font-semibold">Comparison Factor</th>
                  <th className="text-center py-4 px-4 font-semibold text-brand-orange-500">BIOSPACE</th>
                  <th className="text-center py-4 px-4 font-semibold text-brand-gray-400">Others</th>
                  <th className="text-center py-4 px-4 font-semibold text-green-400">Our Advantage</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr key={index} className="border-b border-brand-gray-800">
                    <td className="py-4 px-4 font-medium">{item.aspect}</td>
                    <td className="py-4 px-4 text-center font-bold text-brand-orange-500">{item.biospace}</td>
                    <td className="py-4 px-4 text-center text-brand-gray-400">{item.others}</td>
                    <td className="py-4 px-4 text-center font-semibold text-green-400">{item.advantage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Ready to Experience the BIOSPACE Difference?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join 1000+ satisfied customers who chose speed, quality, and peace of mind. 
              Get your free consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                asChild
                className="bg-white hover:bg-gray-100 font-semibold border-0"
                style={{ color: '#ea580c' }}
              >
                <Link href="/contact" className="flex items-center">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-orange-600 font-semibold"
              >
                <a 
                  href="https://wa.me/919876543210?text=Hi,%20I%20want%20to%20schedule%20a%20site%20visit%20within%2024-48%20hours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Schedule Site Visit
                  <Clock className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            
            <div className="mt-6 text-sm opacity-75">
              ✓ 24-48 Hour Response Guaranteed ✓ No Obligations ✓ Free Consultation
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs