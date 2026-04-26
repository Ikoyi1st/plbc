import { DownloadIcon, MicIcon, PlayIcon, RssIcon } from 'lucide-react';

const episodes = [
  {
    title: 'Faith in Action: Living Your Beliefs',
    date: 'December 12, 2023',
    duration: '42 min',
    description:
      'Exploring practical ways to demonstrate faith in everyday life and make a real impact in your community.',
  },
  {
    title: 'The Power of Forgiveness',
    date: 'December 5, 2023',
    duration: '38 min',
    description:
      'Understanding biblical forgiveness and how it transforms relationships and brings healing.',
  },
  {
    title: 'Finding Purpose in Difficult Times',
    date: 'November 28, 2023',
    duration: '45 min',
    description:
      "Discovering God's purpose even in life's most challenging seasons and maintaining hope.",
  },
  {
    title: 'Building Strong Families',
    date: 'November 21, 2023',
    duration: '40 min',
    description:
      'Biblical principles for nurturing healthy, loving family relationships that honor God.',
  },
  {
    title: 'The Joy of Serving Others',
    date: 'November 14, 2023',
    duration: '36 min',
    description:
      "How serving transforms both the giver and receiver, creating ripples of God's love.",
  },
  {
    title: 'Prayer: Your Direct Line to God',
    date: 'November 7, 2023',
    duration: '43 min',
    description:
      'Deepening your prayer life and experiencing the power of intimate conversation with God.',
  },
];

export function PodcastPage() {
  return (
    <div className="min-h-screen w-full px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500">
            <MicIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">Power and Life Podcast</h1>
          <p className="mx-auto max-w-3xl text-xl text-[var(--color-text-light)]">
            Inspiring conversations about faith, life, and following Jesus. Listen anytime,
            anywhere.
          </p>
        </div>

        <div className="mb-16 rounded-2xl bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 p-8 text-white md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <RssIcon className="mx-auto mb-6 h-16 w-16" />
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Subscribe & Never Miss an Episode
            </h2>
            <p className="mb-8 text-xl text-white/90">Available on all major podcast platforms</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-lg bg-white px-8 py-4 font-semibold text-[var(--color-primary)] transition-colors hover:bg-gray-100">
                Apple Podcasts
              </button>
              <button className="rounded-lg border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/20">
                Spotify
              </button>
              <button className="rounded-lg border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/20">
                RSS Feed
              </button>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-8 text-3xl font-bold">Recent Episodes</h2>
          <div className="space-y-6">
            {episodes.map((episode) => (
              <div
                key={`${episode.title}-${episode.date}`}
                className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg md:flex-row"
              >
                <div className="flex h-48 flex-shrink-0 items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 text-white md:h-auto md:w-48">
                  <MicIcon className="h-14 w-14" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center space-x-4 text-sm text-[var(--color-text-light)]">
                      <span>{episode.date}</span>
                      <span>•</span>
                      <span>{episode.duration}</span>
                    </div>
                    <h3 className="mb-3 text-2xl font-bold transition-colors hover:text-[var(--color-primary)]">
                      {episode.title}
                    </h3>
                    <p className="mb-4 text-[var(--color-text-light)]">{episode.description}</p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex flex-1 items-center justify-center space-x-2 rounded-lg bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 px-6 py-3 font-medium text-white transition-colors hover:opacity-90">
                      <PlayIcon className="h-5 w-5" />
                      <span>Play Episode</span>
                    </button>
                    <button className="flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 transition-colors hover:bg-gray-50">
                      <DownloadIcon className="h-5 w-5 text-[var(--color-text-light)]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-sm md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">About the Podcast</h2>
            <p className="mb-8 text-lg leading-relaxed text-[var(--color-text-light)]">
              Power and Life Bible Church Podcast brings you weekly conversations about living
              out your faith in today&apos;s world. Hosted by our pastoral team and featuring
              guest speakers, each episode offers biblical insights, practical wisdom, and
              encouragement for your spiritual journey.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <div className="mb-2 text-3xl font-bold text-[var(--color-primary)]">150+</div>
                <p className="text-[var(--color-text-light)]">Episodes</p>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-[var(--color-primary)]">10K+</div>
                <p className="text-[var(--color-text-light)]">Subscribers</p>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-[var(--color-primary)]">Weekly</div>
                <p className="text-[var(--color-text-light)]">New Episodes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
