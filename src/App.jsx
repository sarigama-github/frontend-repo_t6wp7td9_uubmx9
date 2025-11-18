import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import HeroCarousel from './components/HeroCarousel'
import Promo from './components/Promo'
import Offers from './components/Offers'
import About from './components/About'
import Contact from './components/Contact'

// simple i18n dictionary and helper
const DICT = {
  en: {
    'hero.subtitle': 'Global glass innovation across six distinctive brands.',
    'cta.startShopping': 'Start Shopping',
    'promo.title': 'Discover our categories',
    'offers.title': 'Current offers',
    'offers.subtitle': 'Curated deals designed for architects and makers.',
    'offers.viewAll': 'View all',
    'offers.limited': 'Limited-time bundles',
    'offers.limitedDesc': 'Exclusive kits across brands.',
    'offers.trade': 'Trade partner pricing',
    'offers.tradeDesc': 'Volume benefits for professionals.',
    'about.title': '50 years of innovation and craftsmanship',
    'about.copy': 'For half a century, PAP GROUP has pushed the boundaries of glass—blending engineering precision with artisanal detail. From towering facades to refined interiors, our six brands unite under one vision: create luminous spaces that endure.',
    'contact.title': 'Contact',
    'contact.subtitle': 'We’re here to help with specifications, pricing, and partnerships.'
  }
}

function useI18n() {
  const params = new URLSearchParams(window.location.search)
  const lang = params.get('lang') || 'en'
  const strings = DICT[lang] || DICT.en
  return (key, fallback) => strings[key] || fallback || key
}

export default function App() {
  const t = useI18n()
  const [brand, setBrand] = useState(null)

  // Fake user detection (could be set from backend auth later)
  const params = new URLSearchParams(window.location.search)
  const userId = Number(params.get('uid')) || null

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeroCarousel onBrandChange={setBrand} t={t} />
      <Promo t={t} />
      <Offers t={t} userId={userId} />
      <About t={t} />
      <Contact t={t} />
    </div>
  )
}
