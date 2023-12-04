import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Loader } from 'components/Loader/loader';
import css from './layout.module.css';

export const Layout = () => {
  return (
    <div className={css.container}>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
