import { useState, useMemo, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'

const BRANDS = [
  { key: 'pca', name: 'PCA', color: '#6EE7F9', gradient: ['#0ea5e9', '#22d3ee'], cta: '/shop/pca' },
  { key: 'premium', name: 'PREMIUM', color: '#FDE68A', gradient: ['#eab308', '#fde047'], cta: '/shop/premium' },
  { key: 'sparke', name: 'SPARKE', color: '#FCA5A5', gradient: ['#ef4444', '#f87171'], cta: '/shop/sparke' },
  { key: 'minimal', name: 'MINIMAL', color: '#A7F3D0', gradient: ['#10b981', '#34d399'], cta: '/shop/minimal' },
  { key: 'terrace', name: 'TERRACE', color: '#93C5FD', gradient: ['#3b82f6', '#60a5fa'], cta: '/shop/terrace' },
  { key: 'arca', name: 'ARCA', color: '#DDD6FE', gradient: ['#8b5cf6', '#a78bfa'], cta: '/shop/arca' },
]

export default function HeroCarousel({ onBrandChange, t }) {
  const [index, setIndex] = useState(0)
  const current = BRANDS[index]
  const blobRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    if (onBrandChange) onBrandChange(current)
  }, [index])

  useEffect(() => {
    // subtle morphing blob using GSAP
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: 'sine.inOut', duration: 6 } })
      tl.to(blobRef.current, { borderRadius: '35% 65% 60% 40% / 40% 35% 65% 60%', rotate: 15 })
        .to(blobRef.current, { borderRadius: '60% 40% 35% 65% / 60% 65% 35% 40%', rotate: -10 })
        .to(blobRef.current, { borderRadius: '50%', rotate: 0 })
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    // transition background gradient per brand with GSAP
    const [from, to] = current.gradient
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, { '--from': from, '--to': to, duration: 0.8, ease: 'power2.out' })
      gsap.fromTo(
        '.hero-title',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
      )
    })
    return () => ctx.revert()
  }, [current])

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % BRANDS.length), 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section ref={bgRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(120deg, var(--from, #0ea5e9), var(--to, #22d3ee))' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div ref={blobRef} className="absolute -top-20 -left-20 w-[40vw] h-[40vw] max-w-[720px] max-h-[720px] bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-[45vw] h-[45vw] max-w-[820px] max-h-[820px] bg-black/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full px-6 md:px-10 text-white">
        <div className="flex flex-col items-center text-center">
          <AnimatePresence mode="wait">
            <motion.h1 key={current.key} className="hero-title text-5xl md:text-7xl font-semibold tracking-tight drop-shadow-lg"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6 }}>
              PAP GROUP
            </motion.h1>
          </AnimatePresence>
          <p className="mt-4 md:mt-6 text-lg md:text-xl/relaxed max-w-2xl text-white/90">
            {t('hero.subtitle', 'Global glass innovation across six distinctive brands.')}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {BRANDS.map((b, i) => (
              <button key={b.key} onClick={() => setIndex(i)}
                className={`px-3 py-1.5 rounded-full text-sm transition-all ${i===index ? 'bg-white text-gray-900 shadow' : 'bg-white/20 hover:bg-white/30 text-white'}`}
                aria-label={`Go to ${b.name}`}>
                {b.name}
              </button>
            ))}
          </div>

          <a href={current.cta} className="mt-8 inline-flex items-center justify-center rounded-full bg-white/95 text-gray-900 px-6 py-3 font-medium hover:bg-white transition-colors">
            {t('cta.startShopping', 'Start Shopping')}
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-widest uppercase">
        {current.name}
      </div>
    </section>
  )
}

export { BRANDS }
