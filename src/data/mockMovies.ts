import type { Movie } from '../types/movie.types';

export const mockMovies: Movie[] = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    overview: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
    poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    backdrop_path: '/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
    release_date: '1994-09-23',
    vote_average: 8.7,
    vote_count: 23310,
    genre_ids: [18, 80],
    genres: ['Drama', 'Crime']
  },
  {
    id: 2,
    title: 'The Godfather',
    overview: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Don Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    backdrop_path: '/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg',
    release_date: '1972-03-14',
    vote_average: 8.7,
    vote_count: 17512,
    genre_ids: [18, 80],
    genres: ['Drama', 'Crime']
  },
  {
    id: 3,
    title: 'The Dark Knight',
    overview: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but the trio soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
    poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdrop_path: '/hZkgoQYus5vegHoetLkCJzb17zJ.jpg',
    release_date: '2008-07-16',
    vote_average: 8.5,
    vote_count: 29421,
    genre_ids: [18, 28, 80, 53],
    genres: ['Drama', 'Action', 'Crime', 'Thriller']
  },
  {
    id: 4,
    title: 'The Godfather: Part II',
    overview: 'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.',
    poster_path: '/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg',
    backdrop_path: '/gLbBRyS7MBrmVUNce91Hmx9vzqI.jpg',
    release_date: '1974-12-20',
    vote_average: 8.6,
    vote_count: 10816,
    genre_ids: [18, 80],
    genres: ['Drama', 'Crime']
  },
  {
    id: 5,
    title: '12 Angry Men',
    overview: 'The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors\' prejudices and preconceptions about the trial, the accused, and each other.',
    poster_path: '/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg',
    backdrop_path: '/3W0v956XxSG5xgm7B6tHsR0J5E3.jpg',
    release_date: '1957-04-10',
    vote_average: 8.5,
    vote_count: 7151,
    genre_ids: [18, 80],
    genres: ['Drama', 'Crime']
  }
];

export const mockMovie: Movie = mockMovies[0];
