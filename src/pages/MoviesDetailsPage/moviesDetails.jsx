import { useLocation, Outlet, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'components/API/api';
// import css from './moviesDetails.module.css';
import { Loader } from 'components/Loader/loader';

export const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const addMovieDetails = async () => {
      setIsLoading(true);

      try {
        const movieById = await getMovieDetails(movieId);
        setMovie(movieById);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    addMovieDetails();
  }, [movieId]);

  return (
    <div>
      <Link to={location.state?.from ?? '/'}>
        <button type="button">Go back</button>
      </Link>

      {isLoading && <Loader />}

      <div>
        <img
          width="300px"
          alt={movie.original_title}
          src={
            movie.proster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : `http://ireland.apolllo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700`
          }
        />
      </div>
      <div>
        <h2>{movie.original_title}</h2>
        <p>Rating: {Math.round(movie.vote_average)}</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        <ul>
          {movie.genres?.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
