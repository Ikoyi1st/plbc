import React from 'react';
import { VideoIcon, CalendarIcon, BellIcon, UsersIcon } from 'lucide-react';
export function LiveStreamPage() {
  return <div className="w-full min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-rose-500 rounded-2xl mb-6">
            <VideoIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6">
            Live Stream
          </h1>
          <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">
            Join us for live worship services from anywhere in the world.
          </p>
        </div>

        {/* Live Stream Player */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-12">
          <div className="relative aspect-video bg-gray-900">
            {/* Placeholder for video player */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <VideoIcon className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Service Starting Soon</h2>
              <p className="text-gray-300">Sunday at 9:00 AM</p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h2 className="font-serif font-bold text-3xl mb-2">
                  Sunday Worship Service
                </h2>
                <p className="text-[var(--color-text-light)]">
                  Live from Grace Community Church
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-[var(--color-text-light)]">
                  <UsersIcon className="w-5 h-5" />
                  <span className="font-semibold">1,234 watching</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 px-6 py-3 bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 text-white rounded-lg font-semibold hover:bg-[#A86545] transition-colors flex items-center justify-center space-x-2">
                <BellIcon className="w-5 h-5" />
                <span>Notify Me</span>
              </button>
              <button className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Share Stream
              </button>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <CalendarIcon className="w-6 h-6 text-[var(--color-primary)]" />
              <h3 className="font-bold text-lg">Sunday Service</h3>
            </div>
            <p className="text-2xl font-bold mb-2">9:00 AM & 11:00 AM</p>
            <p className="text-[var(--color-text-light)]">Every Sunday</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <CalendarIcon className="w-6 h-6 text-[var(--color-primary)]" />
              <h3 className="font-bold text-lg">Wednesday Bible Study</h3>
            </div>
            <p className="text-2xl font-bold mb-2">7:00 PM</p>
            <p className="text-[var(--color-text-light)]">Every Wednesday</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <CalendarIcon className="w-6 h-6 text-[var(--color-primary)]" />
              <h3 className="font-bold text-lg">Special Events</h3>
            </div>
            <p className="text-2xl font-bold mb-2">Various Times</p>
            <p className="text-[var(--color-text-light)]">Check calendar</p>
          </div>
        </div>

        {/* Features */}
        <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-8 text-center">
            Why Watch Online?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-bold text-xl mb-2">Worship Anywhere</h3>
              <p className="text-white/90">
                Join from home, work, or on the go
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold text-xl mb-2">Live Chat</h3>
              <p className="text-white/90">
                Connect with others during service
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔔</div>
              <h3 className="font-bold text-xl mb-2">Get Notified</h3>
              <p className="text-white/90">
                Never miss a service with reminders
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}