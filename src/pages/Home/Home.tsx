import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../../components/Slider';
import MovieCard from '../../components/MovieCard';
import PlanCard from '../../components/PlanCard';
import { movies, popularCategories, plans, faqItems } from '../../data/movies';
import '../../styles/_home.scss'; // Импортируем SCSS модуль правильно

const Home = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="home-page">
      {/* Hero Slider */}
      <Slider />

      {/* Popular Categories */}
      <section className="section">
        <h2 className="section-title">Popular Categories</h2>
        <div className="categories-grid">
          {popularCategories.map((category, index) => (
            <Link 
              to={`/search?category=${category.toLowerCase()}`} 
              key={index} 
              className="category-card"
            >
              <div className="category-name">{category}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recommended Movies */}
      <section className="section">
        <h2 className="section-title">Recommended For You</h2>
        <div className="movies-scroller">
          {movies.slice(0, 5).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-accordion">
          {faqItems.slice(0, 3).map((item) => (
            <div key={item.id} className="faq-item">
              <button
                className={`faq-question ${activeAccordion === item.id ? 'active' : ''}`}
                onClick={() => toggleAccordion(item.id)}
              >
                {item.question}
                <span className="accordion-icon">{activeAccordion === item.id ? '−' : '+'}</span>
              </button>
              {activeAccordion === item.id && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className="section plans-section">
        <h2 className="section-title">Choose Your Plan</h2>
        <div className="plans-grid">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2 className="cta-title">Start Watching with RETFLIX</h2>
        <p className="cta-subtitle">Unlimited movies, TV shows, and more.</p>
        <Link to="/plans" className="btn btn-large">
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Home;