import { useEffect, useState } from 'react';
import {
  HiOutlineArchiveBox,
  HiOutlineBellAlert,
  HiOutlineChatBubbleLeftRight,
  HiOutlinePencilSquare,
  HiOutlinePhone,
  HiOutlineTrash,
  HiOutlineVideoCamera,
} from 'react-icons/hi2';
import { Link, useParams } from 'react-router-dom';
import DetailActionButton from '../components/details/DetailActionButton';
import DetailStatCard from '../components/details/DetailStatCard';
import FriendDetailsLoader from '../components/details/FriendDetailsLoader';
import QuickCheckinButton from '../components/details/QuickCheckinButton';

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

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function FriendDetailsPage() {
  const { friendId } = useParams();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadFriend() {
      try {
        setLoading(true);
        setError('');

        const response = await fetch('/friends.json');

        if (!response.ok) {
          throw new Error('Failed to load the friend details.');
        }

        const data = await response.json();
        const matchedFriend = data.find((item) => String(item.id) === friendId);

        if (!matchedFriend) {
          throw new Error('We could not find that friend profile.');
        }

        if (isMounted) {
          setFriend(matchedFriend);
        }
      } catch (fetchError) {
        if (isMounted) {
          setError(fetchError.message || 'Something went wrong while loading the profile.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadFriend();

    return () => {
      isMounted = false;
    };
  }, [friendId]);

  if (loading) {
    return <FriendDetailsLoader />;
  }

  if (error || !friend) {
    return (
      <section className="content-shell py-16 sm:py-24">
        <div className="rounded-[32px] border border-red-100 bg-white px-6 py-20 text-center shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">Could not load the friend profile</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#6c7a93] sm:text-lg">{error}</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center rounded-md bg-[#2d5d50] px-5 py-3 text-lg font-semibold text-white transition hover:bg-[#23483e]"
          >
            Back to Dashboard
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="content-shell py-10 sm:py-16">
      <div className="grid gap-5 lg:grid-cols-[340px_minmax(0,1fr)]">
        <div className="space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white px-6 py-7 text-center shadow-sm sm:px-8 sm:py-9">
            <img
              src={friend.picture}
              alt={friend.name}
              className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-[#eef2f7]"
            />

            <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">{friend.name}</h1>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <span className={`rounded-full px-4 py-1.5 text-sm font-semibold ${statusClasses[friend.status]}`}>
                {statusLabels[friend.status]}
              </span>
              {friend.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#c8f4d0] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2d5d50]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-6 text-lg font-semibold italic text-[#7787a5]">"{friend.bio}"</p>
            <p className="mt-4 text-base text-[#7b879e]">Preferred: email</p>
            <a
              href={`mailto:${friend.email}`}
              className="mt-1 inline-block text-base font-semibold text-[#2d5d50] hover:underline"
            >
              {friend.email}
            </a>
          </article>

          <DetailActionButton icon={HiOutlineBellAlert} label="Snooze 2 Weeks" />
          <DetailActionButton icon={HiOutlineArchiveBox} label="Archive" />
          <DetailActionButton icon={HiOutlineTrash} label="Delete" tone="danger" />
        </div>

        <div className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            <DetailStatCard value={friend.days_since_contact} label="Days Since Contact" />
            <DetailStatCard value={friend.goal} label="Goal (Days)" />
            <DetailStatCard value={formatDate(friend.next_due_date)} label="Next Due" />
          </div>

          <article className="rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm sm:px-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#2d5d50]">Relationship Goal</h2>
                <p className="mt-5 text-xl text-[#6c7a93]">
                  Connect every <span className="font-extrabold text-slate-800">{friend.goal} days</span>
                </p>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-2 self-start rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <HiOutlinePencilSquare className="text-lg" />
                Edit
              </button>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm sm:px-7">
            <h2 className="text-2xl font-bold tracking-tight text-[#2d5d50]">Quick Check-In</h2>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <QuickCheckinButton icon={HiOutlinePhone} label="Call" />
              <QuickCheckinButton icon={HiOutlineChatBubbleLeftRight} label="Text" />
              <QuickCheckinButton icon={HiOutlineVideoCamera} label="Video" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default FriendDetailsPage;
