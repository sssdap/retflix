import { Link } from 'react-router-dom';
import Slider from '../../components/Slider';
import CategoryCard from '../../components/CategoryCard';
import RecommendedForYou from '../../components/RecommendedForYou';
import Plans from '../../components/Plans';
import FAQ from '../../components/FAQ';
import TestAPI from '../../components/TestAPI/TestAPI';
import { popularCategories } from '../../data/movies';
import { mockMovies } from '../../data/mockMovies';
import type { Plan } from '../../types/plan';
import '../../styles/_home.scss';
import '../../styles/_recommended.scss';
import '../../styles/_plans.scss';
import '../../styles/_faq.scss';

// Mock data for plans and FAQ
const plans: Plan[] = [
  {
    id: 'basic',
    title: 'Basic',
    price: 9.99,
    period: 'month',
    features: [
      'HD available',
      'Watch on 1 screen at a time',
      'Cancel anytime'
    ],
    buttonText: 'Subscribe Now',
    buttonVariant: 'outline'
  },
  {
    id: 'standard',
    title: 'Standard',
    price: 13.99,
    period: 'month',
    features: [
      'HD available',
      'Watch on 2 screens at the same time',
      'Cancel anytime',
      'First month free'
    ],
    isPopular: true,
    buttonText: 'Try 1 Month Free',
    buttonVariant: 'primary'
  },
  {
    id: 'premium',
    title: 'Premium',
    price: 17.99,
    period: 'month',
    features: [
      '4K + HDR',
      'Watch on 4 screens at the same time',
      'Cancel anytime',
      'First month free',
      'All our movies and TV shows'
    ],
    buttonText: 'Try 1 Month Free',
    buttonVariant: 'outline'
  }
];

const faqItems = [
  {
    question: 'What is RETFLIX?',
    answer: 'RETFLIX is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.'
  },
  {
    question: 'How much does RETFLIX cost?',
    answer: 'Watch RETFLIX on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $17.99 a month. No extra costs, no contracts.'
  },
  {
    question: 'Where can I watch?',
    answer: 'Watch anywhere, anytime. Sign in with your RETFLIX account to watch instantly on the web at retflix.com from your personal computer or on any internet-connected device that offers the RETFLIX app, including smart TVs, smartphones, tablets, streaming media players and game consoles.'
  },
  {
    question: 'How do I cancel?',
    answer: 'RETFLIX is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
  },
  {
    question: 'What can I watch on RETFLIX?',
    answer: 'RETFLIX has an extensive library of feature films, documentaries, TV shows, anime, award-winning RETFLIX originals, and more. Watch as much as you want, anytime you want.'
  }
];

const Home = () => {
  // For now, using mock data directly
  const popularMovies = mockMovies;
  return (
    <div className="home">
      {/* Тестовый компонент для проверки API */}
      <TestAPI />
      
      <section className="hero-slider">
        <Slider movies={popularMovies} autoSlideInterval={7000} />
      </section>

      {/* Popular Categories */}
      <section className="section">
        <h2 className="section-title">Popular Categories</h2>
        <div className="categories">
          {popularCategories.map((category, index) => {
            const categoryName = typeof category === 'string' ? category : 
              (category as any).name || 'Category';
              
            return (
              <CategoryCard 
                key={index}
                category={categoryName}
                to="/search"
              />
            );
          })}
        </div>
      </section>

      {/* Recommended Movies */}
      <RecommendedForYou 
        movies={popularMovies.slice(0, 5)} 
        title="Trending Now"
        className="horizontal-scroll"
      />
      
      <RecommendedForYou 
        movies={[...popularMovies].sort(() => 0.5 - Math.random()).slice(0, 5)} 
        title="Recommended For You"
        className="horizontal-scroll"
      />

      {/* Plans Section */}
      <Plans 
        plans={plans} 
        title="Choose Your Plan"
        className="home-plans"
      />

      {/* FAQ Section */}
      <section className="home-section">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
        </div>
        <FAQ 
          items={faqItems.map((item, index) => ({
            id: index + 1, // Ensure ID is a number
            question: item.question,
            answer: item.answer
          }))} 
          title=""
          maxItems={5}
          className="home-faq"
        />
      </section>

      {/* Call to Action */}
      <section className="home-cta">
        <div className="cta-content">
          <h2 className="cta-title">Start Watching with <span>RETFLIX</span></h2>
          <p className="cta-subtitle">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
          <Link to="/plans" className="btn">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;