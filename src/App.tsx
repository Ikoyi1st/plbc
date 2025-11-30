import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ComicBookSection } from './pages/ComicBookSection';
import { OutreachPage } from './pages/OutreachPage';
import { EventsPage } from './pages/EventsPage';
import { SermonsPage } from './pages/SermonsPage';
import { LiveStreamPage } from './pages/LiveStreamPage';
import { YouthCommunityPage } from './pages/YouthCommunityPage';
import { BibleStudyPage } from './pages/BibleStudyPage';
import { AboutPage } from './pages/AboutPage';
import { SundaySchoolPage } from './pages/SundaySchoolPage';
import { PodcastPage } from './pages/PodcastPage';
function AnimatedRoutes() {
  const location = useLocation();
  return <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3
      }}>
              <HomePage />
            </motion.div>} />
        <Route path="/comic" element={<motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3
      }}>
              <ComicBookSection />
            </motion.div>} />
        <Route path="/outreach" element={<motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3
      }}>
              <OutreachPage />
            </motion.div>} />
        <Route path="/events" element={<motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3
      }}>
              <EventsPage />
            </motion.div>} />
        <Route path="/sermons" element={<motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3
      }}>
              <SermonsPage />
            </motion.div>} />
        <Route path="/live" element={<motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3
      }}>
              <LiveStreamPage />
            </motion.div>} />
        <Route path="/youth" element={<motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3
      }}>
              <YouthCommunityPage />
            </motion.div>} />
        <Route path="/bible-study" element={<motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3
      }}>
              <BibleStudyPage />
            </motion.div>} />
        <Route path="/about" element={<motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3
      }}>
              <AboutPage />
            </motion.div>} />
        <Route path="/sunday-school" element={<motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3
      }}>
              <SundaySchoolPage />
            </motion.div>} />
        <Route path="/podcast" element={<motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3
      }}>
              <PodcastPage />
            </motion.div>} />
      </Routes>
    </AnimatePresence>;
}
export function App() {
  return <BrowserRouter>
      <div className="flex flex-col min-h-screen w-full">
        <Navigation />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>;
}