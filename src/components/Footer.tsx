import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, YoutubeIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
export function Footer() {
  return <footer className="mt-20 text-white" style={{
    background: 'linear-gradient(145deg, #0d1b2a 0%, #1e3a8a 55%, #60a5fa 100%)'
  }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-4">
              Power and Life Bible Church
            </h3>
            <p className="text-sm leading-relaxed text-white/72">
              A place where faith, community, and service come together. Join us
              in worship and fellowship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-white/72 transition-colors hover:text-[var(--color-highlight)]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/counseling" className="text-white/72 transition-colors hover:text-[var(--color-highlight)]">
                  Counseling
                </Link>
              </li>
              <li>
                <Link to="/sermons" className="text-white/72 transition-colors hover:text-[var(--color-highlight)]">
                  Sermons
                </Link>
              </li>
              <li>
                <Link to="/bible-study" className="text-white/72 transition-colors hover:text-[var(--color-highlight)]">
                  Bible Study
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/live" className="text-white/72 transition-colors hover:text-[var(--color-highlight)]">
                  Live Stream
                </Link>
              </li>
              <li>
                <Link to="/counseling" className="text-white/72 transition-colors hover:text-[var(--color-highlight)]">
                  Care & Support
                </Link>
              </li>
              <li>
                <Link to="/sermons" className="text-white/72 transition-colors hover:text-[var(--color-highlight)]">
                  Latest Sermons
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-white/72">
                  123 Church Street, City, State 12345
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <PhoneIcon className="w-4 h-4 flex-shrink-0" />
                <span className="text-white/72">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MailIcon className="w-4 h-4 flex-shrink-0" />
                <span className="text-white/72">info@powerandlifebiblechurch.org</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white/72 transition-colors hover:text-[var(--color-highlight)]">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/72 transition-colors hover:text-[var(--color-highlight)]">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/72 transition-colors hover:text-[var(--color-highlight)]">
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/15 pt-8 text-center text-sm text-white/55">
          <p>
            &copy; {new Date().getFullYear()} Power and Life Bible Church. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}
