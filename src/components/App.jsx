import { GlobalStyle } from 'GlobalStyle';
import HomePage from 'pages/HomePage';
import { MovieCastPage } from 'pages/MovieCastPage';

import { MovieDetailsPage } from 'pages/MovieDetailsPage';
import { MovieReviewsPage } from 'pages/MovieReviewsPage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import MoviesPage from 'pages/MoviesPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCastPage />} />
            <Route path="reviews" element={<MovieReviewsPage />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </div>
  );
};
