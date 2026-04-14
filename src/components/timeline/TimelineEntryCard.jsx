import callIcon from '../../../assets/call.png';
import textIcon from '../../../assets/text.png';
import videoIcon from '../../../assets/video.png';

const iconMap = {
  call: {
    icon: callIcon,
    alt: 'Call icon',
  },
  text: {
    icon: textIcon,
    alt: 'Text icon',
  },
  video: {
    icon: videoIcon,
    alt: 'Video icon',
  },
  meetup: {
    emoji: '\u{1F91D}',
  },
};

function TimelineEntryCard({ entry }) {
  const iconConfig = iconMap[entry.type];

  return (
    <article className="rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:px-5">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-3xl">
          {iconConfig.emoji ? (
            <span aria-hidden="true">{iconConfig.emoji}</span>
          ) : (
            <img src={iconConfig.icon} alt={iconConfig.alt} className="h-8 w-8 object-contain" />
          )}
        </div>

        <div className="min-w-0">
          <p className="text-xl font-semibold text-[#2d5d50]">
            {entry.title} <span className="font-medium text-[#6b7b9c]">with {entry.person}</span>
          </p>
          <p className="mt-1 text-lg font-medium text-[#617493]">{entry.date}</p>
        </div>
      </div>
    </article>
  );
}

export default TimelineEntryCard;
