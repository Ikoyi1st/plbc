import { BookOpenIcon, DownloadIcon, GraduationCapIcon } from 'lucide-react';

export function SundaySchoolPage() {
  const manuals = [
    {
      title: 'Beginner Class (Ages 3-5)',
      description: 'Introduction to Bible stories through songs, crafts, and activities',
      lessons: 12,
      size: '2.5 MB',
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Primary Class (Ages 6-8)',
      description: 'Foundational Bible teachings with interactive lessons',
      lessons: 12,
      size: '3.2 MB',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Junior Class (Ages 9-11)',
      description: 'Deeper exploration of scripture and Christian values',
      lessons: 12,
      size: '3.8 MB',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Teen Class (Ages 12-17)',
      description: 'Relevant discussions on faith, life, and contemporary issues',
      lessons: 12,
      size: '4.1 MB',
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  return (
    <div className="min-h-screen w-full px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-green-500">
            <GraduationCapIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">Sunday School Manuals</h1>
          <p className="mx-auto max-w-3xl text-xl text-[var(--color-text-light)]">
            Download comprehensive teaching materials for all age groups. Perfect for
            teachers and parents.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {manuals.map((manual) => (
            <div
              key={manual.title}
              className="rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${manual.color}`}
              >
                <BookOpenIcon className="h-7 w-7 text-white" />
              </div>

              <h3 className="mb-3 text-2xl font-bold">{manual.title}</h3>
              <p className="mb-6 text-[var(--color-text-light)]">{manual.description}</p>

              <div className="mb-6 flex items-center justify-between text-sm text-[var(--color-text-light)]">
                <span>{manual.lessons} Lessons</span>
                <span>{manual.size}</span>
              </div>

              <button className="flex w-full items-center justify-center space-x-2 rounded-lg bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 px-6 py-3 font-medium text-white transition-opacity hover:opacity-90">
                <DownloadIcon className="h-5 w-5" />
                <span>Download Manual</span>
              </button>
            </div>
          ))}
        </div>

        <div className="mb-16 rounded-2xl bg-white p-8 shadow-sm md:p-12">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            What&apos;s Inside Each Manual
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-2xl font-semibold">Plans</div>
              <h3 className="mb-2 text-xl font-bold">Lesson Plans</h3>
              <p className="text-[var(--color-text-light)]">
                Complete weekly lessons with objectives and activities
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-2xl font-semibold">Activities</div>
              <h3 className="mb-2 text-xl font-bold">Activity Sheets</h3>
              <p className="text-[var(--color-text-light)]">
                Printable worksheets, coloring pages, and crafts
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-2xl font-semibold">Tips</div>
              <h3 className="mb-2 text-xl font-bold">Teaching Tips</h3>
              <p className="text-[var(--color-text-light)]">
                Practical guidance for engaging young learners
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 p-8 text-white md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Become a Sunday School Teacher
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Share your faith with the next generation. We provide training, support, and
              all the resources you need.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-lg bg-white px-8 py-4 font-semibold text-[var(--color-primary)] transition-colors hover:bg-gray-100">
                Apply to Teach
              </button>
              <button className="rounded-lg border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/20">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
