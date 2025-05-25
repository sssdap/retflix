import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import MovieCard from '../../components/MovieCard';
import { movies } from '../../data/movies';
import type { Movie } from '../../types/movie.types';
import './Watch.scss';

// Helper function to get movie release year
const getReleaseYear = (movie: Movie) => {
  if (movie.release_date) {
    return new Date(movie.release_date).getFullYear();
  }
  return '';
};

const Watch = () => {
  const { id } = useParams<{ id: string }>();
  const { user, addToWatched } = useAuth();
  const navigate = useNavigate();
  
  // Find the current movie by ID
  const currentMovie = (movies as unknown as Movie[]).find(movie => 
    movie.id.toString() === id
  ) || (movies[0] as unknown as Movie);
  
  // Add movie to watched list when component mounts
  useEffect(() => {
    if (user && id) {
      addToWatched(id);
    }
  }, [id, user, addToWatched]);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login', { state: { from: `/watch/${id}` } });
    }
  }, [user, navigate, id]);

  // Get related movies (excluding current movie)
  const relatedMovies = (movies as unknown as Movie[])
    .filter(movie => movie.id.toString() !== id)
    .slice(0, 5);

  if (!user) {
    return null; // Will redirect due to useEffect
  }

  return (
    <div className="watch-page">
      <div className="video-container">
        <div className="video-player">
          <div className="video-placeholder">
            <h2>{currentMovie.title}</h2>
            <p>Movie player will be implemented here</p>
            <div className="movie-meta">
              <span>{getReleaseYear(currentMovie)}</span>
              <span>{currentMovie.vote_average?.toFixed(1)} ★</span>
              {currentMovie.genre_ids && (
                <span>{currentMovie.genre_ids.join(', ')}</span>
              )}
            </div>
            <p className="movie-description">
              {currentMovie.overview || 'No description available.'}
            </p>
          </div>
        </div>
      </div>

      <div className="content-container">
        <section className="section related-movies">
          <h2>You might also like</h2>
          <div className="movie-grid">
            {relatedMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Watch;