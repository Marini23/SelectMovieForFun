import { useLocation } from 'react-router-dom';

import {
  MoviesListStyle,
  MoviesItemStyle,
  StyledLinkList,
} from './MoviesList.styled';

export const MoviesList = ({ trendingMovies }) => {
  const location = useLocation();
  return (
    <MoviesListStyle>
      {trendingMovies.map(({ id, title }) => (
        <MoviesItemStyle key={id}>
          <StyledLinkList to={`/movies/${id}`} end state={{ from: location }}>
            {title}
          </StyledLinkList>
        </MoviesItemStyle>
      ))}
    </MoviesListStyle>
  );
};
