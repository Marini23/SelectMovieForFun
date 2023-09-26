import { fetchMovieReviewsById } from 'api';
import { Loader } from 'components/Loader';
import { Reviews } from 'components/Reviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieReviewsPage = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieReviews, setMovieReviews] = useState([]);
  useEffect(() => {
    async function getMovieReviews() {
      try {
        if (!movieId) {
          return;
        }
        setLoading(true);
        setError(false);
        const reviews = await fetchMovieReviewsById(movieId);
        setMovieReviews(reviews);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovieReviews();
  }, [movieId]);
  return (
    <div>
      {movieReviews ? (
        <Reviews movieReviews={movieReviews} />
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
      {loading && <Loader />}
      {error && !loading && <div>Oops... Something went wrong...</div>}
    </div>
  );
};
