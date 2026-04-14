import { Link } from 'react-router-dom';

const statusClasses = {
  overdue: 'bg-[#f24848] text-white',
  'almost due': 'bg-[#f3b544] text-white',
  'on-track': 'bg-[#2d5d50] text-white',
};

const statusLabels = {
  overdue: 'Overdue',
  'almost due': 'Almost Due',
  'on-track': 'On-Track',
};

function FriendCard({ friend }) {
  return (
    <Link
      to={`/friends/${friend.id}`}
      className="group rounded-2xl border border-slate-200 bg-white px-6 py-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-[#eef2f7] transition group-hover:ring-[#d7e4de]"
      />

      <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-800">{friend.name}</h3>
      <p className="mt-2 text-sm font-medium text-[#7c8da8]">{friend.days_since_contact}d ago</p>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        {friend.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#c8f4d0] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2d5d50]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <span className={`rounded-full px-3.5 py-1.5 text-sm font-semibold ${statusClasses[friend.status]}`}>
          {statusLabels[friend.status]}
        </span>
      </div>
    </Link>
  );
}

export default FriendCard;
