import { fetchTrendingMovies } from 'pages/api';
import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { WrapperHomePage } from './HomePage.styled';

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
    <WrapperHomePage>
      <h1>Trending today</h1>
      <MoviesList trendingMovies={trendingMovies} />
      {loading && <Loader />}
      {error && !loading && <div>Oops... Something went wrong...</div>}
    </WrapperHomePage>
  );
}
