// Используем переменную окружения или пустую строку, если она не определена
const API_KEY = import.meta.env.VITE_TMDB_API_KEY || '';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

/**
 * Получает детальную информацию о фильме с TMDB API
 * @param movieId ID фильма в базе TMDB
 * @returns Объект с данными о фильме
 * @throws {Error} Если произошла ошибка при запросе
 */
export const getMovieDetails = async (movieId: number) => {
  if (!API_KEY) {
    console.error('TMDB API ключ не найден. Убедитесь, что переменная окружения VITE_TMDB_API_KEY установлена.');
    throw new Error('TMDB API ключ не найден');
  }

  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=ru-RU&append_to_response=credits,similar,videos,images`;
  
  console.log('Выполняется запрос к TMDB API:', url);
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Ошибка ответа от TMDB API:', {
        status: response.status,
        statusText: response.statusText,
        url: response.url,
        errorData
      });
      
      // Возвращаем объект ошибки в том же формате, что и успешный ответ
      return {
        status_code: response.status,
        status_message: errorData.status_message || `HTTP Error: ${response.status} ${response.statusText}`,
        success: false
      };
    }
    
    const data = await response.json();
    console.log('Получены данные от TMDB API для фильма ID:', movieId);
    return data;
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка';
    console.error('Ошибка при загрузке данных о фильме:', {
      error: errorMessage,
      movieId,
      url
    });
    
    // Возвращаем объект ошибки в том же формате, что и TMDB API
    return {
      status_code: 500,
      status_message: errorMessage,
      success: false
    };
  }
};

export const getImageUrl = (path: string, size: string = 'original') => {
  if (!path) return '';
  return `${IMAGE_BASE_URL}${size}${path}`;
};

export const getProfileImageUrl = (path: string, size: string = 'w185') => {
  if (!path) return '';
  return `${IMAGE_BASE_URL}${size}${path}`;
};
