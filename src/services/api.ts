import type { Movie } from '../types/movie.types';

const API_KEY = 'YOUR_TMDB_API_KEY'; // In a real app, this should be in an environment variable
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.results as Movie[];
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    // Return mock data if the API call fails
    return [];
  }
};

export const searchMovies = async (query: string, page: number = 1): Promise<{ results: Movie[]; total_pages: number }> => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}&language=en-US`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error searching movies:', error);
    // Return empty results if the API call fails
    return {
      results: [],
      total_pages: 1
    };
  }
};

export const getMovieDetails = async (id: number): Promise<Movie | null> => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits,videos,recommendations,similar`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching movie details for ID ${id}:`, error);
    return null;
  }
};
