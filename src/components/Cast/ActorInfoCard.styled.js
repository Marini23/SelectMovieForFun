import styled from 'styled-components';
export const ItemCast = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 15px;
  flex-wrap: wrap;
  background: #fff5ee;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: 0px 0px 4px 4px;
`;

export const ActorName = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

export const ActorRole = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
`;
