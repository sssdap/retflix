import { useEffect, useState } from 'react';
import { getMovieDetails } from '../../api/tmdb';

const TestAPI = () => {
  const [status, setStatus] = useState('Проверка API...');
  const [error, setError] = useState('');
  const [response, setResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const testAPI = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieDetails(550); // Fight Club
        setResponse(data);
        
        if (data && data.title) {
          setStatus(`API работает! Фильм: ${data.title}`);
        } else if (data && data.status_code === 7) {
          setStatus('Ошибка: Неверный API ключ');
          setError(data.status_message || 'Проверьте правильность API ключа');
        } else if (data && data.status_message) {
          setStatus('Ошибка API');
          setError(data.status_message);
        } else {
          setStatus('Ошибка: Неверный формат ответа от API');
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        setStatus('Ошибка при запросе к API');
        setError(errorMessage);
        console.error('Ошибка API:', err);
      } finally {
        setIsLoading(false);
      }
    };

    testAPI();
  }, []);

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#1a1a1a', 
      color: '#fff',
      borderRadius: '8px',
      margin: '20px',
      maxWidth: '1200px'
    }}>
      <h2>Проверка доступа к TMDB API</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <p><strong>Статус:</strong> {status}</p>
        {error && <p style={{ color: '#ff6b6b' }}><strong>Ошибка:</strong> {error}</p>}
        <p><strong>Ключ API:</strong> {import.meta.env.VITE_TMDB_API_KEY ? 'Найден' : 'Не найден'}</p>
        {import.meta.env.VITE_TMDB_API_KEY && (
          <p><small>Первые 10 символов ключа: {import.meta.env.VITE_TMDB_API_KEY.substring(0, 10)}...</small></p>
        )}
      </div>

      {isLoading ? (
        <p>Загрузка данных с API...</p>
      ) : (
        <div style={{ marginTop: '20px' }}>
          <h3>Ответ от API:</h3>
          <pre style={{
            backgroundColor: '#2a2a2a',
            padding: '15px',
            borderRadius: '5px',
            overflowX: 'auto',
            maxHeight: '400px',
            overflowY: 'auto',
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            fontSize: '12px',
            lineHeight: '1.5',
            fontFamily: 'monospace',
            color: '#e0e0e0',
            margin: '10px 0',
            border: '1px solid #444'
          }}>
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
      
      <div style={{ marginTop: '20px', fontSize: '0.9em', color: '#aaa' }}>
        <p><strong>Примечание:</strong> Если вы видите ошибку "Invalid API key" или "Неверный API ключ":</p>
        <ol>
          <li>Убедитесь, что вы зарегистрированы на <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#4dabf7' }}>themoviedb.org</a></li>
          <li>Перейдите в настройки профиля → API</li>
          <li>Создайте новый API ключ (тип: Developer)</li>
          <li>Скопируйте ключ и добавьте его в файл <code>.env</code> в корне проекта</li>
          <li>Перезапустите сервер разработки</li>
        </ol>
      </div>
    </div>
  );
};

export default TestAPI;
