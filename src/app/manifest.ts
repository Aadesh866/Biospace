import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BIOSPACE - Interior Design & Build Services',
    short_name: 'BIOSPACE',
    description: 'Transform your home with BIOSPACE - India\'s fastest interior design firm. Complete makeovers in under a week with 30-year warranty.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#FF6B35',
    icons: [
      {
        src: '/images/Logo.jpeg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  }
}