import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';
import CategoryCard from '../../components/CategoryCard';
import { mockMovies } from '../../data/mockMovies';
import type { Movie } from '../../types/movie.types';
import '../../styles/_search.scss';

// Mock categories for the search page with icons
const popularCategories = [
  'Action', 'Comedy', 'Drama', 'Horror', 'Romance', 
  'Sci-Fi', 'Thriller', 'Documentary', 'Animation'
];

// Helper function to get icon for each category
const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'action':
      return '🎬';
    case 'comedy':
      return '😄';
    case 'drama':
      return '🎭';
    case 'horror':
      return '👻';
    case 'romance':
      return '💖';
    case 'sci-fi':
      return '🚀';
    case 'thriller':
      return '🔪';
    case 'documentary':
      return '📽️';
    case 'animation':
      return '🎨';
    default:
      return '🎬';
  }
};

// Cast mockMovies to the Movie type
const typedMockMovies: Movie[] = mockMovies as Movie[];

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // Keep filters for future implementation
  // const [activeFilters, setActiveFilters] = useState<{[key: string]: string[]}>({});

  // Mock search function - replace with actual API call
  const searchMovies = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const searchTerm = searchQuery.toLowerCase();
      const filteredMovies = typedMockMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm) ||
        movie.overview.toLowerCase().includes(searchTerm) ||
        (movie.genres && Array.isArray(movie.genres) && 
          movie.genres.some(genre => 
            typeof genre === 'string' 
              ? genre.toLowerCase().includes(searchTerm)
              : false
          )
        )
      );
      
      setSearchResults(filteredMovies);
      setIsLoading(false);
    }, 300); // Reduced delay for better UX
  };

  // Handle search when query changes
  useEffect(() => {
    if (query) {
      searchMovies(query);
      setSearchParams({ q: query });
    } else {
      setSearchResults([]);
      setSearchParams({});
    }
  }, [query]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  // Filter change handler (kept for future implementation)
  // Uncomment and implement when filters are needed
  /*
  const handleFilterChange = (filters: {[key: string]: string[]}) => {
    // setActiveFilters(filters);
  };
  */

  // Pagination handler - will be implemented later
  // const handleLoadMore = () => {
  //   console.log('Load more results');
  // };

  return (
    <div className="search-page">
      <div className="search-page-header">
        <h1>Find Your Next <span>Favorite</span> Movie</h1>
        <p>Search through our extensive library of movies and TV shows</p>
      </div>
      
      <div className="search-container">
        <SearchBar 
          onSearch={handleSearch} 
          initialQuery={query}
          className="search-bar"
        />
      </div>
      
      <div className="search-content">
        {!query && (
          <div className="categories">
            <h2>Popular Categories</h2>
            <div className="category-list">
              {popularCategories.map((category, index) => (
                <CategoryCard 
                  key={index} 
                  category={category} 
                  to={`/search?q=${encodeURIComponent(category.toLowerCase())}`}
                  icon={getCategoryIcon(category)}
                />
              ))}
            </div>
          </div>
        )}
        
        <SearchResults 
          results={searchResults}
          query={query}
          isLoading={isLoading}
          totalResults={searchResults.length}
          hasMore={false}
        />
      </div>
    </div>
  );
};

export default Search