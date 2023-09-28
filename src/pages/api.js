import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: `7989ce88a68f6877dd4a739d8ae1dd37`,
  language: 'en-US',
};

export const fetchTrendingMovies = async signal => {
  const { data } = await axios.get('/trending/movie/day', { signal });
  return data.results;
};

export const fetchMoviesByQuery = async (query, signal) => {
  const { data } = await axios.get('/search/movie', {
    signal,
    params: {
      query: query,
    },
  });
  return data.results;
};

export const fetchMovieDetailsById = async (movieId, signal) => {
  const { data } = await axios.get(`/movie/${movieId}`, {
    signal,
    params: {
      id: movieId,
    },
  });
  return data;
};

export const fetchMovieCastById = async (movieId, signal) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`, {
    signal,
    params: {
      id: movieId,
    },
  });
  return data.cast;
};

export const fetchMovieReviewsById = async (movieId, signal) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`, {
    signal,
    params: {
      id: movieId,
    },
  });
  return data.results;
};
