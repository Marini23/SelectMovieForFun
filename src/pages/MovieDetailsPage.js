import { fetchMovieDetailsById } from 'api';
import { Loader } from 'components/Loader';
import { MovieDetails } from 'components/MovieDetails';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieDetails, setMovieDetails] = useState(``);
  const location = useLocation();

  const goBackLink = useRef(location.state?.from ?? `/`);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        if (!movieId) {
          return;
        }
        setLoading(true);
        setError(false);
        const movie = await fetchMovieDetailsById(movieId);
        console.log(movie);
        setMovieDetails(movie);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
    console.log(movieDetails);
  }, [movieDetails]);

  return (
    <div>
      <Link to={goBackLink.current} state={{ from: location }}>
        Back to Movies
      </Link>
      <MovieDetails movieDetails={movieDetails} />
      {loading && <Loader />}
      {error && !loading && <div>Oops... Something went wrong...</div>}
    </div>
  );
};
