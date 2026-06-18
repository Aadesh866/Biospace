import HeroSection from '@/components/home/HeroSection'
import HeroStatsSection from '@/components/home/HeroStatsSection'
import OneStopShopSection from '@/components/home/OneStopShopSection'
import InspirationGallery from '@/components/home/InspirationGallery'
import ServicesSection from '@/components/home/ServicesSection'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroStatsSection />
      <OneStopShopSection />
      <InspirationGallery />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}