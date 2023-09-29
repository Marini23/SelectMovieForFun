import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from '../api';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader';
import { WrapperMoviePage } from './MoviePage.styled';

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams(``);
  const [moviesByQuery, setMoviesByQuery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const query = searchParams.get(`query`);
    if (!query) {
      return;
    }
    const controller = new AbortController();
    const signal = controller.signal;
    async function getMoviesByQuery() {
      try {
        setLoading(true);
        setError(false);
        const queryResults = await fetchMoviesByQuery(query, signal);
        setMoviesByQuery(queryResults);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }
    getMoviesByQuery();
    return () => {
      controller.abort();
    };
  }, [searchParams]);

  const onSubmitParams = query => {
    setSearchParams({ query });
  };
  return (
    <WrapperMoviePage>
      <SearchBar onSubmitParams={onSubmitParams} />
      {moviesByQuery.length > 0 && (
        <MoviesList trendingMovies={moviesByQuery} />
      )}
      {loading && <Loader />}
      {error && !loading && <div>Oops... Something went wrong...</div>}
    </WrapperMoviePage>
  );
}
