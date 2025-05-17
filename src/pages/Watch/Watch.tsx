import { Link } from 'react-router-dom'
import MovieCard from '../../components/MovieCard'
import { movies } from '../../data/movies'

const Watch = () => {
  const currentMovie = movies[0]

  return (
    <div className="watch-page">
      <div className="video-player">
        <div className="video-placeholder">
          <h3>Now Playing: {currentMovie.title}</h3>
          <p>Player will be implemented here</p>
        </div>
      </div>

      <section className="section">
        <h2>You might also like</h2>
        <div className="movie-row">
          {movies.slice(1, 6).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Watch History</h2>
        <div className="movie-row">
          {movies.slice(2, 7).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Watch