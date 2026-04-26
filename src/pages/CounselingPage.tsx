import { CalendarIcon, HeartHandshakeIcon, PhoneIcon, ShieldCheckIcon } from 'lucide-react';

const supportAreas = [
  {
    title: 'Personal Counseling',
    description: 'Confidential support for life transitions, grief, stress, and spiritual encouragement.',
  },
  {
    title: 'Marriage & Family Care',
    description: 'Biblical guidance for couples, parents, and families seeking healing and stronger relationships.',
  },
  {
    title: 'Prayer & Follow-Up',
    description: 'A caring team ready to listen, pray with you, and stay connected as you move forward.',
  },
];

export function CounselingPage() {
  return (
    <div className="min-h-screen w-full px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <section className="brand-gradient mb-16 rounded-[2rem] px-8 py-14 text-white md:px-12">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
              <HeartHandshakeIcon className="h-4 w-4" />
              <span>Care & Support Ministry</span>
            </div>
            <h1 className="mb-6 text-5xl text-white md:text-6xl">Counseling With Compassion and Wisdom</h1>
            <p className="max-w-2xl text-lg text-white/85 md:text-xl">
              We provide a caring, prayerful space for individuals, couples, and families who
              need guidance, encouragement, and biblical support.
            </p>
          </div>
        </section>

        <section className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {supportAreas.map((item) => (
            <div key={item.title} className="card-surface rounded-2xl p-8 transition-shadow hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]">
                <HeartHandshakeIcon className="h-7 w-7 text-white" />
              </div>
              <h2 className="mb-3 text-2xl">{item.title}</h2>
              <p className="text-[var(--color-text-light)]">{item.description}</p>
            </div>
          ))}
        </section>

        <section className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="section-surface rounded-2xl p-8 md:p-10">
            <h2 className="mb-6 text-3xl md:text-4xl">What You Can Expect</h2>
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <ShieldCheckIcon className="mt-1 h-5 w-5 text-[var(--color-secondary)]" />
                <div>
                  <h3 className="text-xl">Confidential Conversations</h3>
                  <p className="text-[var(--color-text-light)]">
                    Your conversations are handled with care, sensitivity, and respect.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CalendarIcon className="mt-1 h-5 w-5 text-[var(--color-secondary)]" />
                <div>
                  <h3 className="text-xl">Scheduled Sessions</h3>
                  <p className="text-[var(--color-text-light)]">
                    Meet with a counselor at a time that allows for focused, unhurried support.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <PhoneIcon className="mt-1 h-5 w-5 text-[var(--color-secondary)]" />
                <div>
                  <h3 className="text-xl">Ongoing Care</h3>
                  <p className="text-[var(--color-text-light)]">
                    When needed, we can help you stay connected with prayer, check-ins, and next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section-surface rounded-2xl p-8 md:p-10">
            <h2 className="mb-6 text-3xl md:text-4xl">Request Counseling</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
              <select className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                <option>Select Support Area</option>
                <option>Personal Counseling</option>
                <option>Marriage Counseling</option>
                <option>Family Guidance</option>
                <option>Prayer & Follow-Up</option>
              </select>
              <textarea
                placeholder="How can we support you?"
                rows={5}
                className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
              <button className="w-full rounded-xl bg-gradient-to-r from-[var(--color-primary-deep)] to-[var(--color-secondary)] px-6 py-4 font-semibold text-white shadow-lg hover:opacity-95">
                Submit Request
              </button>
            </div>
          </div>
        </section>

        <section className="section-surface rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="mb-4 text-3xl md:text-4xl">Need Immediate Prayer?</h2>
            <p className="mb-6 text-[var(--color-text-light)]">
              If you need someone to speak with, we encourage you to reach out to the church office
              so we can connect you with the right support as quickly as possible.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:info@powerandlifebiblechurch.org"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--color-secondary)] px-6 py-3 font-semibold text-white hover:opacity-95"
              >
                Email Counseling Team
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] px-6 py-3 font-semibold text-[var(--color-text)] hover:bg-[var(--color-surface-alt)]"
              >
                Call Church Office
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
