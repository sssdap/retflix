import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  user: string | null;
  login: (email: string, password: string) => void;
  register: (email: string, password: string, name: string) => void;
  logout: () => void;
  watchedMovies: string[];
  addToWatched: (movieId: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem('user') || null);
  const [watchedMovies, setWatchedMovies] = useState<string[]>(
    JSON.parse(localStorage.getItem('watchedMovies') || '[]')
  );
  const navigate = useNavigate();

  const login = (email: string, _password: string) => {
    localStorage.setItem('user', email);
    setUser(email);
    navigate('/profile');
  };

  const register = (email: string, _password: string, _name: string) => {
    localStorage.setItem('user', email);
    setUser(email);
    navigate('/profile');
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  const addToWatched = (movieId: string) => {
    if (!watchedMovies.includes(movieId)) {
      const updatedWatched = [...watchedMovies, movieId];
      setWatchedMovies(updatedWatched);
      localStorage.setItem('watchedMovies', JSON.stringify(updatedWatched));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, watchedMovies, addToWatched }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
