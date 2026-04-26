import { GamepadIcon, MessageCircleIcon, MusicIcon, UsersIcon } from 'lucide-react';

export function YouthCommunityPage() {
  const activities = [
    {
      icon: MusicIcon,
      title: 'Worship Nights',
      description: 'Contemporary worship and praise every Friday evening',
      time: 'Fridays, 6:00 PM',
    },
    {
      icon: GamepadIcon,
      title: 'Game Nights',
      description: 'Fun competitions, board games, and fellowship',
      time: 'Last Saturday of month',
    },
    {
      icon: MessageCircleIcon,
      title: 'Small Groups',
      description: 'Connect deeply with peers in discussion groups',
      time: 'Wednesdays, 7:00 PM',
    },
  ];

  const posts = [
    {
      name: 'Sarah M.',
      time: '2 hours ago',
      accent: 'from-yellow-500 to-amber-500',
      text: "Amazing worship night last Friday! Can't wait for the next one.",
    },
    {
      name: 'James K.',
      time: '5 hours ago',
      accent: 'from-blue-500 to-cyan-500',
      text: "Who's coming to game night this Saturday? Let's make it epic!",
    },
    {
      name: 'Emily R.',
      time: '1 day ago',
      accent: 'from-purple-500 to-pink-500',
      text: 'Small group discussions have been so meaningful. Grateful for this community!',
    },
    {
      name: 'Michael T.',
      time: '2 days ago',
      accent: 'from-green-500 to-emerald-500',
      text: 'Excited for the upcoming retreat! Who else is going?',
    },
  ];

  return (
    <div className="min-h-screen w-full px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-500">
            <UsersIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">Youth Community</h1>
          <p className="mx-auto max-w-3xl text-xl text-[var(--color-text-light)]">
            A vibrant community for ages 13-25 to connect, grow, and have fun together.
          </p>
        </div>

        <div className="relative mb-16 h-96 overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=600&fit=crop"
            alt="Youth gathering"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent">
            <div className="p-8 text-white">
              <h2 className="mb-2 text-4xl font-bold">Join Us</h2>
              <p className="text-xl">Worship, games, and great conversations</p>
            </div>
          </div>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500">
                <activity.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">{activity.title}</h3>
              <p className="mb-4 text-[var(--color-text-light)]">{activity.description}</p>
              <p className="text-sm font-semibold text-[var(--color-primary)]">{activity.time}</p>
            </div>
          ))}
        </div>

        <div className="mb-16 rounded-2xl bg-white p-8 shadow-sm md:p-12">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Connect & Share</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <div key={`${post.name}-${post.time}`} className="rounded-xl bg-[var(--color-background)] p-6">
                <div className="mb-4 flex items-center space-x-3">
                  <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${post.accent}`} />
                  <div>
                    <p className="font-semibold">{post.name}</p>
                    <p className="text-sm text-[var(--color-text-light)]">{post.time}</p>
                  </div>
                </div>
                <p className="text-[var(--color-text-light)]">{post.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Be Part of Something Amazing</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
            Join our youth community and experience faith, friendship, and fun like never
            before.
          </p>
          <button className="rounded-lg bg-white px-8 py-4 font-semibold text-[var(--color-primary)] transition-colors hover:bg-gray-100">
            Join the Community
          </button>
        </div>
      </div>
    </div>
  );
}
