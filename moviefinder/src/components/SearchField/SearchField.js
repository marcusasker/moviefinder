import React, { useState } from 'react'
import { fetchAutoComplete, fetchMovies } from './actionCreators';

// Component that handles each suggestion that is being rendered
const ListItem = ({ suggestion, onClick }) => {
  return(
    <li data-testid="suggestion"
      onClick={() => onClick(suggestion)}
      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      {suggestion}
    </li>
  )
};

export const SearchField = ({ setMovies }) => {

  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Function that handles the search and fetches the movies
  // @TODO add some more error handling to check that the user doesnt use any special characters
  const handleSubmit = async (query) => {
    const movies = await fetchMovies(query || searchValue);
    setSuggestions([]);
    setMovies(movies);
  };

  // Function that fetches the suggestions
  const fetchSuggestions = async () => {
    const suggestions = await fetchAutoComplete(searchValue);
    const suggestionsArray = suggestions?.slice(0, 5);
    setSuggestions(suggestionsArray);
  };

  // Function that handles the search input, wait for 3 or more characters to start fetching
  // to be a little more efficient if the API is slow
  const handleSearch = (query) => {
    setSearchValue(query);
    query.length >= 3 && fetchSuggestions();
  };

  // Search is being made when pressing enter
  // @TODO add a debounce to the search to avoid too many requests, make arrows work aswell
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  // Function that handles the suggestion click
  const handleOnSuggestionClick = (suggestion) => {
    setSearchValue(suggestion);
    handleSubmit(suggestion);
  };

  return(
    <>
      <div className="block m-4">
        <div className="flex justify-center">
          <input
            data-testid="search-field"
            className="w-3/12 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
            type="text"
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search..."
            onKeyDown={handleKeyPress}
            value={searchValue}
          />
          <button 
            type="button" 
            onClick={() => handleSubmit(searchValue)}
            className="my-auto ml-1 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
          >
            Search
          </button>
        </div>
        <div className="z-10 flex justify-center">
          <ul className="mr-20 rounded-b-lg w-3/12 text-sm text-gray-700 dark:text-gray-200">
            {suggestions && suggestions?.map((suggestion, index) => (
              <ListItem key={index} suggestion={suggestion} onClick={handleOnSuggestionClick} />
              ))}
          </ul>
        </div>
      </div>
    </>
  )
}