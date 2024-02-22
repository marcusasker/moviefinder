import React, { useState } from 'react'
import { fetchMovies } from '../../actionCreator/fetchMovies';

export const SearchField = ({ setMovies }) => {

  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);


  const getMovies = async () => {
    const movies = await fetchMovies(searchValue);
    setMovies(movies);
  }

  const fetchAutoComplete = async () => {
    const suggestions = searchValue && await fetchMovies(searchValue, true);
    setSuggestions(suggestions);
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    fetchAutoComplete();
  }

  return(
  <div className="flex">
    <input type="text" onChange={(e) => handleSearch(e)} placeholder="Search..." />
    <button type="button" onClick={getMovies}>Search</button>
    <div>
      suggestions
      {suggestions?.map((suggestion, index) => (
      <p key={index}>{suggestion}</p>
      ))}
    </div>
  </div>
  )
}