export default function Offers({ userId, t }) {
  if (userId === 22006) return null

  const items = [
    { id: 1, title: t('offers.limited', 'Limited-time bundles'), desc: t('offers.limitedDesc', 'Exclusive kits across brands.') },
    { id: 2, title: t('offers.trade', 'Trade partner pricing'), desc: t('offers.tradeDesc', 'Volume benefits for professionals.') },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">{t('offers.title', 'Current offers')}</h2>
              <p className="text-white/80 mb-6">{t('offers.subtitle', 'Curated deals designed for architects and makers.')}</p>
              <a href="/offers" className="inline-flex items-center rounded-full bg-white text-gray-900 px-5 py-2.5 font-medium hover:bg-gray-100">{t('offers.viewAll', 'View all')}</a>
            </div>
            <ul className="space-y-4">
              {items.map((it) => (
                <li key={it.id} className="bg-white/10 rounded-lg p-4">
                  <p className="font-medium">{it.title}</p>
                  <p className="text-white/80 text-sm">{it.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
