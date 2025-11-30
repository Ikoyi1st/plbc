import React from 'react';
import { UsersIcon, GamepadIcon, MusicIcon, MessageCircleIcon } from 'lucide-react';
export function YouthCommunityPage() {
  const activities = [{
    icon: MusicIcon,
    title: 'Worship Nights',
    description: 'Contemporary worship and praise every Friday evening',
    time: 'Fridays, 6:00 PM'
  }, {
    icon: GamepadIcon,
    title: 'Game Nights',
    description: 'Fun competitions, board games, and fellowship',
    time: 'Last Saturday of month'
  }, {
    icon: MessageCircleIcon,
    title: 'Small Groups',
    description: 'Connect deeply with peers in discussion groups',
    time: 'Wednesdays, 7:00 PM'
  }];
  return <div className="w-full min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-2xl mb-6">
            <UsersIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6">
            Youth Community
          </h1>
          <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">
            A vibrant community for ages 13-25 to connect, grow, and have fun
            together.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-16">
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=600&fit=crop" alt="Youth gathering" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="font-serif font-bold text-4xl mb-2">
                Join Us
              </h2>
              <p className="text-xl">Worship, games, and great conversations</p>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {activities.map((activity, index) => <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center mb-6">
                <activity.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif font-bold text-2xl mb-3">
                {activity.title}
              </h3>
              <p className="text-[var(--color-text-light)] mb-4">
                {activity.description}
              </p>
              <p className="text-sm font-semibold text-[var(--color-primary)]">
                {activity.time}
              </p>
            </div>)}
        </div>

        {/* Social Feed Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-8 text-center">
            Connect & Share
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-background)] rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full"></div>
                <div>
                  <p className="font-semibold">Sarah M.</p>
                  <p className="text-sm text-[var(--color-text-light)]">
                    2 hours ago
                  </p>
                </div>
              </div>
              <p className="text-[var(--color-text-light)]">
                Amazing worship night last Friday! Can't wait for the next one
                🙏✨
              </p>
            </div>

            <div className="bg-[var(--color-background)] rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full"></div>
                <div>
                  <p className="font-semibold">James K.</p>
                  <p className="text-sm text-[var(--color-text-light)]">
                    5 hours ago
                  </p>
                </div>
              </div>
              <p className="text-[var(--color-text-light)]">
                Who's coming to game night this Saturday? Let's make it epic! 🎮
              </p>
            </div>

            <div className="bg-[var(--color-background)] rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                <div>
                  <p className="font-semibold">Emily R.</p>
                  <p className="text-sm text-[var(--color-text-light)]">
                    1 day ago
                  </p>
                </div>
              </div>
              <p className="text-[var(--color-text-light)]">
                Small group discussions have been so meaningful. Grateful for
                this community! 💙
              </p>
            </div>

            <div className="bg-[var(--color-background)] rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full"></div>
                <div>
                  <p className="font-semibold">Michael T.</p>
                  <p className="text-sm text-[var(--color-text-light)]">
                    2 days ago
                  </p>
                </div>
              </div>
              <p className="text-[var(--color-text-light)]">
                Excited for the upcoming retreat! Who else is going? 🏕️
              </p>
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">
            Be Part of Something Amazing
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our youth community and experience faith, friendship, and fun
            like never before.
          </p>
          <button className="px-8 py-4 bg-white text-[var(--color-primary)] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Join the Community
          </button>
        </div>
      </div>
    </div>;
}