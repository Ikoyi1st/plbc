import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SermonsPage } from './pages/SermonsPage';
import { LiveStreamPage } from './pages/LiveStreamPage';
import { BibleStudyPage } from './pages/BibleStudyPage';
import { AboutPage } from './pages/AboutPage';
import { CounselingPage } from './pages/CounselingPage';
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
        <Route path="/counseling" element={<motion.div initial={{
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
              <CounselingPage />
            </motion.div>} />
      </Routes>
    </AnimatePresence>;
}
export function App() {
  return <BrowserRouter>
      <div className="flex min-h-screen w-full flex-col bg-[var(--color-background)] text-[var(--color-text)]">
        <Navigation />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>;
}
