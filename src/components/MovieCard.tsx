import { Link } from 'react-router-dom';
import type { Movie } from '../types/movie.types';
import '../styles/_moviecard.scss';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  // Function to render rating as stars (0-5 scale)
  const renderRating = (rating: number) => {
    // Convert 10-point scale to 5-star scale
    const starRating = (rating / 2);
    
    return Array(5).fill(0).map((_, i) => {
      const starValue = i + 1;
      if (starValue <= Math.floor(starRating)) {
        return <span key={i} className="star-full">★</span>;
      }
      if (starValue === Math.ceil(starRating) && starRating % 1 >= 0.5) {
        return <span key={i} className="star-half">★</span>;
      }
      return <span key={i} className="star-empty">★</span>;
    });
  };

  // Get the poster URL or use a placeholder
  const getPosterUrl = () => {
    if (movie.poster_path) {
      return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    }
    return 'https://via.placeholder.com/300x450?text=No+Poster+Available';
  };

  return (
    <div className="movie-card">
      <div className="movie-card-image">
        <img 
          src={getPosterUrl()} 
          alt={movie.title}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x450?text=No+Image';
          }}
        />
      </div>
      <div className="movie-card-content">
        <h3>{movie.title}</h3>
        {movie.vote_average > 0 && (
          <div className="movie-card-rating">
            {renderRating(movie.vote_average)}
            <span className="rating-value">{movie.vote_average.toFixed(1)}</span>
          </div>
        )}
        <Link 
          to={`/movie/${movie.id}`} 
          className="btn"
          state={{ movie }}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;