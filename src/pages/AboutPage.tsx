import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, TargetIcon, UsersIcon } from 'lucide-react';
export function AboutPage() {
  const team = [{
    name: 'Pastor Nathaniel Akowe',
    role: 'Senior Pastor',
    image: '',
    bio: 'Leading our congregation with wisdom and compassion for over 15 years.'
  }, {
    name: 'Pastor Philip',
    role: 'Associate Pastor/Apapa Branch Pastor',
    image: '',
    bio: 'Passionate about youth ministry and community outreach programs.'
  }, {
    name: 'Deacon Michael Brown',
    role: 'Worship Leader',
    image: '',
    bio: 'Creating meaningful worship experiences that draw us closer to God.'
  }, {
    name: 'Sister Grace Williams',
    role: "Children's Ministry Director",
    image: '',
    bio: 'Nurturing the next generation with love and biblical teaching.'
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
          <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6">
            About Us
          </h1>
          <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">
            A community built on faith, love, and service to God and our
            neighbors.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-100px'
      }}>
          {[{
          icon: TargetIcon,
          title: 'Our Mission',
          text: 'To spread the love of Christ through worship, fellowship, and service, making disciples who transform communities.',
          color: 'from-[var(--color-primary)] to-[var(--color-accent)]'
        }, {
          icon: HeartIcon,
          title: 'Our Vision',
          text: "A thriving community where every person experiences God's love, grows in faith, and serves with purpose.",
          color: 'from-[var(--color-secondary)] to-[var(--color-primary)]'
        }, {
          icon: UsersIcon,
          title: 'Our Values',
          text: 'Faith, Community, Service, Integrity, and Compassion guide everything we do as a church family.',
          color: 'from-[var(--color-accent)] to-[var(--color-secondary)]'
        }].map((item, index) => <motion.div key={index} variants={itemVariants} className="bg-white rounded-xl p-8 shadow-sm text-center" whileHover={{
          y: -8,
          transition: {
            duration: 0.2
          }
        }}>
              <motion.div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`} whileHover={{
            scale: 1.1,
            rotate: 360
          }} transition={{
            type: 'spring',
            stiffness: 200,
            damping: 10
          }}>
                <item.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="font-serif font-bold text-2xl mb-4">
                {item.title}
              </h3>
              <p className="text-[var(--color-text-light)]">{item.text}</p>
            </motion.div>)}
        </motion.div>

        {/* Our Story */}
        <motion.div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm mb-20" initial={{
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
          <h2 className="font-serif font-bold text-4xl mb-6 text-center">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-lg text-[var(--color-text-light)] leading-relaxed">
            <p>
              Power and Life Bible Church was founded in 1985 by a small group
              of believers with a vision to create a welcoming space where
              people could encounter God's love and grow in their faith journey.
            </p>
            <p>
              Over the past decades, we've grown from a handful of families
              meeting in a living room to a vibrant community of over 1,000
              members. Yet our heart remains the same: to be a place where
              everyone belongs and can experience the transforming power of
              God's grace.
            </p>
            <p>
              Today, we continue to serve our community through worship
              services, outreach programs, youth ministries, and countless
              opportunities for fellowship and spiritual growth. We believe that
              church is not just a building, but a family united in Christ.
            </p>
          </div>
        </motion.div>

        {/* Leadership Team */}
        <div className="mb-20">
          <motion.h2 className="font-serif font-bold text-4xl mb-12 text-center" initial={{
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
            Meet Our Team
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: '-100px'
        }}>
            {team.map((member, index) => <motion.div key={index} variants={itemVariants} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow" whileHover={{
            y: -8
          }}>
                <div className="aspect-square overflow-hidden">
                  <motion.img src={member.image} alt={member.name} className="w-full h-full object-cover" whileHover={{
                scale: 1.1
              }} transition={{
                duration: 0.4
              }} />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-xl mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[var(--color-primary)] font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-[var(--color-text-light)]">
                    {member.bio}
                  </p>
                </div>
              </motion.div>)}
          </motion.div>
        </div>

        {/* Visit Us CTA */}
        <motion.div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden" initial={{
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
          <motion.div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />
          <div className="relative z-10">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">
              Come Visit Us
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              We'd love to meet you! Join us for worship this Sunday and
              experience our community firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button className="px-8 py-4 bg-white text-black/70 rounded-lg font-semibold hover:bg-gray-100 transition-colors hover:shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                Plan Your Visit
              </motion.button>
              <motion.button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                Contact Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>;
}