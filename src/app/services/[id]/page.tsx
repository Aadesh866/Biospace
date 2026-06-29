'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, Shield, Award, Clock, Wrench, Star, ChevronDown, ChevronUp, Timer, Users } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Service data with rich content
const serviceDataMap: Record<string, any> = {
  'modular-kitchens': {
    title: 'Modular Kitchens',
    subtitle: 'German hardware, 30-year warranty, lightning fast execution.',
    image: '/images/WhatsApp Image 2026-06-11 at 5.30.19 PM.jpeg',
    
    // Overview
    overview: {
      description: 'Transform your cooking space with our premium modular kitchens that combine German engineering precision with Indian cooking needs. We use only the finest water-resistant BWR plywood, authentic German Hettich & Blum hardware, and premium finishes that withstand daily use for decades. Our modular kitchens are designed to maximize storage, improve workflow, and create a stunning centerpiece for your home.',
      highlights: [
        'Industry-leading 30-year comprehensive warranty',
        'German Hettich & Blum hardware with soft-close technology',
        'Installation completed in just 3-5 days',
        'Water-resistant BWR plywood for maximum durability',
        '100% customizable to your space and preferences',
        'Premium granite or quartz countertops included'
      ],
      images: [
        '/images/WhatsApp Image 2026-06-11 at 5.30.18 PM.jpeg',
        '/images/WhatsApp Image 2026-06-11 at 5.30.19 PM.jpeg'
      ]
    },
    
    // What's Included
    whatsIncluded: [
      {
        icon: '🚪',
        name: 'Modular Cabinets',
        description: 'Custom-sized cabinets with water-resistant BWR plywood and premium laminates'
      },
      {
        icon: '⚙️',
        name: 'German Hardware',
        description: 'Authentic Hettich & Blum hinges, slides, and mechanisms with lifetime smoothness'
      },
      {
        icon: '🪨',
        name: 'Premium Countertops',
        description: 'Your choice of granite or quartz in 50+ colors and finishes'
      },
      {
        icon: '🎨',
        name: 'Designer Backsplash',
        description: 'Tiles or acrylic backsplash to complement your kitchen aesthetic'
      },
      {
        icon: '📦',
        name: 'Smart Storage',
        description: 'Pull-out baskets, corner units, tall units for maximum organization'
      },
      {
        icon: '💡',
        name: 'LED Lighting',
        description: 'Under-cabinet LED strips for perfect task lighting'
      },
      {
        icon: '🔌',
        name: 'Electrical Work',
        description: 'Complete electrical points for chimney, hob, and appliances'
      },
      {
        icon: '💧',
        name: 'Plumbing Setup',
        description: 'Professional plumbing for sink, water purifier, and dishwasher connections'
      }
    ],
    
    // Why Choose BIOSPACE
    whyChoose: [
      {
        icon: <Shield className="w-8 h-8" />,
        title: '30-Year Warranty',
        description: 'Industry-best comprehensive warranty covering all structural components and hardware against defects and termites.'
      },
      {
        icon: <Award className="w-8 h-8" />,
        title: 'Genuine German Hardware',
        description: 'We use only authentic Hettich and Blum hardware - not Chinese imitations. Every hinge and slide is certified.'
      },
      {
        icon: <Clock className="w-8 h-8" />,
        title: 'Lightning Fast Execution',
        description: '3-5 days from measurement to installation. No month-long waits. We value your time as much as you do.'
      },
      {
        icon: <Star className="w-8 h-8" />,
        title: 'No Hidden Costs',
        description: '100% transparent pricing. The quote you see is what you pay - no surprises, no last-minute additions.'
      }
    ],
    
    // Process Steps
    process: [
      {
        step: 1,
        title: 'Free Consultation',
        description: 'Our expert visits your home within 24-48 hours for measurements and understanding your needs.',
        timeline: 'Day 1'
      },
      {
        step: 2,
        title: '3D Design & Quote',
        description: 'Receive photorealistic 3D designs with detailed quotation. Make changes until perfect.',
        timeline: 'Day 2-3'
      },
      {
        step: 3,
        title: 'Manufacturing',
        description: 'Your kitchen is manufactured in our state-of-the-art factory with precision machinery.',
        timeline: 'Day 4-7'
      },
      {
        step: 4,
        title: 'Installation',
        description: 'Expert installation team completes the setup with zero damage to your home.',
        timeline: 'Day 8-10'
      },
      {
        step: 5,
        title: 'Final Handover',
        description: 'Quality check, cleanup, and warranty documentation. Your kitchen is ready to use!',
        timeline: 'Day 11'
      }
    ],
    
    // Gallery
    gallery: [
      '/images/WhatsApp Image 2026-06-11 at 5.30.18 PM.jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.19 PM.jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.20 PM.jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.21 PM.jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.27 PM.jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.34.17 PM.jpeg'
    ],
    
    // FAQs
    faqs: [
      {
        question: 'How much does a modular kitchen cost?',
        answer: 'Our modular kitchens start from ₹2.5 lakhs and go up to ₹8 lakhs depending on size, materials, and customization. A standard 8ft x 10ft kitchen typically costs ₹4-5 lakhs with premium finishes. We provide detailed quotes after seeing your space.'
      },
      {
        question: 'What is the warranty period?',
        answer: 'We offer an industry-leading 30-year comprehensive warranty on all structural components and hardware. This covers manufacturing defects, termite damage, and hardware malfunction. Surface scratches and wear from normal use are not covered.'
      },
      {
        question: 'How long does installation take?',
        answer: 'Installation is completed in just 3-5 days after manufacturing. Total timeline from consultation to handover is 10-12 days. We work on your schedule and minimize disruption to your daily routine.'
      },
      {
        question: 'Do you use original German hardware?',
        answer: 'Yes! We use 100% authentic Hettich and Blum hardware imported from Germany. Every piece comes with certification. We never compromise with Chinese imitations that fail within months.'
      },
      {
        question: 'Can I customize the design?',
        answer: 'Absolutely! Every kitchen is custom-made to your exact requirements. Choose from 300+ laminates, multiple countertop options, and various layout configurations. Our designers will help you create your dream kitchen.'
      },
      {
        question: 'What materials do you use?',
        answer: 'We use marine-grade BWR (Boiling Water Resistant) plywood for all carcasses, premium laminates for shutters, and granite or quartz for countertops. All materials are ISI certified and sourced from reputed manufacturers.'
      },
      {
        question: 'Do you handle electrical and plumbing?',
        answer: 'Yes, we provide complete turnkey solutions including electrical points for chimney, hob, microwave, and all appliances. We also handle plumbing for sink, water purifier, and dishwasher connections.'
      },
      {
        question: 'What if I face issues after installation?',
        answer: 'We provide dedicated after-sales support. Any issues are resolved within 24-48 hours. Our 30-year warranty ensures long-term peace of mind. Simply call us and we will send a technician.'
      }
    ]
  },
  'custom-wardrobes': {
    title: 'Custom Wardrobes',
    subtitle: 'Maximize storage without compromising on style.',
    image: '/images/WhatsApp Image 2026-06-11 at 5.30.25 PM.jpeg',
    overview: {
      description: 'Organize your life with our custom-designed wardrobes that maximize every inch of your space. Whether you have a compact bedroom or a spacious master suite, our wardrobes are tailored to your exact needs with smart compartments, premium finishes, and smooth mechanisms that last years.',
      highlights: [
        '15-year structural warranty on all components',
        'Space-optimized designs with smart storage solutions',
        'Installation completed in 2-4 days',
        'Premium laminates in 200+ colors and textures',
        'Soft-close mechanisms on all doors and drawers',
        'Built-in LED lighting and mirror options'
      ],
      images: [
        '/images/WhatsApp Image 2026-06-11 at 5.30.25 PM (1).jpeg',
        '/images/WhatsApp Image 2026-06-11 at 5.30.26 PM.jpeg'
      ]
    },
    whatsIncluded: [
      {
        icon: '🚪',
        name: 'Wardrobe Carcass',
        description: 'BWR plywood frame designed for your exact ceiling height and room dimensions'
      },
      {
        icon: '👔',
        name: 'Hanging Space',
        description: 'Multiple hanging rods for suits, shirts, sarees, and long garments'
      },
      {
        icon: '👕',
        name: 'Shelving Units',
        description: 'Adjustable shelves for folded clothes, bags, and accessories'
      },
      {
        icon: '👟',
        name: 'Shoe Racks',
        description: 'Dedicated compartments for footwear with proper ventilation'
      },
      {
        icon: '📦',
        name: 'Drawers',
        description: 'Soft-close drawers with organizational inserts'
      },
      {
        icon: '🪞',
        name: 'Mirrors',
        description: 'Full-length or partial mirrors as per your preference'
      },
      {
        icon: '💡',
        name: 'LED Lighting',
        description: 'Internal LED strips for better visibility'
      },
      {
        icon: '🔒',
        name: 'Locking System',
        description: 'Optional key locks for secure storage'
      }
    ],
    whyChoose: [
      {
        icon: <Shield className="w-8 h-8" />,
        title: '15-Year Warranty',
        description: 'Comprehensive warranty on all structural components ensuring long-term durability and peace of mind.'
      },
      {
        icon: <Award className="w-8 h-8" />,
        title: 'Space Optimization',
        description: 'Expert designers maximize your storage capacity with intelligent compartment planning and organizational systems.'
      },
      {
        icon: <Clock className="w-8 h-8" />,
        title: 'Fast Installation',
        description: '2-4 days installation with minimal disruption. Perfect for occupied homes needing quick turnarounds.'
      },
      {
        icon: <Star className="w-8 h-8" />,
        title: 'Premium Finishes',
        description: '200+ laminate options from leading brands. Match your wardrobe perfectly with your room decor.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Space Assessment',
        description: 'We visit your home to measure dimensions and understand your storage needs.',
        timeline: 'Day 1'
      },
      {
        step: 2,
        title: 'Design Proposal',
        description: '3D design showing exactly how your wardrobe will look with all compartments.',
        timeline: 'Day 2'
      },
      {
        step: 3,
        title: 'Manufacturing',
        description: 'Precision manufacturing in our factory with quality checks at each stage.',
        timeline: 'Day 3-5'
      },
      {
        step: 4,
        title: 'Installation',
        description: 'Professional installation with zero damage guarantee.',
        timeline: 'Day 6-7'
      }
    ],
    gallery: [
      '/images/WhatsApp Image 2026-06-11 at 5.30.25 PM (1).jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.26 PM.jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.23 PM.jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.23 PM (1).jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.24 PM.jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.34.17 PM (1).jpeg'
    ],
    faqs: [
      {
        question: 'How much does a custom wardrobe cost?',
        answer: 'Custom wardrobes range from ₹1.8 lakhs to ₹5 lakhs depending on size and finishes. An 8ft x 7ft wardrobe typically costs ₹2.5-3 lakhs with premium laminates and internal fittings.'
      },
      {
        question: 'What is the difference between sliding and hinged doors?',
        answer: 'Sliding doors save space (no door opening clearance needed) but cost slightly more. Hinged doors provide full access to the wardrobe and are more economical. We help you choose based on your room layout.'
      },
      {
        question: 'Can you work with existing wardrobes?',
        answer: 'Yes, we can refurbish existing wardrobes by replacing shutters, adding internal fittings, or converting to sliding doors. This is often more economical than complete replacement.'
      },
      {
        question: 'Do you provide walk-in closets?',
        answer: 'Absolutely! We design complete walk-in closets with organized sections, island drawers, seating areas, and premium lighting. Perfect for master bedrooms with adequate space.'
      },
      {
        question: 'What internal fittings do you provide?',
        answer: 'We provide tie racks, belt hangers, trouser pullouts, jewelry trays, saree bags, shoe racks, and more. All fittings are customized based on your wardrobe usage patterns.'
      },
      {
        question: 'How long do wardrobes last?',
        answer: 'With proper care, our wardrobes last 15-20 years easily. The BWR plywood resists moisture and termites, while premium hardware ensures smooth operation for decades.'
      }
    ]
  },
  'complete-renovation': {
    title: 'Complete Home Renovation',
    subtitle: 'End-to-end turnkey solutions for your entire home.',
    image: '/images/WhatsApp Image 2026-06-11 at 5.30.27 PM (1).jpeg',
    overview: {
      description: 'Transform your entire home with our comprehensive renovation services. From civil work to furniture, we handle everything under one roof with a dedicated project manager. No need to coordinate with multiple contractors - we take complete responsibility from start to finish.',
      highlights: [
        '15-year comprehensive warranty on all work',
        'Complete turnkey solution - civil + interiors',
        'Completed in 7-14 days based on scope',
        'Single point of contact for entire project',
        'Licensed civil contractors and electricians',
        'Zero damage guarantee with professional cleanup'
      ],
      images: [
        '/images/WhatsApp Image 2026-06-11 at 5.30.27 PM.jpeg',
        '/images/WhatsApp Image 2026-06-11 at 5.30.27 PM (2).jpeg'
      ]
    },
    whatsIncluded: [
      {
        icon: '🏗️',
        name: 'Civil Work',
        description: 'Walls, flooring, ceiling, plaster, and all structural modifications'
      },
      {
        icon: '⚡',
        name: 'Electrical',
        description: 'Complete rewiring, MCB panel, switches, and fixture installation'
      },
      {
        icon: '💧',
        name: 'Plumbing',
        description: 'Water lines, drainage, bathroom fittings, and leak-proofing'
      },
      {
        icon: '🎨',
        name: 'Painting',
        description: 'Premium emulsion paints with smooth finish and proper priming'
      },
      {
        icon: '🪟',
        name: 'False Ceiling',
        description: 'Gypsum false ceiling with LED cove lighting'
      },
      {
        icon: '🛋️',
        name: 'Furniture',
        description: 'All modular furniture - kitchen, wardrobes, TV units, etc.'
      },
      {
        icon: '🚪',
        name: 'Doors & Windows',
        description: 'Wooden/UPVC doors and windows with hardware'
      },
      {
        icon: '🧹',
        name: 'Final Cleanup',
        description: 'Complete cleaning and handover ready to move in'
      }
    ],
    whyChoose: [
      {
        icon: <Shield className="w-8 h-8" />,
        title: 'Single Responsibility',
        description: 'One contractor for everything. No coordination hassles, no blame games. We own the complete project.'
      },
      {
        icon: <Award className="w-8 h-8" />,
        title: 'Licensed Professionals',
        description: 'All civil contractors, electricians, and plumbers are certified and experienced with 1000+ projects.'
      },
      {
        icon: <Clock className="w-8 h-8" />,
        title: 'Guaranteed Timeline',
        description: '2BHK in 7 days, 3BHK in 10-12 days. We commit to timelines with penalty clauses for delays.'
      },
      {
        icon: <Star className="w-8 h-8" />,
        title: 'Transparent Pricing',
        description: 'Detailed line-item quotation. No hidden costs. Final cost = quoted cost guaranteed.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Site Inspection',
        description: 'Detailed assessment of existing structure and understanding requirements.',
        timeline: 'Day 1'
      },
      {
        step: 2,
        title: 'Design & Quote',
        description: 'Complete design with 3D renders and detailed quotation with timeline.',
        timeline: 'Day 2-4'
      },
      {
        step: 3,
        title: 'Demolition & Civil',
        description: 'Structural changes, flooring, walls, and civil work completion.',
        timeline: 'Day 5-10'
      },
      {
        step: 4,
        title: 'MEP Work',
        description: 'Electrical, plumbing, and false ceiling installation.',
        timeline: 'Day 11-15'
      },
      {
        step: 5,
        title: 'Furniture & Finishing',
        description: 'Modular furniture installation, painting, and final touches.',
        timeline: 'Day 16-21'
      }
    ],
    gallery: [
      '/images/WhatsApp Image 2026-06-11 at 5.30.27 PM.jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.27 PM (1).jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.27 PM (2).jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.34.17 PM.jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.34.17 PM (1).jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.28 PM.jpeg'
    ],
    faqs: [
      {
        question: 'How much does a complete renovation cost?',
        answer: 'Complete renovation costs ₹3-6 lakhs per BHK depending on scope and finishes. A typical 2BHK costs ₹6-10 lakhs, 3BHK costs ₹10-16 lakhs including all civil work, MEP, furniture, and finishes.'
      },
      {
        question: 'Do I need to vacate during renovation?',
        answer: 'For complete renovation, we recommend vacating for faster execution and your convenience. However, we can work room-by-room if you want to stay, though it increases timeline.'
      },
      {
        question: 'What is included in civil work?',
        answer: 'Civil work includes demolition, wall construction/removal, flooring (tiles/marble), wall plastering, waterproofing, and all structural modifications as per design.'
      },
      {
        question: 'Can I use my own contractors for some work?',
        answer: 'We prefer handling everything for quality and timeline control. If you want to use your contractor for specific work, we can coordinate but warranty will be limited to our scope only.'
      },
      {
        question: 'What if I want to make changes during work?',
        answer: 'Minor changes are accommodated. Major changes requiring extra material or labor will be quoted separately. We maintain change order documentation for transparency.'
      },
      {
        question: 'How do you ensure quality?',
        answer: 'Dedicated project manager oversees daily work, photographic documentation at each stage, and quality checklist signoff. Final handover only after your approval.'
      }
    ]
  },
  'living-room': {
    title: 'Living Room Design',
    subtitle: 'Complete entertainment and seating solutions.',
    image: '/images/WhatsApp Image 2026-06-11 at 5.30.24 PM (1).jpeg',
    overview: {
      description: 'Create the perfect entertainment and relaxation space with our comprehensive living room design solutions. We craft living spaces that bring families together with custom sofas, elegant TV units, smart storage, and ambient lighting. From modern minimalist to classic traditional styles, every element is chosen to reflect your personality while ensuring maximum comfort and functionality. Our living room designs optimize space utilization and create focal points that make lasting impressions on your guests.',
      highlights: [
        '10-year warranty on all furniture and structural components',
        'Custom sofa manufacturing with premium imported fabrics',
        'Modular TV units with integrated cable management systems',
        'Installation completed in just 4-6 days',
        '100% customizable designs matching your home aesthetic',
        'Ambient and task lighting for perfect mood setting'
      ],
      images: [
        '/images/WhatsApp Image 2026-06-11 at 5.30.24 PM (1).jpeg',
        '/images/WhatsApp Image 2026-06-11 at 5.30.24 PM (2).jpeg'
      ]
    },
    whatsIncluded: [
      {
        icon: '📺',
        name: 'TV Unit',
        description: 'Modular TV unit with storage compartments and cable management'
      },
      {
        icon: '🛋️',
        name: 'Sofa Set',
        description: 'Custom-made sofas with premium fabrics and ergonomic design'
      },
      {
        icon: '☕',
        name: 'Coffee Table',
        description: 'Designer coffee tables in wood, glass, or marble finishes'
      },
      {
        icon: '🎮',
        name: 'Entertainment Unit',
        description: 'Display shelves and storage for books, decor, and media'
      },
      {
        icon: '🎨',
        name: 'Wall Paneling',
        description: 'Designer wall panels in wood, PVC, or textured finishes'
      },
      {
        icon: '💡',
        name: 'LED Lighting',
        description: 'Ambient cove lighting and spotlights for perfect illumination'
      },
      {
        icon: '🪟',
        name: 'Curtains & Blinds',
        description: 'Premium curtains with automated or manual systems'
      },
      {
        icon: '✨',
        name: 'Decorative Items',
        description: 'Complementary decor pieces to complete the look'
      }
    ],
    whyChoose: [
      {
        icon: <Shield className="w-8 h-8" />,
        title: '10-Year Warranty',
        description: 'Comprehensive warranty on all furniture frames and hardware ensuring long-term durability.'
      },
      {
        icon: <Award className="w-8 h-8" />,
        title: 'Premium Fabrics',
        description: 'Choice of 500+ premium fabrics from leading brands including imported European collections.'
      },
      {
        icon: <Clock className="w-8 h-8" />,
        title: 'Fast Execution',
        description: 'Complete living room setup in just 4-6 days with zero disruption to your routine.'
      },
      {
        icon: <Star className="w-8 h-8" />,
        title: 'Custom Designs',
        description: 'Every piece custom-designed to fit your space perfectly and match your style preferences.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Consultation',
        description: 'Home visit to understand your lifestyle, preferences, and space requirements',
        timeline: 'Day 1'
      },
      {
        step: 2,
        title: 'Design & Quote',
        description: '3D visualization of your living room with detailed quotation and fabric samples',
        timeline: 'Day 2'
      },
      {
        step: 3,
        title: 'Manufacturing',
        description: 'Precision manufacturing of furniture in our factory with quality checks',
        timeline: 'Day 3-5'
      },
      {
        step: 4,
        title: 'Installation',
        description: 'Professional installation with furniture arrangement and styling consultation',
        timeline: 'Day 6-7'
      }
    ],
    gallery: [
      '/images/WhatsApp Image 2026-06-11 at 5.30.24 PM (1).jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.24 PM (2).jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.25 PM.jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.26 PM.jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.34.17 PM.jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.34.17 PM (1).jpeg'
    ],
    faqs: [
      {
        question: 'How much does living room design cost?',
        answer: 'Living room design packages range from ₹2 lakhs to ₹6 lakhs depending on furniture selection, materials, and room size. A standard 12x14 ft living room typically costs ₹3-4 lakhs with premium finishes.'
      },
      {
        question: 'What furniture is included in the package?',
        answer: 'Standard package includes TV unit, sofa set (3-seater + 2 single seaters), coffee table, side tables, and storage units. You can customize based on your specific needs and budget.'
      },
      {
        question: 'Can I choose my own sofa fabric?',
        answer: 'Absolutely! We provide 500+ fabric options including velvet, leather, linen, and cotton in various colors and textures. Our designers help you choose based on durability and maintenance requirements.'
      },
      {
        question: 'Do you provide home theater setup?',
        answer: 'Yes, we can integrate home theater systems with acoustic paneling, projector mounts, speaker placement, and complete wiring. We work with authorized dealers for electronics.'
      },
      {
        question: 'How long does installation take?',
        answer: 'Installation is completed in 4-6 days depending on scope. Sofa and furniture installation takes 2-3 days, while wall paneling and false ceiling work adds 2-3 more days.'
      },
      {
        question: 'Do you handle electrical work for TV points?',
        answer: 'Yes, we provide complete electrical work including TV mounting points, additional power sockets, hidden wiring for home theater, and LED light installations with proper MCB connections.'
      }
    ]
  },
  'false-ceilings': {
    title: 'False Ceilings',
    subtitle: 'Elegant ceiling designs with integrated lighting.',
    image: '/images/WhatsApp Image 2026-06-11 at 5.30.26 PM (1).jpeg',
    overview: {
      description: 'Elevate your interiors with our designer false ceiling solutions that combine aesthetics with functionality. We create stunning ceiling designs using gypsum board and POP (Plaster of Paris) with integrated LED lighting, acoustic treatment, and modern geometric patterns. Our false ceilings not only enhance visual appeal but also hide electrical wiring, AC ducts, and structural beams while providing better insulation. Perfect for homes and offices seeking a premium finish.',
      highlights: [
        '10-year structural warranty on framework and gypsum',
        'Acoustic treatment options for better sound insulation',
        'Installation completed in just 2-3 days per room',
        'Integrated LED cove lighting and spotlights',
        'Custom geometric designs and patterns',
        'Complete electrical wiring and fixture installation'
      ],
      images: [
        '/images/WhatsApp Image 2026-06-11 at 5.30.26 PM (1).jpeg',
        '/images/WhatsApp Image 2026-06-11 at 5.30.26 PM (2).jpeg'
      ]
    },
    whatsIncluded: [
      {
        icon: '🏗️',
        name: 'Gypsum Board',
        description: 'High-quality moisture-resistant gypsum boards for durable ceiling'
      },
      {
        icon: '⚙️',
        name: 'Metal Framework',
        description: 'Galvanized steel channels and studs for strong structural support'
      },
      {
        icon: '💡',
        name: 'LED Cove Lighting',
        description: 'Hidden LED strips in coves for ambient indirect lighting'
      },
      {
        icon: '🔦',
        name: 'Spotlights',
        description: 'Recessed LED spotlights for focused task lighting'
      },
      {
        icon: '🎨',
        name: 'POP Design',
        description: 'Decorative POP moldings and designs for elegant patterns'
      },
      {
        icon: '🖌️',
        name: 'Painting',
        description: 'Premium emulsion paint in your choice of color'
      },
      {
        icon: '🔌',
        name: 'Electrical Wiring',
        description: 'Complete concealed wiring for all lights and fixtures'
      },
      {
        icon: '🔇',
        name: 'Acoustic Treatment',
        description: 'Sound absorption materials for better acoustics (optional)'
      }
    ],
    whyChoose: [
      {
        icon: <Shield className="w-8 h-8" />,
        title: '10-Year Warranty',
        description: 'Comprehensive warranty covering framework, gypsum boards, and all structural components against sagging or damage.'
      },
      {
        icon: <Award className="w-8 h-8" />,
        title: 'Acoustic Engineering',
        description: 'Expert acoustic treatment for home theaters and music rooms using specialized sound-absorbing materials.'
      },
      {
        icon: <Clock className="w-8 h-8" />,
        title: '2-3 Days Installation',
        description: 'Lightning-fast installation with minimal disruption. One room completed in just 2-3 days including painting.'
      },
      {
        icon: <Star className="w-8 h-8" />,
        title: 'LED Integration',
        description: 'Complete LED lighting design with dimmers, color options, and smart home integration available.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Site Assessment',
        description: 'Measurement of room dimensions, ceiling height, and understanding design preferences',
        timeline: 'Day 1'
      },
      {
        step: 2,
        title: 'Design & Approval',
        description: '2D and 3D design showing exact ceiling layout with lighting positions for approval',
        timeline: 'Day 1'
      },
      {
        step: 3,
        title: 'Framework Installation',
        description: 'Metal framework installation and gypsum board fitting with precision alignment',
        timeline: 'Day 2'
      },
      {
        step: 4,
        title: 'Finishing & Lights',
        description: 'POP work, painting, electrical wiring, and LED light fixture installation',
        timeline: 'Day 3'
      }
    ],
    gallery: [
      '/images/WhatsApp Image 2026-06-11 at 5.30.26 PM (1).jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.26 PM (2).jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.27 PM.jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.18 PM.jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.34.17 PM.jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.34.17 PM (1).jpeg'
    ],
    faqs: [
      {
        question: 'How much does false ceiling cost per sq ft?',
        answer: 'False ceiling costs range from ₹150 to ₹300 per sq ft depending on design complexity and lighting. Basic gypsum ceiling costs ₹150-180, while designer POP ceilings with multiple levels cost ₹250-300 per sq ft.'
      },
      {
        question: 'What is the difference between gypsum and POP?',
        answer: 'Gypsum is prefabricated boards that are quick to install and more durable, while POP is wet plaster that allows intricate designs but takes longer to dry. We recommend gypsum for larger areas and POP for decorative elements.'
      },
      {
        question: 'Can you install AC ducts in false ceiling?',
        answer: 'Yes, we plan false ceiling height to accommodate AC ducts, plumbing pipes, and electrical conduits. We leave access panels for future maintenance of these services.'
      },
      {
        question: 'How long does installation take?',
        answer: 'A standard 12x12 ft room takes 2-3 days including framework, boarding, finishing, and painting. Multiple rooms can be done simultaneously to reduce overall timeline.'
      },
      {
        question: 'Do you provide warranty on false ceiling?',
        answer: 'Yes, we provide a 10-year structural warranty covering the framework and gypsum boards against sagging, cracks, or structural failure. Paint warranty is 1 year against peeling or discoloration.'
      },
      {
        question: 'Can LED lights be added later to existing ceiling?',
        answer: 'Yes, LED strips can be retrofitted into existing false ceilings if there is cove space. However, we recommend planning lighting during installation for best results and to hide all wiring properly.'
      }
    ]
  },
  'commercial-interiors': {
    title: 'Commercial Interiors',
    subtitle: 'Professional office and retail spaces.',
    image: '/images/WhatsApp Image 2026-06-11 at 5.30.28 PM.jpeg',
    overview: {
      description: 'Transform your workplace into a productive and inspiring environment with our commercial interior solutions. We specialize in office spaces, retail stores, showrooms, and commercial establishments with expertise in space planning, ergonomic workstations, brand integration, and employee welfare areas. Our designs balance functionality with aesthetics while adhering to commercial building codes and safety standards. From startups to large corporations, we deliver professional spaces that reflect your brand identity.',
      highlights: [
        '10-year commercial warranty on all installations',
        'Ergonomic workstation designs for employee productivity',
        'Completed in 5-15 days based on project size',
        'Single point of contact for complete project',
        'Brand color and identity integration throughout',
        'IT infrastructure cabling and networking support'
      ],
      images: [
        '/images/WhatsApp Image 2026-06-11 at 5.30.28 PM.jpeg',
        '/images/WhatsApp Image 2026-06-11 at 5.30.28 PM (1).jpeg'
      ]
    },
    whatsIncluded: [
      {
        icon: '📐',
        name: 'Space Planning',
        description: 'Optimal layout design for maximum space utilization and workflow'
      },
      {
        icon: '💼',
        name: 'Workstations',
        description: 'Modular workstations with storage, cable management, and ergonomic design'
      },
      {
        icon: '🏢',
        name: 'Reception Desk',
        description: 'Branded reception area creating the first impression for visitors'
      },
      {
        icon: '👥',
        name: 'Meeting Rooms',
        description: 'Conference tables, chairs, presentation boards, and AV equipment setup'
      },
      {
        icon: '☕',
        name: 'Pantry Setup',
        description: 'Staff pantry with cabinets, counters, appliances, and seating area'
      },
      {
        icon: '🎨',
        name: 'Branding Elements',
        description: 'Logo displays, wall graphics, and brand color integration'
      },
      {
        icon: '💻',
        name: 'IT Infrastructure',
        description: 'Network cabling, server room setup, and workstation connectivity'
      },
      {
        icon: '💡',
        name: 'Lighting',
        description: 'Task and ambient lighting designed for office productivity'
      }
    ],
    whyChoose: [
      {
        icon: <Shield className="w-8 h-8" />,
        title: '10-Year Commercial Warranty',
        description: 'Comprehensive warranty for commercial installations covering heavy-duty usage and high-traffic areas.'
      },
      {
        icon: <Award className="w-8 h-8" />,
        title: 'Ergonomic Standards',
        description: 'Certified ergonomic workstations and chairs meeting international standards for employee health and productivity.'
      },
      {
        icon: <Clock className="w-8 h-8" />,
        title: '5-15 Days Timeline',
        description: 'Fast execution with weekend and night shifts available to avoid business disruption during working hours.'
      },
      {
        icon: <Star className="w-8 h-8" />,
        title: 'Brand Integration',
        description: 'Complete brand identity integration with your company colors, logos, and design language throughout the space.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Requirement Analysis',
        description: 'Understanding business needs, team size, workflow, and brand guidelines',
        timeline: 'Day 1-2'
      },
      {
        step: 2,
        title: 'Space Planning & Design',
        description: 'Detailed floor plans, 3D visualization, and furniture layouts for approval',
        timeline: 'Day 3-5'
      },
      {
        step: 3,
        title: 'Approvals & Quotation',
        description: 'Final design approval, detailed quotation, and timeline confirmation',
        timeline: 'Day 6'
      },
      {
        step: 4,
        title: 'Execution',
        description: 'Phased execution starting with civil work, followed by furniture and IT setup',
        timeline: 'Day 7-20'
      },
      {
        step: 5,
        title: 'Handover',
        description: 'Complete handover with documentation, training, and warranty certificates',
        timeline: 'Day 21'
      }
    ],
    gallery: [
      '/images/WhatsApp Image 2026-06-11 at 5.30.28 PM.jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.28 PM (1).jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.28 PM (2).jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.30.27 PM (2).jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.34.17 PM.jpeg',
      '/images/WhatsApp Image 2026-06-11 at 5.34.17 PM (1).jpeg'
    ],
    faqs: [
      {
        question: 'How much does office interior cost per sq ft?',
        answer: 'Commercial office interiors range from ₹250 to ₹800 per sq ft depending on finishes and furniture quality. A basic setup costs ₹250-400, mid-range ₹400-600, and premium with imported furniture costs ₹600-800 per sq ft.'
      },
      {
        question: 'Do you handle IT cabling and networking?',
        answer: 'Yes, we provide complete structured cabling for data, voice, and internet connectivity. We work with certified network engineers and can integrate with your existing IT infrastructure or set up new systems.'
      },
      {
        question: 'Can you work on weekends to avoid disruption?',
        answer: 'Absolutely! We offer flexible scheduling including nights and weekends for occupied offices. We can also do phased execution where we complete one section at a time without shutting down entire operations.'
      },
      {
        question: 'What is the warranty on commercial projects?',
        answer: 'We provide 10-year warranty on all structural work and furniture frames, 5 years on hardware and mechanisms, and 1 year on electrical and IT infrastructure. Extended warranties available for critical installations.'
      },
      {
        question: 'Do you provide ergonomic assessments?',
        answer: 'Yes, we conduct complete ergonomic assessments including desk heights, monitor positions, seating angles, and lighting levels. We can also provide ergonomic chairs and accessories meeting international standards.'
      },
      {
        question: 'Can you integrate our company branding?',
        answer: 'Yes, complete brand integration is our specialty. We use your brand colors, logo placements, typography, and design language throughout the space including reception, wall graphics, and even subtle elements like door handles.'
      }
    ]
  }
}

