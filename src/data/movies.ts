import type { Movie } from '../types/movie.types';

// Movie data
export const movies: Movie[] = [
  {
    id: 1,
    title: 'The Last Adventure',
    overview: 'An epic journey through uncharted territories where a group of explorers discover a lost civilization.',
    poster_path: 'https://image.tmdb.org/t/p/w500/e027cd2bf0df066af899296e2549f997.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/e027cd2bf0df066af899296e2549f997.jpg',
    release_date: '2023-05-15',
    vote_average: 4.5,
    vote_count: 1245,
    genre_ids: [12, 18, 28],
    original_language: 'en',
    original_title: 'The Last Adventure',
    popularity: 85.2,
    video: false,
    adult: false,
    genres: ['Adventure', 'Drama', 'Action']
  },
  {
    id: 2,
    title: 'Space Odyssey',
    overview: 'In the year 2150, humanity makes first contact with an alien civilization in this sci-fi thriller.',
    poster_path: 'https://genapilot.ru/wp-content/uploads/2018/06/tor-uchastniki-filma-deljatsja-professionalnymi-sekretami-4.jpg',
    backdrop_path: 'https://genapilot.ru/wp-content/uploads/2018/06/tor-uchastniki-filma-deljatsja-professionalnymi-sekretami-4.jpg',
    release_date: '2023-06-20',
    vote_average: 4.8,
    vote_count: 1890,
    genre_ids: [878, 12, 28],
    original_language: 'en',
    original_title: 'Space Odyssey',
    popularity: 92.1,
    video: false,
    adult: false,
    genres: ['Science Fiction', 'Adventure', 'Action']
  },
  {
    id: 3,
    title: 'Dark Secrets',
    overview: 'A detective uncovers a web of lies and deception in a small town where everyone has something to hide.',
    poster_path: 'https://avatars.mds.yandex.net/i?id=9792f76c61b3dabc411138dc81c2e6da_l-9461766-images-thumbs&n=13',
    backdrop_path: 'https://avatars.mds.yandex.net/i?id=9792f76c61b3dabc411138dc81c2e6da_l-9461766-images-thumbs&n=13',
    release_date: '2023-07-10',
    vote_average: 4.2,
    vote_count: 876,
    genre_ids: [53, 80, 18],
    original_language: 'en',
    original_title: 'Dark Secrets',
    popularity: 78.5,
    video: false,
    adult: false,
    genres: ['Thriller', 'Crime', 'Drama']
  },
  {
    id: 4,
    title: 'Love in Paris',
    overview: 'A romantic comedy about two strangers who meet in Paris and discover love in the most unexpected way.',
    poster_path: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/137eb1d4-0df1-4cd2-a6d9-6634ff85d7d8/3840x',
    backdrop_path: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/137eb1d4-0df1-4cd2-a6d9-6634ff85d7d8/3840x',
    release_date: '2023-08-05',
    vote_average: 3.9,
    vote_count: 654,
    genre_ids: [10749, 35],
    original_language: 'en',
    original_title: 'Love in Paris',
    popularity: 65.3,
    video: false,
    adult: false,
    genres: ['Romance', 'Comedy']
  },
  {
    id: 5,
    title: 'The Heist',
    overview: 'A team of criminals plan the perfect bank robbery, but things don\'t go as planned.',
    poster_path: 'https://i.pinimg.com/originals/4d/16/0d/4d160d584df1344cf5fa024de3782c6f.jpg',
    backdrop_path: 'https://i.pinimg.com/originals/4d/16/0d/4d160d584df1344cf5fa024de3782c6f.jpg',
    release_date: '2023-09-12',
    vote_average: 4.6,
    vote_count: 1342,
    genre_ids: [28, 80, 53],
    original_language: 'en',
    original_title: 'The Heist',
    popularity: 88.7,
    video: false,
    adult: false,
    genres: ['Action', 'Crime', 'Thriller']
  },
  {
    id: 6,
    title: 'Mystery Island',
    overview: 'A group of tourists stranded on a mysterious island must uncover its secrets to survive.',
    poster_path: 'https://avatars.mds.yandex.net/i?id=1aabbf0da044bda82ef4750d6ea04ec5_l-7594176-images-thumbs&n=13',
    backdrop_path: 'https://avatars.mds.yandex.net/i?id=1aabbf0da044bda82ef4750d6ea04ec5_l-7594176-images-thumbs&n=13',
    release_date: '2023-10-18',
    vote_average: 4.1,
    vote_count: 765,
    genre_ids: [9648, 12, 27],
    original_language: 'en',
    original_title: 'Mystery Island',
    popularity: 72.9,
    video: false,
    adult: false,
    genres: ['Mystery', 'Adventure', 'Horror']
  }
];

// Popular categories
export const popularCategories: string[] = [
  'Action',
  'Comedy',
  'Drama',
  'Horror',
  'Sci-Fi',
  'Documentary'
];

// Subscription plans
export const plans = [
  {
    id: 'basic',
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
    id: 'standard',
    title: 'Standard',
    price: 14.99,
    period: 'month',
    features: [
      'Full HD available',
      'Watch on 2 devices at a time',
      'Cancel anytime',
      'First month free'
    ]
  },
  {
    id: 'premium',
    title: 'Premium',
    price: 19.99,
    period: 'month',
    features: [
      'Ultra HD available',
      'Watch on 4 devices at a time',
      'Cancel anytime',
      'First month free',
      'Access to exclusive content'
    ]
  }
];

// FAQ items
export const faqItems = [
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

// Export types for use in other files
export interface Plan {
  id: string;
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