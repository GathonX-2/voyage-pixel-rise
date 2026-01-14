import { Building2, Map, Plane, Sun, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { timeline, destinations, teamMembers } from '../data/content'

function About() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:[direction:rtl]">
            <div className="space-y-4 [direction:ltr]">
              <h3 className="font-oswald text-3xl font-semibold text-slate-900">
                Bonjour, nous sommes Agence du Voyage
              </h3>
              <p className="text-lg font-semibold text-slate-700">
                Nous sommes passionnés par l&apos;art de voyager et déterminés à vous offrir des
                expériences uniques et inoubliables, adaptées à vos envies.
              </p>
              <p className="text-slate-600">
                Que vous rêviez de plages exotiques, de paysages époustouflants ou d&apos;aventures
                culturelles, notre mission est de transformer vos rêves en réalité. Nous proposons
                une large gamme de services, allant de la réservation de billets d&apos;avion aux
                séjours personnalisés, en passant par des circuits organisés pour explorer le monde.
              </p>
              <a
                className="inline-flex rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-600"
                href="#services"
              >
                En savoir plus
              </a>
            </div>
            <div className="[direction:ltr]">
              <img
                src="/assets/images/ship.jpg"
                alt="À propos de nous"
                className="w-full rounded-2xl shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services minimal */}
      <section id="services" className="bg-slate-100 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 text-slate-700 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: Plane,
                title: "Billets d'Avion",
                text: "Réservez des billets d'avion pour n'importe quelle destination dans le monde. Réservation en ligne rapide en quelques clics.",
              },
              {
                icon: Map,
                title: 'Voyages et Croisières',
                text: 'Circuits, excursions et croisières variés pour des expériences uniques.',
              },
              {
                icon: Building2,
                title: "Réservations d'Hôtels",
                text: 'Large sélection d’hôtels, des 5 étoiles aux petites propriétés, dans le monde entier.',
              },
              {
                icon: Sun,
                title: "Circuits d'Été Personnalisés",
                text: 'Des circuits estivaux exclusifs et mémorables, adaptés à vos envies.',
              },
            ].map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 text-3xl text-sky-500">
                  <Icon className="h-7 w-7" />
                </div>
                <h6 className="text-lg font-semibold text-slate-900">{title}</h6>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-slate-800 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-[1.4fr,1fr]">
            <div>
              <h3 className="font-oswald text-3xl font-semibold">Chronologie de l&apos;Agence</h3>
              <p className="mt-3 text-slate-200">
                Notre histoire est marquée par une passion pour le voyage et un engagement à offrir
                des expériences inoubliables à nos clients à travers le monde.
              </p>
              <div className="mt-8 space-y-6">
                {timeline.map((item, idx) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl bg-white/5 p-4 shadow-sm ring-1 ring-white/10"
                  >
                    <div className="text-sm font-semibold text-sky-200">{item.date}</div>
                    <div>
                      <h5 className="text-lg font-semibold text-white">{item.title}</h5>
                      <p className="mt-2 text-sm text-slate-200">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              {[0, 1, 2].map((i) => (
                <img
                  key={i}
                  src="/assets/images/tips.jpg"
                  alt="Notre équipe en action"
                  className="w-full rounded-2xl shadow-soft"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-slate-100 py-16 text-center">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl">
            <h3 className="font-oswald text-3xl font-semibold text-slate-900">Nos Destinations</h3>
            <p className="mt-3 text-slate-600">
              Découvrez nos destinations phares à travers le monde. Chaque lieu est soigneusement
              sélectionné pour vous offrir des expériences uniques et inoubliables.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((dest) => (
              <div
                key={dest.name}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
              >
                <div className="relative">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="h-56 w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="py-3 text-lg font-semibold text-slate-900">{dest.name}</div>
              </div>
            ))}
          </div>
          <a
            className="mt-8 inline-flex rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-600"
            href="#"
          >
            Voir toutes les destinations
          </a>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 text-center bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="font-oswald text-3xl font-semibold text-slate-900">RENCONTREZ NOTRE ÉQUIPE</h3>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm"
              >
                <img
                  className="mx-auto h-32 w-32 rounded-full object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div className="mt-4">
                  <h5 className="text-lg font-semibold text-slate-900">{member.name}</h5>
                  <p className="text-sm text-slate-500">{member.role}</p>
                  <div className="mt-3 flex items-center justify-center gap-3 text-slate-400">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                      <a key={idx} href="#" className="hover:text-sky-500">
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA gradient */}
      <section className="bg-slate-800 py-10 text-center text-white">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-lg">
            <strong>Les meilleurs prix pour voyager !</strong>{' '}
            <span>Choisissez votre destination préférée !</span>{' '}
            <a className="font-semibold text-sky-200 underline" href="#">
              Réservez votre voyage !
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
