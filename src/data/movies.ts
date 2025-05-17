// Интерфейсы должны быть объявлены перед их использованием
export interface Movie {
  id: number;
  title: string;
  description: string;
  category: string;
  rating: number;
  image: string;
}

export interface Plan {
  id: number;
  title: string;
  price: number;
  period: string;
  features: string[];
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// Данные фильмов
export const movies: Movie[] = [
  {
    id: 1,
    title: 'The Last Adventure',
    description: 'An epic journey through uncharted territories where a group of explorers discover a lost civilization.',
    category: 'Adventure',
    rating: 4.5,
    image: 'https://avatars.mds.yandex.net/i?id=e027cd2bf0df066af899296e2549f997_l-9245818-images-thumbs&n=13'
  },
  {
    id: 2,
    title: 'Space Odyssey',
    description: 'In the year 2150, humanity makes first contact with an alien civilization in this sci-fi thriller.',
    category: 'Sci-Fi',
    rating: 4.8,
    image: 'https://genapilot.ru/wp-content/uploads/2018/06/tor-uchastniki-filma-deljatsja-professionalnymi-sekretami-4.jpg'
  },
  {
    id: 3,
    title: 'Dark Secrets',
    description: 'A detective uncovers a web of lies and deception in a small town where everyone has something to hide.',
    category: 'Thriller',
    rating: 4.2,
    image: 'https://avatars.mds.yandex.net/i?id=9792f76c61b3dabc411138dc81c2e6da_l-9461766-images-thumbs&n=13'
  },
  {
    id: 4,
    title: 'Love in Paris',
    description: 'A romantic comedy about two strangers who meet in Paris and discover love in the most unexpected way.',
    category: 'Romance',
    rating: 3.9,
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/137eb1d4-0df1-4cd2-a6d9-6634ff85d7d8/3840x'
  },
  {
    id: 5,
    title: 'The Heist',
    description: 'A team of criminals plan the perfect bank robbery, but things don\'t go as planned.',
    category: 'Action',
    rating: 4.6,
    image: 'https://i.pinimg.com/originals/4d/16/0d/4d160d584df1344cf5fa024de3782c6f.jpg'
  },
  {
    id: 6,
    title: 'Mystery Island',
    description: 'A group of tourists stranded on a mysterious island must uncover its secrets to survive.',
    category: 'Mystery',
    rating: 4.1,
    image: 'https://avatars.mds.yandex.net/i?id=1aabbf0da044bda82ef4750d6ea04ec5_l-7594176-images-thumbs&n=13'
  }
];

// Популярные категории
export const popularCategories: string[] = [
  'Action',
  'Comedy',
  'Drama',
  'Horror',
  'Sci-Fi',
  'Documentary'
];

// Тарифные планы
export const plans: Plan[] = [
  {
    id: 1,
    title: 'Basic',
    price: 9.99,
    period: 'month',
    features: [
      'HD available',
      'Watch on 1 device at a time',
      'Cancel anytime'
    ]
  },
  {
    id: 2,
    title: 'Standard',
    price: 14.99,
    period: 'month',
    features: [
      'Full HD available',
      'Watch on 2 devices at a time',
      'Cancel anytime'
    ]
  },
  {
    id: 3,
    title: 'Premium',
    price: 19.99,
    period: 'month',
    features: [
      'Ultra HD available',
      'Watch on 4 devices at a time',
      'Cancel anytime',
      'First month free'
    ]
  }
];

// Частые вопросы
export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'What is Retflix?',
    answer: 'Retflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.'
  },
  {
    id: 2,
    question: 'How much does Retflix cost?',
    answer: 'Watch Retflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no contracts.'
  },
  {
    id: 3,
    question: 'Where can I watch?',
    answer: 'Watch anywhere, anytime. Sign in with your Retflix account to watch instantly on the web at retflix.com from your personal computer or on any internet-connected device that offers the Retflix app.'
  },
  {
    id: 4,
    question: 'How do I cancel?',
    answer: 'Retflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
  },
  {
    id: 5,
    question: 'What can I watch on Retflix?',
    answer: 'Retflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Retflix originals, and more. Watch as much as you want, anytime you want.'
  }
];