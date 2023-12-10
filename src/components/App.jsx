import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MoviesDetails = lazy(() =>
  import('../pages/MoviesDetailsPage/moviesDetails')
);
const Cast = lazy(() => import('../components/Cast/cast'));
const Reviews = lazy(() => import('../components/Reviews/reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<HomePage />} />

      <Route path="/movies" element={<MoviesPage />} />

      <Route path="/movies/:moviesId" element={<MoviesDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Routes>
  );

  // <div
  //   style={{
  //     height: '100vh',
  //     display: 'flex',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     fontSize: 40,
  //     color: '#010101',
  //   }}
  // >
  //   React homework template
  // </div>
};
