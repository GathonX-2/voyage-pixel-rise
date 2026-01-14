import { MapPin, Phone, Mail, CalendarClock } from 'lucide-react'

function Contacts() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:[direction:rtl]">
            <div className="space-y-4 [direction:ltr]">
              <h3 className="font-oswald text-3xl font-semibold text-slate-900">
                Contactez-nous pour vos Prochains Voyages
              </h3>
              <p className="text-lg font-semibold text-slate-700">
                Nous sommes là pour répondre à toutes vos questions et vous aider à planifier des
                aventures inoubliables.
              </p>
              <p className="text-slate-600">
                Que vous souhaitiez en savoir plus sur nos offres, demander des conseils ou réserver
                un voyage, notre équipe dédiée est disponible pour vous guider. Nous vous garantissons
                une assistance rapide et professionnelle.
              </p>
              <a
                className="inline-flex rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-600"
                href="#form-contact"
              >
                Nous Contacter
              </a>
            </div>
            <div className="[direction:ltr]">
              <img
                src="/assets/images/call.jpg"
                alt="Contactez notre agence de voyage"
                className="w-full rounded-2xl shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-slate-50 py-16" id="form-contact">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">Contactez-nous</h3>
              <p className="mt-2 text-slate-600">
                Vous pouvez nous contacter de la manière qui vous convient le mieux. Nous sommes
                disponibles 24h/24 et 7j/7 par fax ou par e-mail. Vous pouvez également utiliser le
                formulaire de contact ci-dessous ou visiter notre bureau en personne.
              </p>
              <form className="mt-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">Prénom</label>
                    <input
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">Nom</label>
                    <input
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">E-mail</label>
                    <input
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
                      type="email"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">Téléphone</label>
                    <input
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-sky-600"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-4 shadow-soft">
                <iframe
                  title="Google Map"
                  className="h-64 w-full rounded-xl"
                  src="https://maps.google.com/maps?q=9870%20St%20Vincent%20Place%2C%20Glasgow%2C%20DC%2045%20Fr%2045.&output=embed"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <article className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm text-center">
                  <div className="text-lg font-semibold text-slate-900">Adresse</div>
                  <p className="mt-2 text-sm text-slate-600">
                    Hell-Ville, Nosy-Be, DIANA <br />
                    MADAGASCAR
                  </p>
                </article>
                <article className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm text-center">
                  <div className="text-lg font-semibold text-slate-900">Téléphones</div>
                  <p className="mt-2 text-sm text-slate-600">
                    +261 (32) 00 000 00 <br />+261 (34) 00 000 00
                  </p>
                </article>
                <article className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm text-center">
                  <div className="text-lg font-semibold text-slate-900">E-mail</div>
                  <p className="mt-2 text-sm text-slate-600">
                    info@islandmanager.com
                  </p>
                </article>
                <article className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm text-center">
                  <div className="text-lg font-semibold text-slate-900">Horaires</div>
                  <p className="mt-2 text-sm text-slate-600">
                    Lun–Ven : 07:30 – 16:00 <br />
                    Sam–Dim : Non disponible
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact info boxes */}
      <section className="bg-white py-16 text-center">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 border border-slate-200 rounded-2xl overflow-hidden">
            <article className="border-slate-200 p-6">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-50 text-sky-500">
                <MapPin className="h-6 w-6" />
              </div>
              <h6 className="mt-4 text-lg font-semibold text-slate-900">Adresse</h6>
              <p className="mt-2 text-sm text-slate-600">
                Hell-Ville, Nosy-Be, DIANA
                <br />
                MADAGASCAR
              </p>
            </article>
            <article className="border-slate-200 p-6">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-50 text-sky-500">
                <Phone className="h-6 w-6" />
              </div>
              <h6 className="mt-4 text-lg font-semibold text-slate-900">Téléphones</h6>
              <p className="mt-2 text-sm text-slate-600">
                +261 (32) 00 000 00
                <br />
                +261 (34) 00 000 00
              </p>
            </article>
            <article className="border-slate-200 p-6">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-50 text-sky-500">
                <Mail className="h-6 w-6" />
              </div>
              <h6 className="mt-4 text-lg font-semibold text-slate-900">E-mail</h6>
              <p className="mt-2 text-sm text-slate-600">info@islandmanager.com</p>
            </article>
            <article className="border-slate-200 p-6">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-50 text-sky-500">
                <CalendarClock className="h-6 w-6" />
              </div>
              <h6 className="mt-4 text-lg font-semibold text-slate-900">Horaires d'ouverture</h6>
              <p className="mt-2 text-sm text-slate-600">
                Lun–Ven : 07:30 – 16:00
                <br />
                Sam–Dim : Non disponible
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacts
