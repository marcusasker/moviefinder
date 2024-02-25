import axios from "axios";

export const fetchMovies = async (query) => {
  const url = 'https://api.movies.dcts.se/rpc/movies_search?q=';
  if (!query) {
    return console.log("no query provided")
  } else {
    try {
      const response = await axios.get(`${url}${query}`);
      return response.data;
    } catch (error) {
      console.log(error.message)
    }
  }
};

export const fetchAutoComplete = async (query) => {
  const url = 'https://api.movies.dcts.se/rpc/movies_autocomplete?q=';
  if (!query) {
    return console.log("no query provided")
  } else {
    try {
      const response = await axios.get(`${url}${query}`);
      return response.data;
    } catch (error) {
      console.log(error.message)
    }
  }
};