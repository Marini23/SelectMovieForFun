import { fetchMovieCastById } from 'pages/api';
import { Cast } from 'components/Cast/Cast';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieCastPage = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    async function getMovieCast() {
      try {
        if (!movieId) {
          return;
        }
        setLoading(true);
        setError(false);
        const cast = await fetchMovieCastById(movieId);
        setMovieCast(cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovieCast();
  }, [movieId]);

  return (
    <div>
      {movieCast && <Cast movieCast={movieCast} />}
      {loading && <Loader />}
      {error && !loading && <div>Oops... Something went wrong...</div>}
    </div>
  );
};
