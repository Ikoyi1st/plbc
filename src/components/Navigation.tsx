import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, HeartIcon } from 'lucide-react';
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/about',
    label: 'About'
  }, {
    path: '/sermons',
    label: 'Sermons'
  }, {
    path: '/events',
    label: 'Events'
  }, {
    path: '/outreach',
    label: 'Outreach'
  }, {
    path: '/youth',
    label: 'Youth'
  }, {
    path: '/bible-study',
    label: 'Bible Study'
  }, {
    path: '/podcast',
    label: 'Podcast'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center" whileHover={{
            scale: 1.05,
            rotate: 5
          }} transition={{
            type: 'spring',
            stiffness: 400,
            damping: 10
          }}>
            </motion.div>
            <span className="font-serif font-bold text-xl text-[var(--color-text)] group-hover:text-purple-900 transition-colors">
              PLBC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => <Link key={link.path} to={link.path} className="relative px-3 py-2 rounded-md text-sm font-medium transition-colors">
                <span className={`relative z-10 ${isActive(link.path) ? 'text-purple-900' : 'text-[var(--color-text-light)] hover:text-purple-900'}`}>
                  {link.label}
                </span>
                {isActive(link.path) && <motion.div layoutId="activeTab" className="absolute inset-0 bg-[var(--color-background)] rounded-md" transition={{
              type: 'spring',
              stiffness: 380,
              damping: 30
            }} />}
              </Link>)}
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Link to="/outreach" className="ml-4 px-4 py-2 bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2 shadow-sm hover:shadow-md">
                <HeartIcon className="w-4 h-4" />
                <span>Give</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-md text-purple-900 hover:text-[var(--color-primary)] hover:bg-[var(--color-background)]" whileTap={{
          scale: 0.95
        }}>
            <AnimatePresence mode="wait">
              {isOpen ? <motion.div key="close" initial={{
              rotate: -90,
              opacity: 0
            }} animate={{
              rotate: 0,
              opacity: 1
            }} exit={{
              rotate: 90,
              opacity: 0
            }} transition={{
              duration: 0.2
            }}>
                  <XIcon className="w-6 h-6" />
                </motion.div> : <motion.div key="menu" initial={{
              rotate: 90,
              opacity: 0
            }} animate={{
              rotate: 0,
              opacity: 1
            }} exit={{
              rotate: -90,
              opacity: 0
            }} transition={{
              duration: 0.2
            }}>
                  <MenuIcon className="w-6 h-6" />
                </motion.div>}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} transition={{
        duration: 0.3,
        ease: 'easeInOut'
      }} className="md:hidden border-t border-gray-200 overflow-hidden">
            <motion.div className="px-2 pt-2 pb-3 space-y-1" initial={{
          y: -20
        }} animate={{
          y: 0
        }} transition={{
          duration: 0.3
        }}>
              {navLinks.map((link, index) => <motion.div key={link.path} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.3,
            delay: index * 0.05
          }}>
                  <Link to={link.path} onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path) ? 'text-[var(--color-primary)] bg-[var(--color-background)]' : 'text-[var(--color-text-light)] hover:text-[var(--color-primary)] hover:bg-[var(--color-background)]'}`}>
                    {link.label}
                  </Link>
                </motion.div>)}
              <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.3,
            delay: navLinks.length * 0.05
          }}>
                <Link to="/outreach" onClick={() => setIsOpen(false)} className="block px-3 py-2 bg-[var(--color-primary)] text-white rounded-md text-base font-medium hover:bg-blue-700 transition-colors">
                  Give
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
}