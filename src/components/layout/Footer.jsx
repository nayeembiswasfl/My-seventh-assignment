import facebook from '../../../assets/facebook.png';
import instagram from '../../../assets/instagram.png';
import twitter from '../../../assets/twitter.png';

const socials = [
  { name: 'Facebook', icon: facebook, href: 'https://www.facebook.com/' },
  { name: 'Instagram', icon: instagram, href: 'https://www.instagram.com/' },
  { name: 'Twitter', icon: twitter, href: 'https://x.com/' },
];

function Footer() {
  return (
    <footer className="pb-6 pt-4 sm:pb-8">
      <div className="section-card flex flex-col gap-6 px-5 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl text-brand-ink">Friendships deserve follow-through.</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Kindred Circle keeps your timeline, reminders, and quick check-ins in one calm space.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-brand-sand p-3 ring-1 ring-brand-gold/30 transition hover:-translate-y-1"
              aria-label={social.name}
            >
              <img src={social.icon} alt="" className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

