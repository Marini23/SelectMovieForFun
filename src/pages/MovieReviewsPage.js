import { fetchMovieReviewsById } from 'pages/api';
import { Loader } from 'components/Loader';
import { Reviews } from 'components/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieReviewsPage() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function getMovieReviews() {
      try {
        if (!movieId) {
          return;
        }
        setLoading(true);
        setError(false);
        const reviews = await fetchMovieReviewsById(movieId, signal);
        setMovieReviews(reviews);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }
    getMovieReviews();
    return () => {
      controller.abort();
    };
  }, [movieId]);
  return (
    <div>
      {movieReviews.length > 0 ? (
        <Reviews movieReviews={movieReviews} />
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
      {loading && <Loader />}
      {error && !loading && <div>Oops... Something went wrong...</div>}
    </div>
  );
}
