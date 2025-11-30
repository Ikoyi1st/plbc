import React from 'react';
import { MicIcon, PlayIcon, DownloadIcon, RssIcon } from 'lucide-react';
export function PodcastPage() {
  const episodes = [{
    title: 'Faith in Action: Living Your Beliefs',
    date: 'December 12, 2023',
    duration: '42 min',
    description: 'Exploring practical ways to demonstrate faith in everyday life and make a real impact in your community.',
    image: ''
  }, {
    title: 'The Power of Forgiveness',
    date: 'December 5, 2023',
    duration: '38 min',
    description: 'Understanding biblical forgiveness and how it transforms relationships and brings healing.',
    image: ''
  }, {
    title: 'Finding Purpose in Difficult Times',
    date: 'November 28, 2023',
    duration: '45 min',
    description: "Discovering God's purpose even in life's most challenging seasons and maintaining hope.",
    image: ''
  }, {
    title: 'Building Strong Families',
    date: 'November 21, 2023',
    duration: '40 min',
    description: 'Biblical principles for nurturing healthy, loving family relationships that honor God.',
    image: ''
  }, {
    title: 'The Joy of Serving Others',
    date: 'November 14, 2023',
    duration: '36 min',
    description: "How serving transforms both the giver and receiver, creating ripples of God's love.",
    image: ''
  }, {
    title: 'Prayer: Your Direct Line to God',
    date: 'November 7, 2023',
    duration: '43 min',
    description: 'Deepening your prayer life and experiencing the power of intimate conversation with God.',
    image: ''
  }];
  return <div className="w-full min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl mb-6">
            <MicIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6">
            Grace Community Podcast
          </h1>
          <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">
            Inspiring conversations about faith, life, and following Jesus.
            Listen anytime, anywhere.
          </p>
        </div>

        {/* Subscribe Section */}
        <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <RssIcon className="w-16 h-16 mx-auto mb-6" />
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">
              Subscribe & Never Miss an Episode
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Available on all major podcast platforms
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[var(--color-primary)] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apple Podcasts
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20">
                Spotify
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20">
                RSS Feed
              </button>
            </div>
          </div>
        </div>

        {/* Episodes */}
        <div className="mb-12">
          <h2 className="font-serif font-bold text-3xl mb-8">
            Recent Episodes
          </h2>
          <div className="space-y-6">
            {episodes.map((episode, index) => <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row">
                <div className="md:w-48 h-48 md:h-auto flex-shrink-0">
                  <img src={episode.image} alt={episode.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 text-sm text-[var(--color-text-light)] mb-2">
                      <span>{episode.date}</span>
                      <span>•</span>
                      <span>{episode.duration}</span>
                    </div>
                    <h3 className="font-serif font-bold text-2xl mb-3 hover:text-[var(--color-primary)] transition-colors">
                      {episode.title}
                    </h3>
                    <p className="text-[var(--color-text-light)] mb-4">
                      {episode.description}
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex-1 px-6 py-3 bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 text-white rounded-lg font-medium hover:bg-[#A86545] transition-colors flex items-center justify-center space-x-2">
                      <PlayIcon className="w-5 h-5" />
                      <span>Play Episode</span>
                    </button>
                    <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                      <DownloadIcon className="w-5 h-5 text-[var(--color-text-light)]" />
                    </button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* About Podcast */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">
              About the Podcast
            </h2>
            <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-8">
              Power and Life Bible Church Podcast brings you weekly conversations about
              living out your faith in today's world. Hosted by our pastoral
              team and featuring guest speakers, each episode offers biblical
              insights, practical wisdom, and encouragement for your spiritual
              journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">
                  150+
                </div>
                <p className="text-[var(--color-text-light)]">Episodes</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">
                  10K+
                </div>
                <p className="text-[var(--color-text-light)]">Subscribers</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">
                  Weekly
                </div>
                <p className="text-[var(--color-text-light)]">New Episodes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}