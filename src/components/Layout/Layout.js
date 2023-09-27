import { Link, NavLink, Outlet } from 'react-router-dom';

import { Wrapper, Header, StyledLink, List, ListItem } from './Layout.styled';

export const Layout = () => {
  return (
    <Wrapper>
      <Header>
        <List>
          <ListItem>
            <StyledLink to="/" end>
              Home
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/movies" end>
              Movies
            </StyledLink>
          </ListItem>
        </List>
      </Header>
      <Outlet />
    </Wrapper>
  );
};
