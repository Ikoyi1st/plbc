import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Added PlayIcon, MapPinIcon, ClockIcon, and UserCheckIcon for the new Hero Section
import { BookOpenIcon, CalendarIcon, HeartIcon, UsersIcon, RadioIcon, MicIcon, GraduationCapIcon, BookIcon, VideoIcon, MapPinIcon, ClockIcon, UserCheckIcon, PlayIcon } from 'lucide-react';

// =======================================================
// SCHEDULE CARD COMPONENT
// =======================================================

const ScheduleCard = () => {
    // Shared Tailwind classes for structure and readability
    const iconColorClass = "text-purple-500";
    const detailClass = "flex items-center space-x-3";
    const textStyle = "text-gray-700 font-medium";

    return (
        // The container is slightly rotated to match the image's effect
        <div className="relative w-full max-w-sm mx-auto transform -rotate-1 min-w-80">
            {/* Shadow/Layered Effect (Faux Card Stacks - Three layers) */}
            
            {/* Layer 1 (Closest to main card) */}
            <div className="absolute inset-0 bg-purple-700/60 rounded-3xl transform translate-x-1 translate-y-1 blur-sm opacity-60"></div>
            
            {/* Layer 2 (Intermediate layer) */}
            <div className="absolute inset-0 bg-purple-800/50 rounded-3xl transform translate-x-3 translate-y-3 blur-sm opacity-50"></div>
            
            {/* Layer 3 (Farthest layer) */}
            <div className="absolute inset-0 bg-purple-900/40 rounded-3xl transform translate-x-5 translate-y-5 blur-sm opacity-40"></div>

            {/* Main Card Content */}
            <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-2xl space-y-6">
                
                {/* Header */}
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        This Sunday
                    </h2>
                    <span className="text-xs px-3 py-1 bg-pink-100 text-pink-600 font-semibold rounded-full">
                        Live
                    </span>
                </div>

                {/* Details Section */}
                <div className="space-y-4 pt-2">
                    {/* Time */}
                    <div className={detailClass}>
                        <ClockIcon className={`w-5 h-5 ${iconColorClass}`} />
                        <span className={textStyle}>10:00 AM - 12:00 PM</span>
                    </div>

                    {/* Pastor/Speaker */}
                    <div className={detailClass}>
                        <UserCheckIcon className={`w-5 h-5 ${iconColorClass}`} />
                        <span className={textStyle}>Pastor David Miller</span>
                    </div>

                    {/* Sermon Series */}
                    <div className={detailClass}>
                        <BookOpenIcon className={`w-5 h-5 ${iconColorClass}`} />
                        <span className={textStyle}>Walking in Faith Series</span>
                    </div>
                </div>

                {/* CTA Button inside Card */}
                <button
                    className="w-full text-white font-bold py-4 mt-6 rounded-xl text-lg
                               bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800
                               transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-100"
                >
                    Join Service
                </button>
            </div>
        </div>
    );
};

// =======================================================
// HOMEPAGE COMPONENT (Merged)
// =======================================================

