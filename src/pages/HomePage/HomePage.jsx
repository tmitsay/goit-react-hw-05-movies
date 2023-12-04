import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/loader';
import { getTrending } from 'components/API/api';
import { MoviesList } from 'components/MoviesList/moviesList';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const addFilms = async () => {
      try {
        setLoading(true);
        const data = await getTrending('');
        setMovies(data);
      } catch (error) {
        setError('Sorry movies not found...');
      } finally {
        setLoading(false);
      }
    };
    addFilms();
  }, []);

  return (
    <div>
      <h1>Films</h1>
      <MoviesList movies={movies} />
      {error && <h2>{error}</h2>}
      {loading && <Loader />}
    </div>
  );
};
