import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'BIOSPACE - Premium Interior Design & Build Services',
  description: 'Transform your home with BIOSPACE - India\'s fastest interior design firm. Complete makeovers in under a week with 30-year warranty. Modular kitchens, custom furniture & more.',
  keywords: 'interior design, modular kitchens, home renovation, custom furniture, wardrobe, false ceiling, Mumbai, Delhi, Bangalore',
  openGraph: {
    title: 'BIOSPACE - Premium Interior Design & Build Services',
    description: 'Complete home makeovers in under a week with 30-year warranty',
    images: ['/images/Logo.jpeg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}