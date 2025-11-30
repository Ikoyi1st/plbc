import React from 'react';
import { HeartIcon, HandHelpingIcon, GraduationCapIcon, DollarSignIcon } from 'lucide-react';
export function OutreachPage() {
  const programs = [{
    icon: HandHelpingIcon,
    title: 'Community Service',
    description: 'Join us in serving our local community through food drives, shelter support, and neighborhood cleanup initiatives.',
    impact: '500+ families served monthly'
  }, {
    icon: GraduationCapIcon,
    title: 'Skill Acquisition',
    description: 'Free training programs in vocational skills, computer literacy, and entrepreneurship to empower community members.',
    impact: '200+ students trained'
  }, {
    icon: HeartIcon,
    title: 'Healthcare Outreach',
    description: 'Free medical checkups, health education, and wellness programs for underserved communities.',
    impact: '1000+ people reached'
  }];
  return <div className="w-full min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl mb-6">
            <HeartIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6">
            Giving Back to Our Nation
          </h1>
          <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">
            Together, we're making a lasting impact through outreach, donations,
            and skill development programs.
          </p>
        </div>

        {/* Programs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-xl flex items-center justify-center mb-6">
                <program.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif font-bold text-2xl mb-3">
                {program.title}
              </h3>
              <p className="text-[var(--color-text-light)] mb-4">
                {program.description}
              </p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm font-semibold text-[var(--color-primary)]">
                  {program.impact}
                </p>
              </div>
            </div>)}
        </div>

        {/* Donation Section */}
        <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <DollarSignIcon className="w-16 h-16 mx-auto mb-6" />
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">
              Make a Donation
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Your generosity helps us continue our mission of serving and
              empowering communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[var(--color-primary)] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                One-Time Gift
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20">
                Monthly Giving
              </button>
            </div>
          </div>
        </div>

        {/* Volunteer Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">
              Volunteer With Us
            </h2>
            <p className="text-xl text-[var(--color-text-light)] mb-8">
              Join our team of dedicated volunteers making a difference in our
              community every day.
            </p>
            <form className="max-w-md mx-auto space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" />
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                <option>Select Area of Interest</option>
                <option>Community Service</option>
                <option>Skill Training</option>
                <option>Healthcare Outreach</option>
              </select>
              <button className="w-full px-8 py-4 bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 text-white rounded-lg font-semibold hover:bg-[#A86545] transition-colors">
                Sign Up to Volunteer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>;
}