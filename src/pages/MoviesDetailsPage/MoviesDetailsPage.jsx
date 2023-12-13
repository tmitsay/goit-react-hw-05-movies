import { useLocation, Outlet, useParams, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovieDetails } from 'components/API/api';
import { Loader } from 'components/Loader/Loader';
import css from './moviesDetails.module.css';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const buttonBack = useRef(location.state?.from ?? '/');

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

  const { poster_path, original_title, genres, vote_average, overview } = movie;

  return (
    <div>
      <Link to={buttonBack.current}>
        <button type="button" className={css.btn}>
          Go back
        </button>
      </Link>

      {isLoading && <Loader />}

      <div>
        <img
          width="300px"
          alt={original_title}
          src={`${
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }`}
        />
      </div>
      <div>
        <h2>{original_title}</h2>
        <p>Rating: {Math.round(vote_average)}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul className={css.list}>
          {genres?.map(genre => (
            <li className={css.items} key={genre.id}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul className={css.list}>
          <li className={css.link}>
            <Link to="cast" state={{ from: location }}>
              Cast
            </Link>
          </li>
          <li className={css.link}>
            <Link to="reviews" state={{ from: location }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MoviesDetails;
