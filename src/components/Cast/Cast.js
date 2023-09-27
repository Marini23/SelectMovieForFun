import { ActorInfoCard } from './ActorInfoCard';

export const Cast = ({ movieCast }) => {
  return (
    <ul>
      {movieCast.map(actorInfo => (
        <ActorInfoCard actorInfo={actorInfo} key={actorInfo.id} />
      ))}
    </ul>
  );
};
