import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../../api/tmdb';
import './MovieDetails.scss';
import type { TMDBMovie } from '../../types/tmdb';

// Тип для форматированного фильма
type FormattedMovie = TMDBMovie & {
  poster_path: string;
  backdrop_path: string;
  credits: {
    cast: Array<{
      id: number;
      name: string;
      character: string;
      profile_path: string;
    }>;
  };
  similar: {
    results: Array<{
      id: number;
      title: string;
      poster_path: string;
      backdrop_path: string;
      release_date: string;
      vote_average: number;
      vote_count: number;
      genre_ids: number[];
      overview: string;
    }>;
  };
};

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<FormattedMovie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        setError('');
        
        // Получаем данные о фильме с TMDB API
        const data = await getMovieDetails(parseInt(id)) as TMDBMovie;
        
        // Форматируем данные в нужный формат
        const formattedMovie: FormattedMovie = {
          ...data,
          poster_path: data.poster_path 
            ? `https://image.tmdb.org/t/p/w500${data.poster_path}` 
            : '/placeholder-movie.jpg',
          backdrop_path: data.backdrop_path 
            ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
            : '/placeholder-movie.jpg',
          credits: {
            cast: (data.credits?.cast || []).slice(0, 6).map(actor => ({
              ...actor,
              profile_path: actor.profile_path 
                ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                : '/placeholder-actor.jpg',
              character: actor.character || 'Неизвестный персонаж'
            }))
          },
          similar: {
            ...data.similar,
            results: (data.similar?.results || []).map(movie => ({
              ...movie,
              poster_path: movie.poster_path 
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : '/placeholder-movie.jpg',
              backdrop_path: movie.backdrop_path 
                ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                : '/placeholder-movie.jpg',
              overview: movie.overview || 'Нет описания',
              genre_ids: movie.genre_ids || []
            }))
          }
        };
        
        setMovie(formattedMovie);
      } catch (err) {
        console.error('Ошибка при загрузке фильма:', err);
        setError('Не удалось загрузить информацию о фильме. Пожалуйста, попробуйте позже.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <div className="loading">Загрузка...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!movie) return <div className="not-found">Фильм не найден</div>;

  return (
    <div className="movie-details">
      {/* Preview Image Section */}
      <div className="movie-preview">
        <img 
          src={movie.backdrop_path} 
          alt={movie.title}
          className="preview-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder-movie.jpg';
            target.onerror = null; // Предотвращаем зацикливание, если заглушка тоже не загрузится
          }}
        />
        <div className="preview-overlay">
          <div className="container">
            <h1>{movie.title} <span>({new Date(movie.release_date).getFullYear()})</span></h1>
            <div className="preview-actions">
              <button className="btn btn-primary btn-lg">
                <i className="icon-play"></i> Смотреть
              </button>
              <button className="btn btn-outline btn-lg">
                <i className="icon-info"></i> О фильме
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="movie-hero">
        <div className="container">
          <div className="movie-poster">
            <img 
              src={movie.poster_path} 
              alt={movie.title} 
              className="poster-image"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder-movie.jpg';
              }}
            />
          </div>
          <div className="movie-info">
            <div className="movie-meta">
              <span className="rating">
                ★ {movie.vote_average.toFixed(1)}/10
              </span>
              <span>{movie.runtime} мин</span>
              <span className="release-date">
                {new Date(movie.release_date).toLocaleDateString()}
              </span>
            </div>

            <div className="genres">
              {movie.genres?.map((genre) => (
                <span key={genre.id} className="genre-tag">
                  {genre.name}
                </span>
              ))}
            </div>

            <div className="overview">
              <h3>Обзор</h3>
              <p>{movie.overview}</p>
            </div>

            <div className="actions">
              <button className="btn btn-primary">
                Смотреть трейлер
              </button>
              <button className="btn btn-outline">
                Добавить в избранное
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-content container">
        <div className="cast-section">
          <h2>Актерский состав</h2>
          <div className="cast-grid">
            {movie.credits.cast.map((actor: { id: number; name: string; character: string; profile_path: string }) => (
              <div key={actor.id} className="cast-card">
                <img 
                  src={actor.profile_path || '/placeholder-actor.jpg'} 
                  alt={actor.name}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder-actor.jpg';
                  }}
                />
                <h4>{actor.name}</h4>
                <p>{actor.character}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="similar-movies">
          <h2>Похожие фильмы</h2>
          <div className="similar-grid">
            {movie.similar.results.map((similar: { id: number; title: string; poster_path: string }) => (
              <Link 
                to={`/movie/${similar.id}`} 
                key={similar.id}
                className="similar-movie"
              >
                <img 
                  src={similar.poster_path || '/placeholder-movie.jpg'} 
                  alt={similar.title}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder-movie.jpg';
                  }}
                />
                <h4>{similar.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
