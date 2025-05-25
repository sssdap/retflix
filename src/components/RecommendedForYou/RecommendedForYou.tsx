import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard';
import type { Movie } from '../../types/movie.types';
import '../../styles/_recommended.scss';

interface RecommendedForYouProps {
  movies: Movie[];
  title?: string;
  className?: string;
}

const RecommendedForYou = ({ 
  movies, 
  title = 'Recommended For You',
  className = '' 
}: RecommendedForYouProps) => {
  return (
    <section className={`recommended-section ${className}`}>
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <Link to="/movies" className="view-all">
          View All
          <span className="arrow">→</span>
        </Link>
      </div>
      
      <div className="recommended-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedForYou;
