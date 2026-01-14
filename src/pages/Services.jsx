import { Plane, Building2, Compass, Image as ImageIcon, Quote } from 'lucide-react'
import { servicesCards, testimonials } from '../data/content'
import SimpleSlider from '../components/SimpleSlider'

function Services() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:[direction:rtl]">
            <div className="space-y-4 [direction:ltr]">
              <h3 className="font-oswald text-3xl font-semibold text-slate-900">Nos Services</h3>
              <p className="text-lg font-semibold text-slate-700">
                Explorez le monde avec nos services sur mesure. Nous nous engageons à rendre chaque
                voyage fluide, agréable et inoubliable.
              </p>
              <p className="text-slate-600">
                Que vous souhaitiez réserver un vol, un hôtel, ou organiser une aventure complète,
                notre agence est là pour vous. Nous proposons des croisières, des circuits
                personnalisés, des séjours tout compris et bien plus encore. Faites-nous confiance
                pour transformer vos rêves de voyage en réalité.
              </p>
              <a
                className="inline-flex rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-600"
                href="#services-cards"
              >
                Découvrez nos services
              </a>
            </div>
            <div className="[direction:ltr]">
              <img
                src="/assets/images/ship.jpg"
                alt="Nos services de voyage"
                className="w-full rounded-2xl shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section id="services-cards" className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {servicesCards.map(({ title, text, icon: Icon, highlight }) => (
              <div
                key={title}
                className={`h-full rounded-2xl p-6 shadow-sm ${highlight ? 'bg-orange-500 text-white' : 'border border-slate-100 bg-white text-slate-900'}`}
              >
                <div className="mb-3">
                  <Icon className={`h-8 w-8 ${highlight ? 'text-white' : 'text-orange-500'}`} />
                </div>
                <h5 className={`text-lg font-semibold ${highlight ? 'text-white' : 'text-orange-500'}`}>
                  {title}
                </h5>
                <p className={`mt-2 text-sm leading-relaxed ${highlight ? 'text-orange-50' : 'text-slate-600'}`}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie + texte */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5, 6].map((idx) => (
                <img
                  key={idx}
                  src="/assets/images/passport.jpg"
                  alt={`Destination ${idx}`}
                  className="h-full w-full rounded-xl object-cover shadow-sm"
                />
              ))}
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-slate-900">Explorez le Monde avec Nous</h2>
              <p className="mt-4 text-slate-600">
                Découvrez les destinations les plus prisées et vivez des expériences inoubliables.
                Notre agence vous propose des circuits personnalisés, des séjours tout compris, et
                des aventures uniques adaptées à vos envies. Chaque destination est soigneusement
                choisie pour vous offrir le meilleur du voyage.
              </p>
              <p className="mt-3 text-slate-600">
                Que vous rêviez de plages paradisiaques, de montagnes majestueuses ou de villes
                animées, nous sommes là pour vous guider à chaque étape de votre voyage.
              </p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-orange-600"
              >
                <Plane className="h-4 w-4" />
                Réservez Maintenant
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA orange */}
      <section className="bg-orange-500 py-14 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center space-y-3">
          <h2 className="text-3xl font-semibold">Découvrez les Merveilles du Monde</h2>
          <p>
            Partez à l&apos;aventure avec notre agence de voyage. Que vous rêviez de plages
            paradisiaques, de montagnes spectaculaires ou de villes animées, nous sommes là pour
            rendre vos rêves de voyage réalité.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-orange-600 transition hover:-translate-y-0.5 hover:bg-orange-50"
          >
            <ImageIcon className="h-4 w-4" />
            Explorez Nos Offres
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-16 text-center">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="font-oswald text-3xl font-semibold text-slate-900">Témoignages</h3>
          <div className="mt-10">
            <SimpleSlider
              slides={testimonials}
              interval={4500}
              renderSlide={(item) => (
                <article className="flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-sm">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-base font-semibold text-slate-900">{item.name}</p>
                      <p className="text-sm text-slate-500">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700">{item.text}</p>
                  <div className="flex items-center gap-2 text-orange-500">
                    <Quote className="h-4 w-4" />
                    <span className="text-xs uppercase tracking-wide">Avis vérifié</span>
                  </div>
                </article>
              )}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
