'use client'

import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

const megaMenuData = {
  columns: [
    [
      {
        title: 'Residential',
        links: [
          { name: 'Modular Kitchens', href: '/services/modular-kitchens' },
          { name: 'Custom Wardrobes', href: '/services/custom-wardrobes' },
          { name: 'Living Room Design', href: '/services/living-room' },
          { name: 'Master Bedroom', href: '/services/master-bedroom' },
        ],
      },
    ],
    [
      {
        title: 'Specialized',
        links: [
          { name: 'False Ceilings', href: '/services/false-ceilings' },
          { name: 'TV Unit & Storage', href: '/services/tv-units' },
          { name: 'Study Room', href: '/services/study-room' },
          { name: 'Kids Room', href: '/services/kids-room' },
        ],
      },
    ],
    [
      {
        title: 'Commercial',
        links: [
          { name: 'Commercial Interiors', href: '/services/commercial-interiors' },
          { name: 'Office Design', href: '/services/office-design' },
          { name: 'Retail Spaces', href: '/services/retail-spaces' },
          { name: 'Restaurant Design', href: '/services/restaurant-design' },
        ],
      },
    ],
    [
      {
        title: 'Complete Solutions',
        links: [
          { name: 'Complete Renovation', href: '/services/complete-renovation' },
          { name: '2 BHK Package', href: '/services/2-bhk-package' },
          { name: '3 BHK Package', href: '/services/3-bhk-package' },
          { name: 'Luxury Interiors', href: '/services/luxury-interiors' },
        ],
      },
    ],
  ],
}

export function MegaMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] pointer-events-none z-50 flex justify-center ${
        isOpen ? 'pointer-events-auto' : ''
      }`}
    >
      {/* Background Blur */}
      <div
        className={`absolute inset-0 bg-brand-gray-900/10 backdrop-blur-[2px] transition-opacity duration-300 pointer-events-none ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Menu Container */}
      <div
        className={`relative w-full max-w-[850px] px-6 transition-all duration-300 pointer-events-auto origin-top transform ${
          isOpen ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-95'
        }`}
      >
        {/* White Card */}
        <div className="bg-white rounded-b-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-gray-200/50 py-4 max-h-[80vh] overflow-y-auto overscroll-contain">
          {/* Columns Layout */}
          <div className="grid grid-cols-4 divide-x divide-gray-100">
            {megaMenuData.columns.map((column, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-3 px-6 first:pl-8 last:pr-8">
                {column.map((section) => (
                  <div key={section.title} className="flex flex-col">
                    {/* Section Header */}
                    <h3 className="text-brand-gray-900 font-heading font-bold text-[14px] tracking-wide uppercase mb-1 pb-1 border-b border-gray-100/80 underline underline-offset-4 transition-all duration-300">
                      {section.title}
                    </h3>

                    {/* Links List */}
                    <ul className="space-y-0 mt-0.5">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="group/link text-gray-600 hover:text-brand-gray-900 text-[12.5px] font-medium transition-all duration-300 flex items-center py-[1px] px-2 -mx-2 hover:bg-gray-50/80 rounded-md"
                          >
                            <span className="mr-2 text-brand-orange-500/60 text-[8px] transition-transform duration-300 group-hover/link:scale-150 group-hover/link:text-brand-orange-500">
                              ●
                            </span>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
