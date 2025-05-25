import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Using inline SVGs instead of react-icons to avoid dependency issues
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const FilterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);
import './SearchBar.scss';

interface SearchBarProps {
  initialQuery?: string;
  onSearch?: (query: string) => void;
  className?: string;
  showFilters?: boolean;
}

const SearchBar = ({ 
  initialQuery = '', 
  onSearch,
  className = '',
  showFilters = true
}: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    } else {
      // Default behavior: navigate to search results
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const toggleFilters = () => {
    setShowFilterPanel(!showFilterPanel);
  };

  return (
    <div className={`search-bar-container ${className}`}>
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-container">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for movies, TV shows..."
            className="search-input"
            aria-label="Search"
          />
          <button type="submit" className="search-button">
            <SearchIcon />
          </button>
          {showFilters && (
            <button 
              type="button" 
              className={`filter-toggle ${showFilterPanel ? 'active' : ''}`}
              onClick={toggleFilters}
              aria-label="Toggle filters"
              aria-expanded={showFilterPanel}
            >
              <FilterIcon />
            </button>
          )}
        </div>
        
        {showFilters && showFilterPanel && (
          <div className="filter-panel">
            <div className="filter-section">
              <h4>Genre</h4>
              <div className="filter-options">
                {['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Thriller'].map(genre => (
                  <button 
                    key={genre} 
                    type="button" 
                    className="filter-option"
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-section">
              <h4>Year</h4>
              <div className="filter-options">
                {['2020s', '2010s', '2000s', '1990s', 'Older'].map(year => (
                  <button 
                    key={year} 
                    type="button" 
                    className="filter-option"
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-actions">
              <button type="button" className="reset-filters">
                Reset
              </button>
              <button type="button" className="apply-filters">
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
