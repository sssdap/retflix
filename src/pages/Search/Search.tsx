import { useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from '../../components/Slider'
import MovieCard from '../../components/MovieCard'
import { movies, popularCategories } from '../../data/movies'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="search-page">
      <Slider />

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies, TV shows..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn">Search</button>
      </div>

      <section className="section">
        <h2>Search Results</h2>
        <div className="movie-grid">
          {movies.slice(0, 5).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Popular Categories</h2>
        <div className="categories">
          {popularCategories.map((category, index) => (
            <Link to="/" key={index} className="category-card">
              <div>{category}</div>
            </Link>
          ))}
        </div>
      </section>

      <div className="cta">
        <h3>Can't find what you're looking for?</h3>
        <Link to="/faq" className="btn">Visit FAQ</Link>
      </div>
    </div>
  )
}

export default Search