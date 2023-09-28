import { Outlet } from 'react-router-dom';

import { Header, StyledLink, List, ListItem } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
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
    </div>
  );
};