export function HomePage() {
  const features = [{
    icon: BookIcon,
    title: 'Comic Book Stories',
    description: 'Explore faith through visual storytelling',
    link: '/comic',
    color: 'from-purple-500 to-pink-500'
  }, {
    icon: HeartIcon,
    title: 'Outreach & Giving',
    description: 'Make a difference in our community',
    link: '/outreach',
    color: 'from-red-500 to-orange-500'
  }, {
    icon: CalendarIcon,
    title: 'Upcoming Events',
    description: 'Join us for programs and gatherings',
    link: '/events',
    color: 'from-blue-500 to-cyan-500'
  }, {
    icon: BookOpenIcon,
    title: 'Sermons',
    description: 'Listen to inspiring messages',
    link: '/sermons',
    color: 'from-green-500 to-emerald-500'
  }, {
    icon: VideoIcon,
    title: 'Live Stream',
    description: 'Watch services from anywhere',
    link: '/live',
    color: 'from-red-600 to-rose-500'
  }, {
    icon: UsersIcon,
    title: 'Youth Community',
    description: 'Connect and grow together',
    link: '/youth',
    color: 'from-yellow-500 to-amber-500'
  }, {
    icon: BookOpenIcon,
    title: 'Bible Study',
    description: 'Deepen your understanding',
    link: '/bible-study',
    color: 'from-indigo-500 to-purple-500'
  }, {
    icon: GraduationCapIcon,
    title: 'Sunday School',
    description: 'Download teaching materials',
    link: '/sunday-school',
    color: 'from-teal-500 to-green-500'
  }, {
    icon: MicIcon,
    title: 'Podcast',
    description: 'Listen on the go',
    link: '/podcast',
    color: 'from-pink-500 to-purple-500'
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

  return <div className="w-full">
      
    {/* ======================================================= */}
    {/* NEW HERO SECTION (REPLACEMENT) */}
    {/* ======================================================= */}
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 font-sans">
        
        {/* Content Container (2-Column Layout for Desktop) */}
        <motion.div 
            className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            
            {/* === Left Column: Hero Text & Buttons === */}
            <div className="text-white text-left">
            
            {/* Live Stream Pill */}
            <motion.div 
                className="inline-flex items-center space-x-2 text-sm font-semibold mb-6 p-2 pl-4 pr-5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
            >
                <span className="w-2.5 h-2.5 bg-pink-400 rounded-full animate-pulse"></span>
                <span>Live Stream Available</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
                className="font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Welcome to Our Faith Community
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
                className="text-lg md:text-xl mb-10 text-white/80 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                Join us in worship, fellowship, and service as we grow together in faith and love.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                
                {/* Watch Live Button (Primary - White) */}
                <Link to="/live" className="px-8 py-3 bg-white text-purple-700 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-100 min-w-[200px]">
                <PlayIcon className="w-5 h-5 fill-purple-700" />
                <span>Watch Live</span>
                </Link>

                {/* Plan Your Visit Button (Secondary - Outlined) */}
                <Link to="/about" className="px-8 py-3 bg-transparent border-2 border-white/40 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center space-x-2 transform hover:scale-[1.02] active:scale-100 min-w-[200px]">
                <MapPinIcon className="w-5 h-5" />
                <span>Plan Your Visit</span>
                </Link>
            </motion.div>
            </div>

            {/* === Right Column: Schedule Card === */}
            <div className="flex justify-center lg:justify-end">
            <ScheduleCard />
            </div>
            
        </motion.div>
    </section>

      {/* Service Times */}
      <section className="py-12 bg-white">
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" initial={{
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[{
            title: 'Sunday Service',
            time: '9:00 AM & 11:00 AM'
          }, {
            title: 'Wednesday Bible Study',
            time: '7:00 PM'
          }, {
            title: 'Youth Gathering',
            time: 'Friday 6:00 PM'
          }].map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }}>
                <h3 className="font-serif font-bold text-2xl mb-2">
                  {service.title}
                </h3>
                <p className="text-[var(--color-text-light)]">{service.time}</p>
              </motion.div>)}
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-100px'
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4">
              Explore Our Community
            </h2>
            <p className="text-xl text-[var(--color-text-light)] max-w-2xl mx-auto">
              Discover the many ways to connect, grow, and serve together
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: '-100px'
        }}>
            {features.map((feature, index) => <motion.div key={index} variants={itemVariants}>
                <Link to={feature.link} className="group block bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <motion.div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`} whileHover={{
                scale: 1.1,
                rotate: 5
              }} transition={{
                type: 'spring',
                stiffness: 400,
                damping: 10
              }}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--color-text-light)]">
                    {feature.description}
                  </p>
                </Link>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 text-white relative overflow-hidden">
        <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" animate={{
        opacity: [0.3, 0.6, 0.3]
      }} transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut'
      }} />
        <motion.div className="max-w-4xl mx-auto text-center relative z-10" initial={{
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
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6">
            Join Us This Sunday
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Experience worship, fellowship, and community. Everyone is welcome.
          </p>
          <motion.div whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <Link to="/about" className="px-8 py-4 bg-white text-black/70 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block hover:shadow-lg">
              Plan Your Visit
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>;
}