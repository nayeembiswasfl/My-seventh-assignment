import { HiOutlineChartBarSquare, HiOutlineClock, HiOutlineHome } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import logoXl from '../../../assets/logo-xl.png';

const links = [
  { to: '/', label: 'Home', icon: HiOutlineHome, end: true },
  { to: '/timeline', label: 'Timeline', icon: HiOutlineClock },
  { to: '/stats', label: 'Stats', icon: HiOutlineChartBarSquare },
];

function Navbar() {
  return (
    <header className="-mx-4 border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 py-4 sm:min-h-[76px] sm:flex-row sm:items-center sm:justify-between sm:py-0">
        <NavLink to="/" className="flex items-center">
          <img src={logoXl} alt="KeenKeeper" className="h-7 w-auto sm:h-8" />
        </NavLink>

        <nav className="flex flex-wrap items-center gap-2 self-end sm:self-auto">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md px-4 py-2.5 text-[15px] font-semibold transition ${
                  isActive
                    ? 'bg-[#2d5d50] text-white'
                    : 'text-[#687a98] hover:bg-slate-100 hover:text-[#2d5d50]'
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
