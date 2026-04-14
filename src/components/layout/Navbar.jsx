import { HiOutlineChartBarSquare, HiOutlineClock, HiOutlineHome } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const links = [
  { to: '/', label: 'Home', icon: HiOutlineHome, end: true },
  { to: '/timeline', label: 'Timeline', icon: HiOutlineClock },
  { to: '/stats', label: 'Stats', icon: HiOutlineChartBarSquare },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-20 pt-4">
      <div className="glass-panel section-card flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="rounded-2xl bg-brand-sand p-3 ring-1 ring-brand-gold/40">
            <img src={logo} alt="Kindred Circle logo" className="h-8 w-8" />
          </div>
          <div>
            <p className="font-display text-2xl text-brand-ink">Kindred Circle</p>
            <p className="text-sm text-slate-500">Keep every friendship warm.</p>
          </div>
        </NavLink>

        <nav className="flex flex-wrap items-center gap-3">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-brand-ink text-white shadow-lg'
                    : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:-translate-y-0.5 hover:text-brand-teal'
                }`
              }
            >
              <Icon className="text-lg" />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

