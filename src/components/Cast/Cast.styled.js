import styled from 'styled-components';
export const ListCast = styled.ul`
  display: grid;
  max-width: calc(100vw - 10px);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 16px;
  margin: 20px auto;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
`;
