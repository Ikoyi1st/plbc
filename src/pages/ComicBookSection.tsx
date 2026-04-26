import { BookIcon } from 'lucide-react';

export function ComicBookSection() {
  const comics = [
    {
      title: 'The Good Samaritan',
      description: 'A timeless story of compassion and kindness',
      image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&h=600&fit=crop',
      color: 'from-blue-500 to-purple-500',
    },
    {
      title: 'David and Goliath',
      description: 'Faith conquers fear',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop',
      color: 'from-red-500 to-orange-500',
    },
    {
      title: 'The Prodigal Son',
      description: 'A story of forgiveness and redemption',
      image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&h=600&fit=crop',
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Jonah and the Whale',
      description: 'Obedience and second chances',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <div className="min-h-screen w-full px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500">
            <BookIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">Biblical Comic Books</h1>
          <p className="mx-auto max-w-3xl text-xl text-[var(--color-text-light)]">
            Experience timeless biblical stories through vibrant visual storytelling.
            Perfect for all ages to learn and be inspired.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {comics.map((comic) => (
            <div
              key={comic.title}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={comic.image}
                  alt={comic.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${comic.color} opacity-60 transition-opacity group-hover:opacity-40`}
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-bold transition-colors group-hover:text-purple-900">
                  {comic.title}
                </h3>
                <p className="mb-4 text-[var(--color-text-light)]">{comic.description}</p>
                <button className="rounded-lg bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 px-6 py-2 font-medium text-white transition-opacity hover:opacity-90">
                  Read Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 p-8 text-white md:p-12">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Why Comic Books?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-2xl font-semibold">Stories</div>
              <h3 className="mb-2 text-xl font-bold">Engaging Stories</h3>
              <p className="text-white/90">Visual narratives that bring scripture to life</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-2xl font-semibold">Families</div>
              <h3 className="mb-2 text-xl font-bold">Family Friendly</h3>
              <p className="text-white/90">Perfect for readers of all ages</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-2xl font-semibold">Clarity</div>
              <h3 className="mb-2 text-xl font-bold">Easy to Understand</h3>
              <p className="text-white/90">Complex lessons made accessible</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
