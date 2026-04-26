import { useMemo, useState } from 'react';
import { BookOpenIcon, DownloadIcon, PlayIcon, SearchIcon } from 'lucide-react';

const sermons = [
  {
    title: 'Walking in Faith',
    speaker: 'Pastor Nathaniel Akowe',
    date: 'December 10, 2023',
    duration: '45 min',
    series: 'Faith Foundations',
    description: 'Exploring what it means to trust God in uncertain times.',
  },
  {
    title: 'The Power of Prayer',
    speaker: 'Minister Deborah Afolabi',
    date: 'December 3, 2023',
    duration: '38 min',
    series: 'Spiritual Disciplines',
    description: 'Understanding the transformative power of consistent prayer.',
  },
  {
    title: 'Love Your Neighbor',
    speaker: 'Pastor Philip',
    date: 'November 26, 2023',
    duration: '42 min',
    series: 'Living the Gospel',
    description: "Practical ways to show Christ's love in our daily lives.",
  },
  {
    title: 'Finding Peace',
    speaker: 'Minister Grace Williams',
    date: 'November 19, 2023',
    duration: '40 min',
    series: 'Inner Life',
    description: "Discovering God's peace in the midst of life's storms.",
  },
  {
    title: 'Grace Abounds',
    speaker: 'Pastor Nathaniel Akowe',
    date: 'November 12, 2023',
    duration: '47 min',
    series: 'Faith Foundations',
    description: "Understanding the depth and breadth of God's grace.",
  },
  {
    title: 'Serving with Joy',
    speaker: 'Deacon Michael Brown',
    date: 'November 5, 2023',
    duration: '35 min',
    series: 'Living the Gospel',
    description: 'Finding fulfillment through serving others.',
  },
];

export function SermonsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSermons = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return sermons;

    return sermons.filter((sermon) =>
      [sermon.title, sermon.speaker, sermon.series, sermon.description].some((value) =>
        value.toLowerCase().includes(query),
      ),
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen w-full px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-deep)]">
            <BookOpenIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">Sermons</h1>
          <p className="mx-auto max-w-3xl text-xl text-[var(--color-text-light)]">
            Listen to inspiring messages that will strengthen your faith and encourage your
            walk with God.
          </p>
        </div>

        <div className="mx-auto mb-12 max-w-2xl">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            <input
              type="text"
              placeholder="Search sermons by title, speaker, or topic..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full rounded-xl border border-[var(--color-border)] bg-white py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSermons.map((sermon) => (
            <div
              key={`${sermon.title}-${sermon.date}`}
              className="card-surface group overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg"
            >
              <div className="brand-gradient relative flex h-48 items-center justify-center overflow-hidden text-white">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative text-center">
                  <PlayIcon className="mx-auto mb-3 h-10 w-10" />
                  <p className="text-sm uppercase tracking-[0.3em]">{sermon.series}</p>
                </div>
                <div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-sm text-white backdrop-blur-sm">
                  {sermon.duration}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2 text-sm font-semibold text-[var(--color-primary-deep)]">
                  {sermon.series}
                </div>
                <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-[var(--color-primary-deep)]">
                  {sermon.title}
                </h3>
                <p className="mb-3 text-sm text-[var(--color-text-light)]">{`${sermon.speaker} | ${sermon.date}`}</p>
                <p className="mb-4 text-[var(--color-text-light)]">{sermon.description}</p>
                <div className="flex space-x-2">
                  <button className="flex flex-1 items-center justify-center space-x-2 rounded-lg bg-gradient-to-br from-[var(--color-primary-deep)] via-[var(--color-primary)] to-[var(--color-secondary)] px-4 py-2 font-medium text-white transition-colors hover:opacity-90">
                    <PlayIcon className="h-4 w-4" />
                    <span>Listen</span>
                  </button>
                  <button className="rounded-lg border border-[var(--color-border)] px-4 py-2 transition-colors hover:bg-[var(--color-surface-alt)]">
                    <DownloadIcon className="h-4 w-4 text-[var(--color-text-light)]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSermons.length === 0 && (
          <div className="section-surface mt-10 rounded-xl p-8 text-center text-[var(--color-text-light)]">
            No sermons matched "{searchTerm}".
          </div>
        )}

        <div className="brand-gradient mt-16 rounded-2xl p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Stay Connected to Every Message</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
            Catch up on recent sermons and revisit teachings whenever you need encouragement.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-4 font-semibold text-[var(--color-primary-deep)] transition-colors hover:bg-[var(--color-surface-alt)]">
              Browse Archive
            </button>
            <button className="rounded-lg border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/20">
              Share a Sermon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
