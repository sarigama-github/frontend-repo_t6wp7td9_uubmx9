import { useMemo, useState } from 'react'
import { BRANDS } from './HeroCarousel'

export default function Contact({ t }) {
  const [active, setActive] = useState(BRANDS[0])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative flex items-center justify-center">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 rounded-full border-2 border-gray-200" style={{ animation: 'spin 18s linear infinite' }}></div>
            <div className="absolute inset-4 rounded-full border-2 border-gray-200 opacity-60" style={{ animation: 'spin 28s linear infinite reverse' }}></div>

            <div className="absolute inset-0 grid place-items-center">
              <div className="w-24 h-24 rounded-full bg-white shadow flex items-center justify-center text-sm font-semibold" style={{ color: active.color }}>
                {active.name}
              </div>
            </div>

            <div className="absolute inset-0">
              <div className="w-full h-full relative">
                {BRANDS.map((b, i) => {
                  const angle = (i / BRANDS.length) * 2 * Math.PI
                  const r = 120
                  const x = 128 + r * Math.cos(angle)
                  const y = 128 + r * Math.sin(angle)
                  return (
                    <button key={b.key} onMouseEnter={() => setActive(b)} style={{ left: x, top: y }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 text-xs bg-white rounded-full shadow px-3 py-1 hover:scale-105 transition">
                      {b.name}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">{t('contact.title', 'Contact')}</h3>
          <p className="text-gray-600 mb-6">{t('contact.subtitle', 'We’re here to help with specifications, pricing, and partnerships.')}</p>
          <div className="space-y-3">
            <p><span className="font-medium">Email:</span> <a className="text-blue-600 hover:underline" href="mailto:hello@pap.group">hello@pap.group</a></p>
            <p><span className="font-medium">Phone:</span> <a className="text-blue-600 hover:underline" href="tel:+1234567890">+1 (234) 567-890</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}
