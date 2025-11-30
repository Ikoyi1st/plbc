import React from 'react';
import { GraduationCapIcon, DownloadIcon, BookOpenIcon } from 'lucide-react';
export function SundaySchoolPage() {
  const manuals = [{
    title: 'Beginner Class (Ages 3-5)',
    description: 'Introduction to Bible stories through songs, crafts, and activities',
    lessons: 12,
    size: '2.5 MB',
    color: 'from-pink-500 to-rose-500'
  }, {
    title: 'Primary Class (Ages 6-8)',
    description: 'Foundational Bible teachings with interactive lessons',
    lessons: 12,
    size: '3.2 MB',
    color: 'from-blue-500 to-cyan-500'
  }, {
    title: 'Junior Class (Ages 9-11)',
    description: 'Deeper exploration of scripture and Christian values',
    lessons: 12,
    size: '3.8 MB',
    color: 'from-green-500 to-emerald-500'
  }, {
    title: 'Teen Class (Ages 12-17)',
    description: 'Relevant discussions on faith, life, and contemporary issues',
    lessons: 12,
    size: '4.1 MB',
    color: 'from-purple-500 to-indigo-500'
  }];
  return <div className="w-full min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl mb-6">
            <GraduationCapIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6">
            Sunday School Manuals
          </h1>
          <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">
            Download comprehensive teaching materials for all age groups.
            Perfect for teachers and parents.
          </p>
        </div>

        {/* Manuals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {manuals.map((manual, index) => <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className={`w-14 h-14 bg-gradient-to-br ${manual.color} rounded-xl flex items-center justify-center mb-6`}>
                <BookOpenIcon className="w-7 h-7 text-white" />
              </div>

              <h3 className="font-serif font-bold text-2xl mb-3">
                {manual.title}
              </h3>
              <p className="text-[var(--color-text-light)] mb-6">
                {manual.description}
              </p>

              <div className="flex items-center justify-between mb-6 text-sm text-[var(--color-text-light)]">
                <span>{manual.lessons} Lessons</span>
                <span>{manual.size}</span>
              </div>

              <button className="w-full px-6 py-3 bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 text-white rounded-lg font-medium hover:bg-[#A86545] transition-colors flex items-center justify-center space-x-2">
                <DownloadIcon className="w-5 h-5" />
                <span>Download Manual</span>
              </button>
            </div>)}
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-8 text-center">
            What's Inside Each Manual
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="font-bold text-xl mb-2">Lesson Plans</h3>
              <p className="text-[var(--color-text-light)]">
                Complete weekly lessons with objectives and activities
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-bold text-xl mb-2">Activity Sheets</h3>
              <p className="text-[var(--color-text-light)]">
                Printable worksheets, coloring pages, and crafts
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="font-bold text-xl mb-2">Teaching Tips</h3>
              <p className="text-[var(--color-text-light)]">
                Practical guidance for engaging young learners
              </p>
            </div>
          </div>
        </div>

        {/* Teacher Resources */}
        <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">
              Become a Sunday School Teacher
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Share your faith with the next generation. We provide training,
              support, and all the resources you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[var(--color-primary)] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply to Teach
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
}