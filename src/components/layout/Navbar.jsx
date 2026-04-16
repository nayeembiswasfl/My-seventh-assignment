import { HiOutlineChartBarSquare, HiOutlineClock, HiOutlineHome } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', icon: HiOutlineHome, end: true },
  { to: '/timeline', label: 'Timeline', icon: HiOutlineClock },
  { to: '/stats', label: 'Stats', icon: HiOutlineChartBarSquare },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-30 -mx-4 border-b border-slate-200 bg-white/95 px-5 backdrop-blur sm:-mx-6 sm:px-8 lg:-mx-10 lg:px-14 xl:px-20">
      <div className="flex w-full flex-col gap-4 py-4 sm:min-h-[78px] sm:flex-row sm:items-center sm:justify-between sm:py-0">
        <NavLink to="/" className="flex items-center leading-none">
          <p className="text-[2.15rem] font-extrabold tracking-tight text-slate-900">
            Keen<span className="text-[#2d5d50]">Keeper</span>
          </p>
        </NavLink>

        <nav className="flex flex-wrap items-center gap-5 self-end sm:self-auto">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md px-4 py-2.5 text-[15px] font-semibold transition ${
                  isActive
                    ? 'bg-[#2d5d50] text-white'
                    : 'text-[#6b7d9a] hover:text-[#2d5d50]'
                }`
              }
            >
              <Icon className="text-[18px]" />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
