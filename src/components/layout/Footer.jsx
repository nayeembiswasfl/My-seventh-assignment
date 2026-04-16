import logoXl from '../../../assets/logo-xl.png';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socials = [
  { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/' },
  { name: 'Facebook', icon: FaFacebookF, href: 'https://www.facebook.com/' },
  { name: 'X', icon: FaXTwitter, href: 'https://x.com/' },
];

function Footer() {
  return (
    <footer className="-mx-4 mt-16 bg-[#285847] px-4 text-white sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center px-4 py-16 text-center sm:px-6">
        <img src={logoXl} alt="KeenKeeper" className="h-14 w-auto sm:h-20" />
        <p className="mt-6 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="mt-7">
          <p className="text-2xl font-semibold">Social Links</p>
        </div>

        <div className="mt-6 flex items-center gap-4">
          {socials.map(({ name, icon: Icon, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white text-[#285847] shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:bg-[#f5fbf8] hover:text-[#1f4538]"
              aria-label={name}
            >
              <Icon className="text-lg" />
            </a>
          ))}
        </div>

        <div className="mt-14 flex w-full flex-col gap-5 border-t border-white/10 pt-8 text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">(c) 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <a href="/" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="/" className="transition hover:text-white">
              Terms of Service
            </a>
            <a href="/" className="transition hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
