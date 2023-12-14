import { Link, useLocation } from 'react-router-dom';
import css from './moviesList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(({ id, original_title }) => (
        <li className={css.items} key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
