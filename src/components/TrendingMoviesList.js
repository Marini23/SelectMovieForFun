import { Link, useLocation } from 'react-router-dom';
import { MovieDetais } from './MovieDetails';

export const TrendingMoviesList = ({ trendingMovies }) => {
  const location = useLocation();
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
