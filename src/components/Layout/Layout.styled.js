import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  background-color: #000080;
  height: 70px;
  color: #fff;
  font-weight: 600;
  z-index: 1;
`;

export const StyledLink = styled(NavLink)`
  color: #fff;

  &.active {
    color: #ff8c00;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 10px 30px;
  list-style: none;
`;

export const ListItem = styled.li`
  font-size: 28px;
  font-weight: 600;
`;
