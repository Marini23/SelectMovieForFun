import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const WrapperMovieDetails = styled.div`
  position: absolute;
  top: 70px;
  margin-top: 20px;
  padding: 10px 70px;
`;

export const StyledLinkGoBack = styled(NavLink)`
  color: black;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;

  &.active {
    color: #ff8c00;
  }
`;

export const TitleInfo = styled.h4`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const ListCastReviews = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0 40px;
`;

export const StyledLinkCastReviews = styled(NavLink)`
  color: black;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;

  &.active {
    color: #ff8c00;
  }
`;
