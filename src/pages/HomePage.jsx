import { useEffect, useState } from 'react';
import { HiOutlinePlus } from 'react-icons/hi2';
import FriendCard from '../components/home/FriendCard';
import HomePageLoader from '../components/home/HomePageLoader';
import SummaryCard from '../components/home/SummaryCard';
import { getFriends } from '../utils/friendsApi';

function HomePage() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadFriends() {
      try {
        setLoading(true);
        setError('');

        const data = await getFriends();

        if (isMounted) {
          setFriends(data);
        }
      } catch (fetchError) {
        if (isMounted) {
          setError(fetchError.message || 'Something went wrong while loading your dashboard.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadFriends();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <HomePageLoader />;
  }

  if (error) {
    return (
      <section className="content-shell py-16 sm:py-24">
        <div className="rounded-[32px] border border-red-100 bg-white px-6 py-20 text-center shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">Could not load the dashboard</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#6c7a93] sm:text-lg">{error}</p>
        </div>
      </section>
    );
  }

  const totalFriends = friends.length;
  const onTrackCount = friends.filter((friend) => friend.status === 'on-track').length;
  const needAttentionCount = friends.filter((friend) => friend.status !== 'on-track').length;
  const interactionsThisMonth = friends.reduce(
    (total, friend) => total + (friend.interactions_this_month || 0),
    0,
  );

  const summaryCards = [
    { value: totalFriends, label: 'Total Friends' },
    { value: onTrackCount, label: 'On Track' },
    { value: needAttentionCount, label: 'Need Attention' },
    { value: interactionsThisMonth, label: 'Interactions This Month' },
  ];

  return (
    <section className="content-shell py-10 sm:py-16">
      <div className="px-2 text-center">
        <h1 className="mx-auto max-w-5xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-[4.35rem]">
          Friends to keep close in your life
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#677792] sm:text-xl">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <button className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#2d5d50] px-6 py-4 text-lg font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#23483e]">
          <HiOutlinePlus className="text-2xl" />
          Add a Friend
        </button>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <SummaryCard key={card.label} value={card.value} label={card.label} />
        ))}
      </div>

      <div className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Your Friends</h2>

        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomePage;
