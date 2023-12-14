import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/LoaderCircles';
import { getTrending } from 'components/API/api';
import { MoviesList } from 'components/MoviesList/MoviesLists';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const addFilms = async () => {
      try {
        setLoading(true);
        const data = await getTrending('');
        setMovies(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    addFilms();
  }, []);

  return (
    <div>
      <h1>Trending movies</h1>
      <MoviesList movies={movies} />

      {loading && <Loader />}
    </div>
  );
};

export default HomePage;
