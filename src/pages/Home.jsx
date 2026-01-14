import { toast } from 'react-hot-toast'
import { tours, servicesHome, posts, testimonials } from '../data/content'
import SimpleSlider from '../components/SimpleSlider'

function Home() {
  const handleSearch = (event) => {
    event.preventDefault()
    toast.success('Recherche lancée !')
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero (slider) */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/girlTravel.jpg')" }}
        />
        <div className="absolute inset-0 -z-10 bg-slate-900/60" />
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center">
          <div className="max-w-xl text-white space-y-6">
            <SimpleSlider
              slides={[
                {
                  title: 'Des centaines de destinations incroyables',
                  text: `Nous proposons une variété de destinations, allant des lieux exotiques aux plus insolites. Découvrez des villes emblématiques comme Paris, Rio de Janeiro, Le Caire, et bien d'autres.`,
                },
                {
                  title: 'Le voyage de vos rêves',
                  text: `Notre agence est prête à vous offrir des vacances sur mesure, adaptées à vos envies et besoins. Que ce soit une croisière exotique ou un séjour dans votre station préférée, vivez une expérience inoubliable.`,
                },
                {
                  title: 'Des idées de voyage uniques',
                  text: `Notre équipe partage avec vous des idées de voyage uniques chaque semaine : photos, vidéos et articles sur des sentiers touristiques peu connus. Découvrez les secrets des lieux où vous n'êtes jamais allés !`,
                },
              ]}
              renderSlide={(item) => (
                <div className="space-y-3">
                  <h1 className="font-oswald text-4xl font-semibold leading-tight md:text-5xl">
                    {item.title}
                  </h1>
                  <p className="text-lg text-slate-100">{item.text}</p>
                  <button className="rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10">
                    En savoir plus
                  </button>
                </div>
              )}
            />
          </div>

          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-soft md:ml-auto">
            <h3 className="text-xl font-semibold text-slate-900">Trouvez votre voyage</h3>
            <form className="mt-4 space-y-4" onSubmit={handleSearch}>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">De</label>
                  <select
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
                    defaultValue="New York"
                  >
                    <option>New York</option>
                    <option>Lisbonne</option>
                    <option>Stockholm</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">À</label>
                  <select
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
                    defaultValue="Chicago"
                  >
                    <option>Chicago</option>
                    <option>Madrid</option>
                    <option>Paris</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Date de départ</label>
                  <input
                    type="date"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Durée</label>
                  <select className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100">
                    <option>Toutes durées</option>
                    <option>2 jours</option>
                    <option>3 jours</option>
                    <option>4 jours</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Adultes</label>
                  <input
                    type="number"
                    min="0"
                    defaultValue="2"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Enfants</label>
                  <input
                    type="number"
                    min="0"
                    defaultValue="0"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-sky-600 active:translate-y-0"
              >
                Rechercher un vol
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Tours */}
      <section className="bg-white py-16" id="tours">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Tours populaires</p>
              <h2 className="font-oswald text-3xl font-semibold text-slate-900">
                Nos Meilleures Excursions
              </h2>
            </div>
            <button className="self-start rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-500">
              Voir tous
            </button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tours.map((tour) => (
              <article
                key={tour.title}
                className="group overflow-hidden rounded-2xl border border-slate-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                  <button className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-soft transition hover:bg-white">
                    En savoir plus
                  </button>
                </div>
                <div className="space-y-1 px-4 py-4">
                  <h3 className="text-lg font-semibold text-slate-900">{tour.title}</h3>
                  <p className="text-sm font-semibold text-slate-600">{tour.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-16" id="services">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-oswald text-3xl font-semibold text-slate-900">nos services</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {servicesHome.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-3 inline-flex rounded-full bg-sky-50 p-3 text-sky-500">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-lg font-semibold text-slate-900">{title}</p>
                <p className="mt-2 text-sm text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-white py-16" id="blog">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-oswald text-3xl font-semibold text-slate-900">Dernières Nouvelles</h2>
          <div className="mt-10">
            <SimpleSlider
              slides={posts}
              interval={4000}
              renderSlide={(post) => (
                <article className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
                  <div className="relative h-56">
                    <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow">
                      {post.tag}
                    </div>
                  </div>
                  <div className="space-y-3 p-5 text-left">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-slate-500">
                      <span>par {post.author}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{post.title}</h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-sky-600">
                      <span>12 commentaires</span>
                    </div>
                  </div>
                </article>
              )}
            />
          </div>
          <button className="mt-10 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800">
            voir tous les articles du blog
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-oswald text-3xl font-semibold text-slate-900">Témoignages</h2>
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
                </article>
              )}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-800 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Réservez en ligne</p>
              <h3 className="text-3xl font-semibold">Réservez un voyage sans quitter votre maison</h3>
              <p className="mt-2 text-slate-200">
                Grâce à notre site web, vous pouvez réserver n&apos;importe quel voyage en seulement
                quelques clics.
              </p>
            </div>
            <a
              href="/contacts"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-sky-100"
            >
              Réserver maintenant
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
