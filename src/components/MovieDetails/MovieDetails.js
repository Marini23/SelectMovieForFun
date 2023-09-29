import {
  MovieDetailsW,
  Title,
  SubTitle,
  Text,
  Img,
} from './MovieDetails.styled';

import defaultPoster from './default_image_no_poster.jpg';

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
      <Img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300/${poster_path}`
            : defaultPoster
        }
        alt={title}
      />
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
