import { ActorInfoCard } from './ActorInfoCard';
import { ListCast } from './Cast.styled';

export const Cast = ({ movieCast }) => {
  return (
    <ListCast>
      {movieCast.map(actorInfo => (
        <ActorInfoCard actorInfo={actorInfo} key={actorInfo.id} />
      ))}
    </ListCast>
  );
};
