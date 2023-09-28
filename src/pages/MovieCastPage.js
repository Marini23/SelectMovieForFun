import { fetchMovieCastById } from 'pages/api';
import { Cast } from 'components/Cast/Cast';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieCastPage() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function getMovieCast() {
      try {
        if (!movieId) {
          return;
        }
        setLoading(true);
        setError(false);
        const cast = await fetchMovieCastById(movieId, signal);
        setMovieCast(cast);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }
    getMovieCast();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div>
      {movieCast && <Cast movieCast={movieCast} />}
      {loading && <Loader />}
      {error && !loading && <div>Oops... Something went wrong...</div>}
    </div>
  );
}
