import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { blogCards, teamMembers } from '../data/content'

function Blog() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:[direction:rtl]">
            <div className="space-y-4 [direction:ltr]">
              <h3 className="font-oswald text-3xl font-semibold text-slate-900">
                Bienvenue sur notre Blog
              </h3>
              <p className="text-lg font-semibold text-slate-700">
                Découvrez les récits, conseils et astuces de voyage. Inspirez-vous de nos articles
                pour préparer votre prochaine aventure !
              </p>
              <p className="text-slate-600">
                Nous partageons des expériences inoubliables, des destinations de rêve et des
                conseils pratiques pour tous les types de voyageurs. Que vous soyez un globe-trotteur
                chevronné ou que vous planifiez votre premier voyage, notre blog est une source
                précieuse d&apos;informations pour vous guider.
              </p>
              <a
                className="inline-flex rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-600"
                href="#Cardblog"
              >
                Lire nos articles
              </a>
            </div>
            <div className="[direction:ltr]">
              <img
                src="/assets/images/decker.jpg"
                alt="Blog de voyage"
                className="w-full rounded-2xl shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog cards */}
      <section id="Cardblog" className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-orange-500">Blogs</h2>
            <p className="mt-2 text-slate-600">
              Découvrez nos derniers articles et inspirations de voyage
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogCards.map((card, idx) => (
              <article
                key={`${card.title}-${idx}`}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img src={card.image} alt={card.title} className="h-56 w-full object-cover" />
                <div className="space-y-1 p-4">
                  <h6 className="text-xs uppercase tracking-wide text-slate-500">{card.category}</h6>
                  <h5 className="text-lg font-semibold text-orange-500">{card.title}</h5>
                  <p className="text-sm text-slate-500">{card.author}</p>
                  <p className="text-xs text-slate-500">Publié le : {card.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Explore section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative">
              <img
                src="/assets/images/office.jpg"
                alt="Blog principal"
                className="w-full rounded-2xl shadow-lg"
              />
              <img
                src="/assets/images/office.jpg"
                alt="Équipe"
                className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">
                Explorez notre Blog <br />
                <span className="text-orange-500">Inspirez vos Voyages</span>
              </h2>
              <p className="mt-4 text-slate-600">
                Notre blog est une source d&apos;inspiration pour vos aventures. Découvrez des
                conseils, récits et astuces pour planifier vos voyages et explorer le monde de
                manière unique.
              </p>
              <div className="mt-5 space-y-4">
                {[
                  {
                    title: 'Nos Articles',
                    text: 'Des récits captivants et des guides de voyage détaillés pour vous inspirer.',
                  },
                  {
                    title: 'Nos Conseils',
                    text: 'Des astuces pratiques pour voyager intelligemment et économiser.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <span className="text-lg font-semibold">✦</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-slate-900">{item.title}</h5>
                      <p className="text-sm text-slate-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 text-center">
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
                      <a key={idx} href="#" className="hover:text-orange-500">
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
    </div>
  )
}

export default Blog
