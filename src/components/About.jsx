export default function About({ t }) {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/80"></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{t('about.title', '50 years of innovation and craftsmanship')}</h2>
          <p className="text-white/90 text-lg leading-relaxed">
            {t('about.copy', 'For half a century, PAP GROUP has pushed the boundaries of glass—blending engineering precision with artisanal detail. From towering facades to refined interiors, our six brands unite under one vision: create luminous spaces that endure.')}
          </p>
        </div>
      </div>
    </section>
  )
}
