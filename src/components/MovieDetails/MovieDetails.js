import { MovieDetailsW, Title, SubTitle, Text } from './MovieDetails.styled';

export const MovieDetails = ({ movieDetails }) => {
  const {
    title,
    poster_path,
    overview,
    genres = [],
    release_date,
  } = movieDetails;
  return (
    <MovieDetailsW>
      <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
      <div>
        <Title>{title}</Title>
        <Text>Release date: {release_date}</Text>
        <SubTitle>Owerview</SubTitle>
        <Text>{overview}</Text>
        <SubTitle>Genres</SubTitle>
        <Text>
          {genres.map((genre, i) => (
            <span key={i}> {genre.name} </span>
          ))}
        </Text>
      </div>
    </MovieDetailsW>
  );
};
