import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  { key: 'architectural', title: 'Architectural', desc: 'Curtain walls, facades, and structural glazing.' },
  { key: 'interior', title: 'Interior', desc: 'Partitions, balustrades, and bespoke glass furniture.' },
  { key: 'exterior', title: 'Exterior', desc: 'Canopies, terraces, and outdoor solutions.' },
]

export default function Promo({ t }) {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.promo-card', {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%'
        }
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
          {t('promo.title', 'Discover our categories')}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((c) => (
            <div key={c.key} className="promo-card rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium mb-2">{c.title}</h3>
              <p className="text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
