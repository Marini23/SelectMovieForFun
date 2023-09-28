import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from '../api';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader';
import { WrapperMoviePage } from './MoviePage.styled';

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams(``);
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const [moviesByQuery, setMoviesByQuery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMoviesByQuery() {
      try {
        if (!query) {
          return;
        }
        setLoading(true);
        setError(false);
        const queryResults = await fetchMoviesByQuery(query);
        setMoviesByQuery(queryResults);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMoviesByQuery();
  }, [query]);

  const onChangeParams = query => {
    setQuery(query);
    searchParams.set('query', query);
    setSearchParams({ searchParams });
  };
  return (
    <WrapperMoviePage>
      <SearchBar onChange={onChangeParams} />
      {moviesByQuery.length > 0 && (
        <MoviesList trendingMovies={moviesByQuery} />
      )}
      {loading && <Loader />}
      {error && !loading && <div>Oops... Something went wrong...</div>}
    </WrapperMoviePage>
  );
}