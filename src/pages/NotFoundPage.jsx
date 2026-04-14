import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="section-card flex min-h-[60vh] flex-col items-center justify-center px-6 py-16 text-center">
      <span className="rounded-full bg-brand-coral/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-brand-coral">
        404
      </span>
      <h1 className="mt-6 font-display text-5xl text-brand-ink sm:text-6xl">Page not found</h1>
      <p className="mt-4 max-w-xl text-slate-600">
        The page you were looking for drifted out of reach. Let’s head back to your friendship dashboard.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-ink px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5"
      >
        <HiOutlineArrowLeft className="text-lg" />
        Back to Home
      </Link>
    </section>
  );
}

export default NotFoundPage;
