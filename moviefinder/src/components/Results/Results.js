import React from 'react'

export const Results = ({ movies = [] }) => {
  return (
    <div>
      <h2>Results</h2>
      <ul>
        {movies?.map((movie, index) => {
          const { title } = movie;
          return(
            <li key={index}>{title}</li>
          )})}
      </ul>
    </div>
  )
}