import HomePage from 'pages/HomePage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage';
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
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
          <Route path="movies/:movieId/reviews" element={<div>Reviews</div>} />
        </Route>
      </Routes>
    </div>
  );
};
