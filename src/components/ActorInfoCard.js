export const ActorInfoCard = ({ actorInfo }) => {
  const { profile_path, name, character } = actorInfo;
  return (
    <li>
      <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name} />
      <p>{name}</p>
      <p>{character}</p>
    </li>
  );
};
