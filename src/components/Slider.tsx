import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Movie } from '../types/movie.types';

interface SliderProps {
  movies: Movie[];
  autoSlideInterval?: number;
}

const Slider = ({ 
  movies, 
  autoSlideInterval = 5000 
}: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredMovies = movies.slice(0, 3);

  // Auto-advance slides
  useEffect(() => {
    if (featuredMovies.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === featuredMovies.length - 1 ? 0 : prev + 1));
    }, autoSlideInterval);
    
    return () => clearInterval(interval);
  }, [featuredMovies.length, autoSlideInterval]);

  // Get the backdrop URL or use a placeholder
  const getBackdropUrl = (path: string | null) => {
    if (path) {
      return `https://image.tmdb.org/t/p/original${path}`;
    }
    return 'https://via.placeholder.com/1920x1080?text=No+Backdrop+Available';
  };

  if (featuredMovies.length === 0) {
    return (
      <div className="slider">
        <div className="slider-slide active">
          <div className="slider-slide-content">
            <h2>No featured movies available</h2>
            <p>Check back later for featured content.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="slider">
      {featuredMovies.map((movie, index) => (
        <div
          key={movie.id}
          className={`slider-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 100%), 
                            url(${getBackdropUrl(movie.backdrop_path)})` 
          }}
        >
          <div className="slider-slide-content">
            <h2>{movie.title}</h2>
            <p>{movie.overview?.substring(0, 150)}...</p>
            <Link to={`/movie/${movie.id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>
      ))}
      
      {featuredMovies.length > 1 && (
        <div className="slider-indicators">
          {featuredMovies.map((_, index) => (
            <button
              key={index}
              className={index === currentSlide ? 'active' : ''}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;