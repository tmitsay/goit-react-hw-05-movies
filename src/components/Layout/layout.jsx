import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Loader } from 'components/Loader/loader';
import css from './layout.module.css';

export const Layout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
          <ul className={css.list}>
            <li className={css.items}>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li className={css.items}>
              <NavLink to="/movies">Movies</NavLink>
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
