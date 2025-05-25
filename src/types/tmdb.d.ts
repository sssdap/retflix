export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_TMDB_API_KEY: string;
    }
  }

  type TMDBMovie = {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    release_date: string;
    vote_average: number;
    vote_count: number;
    runtime: number;
    genres: Array<{ id: number; name: string }>;
    credits: {
      cast: Array<{
        id: number;
        name: string;
        character: string;
        profile_path: string | null;
      }>;
    };
    similar: {
      results: Array<{
        id: number;
        title: string;
        poster_path: string | null;
        backdrop_path: string | null;
        release_date: string;
        vote_average: number;
        vote_count: number;
        genre_ids: number[];
        overview?: string;
      }>;
    };
    [key: string]: any;
  };
}

export type { TMDBMovie };
