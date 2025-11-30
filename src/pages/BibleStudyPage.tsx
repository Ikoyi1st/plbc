import React from 'react';
import { BookOpenIcon, UsersIcon, ClockIcon, MapPinIcon } from 'lucide-react';
export function BibleStudyPage() {
  const groups = [{
    name: 'Young Adults Study',
    time: 'Wednesdays, 7:00 PM',
    location: 'Room 201',
    leader: '',
    members: 25,
    description: 'Deep dive into scripture with peers in your season of life',
    currentStudy: 'Book of Romans'
  }, {
    name: 'Family Bible Study',
    time: 'Thursdays, 6:30 PM',
    location: 'Main Hall',
    leader: '',
    members: 40,
    description: 'Family-friendly study with activities for all ages',
    currentStudy: 'Parables of Jesus'
  }, {
    name: "Men's Study Group",
    time: 'Saturdays, 8:00 AM',
    location: 'Conference Room',
    leader: '',
    members: 18,
    description: 'Fellowship and accountability for men of faith',
    currentStudy: 'Leadership in Scripture'
  }, {
    name: "Women's Study Circle",
    time: 'Tuesdays, 10:00 AM',
    location: 'Room 105',
    leader: '',
    members: 30,
    description: 'Encouraging community for women to grow together',
    currentStudy: 'Women of the Bible'
  }];
  return <div className="w-full min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl mb-6">
            <BookOpenIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6">
            Bible Study Groups
          </h1>
          <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">
            Grow deeper in your faith through community study and discussion of
            God's Word.
          </p>
        </div>

        {/* Study Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {groups.map((group, index) => <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-serif font-bold text-2xl">{group.name}</h3>
                <div className="flex items-center space-x-2 text-[var(--color-text-light)]">
                  <UsersIcon className="w-4 h-4" />
                  <span className="text-sm">{group.members}</span>
                </div>
              </div>

              <p className="text-[var(--color-text-light)] mb-6">
                {group.description}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-[var(--color-text-light)]">
                  <ClockIcon className="w-5 h-5 flex-shrink-0" />
                  <span>{group.time}</span>
                </div>
                <div className="flex items-center space-x-3 text-[var(--color-text-light)]">
                  <MapPinIcon className="w-5 h-5 flex-shrink-0" />
                  <span>{group.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-[var(--color-text-light)]">
                  <UsersIcon className="w-5 h-5 flex-shrink-0" />
                  <span>Led by {group.leader}</span>
                </div>
              </div>

              <div className="bg-[var(--color-background)] rounded-lg p-4 mb-6">
                <p className="text-sm text-[var(--color-text-light)] mb-1">
                  Currently Studying:
                </p>
                <p className="font-semibold text-[var(--color-primary)]">
                  {group.currentStudy}
                </p>
              </div>

              <button className="w-full px-6 py-3 bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 text-white rounded-lg font-medium hover:bg-[#A86545] transition-colors">
                Join This Group
              </button>
            </div>)}
        </div>

        {/* Resources Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-8 text-center">
            Study Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpenIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Study Guides</h3>
              <p className="text-[var(--color-text-light)] mb-4">
                Download weekly study materials and discussion questions
              </p>
              <button className="text-[var(--color-primary)] font-semibold hover:underline">
                Download Resources
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpenIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Reading Plans</h3>
              <p className="text-[var(--color-text-light)] mb-4">
                Follow structured plans to read through the Bible
              </p>
              <button className="text-[var(--color-primary)] font-semibold hover:underline">
                View Plans
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpenIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Online Tools</h3>
              <p className="text-[var(--color-text-light)] mb-4">
                Access commentaries, concordances, and study tools
              </p>
              <button className="text-[var(--color-primary)] font-semibold hover:underline">
                Explore Tools
              </button>
            </div>
          </div>
        </div>

        {/* Start Your Own Group CTA */}
        <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">
            Start Your Own Study Group
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Have a passion for leading others in Bible study? We'll provide
            training and resources.
          </p>
          <button className="px-8 py-4 bg-white text-[var(--color-primary)] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Become a Leader
          </button>
        </div>
      </div>
    </div>;
}