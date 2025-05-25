import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Profile.scss';

// Mock data for watched movies
const mockMovies = [
  { id: '1', title: 'Inception', poster: 'https://via.placeholder.com/150x225?text=Inception' },
  { id: '2', title: 'The Shawshank Redemption', poster: 'https://via.placeholder.com/150x225?text=Shawshank' },
  { id: '3', title: 'The Godfather', poster: 'https://via.placeholder.com/150x225?text=Godfather' },
  { id: '4', title: 'Pulp Fiction', poster: 'https://via.placeholder.com/150x225?text=Pulp+Fiction' },
];

const Profile = () => {
  const { user, logout, watchedMovies } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Filter mock movies to only show watched ones
  const watchedMoviesList = mockMovies.filter(movie => watchedMovies.includes(movie.id));

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Profile</h1>
        <div className="user-info">
          <div className="user-avatar">{user?.charAt(0).toUpperCase()}</div>
          <div className="user-details">
            <h2>{user}</h2>
            <button onClick={handleLogout} className="logout-button">
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="watched-section">
        <h2>Watched Movies</h2>
        
        {watchedMovies.length > 0 ? (
          <div className="watched-movies">
            {watchedMoviesList.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img src={movie.poster} alt={movie.title} />
                <h3>{movie.title}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>You haven't watched any movies yet.</p>
            <button onClick={() => navigate('/')} className="browse-button">
              Browse Movies
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
