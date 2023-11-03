import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'

export const openGraph: OpenGraph = {
  title: 'ft_transcendence Module Picker',
  // description: 'ft_transcendence Module Picker',
  url: 'https://tcdmodules.vercel.app',
  siteName: 'Next.js',
  images: [
    {
      url: 'https://placehold.co/600x315/tomato/white/png?text=ft_transcendence%0AModule+Picker&font=montserrat',
      width:  600,
      height: 315,
    },
    {
      url: 'https://placehold.co/1200x630/tomato/white/png?text=ft_transcendence%0AModule+Picker&font=montserrat',
      width: 1200,
      height: 630,
    },
  ],
  locale: 'en_US',
  type: 'website',
}