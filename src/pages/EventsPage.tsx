import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from 'lucide-react';
export function EventsPage() {
  const events = [{
    title: 'Sunday Worship Service',
    date: 'Every Sunday',
    time: '9:00 AM & 11:00 AM',
    location: 'Main Sanctuary',
    description: 'Join us for inspiring worship, powerful messages, and fellowship.',
    attendees: '500+',
    color: 'from-blue-500 to-cyan-500'
  }, {
    title: 'Youth Night',
    date: 'Friday, Dec 15',
    time: '6:00 PM',
    location: 'Youth Hall',
    description: 'Games, worship, and fellowship for ages 13-25.',
    attendees: '150+',
    color: 'from-purple-500 to-pink-500'
  }, {
    title: 'Community Outreach',
    date: 'Saturday, Dec 16',
    time: '10:00 AM',
    location: 'City Center',
    description: 'Serve our community with food distribution and health screenings.',
    attendees: '100+',
    color: 'from-green-500 to-emerald-500'
  }, {
    title: 'Christmas Carol Service',
    date: 'Sunday, Dec 24',
    time: '7:00 PM',
    location: 'Main Sanctuary',
    description: 'Celebrate the season with traditional carols and candlelight.',
    attendees: '800+',
    color: 'from-red-500 to-orange-500'
  }, {
    title: 'New Year Prayer Service',
    date: 'Sunday, Dec 31',
    time: '10:00 PM',
    location: 'Main Sanctuary',
    description: 'Welcome the new year with prayer, worship, and thanksgiving.',
    attendees: '600+',
    color: 'from-yellow-500 to-amber-500'
  }, {
    title: 'Bible Study Workshop',
    date: 'Wednesday, Jan 10',
    time: '7:00 PM',
    location: 'Conference Room',
    description: 'Deep dive into scripture with interactive discussions.',
    attendees: '80+',
    color: 'from-indigo-500 to-purple-500'
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };
  return <div className="w-full min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }}>
          <motion.div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6" initial={{
          scale: 0,
          rotate: -180
        }} animate={{
          scale: 1,
          rotate: 0
        }} transition={{
          type: 'spring',
          stiffness: 200,
          damping: 15,
          delay: 0.2
        }}>
            <CalendarIcon className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6">
            Upcoming Events
          </h1>
          <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">
            Join us for worship, fellowship, and community programs throughout
            the year.
          </p>
        </motion.div>

        {/* Events Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" animate="visible">
          {events.map((event, index) => <motion.div key={index} variants={itemVariants} whileHover={{
          y: -8,
          transition: {
            duration: 0.2
          }
        }} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <motion.div className={`h-2 bg-gradient-to-r ${event.color}`} initial={{
            scaleX: 0
          }} animate={{
            scaleX: 1
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} />
              <div className="p-6">
                <h3 className="font-serif font-bold text-2xl mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-3 text-[var(--color-text-light)]">
                    <CalendarIcon className="w-5 h-5 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-[var(--color-text-light)]">
                    <ClockIcon className="w-5 h-5 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-[var(--color-text-light)]">
                    <MapPinIcon className="w-5 h-5 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-[var(--color-text-light)]">
                    <UsersIcon className="w-5 h-5 flex-shrink-0" />
                    <span>{event.attendees} expected</span>
                  </div>
                </div>

                <p className="text-[var(--color-text-light)] mb-6">
                  {event.description}
                </p>

                <motion.button className="w-full px-6 py-3 bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors" whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }}>
                  Register Now
                </motion.button>
              </div>
            </motion.div>)}
        </motion.div>

        {/* Calendar CTA */}
        <motion.div className="mt-16 bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: '-100px'
      }} transition={{
        duration: 0.6
      }}>
          <motion.div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }} transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />
          <div className="relative z-10">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Subscribe to our calendar to never miss an event
            </p>
            <motion.button className="px-8 py-4 bg-white text-black/70 rounded-lg font-semibold hover:bg-gray-100 transition-colors hover:shadow-lg" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              Subscribe to Calendar
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>;
}