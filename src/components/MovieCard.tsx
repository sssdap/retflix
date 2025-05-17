import { Link } from 'react-router-dom';
import { Movie } from '../data/movies'; // Импортируем интерфейс Movie
import './MovieCard.module.scss'; // Импортируем стили

interface MovieCardProps {
  movie: Movie; // Правильное определение пропсов
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const renderRating = () => {
    const stars = [];
    const fullStars = Math.floor(movie.rating);
    const hasHalfStar = movie.rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<span key={i} className="star-full">★</span>);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<span key={i} className="star-half">★</span>);
      } else {
        stars.push(<span key={i} className="star-empty">★</span>);
      }
    }

    return stars;
  };

  return (
    <div className="movie-card">
      <div className="movie-card-image">
        <img src={movie.image} alt={movie.title} />
      </div>
      <div className="movie-card-content">
        <h3>{movie.title}</h3>
        <div className="movie-card-rating">{renderRating()}</div>
        <Link to={`/watch/${movie.id}`} className="btn"> {/* Добавил ID фильма в URL */}
          Watch
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;