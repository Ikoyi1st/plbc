import { BookOpenIcon, ClockIcon, DownloadIcon, MapPinIcon, UsersIcon } from 'lucide-react';

const groups = [
  {
    name: 'Young Adults Study',
    time: 'Wednesdays, 7:00 PM',
    location: 'Room 201',
    leader: 'Pastor Philip',
    members: 25,
    description: 'Deep dive into scripture with peers in your season of life',
    currentStudy: 'Book of Romans',
  },
  {
    name: 'Family Bible Study',
    time: 'Thursdays, 6:30 PM',
    location: 'Main Hall',
    leader: 'Sister Grace Williams',
    members: 40,
    description: 'Family-friendly study with activities for all ages',
    currentStudy: 'Parables of Jesus',
  },
  {
    name: "Men's Study Group",
    time: 'Saturdays, 8:00 AM',
    location: 'Conference Room',
    leader: 'Deacon Michael Brown',
    members: 18,
    description: 'Fellowship and accountability for men of faith',
    currentStudy: 'Leadership in Scripture',
  },
  {
    name: "Women's Study Circle",
    time: 'Tuesdays, 10:00 AM',
    location: 'Room 105',
    leader: 'Minister Deborah Afolabi',
    members: 30,
    description: 'Encouraging community for women to grow together',
    currentStudy: 'Women of the Bible',
  },
];

export function BibleStudyPage() {
  return (
    <div className="min-h-screen w-full px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-deep)]">
            <BookOpenIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">Bible Study Groups</h1>
          <p className="mx-auto max-w-3xl text-xl text-[var(--color-text-light)]">
            Grow deeper in your faith through community study and discussion of God&apos;s
            Word.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group.name}
              className="card-surface rounded-2xl p-8 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-2xl font-bold">{group.name}</h3>
                <div className="flex items-center space-x-2 text-[var(--color-text-light)]">
                  <UsersIcon className="h-4 w-4" />
                  <span className="text-sm">{group.members}</span>
                </div>
              </div>

              <p className="mb-6 text-[var(--color-text-light)]">{group.description}</p>

              <div className="mb-6 space-y-3">
                <div className="flex items-center space-x-3 text-[var(--color-text-light)]">
                  <ClockIcon className="h-5 w-5 flex-shrink-0" />
                  <span>{group.time}</span>
                </div>
                <div className="flex items-center space-x-3 text-[var(--color-text-light)]">
                  <MapPinIcon className="h-5 w-5 flex-shrink-0" />
                  <span>{group.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-[var(--color-text-light)]">
                  <UsersIcon className="h-5 w-5 flex-shrink-0" />
                  <span>Led by {group.leader}</span>
                </div>
              </div>

              <div className="mb-6 rounded-xl bg-[var(--color-surface-alt)] p-4">
                <p className="mb-1 text-sm text-[var(--color-text-light)]">Currently Studying:</p>
                <p className="font-semibold text-[var(--color-primary-deep)]">{group.currentStudy}</p>
              </div>

              <button className="w-full rounded-lg bg-gradient-to-br from-[var(--color-primary-deep)] via-[var(--color-primary)] to-[var(--color-secondary)] px-6 py-3 font-medium text-white transition-colors hover:opacity-90">
                Join This Group
              </button>
            </div>
          ))}
        </div>

        <div className="section-surface mb-16 rounded-2xl p-8 md:p-12">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Study Resources</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]">
                <BookOpenIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Study Guides</h3>
              <p className="mb-4 text-[var(--color-text-light)]">
                Download weekly study materials and discussion questions
              </p>
              <button className="font-semibold text-[var(--color-primary-deep)] hover:underline">
                Download Resources
              </button>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary-deep)]">
                <DownloadIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Sunday School Manual</h3>
              <p className="mb-4 text-[var(--color-text-light)]">
                Download the latest Sunday School manual directly from the Bible Study section
              </p>
              <button className="font-semibold text-[var(--color-primary-deep)] hover:underline">
                Download Manual
              </button>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-primary)]">
                <BookOpenIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Online Tools</h3>
              <p className="mb-4 text-[var(--color-text-light)]">
                Access commentaries, concordances, and study tools
              </p>
              <button className="font-semibold text-[var(--color-primary-deep)] hover:underline">
                Explore Tools
              </button>
            </div>
          </div>
        </div>

        <div className="brand-gradient rounded-2xl p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Start Your Own Study Group</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
            Have a passion for leading others in Bible study? We&apos;ll provide training and
            resources.
          </p>
          <button className="rounded-lg bg-white px-8 py-4 font-semibold text-[var(--color-primary-deep)] transition-colors hover:bg-[var(--color-surface-alt)]">
            Become a Leader
          </button>
        </div>
      </div>
    </div>
  );
}
