import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import TimelineEntryCard from '../components/timeline/TimelineEntryCard';
import { timelineEntries } from '../data/timelineEntries';

const filters = [
  { value: 'all', label: 'Filter timeline' },
  { value: 'meetup', label: 'Meetups' },
  { value: 'text', label: 'Texts' },
  { value: 'call', label: 'Calls' },
  { value: 'video', label: 'Videos' },
];

function TimelinePage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const filteredEntries =
    activeFilter === 'all'
      ? timelineEntries
      : timelineEntries.filter((entry) => entry.type === activeFilter);

  return (
    <section className="content-shell py-10 sm:py-16">
      <div className="max-w-[960px]">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">Timeline</h1>

        <div className="relative mt-10 w-full max-w-[360px]">
          <select
            aria-label="Filter timeline"
            value={activeFilter}
            onChange={(event) => setActiveFilter(event.target.value)}
            className="h-14 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-12 text-lg text-[#617493] shadow-sm outline-none transition focus:border-[#2d5d50]"
          >
            {filters.map((filter) => (
              <option key={filter.value} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </select>
          <HiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-slate-400" />
        </div>

        <div className="mt-8 space-y-5">
          {filteredEntries.map((entry) => (
            <TimelineEntryCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimelinePage;
