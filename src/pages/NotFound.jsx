import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4 text-center text-slate-900">
      <h1 className="text-5xl font-bold text-slate-900">404</h1>
      <p className="mt-3 text-lg text-slate-600">Page introuvable</p>
      <Link
        to="/"
        className="mt-6 inline-flex rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-sky-600"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  )
}

export default NotFound
