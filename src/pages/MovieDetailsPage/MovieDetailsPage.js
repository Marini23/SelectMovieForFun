import { fetchMovieDetailsById } from 'pages/api';
import { Loader } from 'components/Loader';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  WrapperMovieDetails,
  StyledLinkGoBack,
  TitleInfo,
  ListCastReviews,
  StyledLinkCastReviews,
} from './MoviedetailsPage.styled';

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
    <WrapperMovieDetails>
      <StyledLinkGoBack to={goBackLink.current} state={{ from: location }}>
        Go Back
      </StyledLinkGoBack>
      <MovieDetails movieDetails={movieDetails} />
      <TitleInfo>Additional information</TitleInfo>
      <ListCastReviews>
        <li>
          <StyledLinkCastReviews to={`cast`} state={location.state}>
            Cast
          </StyledLinkCastReviews>
        </li>
        <li>
          <StyledLinkCastReviews to={`reviews`} state={location.state}>
            Reviews
          </StyledLinkCastReviews>
        </li>
      </ListCastReviews>
      {loading && <Loader />}
      {error && !loading && <div>Oops... Something went wrong...</div>}
      <Suspense>
        <Outlet />
      </Suspense>
    </WrapperMovieDetails>
  );
};
