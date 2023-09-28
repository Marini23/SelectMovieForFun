import { ItemCast, ActorName, ActorRole } from './ActorInfoCard.styled';

export const ActorInfoCard = ({ actorInfo }) => {
  const { profile_path, name, character } = actorInfo;
  return (
    <ItemCast>
      <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name} />
      <ActorName>{name}</ActorName>
      <ActorRole>{character}</ActorRole>
    </ItemCast>
  );
};
