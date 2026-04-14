import { timelineEntries as seedTimelineEntries } from '../data/timelineEntries';

const STORAGE_KEY = 'keenkeeper-custom-interactions';

const interactionLabels = {
  call: 'Call',
  text: 'Text',
  video: 'Video',
};

function readStoredInteractions() {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeStoredInteractions(entries) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function formatEntryDate(date) {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function getTimelineEntries() {
  return [...readStoredInteractions(), ...seedTimelineEntries];
}

export function addInteractionEntry(type, person) {
  const now = new Date();
  const nextEntry = {
    id: `custom-${now.getTime()}`,
    type,
    person,
    title: interactionLabels[type] || type,
    date: formatEntryDate(now),
    createdAt: now.toISOString(),
  };

  const existingEntries = readStoredInteractions();
  writeStoredInteractions([nextEntry, ...existingEntries]);

  return nextEntry;
}

