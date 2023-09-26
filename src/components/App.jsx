import HomePage from 'pages/HomePage';
import { MovieCastPage } from 'pages/MovieCastPage';

import { MovieDetailsPage } from 'pages/MovieDetailsPage';
import { MovieReviewsPage } from 'pages/MovieReviewsPage';
import { Link, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<div>Movies</div>} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCastPage />} />
          <Route path="reviews" element={<MovieReviewsPage />} />
        </Route>
      </Routes>
    </div>
  );
};
