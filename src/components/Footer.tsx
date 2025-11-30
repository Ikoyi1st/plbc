import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, YoutubeIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-4">
              Power and Life Bible Church
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A place where faith, community, and service come together. Join us
              in worship and fellowship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sermons" className="text-gray-300 hover:text-white transition-colors">
                  Sermons
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/bible-study" className="text-gray-300 hover:text-white transition-colors">
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
                <Link to="/youth" className="text-gray-300 hover:text-white transition-colors">
                  Youth Community
                </Link>
              </li>
              <li>
                <Link to="/podcast" className="text-gray-300 hover:text-white transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link to="/live" className="text-gray-300 hover:text-white transition-colors">
                  Live Stream
                </Link>
              </li>
              <li>
                <Link to="/outreach" className="text-gray-300 hover:text-white transition-colors">
                  Outreach
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
                <span className="text-gray-300">
                  123 Church Street, City, State 12345
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <PhoneIcon className="w-4 h-4 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MailIcon className="w-4 h-4 flex-shrink-0" />
                <span className="text-gray-300">info@gracecommunity.org</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Power and Life Bible Church. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}