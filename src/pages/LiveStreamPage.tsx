import { BellIcon, CalendarIcon, UsersIcon, VideoIcon } from 'lucide-react';

export function LiveStreamPage() {
  return (
    <div className="min-h-screen w-full px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-deep)]">
            <VideoIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">Live Stream</h1>
          <p className="mx-auto max-w-3xl text-xl text-[var(--color-text-light)]">
            Join us for live worship services from anywhere in the world.
          </p>
        </div>

        <div className="section-surface mb-12 overflow-hidden rounded-2xl shadow-lg">
          <div className="brand-gradient relative aspect-video">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="mb-6 flex h-24 w-24 animate-pulse items-center justify-center rounded-full bg-white/14">
                <VideoIcon className="h-12 w-12" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Service Starting Soon</h2>
              <p className="text-white/75">Sunday at 9:00 AM</p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="mb-2 text-3xl font-bold">Sunday Worship Service</h2>
                <p className="text-[var(--color-text-light)]">
                  Live from Power and Life Bible Church
                </p>
              </div>
              <div className="mt-4 flex items-center space-x-4 md:mt-0">
                <div className="flex items-center space-x-2 text-[var(--color-text-light)]">
                  <UsersIcon className="h-5 w-5" />
                  <span className="font-semibold">1,234 watching</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="flex flex-1 items-center justify-center space-x-2 rounded-lg bg-gradient-to-br from-[var(--color-primary-deep)] via-[var(--color-primary)] to-[var(--color-secondary)] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90">
                <BellIcon className="h-5 w-5" />
                <span>Notify Me</span>
              </button>
              <button className="flex-1 rounded-lg border border-[var(--color-border)] px-6 py-3 font-semibold transition-colors hover:bg-[var(--color-surface-alt)]">
                Share Stream
              </button>
            </div>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { title: 'Sunday Service', time: '9:00 AM & 11:00 AM', detail: 'Every Sunday' },
            { title: 'Wednesday Bible Study', time: '7:00 PM', detail: 'Every Wednesday' },
            { title: 'Special Events', time: 'Various Times', detail: 'Check calendar' },
          ].map((item) => (
            <div key={item.title} className="card-surface rounded-xl p-6">
              <div className="mb-4 flex items-center space-x-3">
                <CalendarIcon className="h-6 w-6 text-[var(--color-primary)]" />
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
              <p className="mb-2 text-2xl font-bold">{item.time}</p>
              <p className="text-[var(--color-text-light)]">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="brand-gradient rounded-2xl p-8 text-white md:p-12">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Why Watch Online?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-2xl font-semibold">Anywhere</div>
              <h3 className="mb-2 text-xl font-bold">Worship Anywhere</h3>
              <p className="text-white/90">Join from home, work, or on the go</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-2xl font-semibold">Community</div>
              <h3 className="mb-2 text-xl font-bold">Live Chat</h3>
              <p className="text-white/90">Connect with others during service</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-2xl font-semibold">Alerts</div>
              <h3 className="mb-2 text-xl font-bold">Get Notified</h3>
              <p className="text-white/90">Never miss a service with reminders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
