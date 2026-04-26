import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import logo from '../assets/logo.jpg';
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
    path: '/counseling',
    label: 'Counseling'
  }, {
    path: '/sermons',
    label: 'Sermons'
  }, {
    path: '/bible-study',
    label: 'Bible Study'
  }, {
    path: '/live',
    label: 'Live'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="sticky top-0 z-50 border-b border-[var(--color-border)]/80 bg-white/88 shadow-[0_12px_30px_-24px_rgba(13,27,42,0.28)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/78">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.img src={logo} alt="Power and Life Bible Church logo" className="h-12 w-12 rounded-full object-cover shadow-md ring-2 ring-[var(--color-primary)]/15" whileHover={{
            scale: 1.05
          }} transition={{
            type: 'spring',
            stiffness: 400,
            damping: 10
          }} />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)]">
                Power and Life
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-light)]">
                Bible Church
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => <Link key={link.path} to={link.path} className="relative rounded-full px-4 py-2 text-sm font-semibold transition-colors">
                <span className={`relative z-10 ${isActive(link.path) ? 'text-[var(--color-primary-deep)]' : 'text-[var(--color-text-light)] hover:text-[var(--color-primary)]'}`}>
                  {link.label}
                </span>
                {isActive(link.path) && <motion.div layoutId="activeTab" className="absolute inset-0 rounded-full border border-[var(--color-border)]/80 bg-[var(--color-surface-alt)]" transition={{
              type: 'spring',
              stiffness: 380,
              damping: 30
            }} />}
              </Link>)}
          </div>

          {/* Mobile menu button */}
          <motion.button onClick={() => setIsOpen(!isOpen)} className="rounded-xl p-2 text-[var(--color-primary-deep)] hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-primary)] md:hidden" whileTap={{
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
      }} className="overflow-hidden border-t border-[var(--color-border)] md:hidden">
            <motion.div className="space-y-1 px-2 pb-3 pt-2" initial={{
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
                  <Link to={link.path} onClick={() => setIsOpen(false)} className={`block rounded-xl px-3 py-2 text-base font-medium ${isActive(link.path) ? 'bg-[var(--color-surface-alt)] text-[var(--color-primary-deep)]' : 'text-[var(--color-text-light)] hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-primary)]'}`}>
                    {link.label}
                  </Link>
                </motion.div>)}
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
}
