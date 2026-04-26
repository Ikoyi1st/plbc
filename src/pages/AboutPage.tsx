import { motion } from 'framer-motion';
import { HeartIcon, TargetIcon, UsersIcon } from 'lucide-react';

const generalOverseer = {
  name: 'Pastor Nathaniel Akowe',
  role: 'General Overseer',
  initials: 'NA',
  bio: 'Providing spiritual direction, pastoral oversight, and steady leadership for the church family across all branches.',
};

const branchPastors = [
  {
    name: 'Pastor Philip',
    role: 'Apapa Branch Pastor',
    initials: 'PP',
    bio: 'Serving the Apapa branch with pastoral care, discipleship, and community leadership.',
  },
  {
    name: 'Pastor Florence Akowe',
    role: 'Ketu Branch Pastor',
    initials: 'FA',
    bio: 'Leading the Ketu branch with warmth, prayerful care, and a passion for spiritual growth.',
  },
];

export function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen w-full px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-6 text-5xl md:text-6xl">About Us</h1>
          <p className="mx-auto max-w-3xl text-xl text-[var(--color-text-light)]">
            A community built on faith, love, and service to God and our neighbors.
          </p>
        </motion.div>

        <motion.div
          className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {[
            {
              icon: TargetIcon,
              title: 'Our Mission',
              text: 'To spread the love of Christ through worship, fellowship, and service, making disciples who transform communities.',
              color: 'from-[var(--color-primary)] to-[var(--color-accent)]',
            },
            {
              icon: HeartIcon,
              title: 'Our Vision',
              text: "A thriving community where every person experiences God's love, grows in faith, and serves with purpose.",
              color: 'from-[var(--color-secondary)] to-[var(--color-primary)]',
            },
            {
              icon: UsersIcon,
              title: 'Our Values',
              text: 'Faith, Community, Service, Integrity, and Compassion guide everything we do as a church family.',
              color: 'from-[var(--color-accent)] to-[var(--color-secondary)]',
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="card-surface rounded-2xl p-8 text-center"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <motion.div
                className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${item.color}`}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              >
                <item.icon className="h-8 w-8 text-white" />
              </motion.div>
              <h2 className="mb-4 text-2xl">{item.title}</h2>
              <p className="text-[var(--color-text-light)]">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="section-surface mb-20 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-center text-4xl">Our Story</h2>
          <div className="mx-auto max-w-4xl space-y-4 text-lg leading-relaxed text-[var(--color-text-light)]">
            <p>
              Power and Life Bible Church was founded in 1985 by a small group of believers
              with a vision to create a welcoming space where people could encounter God&apos;s
              love and grow in their faith journey.
            </p>
            <p>
              Over the past decades, we&apos;ve grown from a handful of families meeting in a
              living room to a vibrant community of believers. Yet our heart remains the same:
              to be a place where everyone belongs and can experience the transforming power of
              God&apos;s grace.
            </p>
            <p>
              Today, we continue to serve our community through worship services, discipleship,
              outreach, and fellowship. We believe church is not just a building, but a family
              united in Christ.
            </p>
          </div>
        </motion.div>

        <div className="mb-20">
          <motion.h2
            className="mb-4 text-center text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            Leadership Team
          </motion.h2>
          <motion.p
            className="mx-auto mb-12 max-w-3xl text-center text-lg text-[var(--color-text-light)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our church leadership is structured with the General Overseer providing overall
            spiritual direction, while branch pastors shepherd their local congregations under
            that covering.
          </motion.p>

          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-surface overflow-hidden rounded-[2rem] shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="brand-gradient flex min-h-[320px] items-center justify-center p-10 text-white">
                  <div className="text-center">
                    <div className="mx-auto mb-6 flex h-36 w-36 items-center justify-center rounded-full border border-white/20 bg-white/10 text-6xl font-bold shadow-lg backdrop-blur-sm">
                      {generalOverseer.initials}
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
                      Senior Leadership
                    </p>
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
                    General Overseer
                  </p>
                  <h3 className="mb-3 text-4xl md:text-5xl">{generalOverseer.name}</h3>
                  <p className="mb-6 text-lg font-semibold text-[var(--color-primary-deep)]">
                    {generalOverseer.role}
                  </p>
                  <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-text-light)]">
                    {generalOverseer.bio}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {branchPastors.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="card-surface overflow-hidden rounded-2xl transition-shadow hover:shadow-xl"
                whileHover={{ y: -8 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr]">
                  <div className="flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-8 text-white">
                    <div className="text-4xl font-bold">{member.initials}</div>
                  </div>
                  <div className="p-6">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-secondary)]">
                      Branch Pastor
                    </p>
                    <h3 className="mb-1 text-2xl">{member.name}</h3>
                    <p className="mb-3 font-semibold text-[var(--color-primary-deep)]">
                      {member.role}
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--color-text-light)]">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="brand-gradient relative overflow-hidden rounded-2xl p-8 text-center text-white md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative z-10">
            <h2 className="mb-4 text-3xl text-white md:text-4xl">Come Visit Us</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
              We&apos;d love to meet you. Join us for worship this Sunday and experience our
              community firsthand.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.a
                href="mailto:info@powerandlifebiblechurch.org"
                className="rounded-lg bg-white px-8 py-4 font-semibold text-[var(--color-primary-deep)] hover:bg-[var(--color-surface-alt)] hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Plan Your Visit
              </motion.a>
              <motion.a
                href="mailto:info@powerandlifebiblechurch.org"
                className="rounded-lg border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white hover:bg-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
