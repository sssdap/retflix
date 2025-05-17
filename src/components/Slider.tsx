import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { movies } from '../data/movies'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const featuredMovies = movies.slice(0, 3)

  return (
    <div className="slider">
      {featuredMovies.map((movie, index) => (
        <div
          key={movie.id}
          className={`slider-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${movie.image})` }}
        >
          <div className="slider-slide-content">
            <h2>{movie.title}</h2>
            <p>{movie.description.substring(0, 150)}...</p>
            <Link to="/watch" className="btn">
              Watch Now
            </Link>
          </div>
        </div>
      ))}
      <div className="slider-indicators">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            className={index === currentSlide ? 'active' : ''}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider