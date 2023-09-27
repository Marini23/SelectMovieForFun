import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Header = styled.header``;

export const StyledLink = styled(NavLink)`
  color: #black;

  &.active {
    color: #ff8c00;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 auto;
  list-style: none;
`;

export const ListItem = styled.li`
  font-size: 28px;
  font-weight: 600;
`;
