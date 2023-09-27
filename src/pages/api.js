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

export const fetchMoviesByQuery = async (query, page) => {
  const { data } = await axios.get('/search/movie', {
    params: {
      query: query,
      page,
    },
  });
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

export const fetchMovieCastById = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits`, {
    params: {
      id: movieId,
    },
  });
  return data.cast;
};

export const fetchMovieReviewsById = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`, {
    params: {
      id: movieId,
    },
  });
  return data.results;
};