import { Link } from 'react-router-dom';
import type { Movie } from '../data/movies'; // Импорт интерфейса Movie
import '../styles/_moviecard.scss'; // Импорт стилей

// Пропсы компонента
interface MovieCardProps {
  movie: Movie; // Используем импортированный интерфейс
}

const MovieCard = ({ movie }: MovieCardProps) => {
  // Функция для отрисовки рейтинга в виде звезд
  const renderRating = () => {
    return Array(5).fill(0).map((_, i) => {
      const starValue = i + 1;
      if (starValue <= Math.floor(movie.rating)) {
        return <span key={i} className="star-full">★</span>;
      }
      if (starValue === Math.ceil(movie.rating) && movie.rating % 1 >= 0.5) {
        return <span key={i} className="star-half">★</span>;
      }
      return <span key={i} className="star-empty">★</span>;
    });
  };

  return (
    <div className="movie-card">
      <div className="movie-card-image">
        <img 
          src={movie.image} 
          alt={movie.title}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x450?text=No+Image';
          }}
        />
      </div>
      <div className="movie-card-content">
        <h3>{movie.title}</h3>
        <div className="movie-card-rating">
          {renderRating()}
          <span className="rating-value">{movie.rating.toFixed(1)}</span>
        </div>
        <Link 
          to={`/watch/${movie.id}`} 
          className="btn"
          state={{ movie }} // Передаем данные фильма через state
        >
          Watch
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;