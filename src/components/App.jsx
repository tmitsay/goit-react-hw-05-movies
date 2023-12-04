import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Movies = lazy(() => import('pages/MoviesPage/MoviesPage'));
// import { HomePage } from 'pages/HomePage/HomePage';
// import { Movies } from 'pages/MoviesPage/MoviesPage';
// import { Loader } from './Loader/loader';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<HomePage />} />
      <Route path="movies" element={<Movies />} />
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
