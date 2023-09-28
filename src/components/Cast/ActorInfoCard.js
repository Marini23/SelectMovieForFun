import { ItemCast, ActorName, ActorRole } from './ActorInfoCard.styled';

import defaultPhoto from './default_image_no_photo.jpeg';

export const ActorInfoCard = ({ actorInfo }) => {
  const { profile_path, name, character } = actorInfo;
  return (
    <ItemCast>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w200/${profile_path}`
            : defaultPhoto
        }
        alt={name}
      />
      <ActorName>{name}</ActorName>
      <ActorRole>{character}</ActorRole>
    </ItemCast>
  );
};
