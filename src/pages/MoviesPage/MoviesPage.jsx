import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FormSearch } from 'components/Form/form';
import { getSearchByKeyword } from 'components/API/api';
import { Loader } from 'components/Loader/loader';
import { MoviesList } from 'components/MoviesList/moviesList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setLoading] = useState(false);

  // const onSubmit = query => {
  //   const changeParams = query !== '' ? { query } : {};
  //   setSearchParams(changeParams);
  // };

  useEffect(() => {
    const currentKeyword = searchParams.get('query');
    if (!currentKeyword) return;

    const addMoviesByKeyword = async () => {
      try {
        setLoading(true);

        const moviesByKeyword = await getSearchByKeyword(currentKeyword);
        setMovies(moviesByKeyword);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    addMoviesByKeyword();
  }, [searchParams]);

  return (
    <div>
      <FormSearch onSearch={setSearchParams} />
      {isLoading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
