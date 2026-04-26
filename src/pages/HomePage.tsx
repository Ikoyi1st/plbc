import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpenIcon, ClockIcon, HeartHandshakeIcon, MapPinIcon, PlayIcon, UserCheckIcon, VideoIcon } from 'lucide-react';

const features = [
  {
    icon: BookOpenIcon,
    title: 'Sermons',
    description: 'Listen to inspiring messages',
    link: '/sermons',
    color: 'from-[var(--color-primary)] to-[var(--color-accent)]',
  },
  {
    icon: VideoIcon,
    title: 'Live Stream',
    description: 'Watch services from anywhere',
    link: '/live',
    color: 'from-[var(--color-primary-deep)] to-[var(--color-primary)]',
  },
  {
    icon: BookOpenIcon,
    title: 'Bible Study',
    description: 'Deepen your understanding',
    link: '/bible-study',
    color: 'from-[var(--color-primary)] to-[var(--color-secondary)]',
  },
  {
    icon: HeartHandshakeIcon,
    title: 'Counseling',
    description: 'Receive prayerful guidance, care, and support',
    link: '/counseling',
    color: 'from-[var(--color-accent)] to-[var(--color-secondary)]',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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
} as const;

function ScheduleCard() {
  const iconColorClass = 'text-[var(--color-primary)]';
  const detailClass = 'flex items-center space-x-3';
  const textStyle = 'text-gray-700 font-medium';

  return (
    <div className="relative mx-auto w-full max-w-sm min-w-80 -rotate-1 transform">
      <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-3xl bg-[var(--color-primary)]/28 opacity-60 blur-sm" />
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-[var(--color-accent)]/24 opacity-50 blur-sm" />
      <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-3xl bg-[var(--color-secondary)]/18 opacity-40 blur-sm" />

      <div className="card-surface relative space-y-6 rounded-3xl p-8 md:p-10">
        <div className="flex items-center justify-between border-b border-[var(--color-border)]/70 pb-4">
          <h2 className="text-2xl font-bold text-[var(--color-text)] md:text-3xl">This Sunday</h2>
          <span className="rounded-full bg-[var(--color-secondary)]/12 px-3 py-1 text-xs font-semibold text-[red]">
            Live
          </span>
        </div>

        <div className="space-y-4 pt-2">
          <div className={detailClass}>
            <ClockIcon className={`h-5 w-5 ${iconColorClass}`} />
            <span className={textStyle}>10:00 AM - 12:00 PM</span>
          </div>
          <div className={detailClass}>
            <UserCheckIcon className={`h-5 w-5 ${iconColorClass}`} />
            <span className={textStyle}>Pastor Nathaniel Akowe</span>
          </div>
          <div className={detailClass}>
            <BookOpenIcon className={`h-5 w-5 ${iconColorClass}`} />
            <span className={textStyle}>Walking in Faith Series</span>
          </div>
        </div>

        <Link
          to="/live"
          className="block w-full rounded-xl bg-[red] from-[var(--color-primary)] to-[var(--color-secondary)] py-4 text-center text-lg font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:opacity-95 hover:shadow-xl active:scale-100"
        >
          Join Service
        </Link>
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <div className="w-full">
      <section className="brand-gradient-soft relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(242,193,102,0.12),transparent_28%)]" />
        <motion.div
          className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="text-left text-white">
            <motion.div
              className="mb-6 inline-flex items-center space-x-2 rounded-full border border-white/20 bg-white/10 p-2 pl-4 pr-5 text-sm font-semibold shadow-md backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[red]" />
              <span>Live Stream Available</span>
            </motion.div>

            <motion.h1
              className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to Our Faith Community
            </motion.h1>

            <motion.p
              className="mb-10 max-w-xl text-lg text-white/80 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join us in worship, fellowship, and service as we grow together in faith and
              love.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/live"
                className="inline-flex min-w-[200px] items-center justify-center space-x-2 rounded-xl bg-white px-8 py-3 text-lg font-bold text-[var(--color-primary-deep)] shadow-xl transition-all hover:scale-[1.02] hover:bg-[var(--color-surface-alt)] hover:shadow-2xl active:scale-100"
              >
                <PlayIcon className="h-5 w-5 fill-[var(--color-primary)] text-[var(--color-primary)]" />
                <span>Watch Live</span>
              </Link>

              <Link
                to="/about"
                className="inline-flex min-w-[200px] items-center justify-center space-x-2 rounded-xl border-2 border-white/40 bg-transparent px-8 py-3 text-lg font-bold text-white transition-all hover:scale-[1.02] hover:bg-white/10 active:scale-100"
              >
                <MapPinIcon className="h-5 w-5" />
                <span>Plan Your Visit</span>
              </Link>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ScheduleCard />
          </div>
        </motion.div>
      </section>

      <section className="bg-white/72 py-12 backdrop-blur-sm">
        <motion.div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {[
              { title: 'Sunday Service', time: '9:00 AM & 11:00 AM' },
              { title: 'Wednesday Bible Study', time: '7:00 PM' },
              { title: 'Prayer Meeting', time: 'Friday 6:00 PM' },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="mb-2 text-2xl font-bold">{service.title}</h3>
                <p className="text-[var(--color-text-light)]">{service.time}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
          <h2 className="mb-4 text-4xl md:text-5xl">Explore Our Community</h2>
            <p className="mx-auto max-w-2xl text-xl text-[var(--color-text-light)]">
              Discover the many ways to connect, grow, and serve together
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {features.map((feature) => (
              <motion.div key={feature.link} variants={itemVariants}>
                <Link
                  to={feature.link}
                  className="card-surface group block rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <motion.div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-[var(--color-primary)]">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--color-text-light)]">{feature.description}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="brand-gradient relative overflow-hidden px-4 py-20 text-white">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="relative z-10 mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">Join Us This Sunday</h2>
          <p className="mb-8 text-xl text-white/90">
            Experience worship, fellowship, and community. Everyone is welcome.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/about"
              className="inline-block rounded-lg bg-white px-8 py-4 font-semibold text-[var(--color-primary-deep)] transition-colors hover:bg-[var(--color-surface-alt)] hover:shadow-lg"
            >
              Plan Your Visit
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
