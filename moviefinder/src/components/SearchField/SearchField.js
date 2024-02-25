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
    setSuggestions(suggestions.slice(0, 5));
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
  <div className="flex">
    <input
      type="text"
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search..."
      onKeyDown={handleKeyPress}
      value={searchValue}
    />
    <button type="button" onClick={handleSubmit}>Search</button>
      <ul>
        {suggestions && suggestions?.map((suggestion, index) => (
          <li key={index} onClick={() => handleOnSuggestionClick(suggestion)}>{suggestion}</li>
        ))}
      </ul>
  </div>
  )
}