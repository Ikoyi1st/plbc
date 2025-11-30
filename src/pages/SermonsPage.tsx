import React, { useState } from 'react';
import { BookOpenIcon, PlayIcon, DownloadIcon, SearchIcon } from 'lucide-react';
export function SermonsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const sermons = [{
    title: 'Walking in Faith',
    speaker: 'Pastor-----',
    date: 'December 10, 2023',
    duration: '45 min',
    series: 'Faith Foundations',
    description: 'Exploring what it means to trust God in uncertain times.',
    thumbnail: ''
  }, {
    title: 'The Power of Prayer',
    speaker: 'Minister-----',
    date: 'December 3, 2023',
    duration: '38 min',
    series: 'Spiritual Disciplines',
    description: 'Understanding the transformative power of consistent prayer.',
    thumbnail: ''
  }, {
    title: 'Love Your Neighbor',
    speaker: 'Pastor-----',
    date: 'November 26, 2023',
    duration: '42 min',
    series: 'Living the Gospel',
    description: "Practical ways to show Christ's love in our daily lives.",
    thumbnail: ''
  }, {
    title: 'Finding Peace',
    speaker: 'Minister ----',
    date: 'November 19, 2023',
    duration: '40 min',
    series: 'Inner Life',
    description: "Discovering God's peace in the midst of life's storms.",
    thumbnail: ''
  }, {
    title: 'Grace Abounds',
    speaker: 'Pastor------',
    date: 'November 12, 2023',
    duration: '47 min',
    series: 'Faith Foundations',
    description: "Understanding the depth and breadth of God's grace.",
    thumbnail: ''
  }, {
    title: 'Serving with Joy',
    speaker: 'Pastor------',
    date: 'November 5, 2023',
    duration: '35 min',
    series: 'Living the Gospel',
    description: 'Finding fulfillment through serving others.',
    thumbnail: ''
  }];
  return <div className="w-full min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6">
            <BookOpenIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6">
            Sermons
          </h1>
          <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">
            Listen to inspiring messages that will strengthen your faith and
            encourage your walk with God.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" placeholder="Search sermons by title, speaker, or topic..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-white" />
          </div>
        </div>

        {/* Sermons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sermons.map((sermon, index) => <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img src={sermon.thumbnail} alt={sermon.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <PlayIcon className="w-8 h-8 text-[var(--color-primary)] ml-1" />
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {sermon.duration}
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-[var(--color-primary)] font-semibold mb-2">
                  {sermon.series}
                </div>
                <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {sermon.title}
                </h3>
                <p className="text-sm text-[var(--color-text-light)] mb-3">
                  {sermon.speaker} • {sermon.date}
                </p>
                <p className="text-[var(--color-text-light)] mb-4">
                  {sermon.description}
                </p>
                <div className="flex space-x-2">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 text-white rounded-lg font-medium hover:bg-[#A86545] transition-colors flex items-center justify-center space-x-2">
                    <PlayIcon className="w-4 h-4" />
                    <span>Listen</span>
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <DownloadIcon className="w-4 h-4 text-[var(--color-text-light)]" />
                  </button>
                </div>
              </div>
            </div>)}
        </div>

        {/* Sermon Series CTA */}
        <div className="mt-16 bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">
            Subscribe to Our Podcast
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Never miss a sermon. Subscribe on your favorite podcast platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[var(--color-primary)] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apple Podcasts
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20">
              Spotify
            </button>
          </div>
        </div>
      </div>
    </div>;
}