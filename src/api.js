import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: `7989ce88a68f6877dd4a739d8ae1dd37`,
  language: 'en-US',
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get('/trending/movie/day', {});
  return data.results;
};

export const fetchMovieDetailsById = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`, {
    params: {
      id: movieId,
    },
  });
  return data;
};
