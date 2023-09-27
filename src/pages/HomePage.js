import { fetchTrendingMovies } from 'pages/api';
import { Loader } from 'components/Loader';
import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTreningMovies() {
      try {
        setLoading(true);
        setError(false);
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getTreningMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <TrendingMoviesList trendingMovies={trendingMovies} />
      {loading && <Loader />}
      {error && !loading && <div>Oops... Something went wrong...</div>}
    </div>
  );
}
