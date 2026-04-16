import { useDeferredValue, useState } from 'react';
import { HiChevronDown, HiMagnifyingGlass } from 'react-icons/hi2';
import TimelineEntryCard from '../components/timeline/TimelineEntryCard';
import { getTimelineEntries } from '../utils/interactionStorage';

const filters = [
  { value: 'all', label: 'Filter timeline' },
  { value: 'meetup', label: 'Meetups' },
  { value: 'text', label: 'Texts' },
  { value: 'call', label: 'Calls' },
  { value: 'video', label: 'Videos' },
];

const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
];

function getEntryTimestamp(entry) {
  const candidate = entry.createdAt || entry.date;
  const timestamp = new Date(candidate).getTime();

  return Number.isNaN(timestamp) ? 0 : timestamp;
}

function TimelinePage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSort, setActiveSort] = useState('newest');
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearchTerm = useDeferredValue(searchTerm);
  const timelineEntries = getTimelineEntries();
  const normalizedQuery = deferredSearchTerm.trim().toLowerCase();
  const filteredEntries = timelineEntries
    .filter((entry) => activeFilter === 'all' || entry.type === activeFilter)
    .filter((entry) => {
      if (!normalizedQuery) {
        return true;
      }

      return (
        entry.person.toLowerCase().includes(normalizedQuery) ||
        entry.title.toLowerCase().includes(normalizedQuery) ||
        entry.type.toLowerCase().includes(normalizedQuery)
      );
    })
    .sort((firstEntry, secondEntry) => {
      const firstTimestamp = getEntryTimestamp(firstEntry);
      const secondTimestamp = getEntryTimestamp(secondEntry);

      return activeSort === 'newest'
        ? secondTimestamp - firstTimestamp
        : firstTimestamp - secondTimestamp;
    });

  return (
    <section className="content-shell py-10 sm:py-16">
      <div className="max-w-[960px]">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">Timeline</h1>

        <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)_minmax(0,0.7fr)]">
          <label className="relative block">
            <span className="sr-only">Search timeline</span>
            <HiMagnifyingGlass className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by friend or interaction"
              className="h-14 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-lg text-[#617493] shadow-sm outline-none transition placeholder:text-[#98a4b8] focus:border-[#2d5d50]"
            />
          </label>

          <label className="relative block">
            <span className="sr-only">Filter timeline</span>
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
          </label>

          <label className="relative block">
            <span className="sr-only">Sort timeline</span>
            <select
              aria-label="Sort timeline"
              value={activeSort}
              onChange={(event) => setActiveSort(event.target.value)}
              className="h-14 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-12 text-lg text-[#617493] shadow-sm outline-none transition focus:border-[#2d5d50]"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <HiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-slate-400" />
          </label>
        </div>

        <p className="mt-4 text-base font-medium text-[#617493]">
          Showing {filteredEntries.length} interaction{filteredEntries.length === 1 ? '' : 's'}
        </p>

        <div className="mt-8 space-y-5">
          {filteredEntries.length > 0 ? (
            filteredEntries.map((entry) => <TimelineEntryCard key={entry.id} entry={entry} />)
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center shadow-sm">
              <p className="text-2xl font-semibold text-slate-800">No matching timeline entries</p>
              <p className="mt-3 text-base text-[#617493]">
                Try a different friend name, interaction type, or sort/filter combination.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TimelinePage;
