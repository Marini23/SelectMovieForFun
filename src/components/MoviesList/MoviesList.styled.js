import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 25px;
`;

export const MoviesItemStyle = styled.li`
  font-size: 24px;
  font-weight: 400;
`;

export const StyledLinkList = styled(NavLink)`
  color: black;

  &.active {
    color: #ff8c00;
  }
`;
