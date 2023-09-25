import { fetchTrendingMovies } from 'api';
import { Loader } from 'components/Loader';
import { TrendingMoviesList } from 'components/TrendingMoviesList';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

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
      <TrendingMoviesList trendingMovies={trendingMovies} />
      {loading && <Loader />}
      {error && !loading && <div>Oops... Something went wrong...</div>}
    </div>
  );
}
