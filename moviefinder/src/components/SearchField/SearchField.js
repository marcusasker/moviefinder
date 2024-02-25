import React, { useState } from 'react'
import { fetchAutoComplete, fetchMovies } from './actionCreators';

export const SearchField = ({ setMovies }) => {

  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);


  const handleSubmit = async () => {
    const movies = await fetchMovies(searchValue);
    setSuggestions([]);
    setMovies(movies);
  }

  const fetchSuggestions = async () => {
    const suggestions = await fetchAutoComplete(searchValue);
    setSuggestions(suggestions?.slice(0, 5));
  }

  const handleSearch = (query) => {
    setSearchValue(query);
    query.length >= 3 && fetchSuggestions();
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  const handleOnSuggestionClick = (suggestion) => {
    setSearchValue(suggestion);
    handleSubmit();
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
            onClick={handleSubmit}
            className="my-auto ml-1 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
          >
            Search
          </button>
        </div>
        <div className="z-10 flex justify-center">
          <ul className="mr-20 rounded-b-lg w-3/12 text-sm text-gray-700 dark:text-gray-200">
            {suggestions && suggestions?.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleOnSuggestionClick(suggestion)}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
              {suggestion}
              </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  )
}