import React from 'react';
import { BookIcon } from 'lucide-react';
export function ComicBookSection() {
  const comics = [{
    title: 'The Good Samaritan',
    description: 'A timeless story of compassion and kindness',
    image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&h=600&fit=crop',
    color: 'from-blue-500 to-purple-500'
  }, {
    title: 'David and Goliath',
    description: 'Faith conquers fear',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop',
    color: 'from-red-500 to-orange-500'
  }, {
    title: 'The Prodigal Son',
    description: 'A story of forgiveness and redemption',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&h=600&fit=crop',
    color: 'from-green-500 to-teal-500'
  }, {
    title: 'Jonah and the Whale',
    description: 'Obedience and second chances',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    color: 'from-cyan-500 to-blue-500'
  }];
  return <div className="w-full min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6">
            <BookIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6">
            Biblical Comic Books
          </h1>
          <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">
            Experience timeless biblical stories through vibrant visual
            storytelling. Perfect for all ages to learn and be inspired.
          </p>
        </div>

        {/* Comic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {comics.map((comic, index) => <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img src={comic.image} alt={comic.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-t ${comic.color} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-2xl mb-2 group-hover:text-purple-900 transition-colors">
                  {comic.title}
                </h3>
                <p className="text-[var(--color-text-light)] mb-4">
                  {comic.description}
                </p>
                <button className="px-6 py-2 bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 text-white rounded-lg font-medium hover:bg-[#A86545] transition-colors">
                  Read Now
                </button>
              </div>
            </div>)}
        </div>

        {/* Features */}
        <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-8 text-center">
            Why Comic Books?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="font-bold text-xl mb-2">Engaging Stories</h3>
              <p className="text-white/90">
                Visual narratives that bring scripture to life
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="font-bold text-xl mb-2">Family Friendly</h3>
              <p className="text-white/90">Perfect for readers of all ages</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="font-bold text-xl mb-2">Easy to Understand</h3>
              <p className="text-white/90">Complex lessons made accessible</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}