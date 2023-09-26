export const MovieDetails = ({ movieDetails }) => {
  const {
    title,
    poster_path,
    overview,
    genres = [],
    release_date,
  } = movieDetails;
  return (
    <div>
      <h2>{title}</h2>
      <p>{release_date}</p>
      <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} alt={title} />
      <h3>Owerview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>
        {genres.map((genre, i) => (
          <span key={i}>{genre.name}</span>
        ))}
      </p>
    </div>
  );
};
