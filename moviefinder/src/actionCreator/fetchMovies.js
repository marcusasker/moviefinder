import axios from "axios";

export const fetchMovies = async (query, autocomplete = false) => {
  const url = autocomplete
  ? 'https://api.movies.dcts.se/rpc/movies_autocomplete?q='
  : 'https://api.movies.dcts.se/rpc/movies_search?q=';
  if (!query) {
    return {
      error: "No query provided"
    }
  } else {
    try {
      const response = await axios.get(`${url}${query}`);
      return response.data;
    } catch (error) {
      return {
        error: error.message
      }
    }
  }
};