export default function ServiceDetailPage() {
  const params = useParams()
  const id = params.id as string
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Get service data or fallback
  const data = serviceDataMap[id] || {
    title: id.replace(/-/g, ' ').toUpperCase(),
    subtitle: 'Premium interior solutions tailored for you.',
    image: '/images/WhatsApp Image 2026-06-11 at 5.30.21 PM.jpeg',
    overview: {
      description: 'Expert interior design services with top-quality materials and rapid execution.',
      highlights: ['Premium Materials', 'Expert Execution', 'Fast Delivery'],
      images: ['/images/WhatsApp Image 2026-06-11 at 5.30.21 PM.jpeg']
    },
    whatsIncluded: [],
    whyChoose: [],
    process: [],
    gallery: [],
    faqs: []
  }

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[70vh] w-full">
        <Image src={data.image} alt={data.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-gray-900 via-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-heading drop-shadow-xl">
                {data.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-8 drop-shadow-lg">
                {data.subtitle}
              </p>
              <Button size="lg" asChild className="bg-brand-orange-500 hover:bg-brand-orange-600 shadow-glow">
                <Link href="/contact">Request Custom Quote</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6 font-heading">
                Overview
              </h2>
              <p className="text-lg text-brand-gray-600 leading-relaxed mb-8">
                {data.overview.description}
              </p>
              <div className="space-y-3">
                {data.overview.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-brand-orange-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-brand-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 gap-6"
            >
              {data.overview.images.map((img: string, index: number) => (
                <div key={index} className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image src={img} alt={`${data.title} ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      {data.whatsIncluded && data.whatsIncluded.length > 0 && (
        <section className="section-padding bg-brand-gray-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4 font-heading">
                What's Included
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                Everything you need for a complete transformation
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.whatsIncluded.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-brand-gray-200"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg text-brand-gray-900 mb-2">{item.name}</h3>
                  <p className="text-sm text-brand-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Timeline */}
      {data.process && data.process.length > 0 && (
        <section className="section-padding bg-brand-gray-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4 font-heading">
                Our Process
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                From consultation to handover - a seamless journey
              </p>
            </motion.div>
            <div className="max-w-4xl mx-auto">
              {data.process.map((step: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-brand-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-xl text-brand-gray-900">{step.title}</h3>
                      <span className="text-sm font-medium text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
                        {step.timeline}
                      </span>
                    </div>
                    <p className="text-brand-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {data.gallery && data.gallery.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4 font-heading">
                Our Work
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                See what we've created for our clients
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.gallery.map((img: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => setLightboxIndex(index)}
                >
                  <Image src={img} alt={`${data.title} Gallery ${index + 1}`} fill className="object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="section-padding bg-brand-gray-50">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4 font-heading">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-brand-gray-600">
                Everything you need to know about our {data.title.toLowerCase()}
              </p>
            </motion.div>
            <div className="space-y-4">
              {data.faqs.map((faq: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-sm border border-brand-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-lg text-brand-gray-900 pr-4">
                      {faq.question}
                    </span>
                    {openFAQ === index ? (
                      <ChevronUp className="flex-shrink-0 text-brand-orange" size={24} />
                    ) : (
                      <ChevronDown className="flex-shrink-0 text-brand-gray-400" size={24} />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-brand-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose BIOSPACE */}
      {data.whyChoose && data.whyChoose.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4 font-heading">
                Why Choose BIOSPACE
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                Experience the BIOSPACE difference
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.whyChoose.map((reason: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 p-6 bg-brand-gray-50 rounded-2xl border border-brand-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
                      {reason.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-brand-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-brand-gray-600">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-orange-500 to-brand-orange-600">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading drop-shadow-lg">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
              Get a detailed quote and 3D design for your {data.title.toLowerCase()}. Our experts will visit within 24-48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="bg-white text-brand-orange-500 hover:bg-brand-gray-50 shadow-xl text-lg px-8 py-6">
                <Link href="/contact">Get Your Custom Quote</Link>
              </Button>
              <div className="flex items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">1000+ Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">30-Year Warranty</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <div className="relative max-w-6xl max-h-screen">
              <Image
                src={data.gallery[lightboxIndex]}
                alt={`Gallery ${lightboxIndex + 1}`}
                width={1200}
                height={800}
                className="object-contain max-h-screen"
              />
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
