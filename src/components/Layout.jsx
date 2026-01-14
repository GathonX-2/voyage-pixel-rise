import { NavLink, useLocation } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react'
import PropTypes from 'prop-types'

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'A propos', to: '/about' },
  { label: 'Service', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contacts' },
]

function Layout({ children }) {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src="/assets/images/logo-default-208x46.png"
              alt="Voyage"
              className="h-10 w-auto"
            />
          </NavLink>
          <nav className="hidden items-center gap-6 text-sm font-semibold uppercase tracking-wide text-slate-700 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  [
                    'pb-1 transition',
                    isActive ? 'text-sky-600 border-b-2 border-sky-500' : 'hover:text-sky-500',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <a
            href="/contacts"
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-sky-600 active:translate-y-0"
          >
            Réservez maintenant
          </a>
        </div>
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-950 py-16 text-slate-200">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <NavLink to="/">
                <img
                  src="/assets/images/logo-inverse-208x46.png"
                  alt="Voyage"
                  className="h-10 w-auto"
                />
              </NavLink>
              <p className="mt-3 text-sm text-slate-400">
                Votre partenaire de voyage pour des expériences inoubliables. Découvrez le monde
                avec nous !
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Pages</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        isActive || location.pathname === link.to ? 'text-white' : 'hover:text-white'
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Contact</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-sky-400" />
                  Adresse : Hell-Ville, Nosy-Be, DIANA, Madagascar
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-sky-400" />
                  Téléphone : +261 (32) 00 000 00
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-sky-400" />
                  <a href="mailto:info@isalndmanager.com" className="hover:text-white">
                    info@isalndmanager.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Suivez-nous</h4>
              <div className="mt-3 flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                  <a
                    key={idx}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-sky-500"
                    href="#"
                    aria-label="Social"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-white/5 pt-6 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Tous droits réservés. Design par Island Manager
          </div>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
