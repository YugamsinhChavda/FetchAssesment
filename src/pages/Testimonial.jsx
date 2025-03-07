// List of 10 posts about dog adoption with FetchMatch
const allPosts = [
    {
      id: 1,
      title: 'My Journey to Finding Max with FetchMatch',
      href: '#review-1',
      description:
        'FetchMatch made adopting Max so simple. Their team guided me every step, and now I have a loyal companion for life!',
      date: 'Jan 12, 2024',
      datetime: '2024-01-12',
      category: { title: 'Adoption Stories', href: '#' },
      author: {
        name: 'Lisa Thompson',
        role: 'Dog Mom',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 2,
      title: 'FetchMatch: A Seamless Adoption Process',
      href: '#review-2',
      description:
        'I was nervous, but FetchMatch’s process was flawless. My pup Luna is the best, and I owe it to their amazing service!',
      date: 'Apr 25, 2024',
      datetime: '2024-04-25',
      category: { title: 'Adoption Process', href: '#' },
      author: {
        name: 'Mark Rivera',
        role: 'Proud Pet Parent',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 3,
      title: 'A Happier Home with Bella from FetchMatch',
      href: '#review-3',
      description:
        'FetchMatch matched me with Bella, and she’s brought so much joy. The process was smooth and truly life-changing!',
      date: 'Sep 03, 2024',
      datetime: '2024-09-03',
      category: { title: 'Dog Happiness', href: '#' },
      author: {
        name: 'Jenny Patel',
        role: 'Dog Lover',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1517365830460-955ce3f5b1f7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 4,
      title: 'FetchMatch Found My Perfect Running Buddy',
      href: '#review-4',
      description:
        'Thanks to FetchMatch, I adopted Rocky, who loves our daily runs. Their matching system is spot on!',
      date: 'Feb 18, 2024',
      datetime: '2024-02-18',
      category: { title: 'Lifestyle Match', href: '#' },
      author: {
        name: 'Tom Nguyen',
        role: 'Active Dog Dad',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 5,
      title: 'Rescuing Daisy with FetchMatch’s Help',
      href: '#review-5',
      description:
        'FetchMatch connected me with Daisy, a rescue who’s now my everything. Their support for rescues is incredible!',
      date: 'Jun 10, 2024',
      datetime: '2024-06-10',
      category: { title: 'Rescue Support', href: '#' },
      author: {
        name: 'Sarah Kim',
        role: 'Rescue Advocate',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 6,
      title: 'FetchMatch’s Team Made Adoption Easy',
      href: '#review-6',
      description:
        'The FetchMatch team was so helpful in adopting Buddy. He’s the perfect addition to our family!',
      date: 'Mar 30, 2024',
      datetime: '2024-03-30',
      category: { title: 'Team Support', href: '#' },
      author: {
        name: 'Emily Carter',
        role: 'Happy Dog Owner',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 7,
      title: 'A New Family Member via FetchMatch',
      href: '#review-7',
      description:
        'FetchMatch found us Cooper, who fits right in. The adoption process was quick and stress-free!',
      date: 'Jul 15, 2024',
      datetime: '2024-07-15',
      category: { title: 'Family Fit', href: '#' },
      author: {
        name: 'David Lee',
        role: 'Family Man',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 8,
      title: 'FetchMatch’s Care Changed Our Lives',
      href: '#review-8',
      description:
        'Adopting Sadie through FetchMatch was a dream. Their care and attention made all the difference!',
      date: 'Aug 22, 2024',
      datetime: '2024-08-22',
      category: { title: 'FetchMatch Experience', href: '#' },
      author: {
        name: 'Rachel Gomez',
        role: 'Pet Enthusiast',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 9,
      title: 'FetchMatch Gave Us Our Playful Pal',
      href: '#review-9',
      description:
        'We adopted Milo thanks to FetchMatch, and his playful energy lights up our home every day!',
      date: 'May 07, 2024',
      datetime: '2024-05-07',
      category: { title: 'Dog Happiness', href: '#' },
      author: {
        name: 'Alex Brooks',
        role: 'Dog Playmate',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 10,
      title: 'FetchMatch Matched Me with My Soulmate',
      href: '#review-10',
      description:
        'I found my soulmate in Bailey through FetchMatch. Their matching process is pure magic!',
      date: 'Oct 01, 2024',
      datetime: '2024-10-01',
      category: { title: 'Perfect Match', href: '#' },
      author: {
        name: 'Olivia Hayes',
        role: 'Dog Soulmate',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412723647-3b35c16e4071?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ];
  
  const getRandomPosts = (postsArray, count) => {
    const shuffled = [...postsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  
  const posts = getRandomPosts(allPosts, 3);
  
  export default function Testimonial() {
    return (
      <div className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              What Our Adopters Say
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    alt={`${post.author.name}'s profile picture`}
                    src={post.author.imageUrl}
                    className="size-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }