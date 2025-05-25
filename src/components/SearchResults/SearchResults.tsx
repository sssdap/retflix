import type { Movie } from '../../types/movie.types';
import MovieCard from '../MovieCard';
import './SearchResults.scss';

interface SearchResultsProps {
  results: Movie[];
  query: string;
  isLoading?: boolean;
  totalResults?: number;
  onLoadMore?: () => void;
  hasMore?: boolean;
}

const SearchResults = ({
  results,
  query,
  isLoading = false,
  totalResults,
  onLoadMore,
  hasMore = false
}: SearchResultsProps) => {
  if (isLoading) {
    return (
      <div className="search-results">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Searching for "{query}"...</p>
        </div>
      </div>
    );
  }


  if (!query) {
    return (
      <div className="search-results">
        <div className="empty-state">
          <h3>What are you looking for?</h3>
          <p>Search for movies, TV shows, and more.</p>
        </div>
      </div>
    );
  }


  if (results.length === 0) {
    return (
      <div className="search-results">
        <div className="empty-state">
          <h3>No results found for "{query}"</h3>
          <p>Try different keywords or check the spelling.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="search-results">
      <div className="results-header">
        <h2>
          {totalResults !== undefined ? (
            <>
              {totalResults} results for <span>"{query}"</span>
            </>
          ) : (
            <>Results for <span>"{query}"</span></>
          )}
        </h2>
      </div>
      
      <div className="results-grid">
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      
      {hasMore && onLoadMore && (
        <div className="load-more">
          <button 
            onClick={onLoadMore} 
            className="btn btn-outline"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
