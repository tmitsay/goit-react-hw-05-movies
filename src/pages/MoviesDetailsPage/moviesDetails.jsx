import { useLocation, NavLink } from 'react-router-dom';

import css from './moviesDetails.module.css';

export const MoviesDetails = ({ movies }) => {
  const location = useLocation;

  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movies.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
