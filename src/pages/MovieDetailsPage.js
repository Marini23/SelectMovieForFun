import { fetchMovieDetailsById } from 'pages/api';
import { Loader } from 'components/Loader';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

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
        setMovieDetails(movie);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);
  return (
    <div>
      <Link to={goBackLink.current} state={{ from: location }}>
        Go Back
      </Link>
      <MovieDetails movieDetails={movieDetails} />
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to={`cast`} state={location.state}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={`reviews`} state={location.state}>
            Reviews
          </Link>
        </li>
      </ul>
      {loading && <Loader />}
      {error && !loading && <div>Oops... Something went wrong...</div>}
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
