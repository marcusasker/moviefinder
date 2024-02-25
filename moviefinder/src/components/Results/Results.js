import React from 'react'
import { MovieCard } from '../MovieCard/MovieCard';

export const Results = ({ movies }) => {
  return (
    <div>
      <h2>Results</h2>
      <ul>
        {movies && movies?.map((movie, index) =>
        <React.Fragment key={index}>
          <MovieCard movie={movie} />
        </React.Fragment>
        )}
      </ul>
    </div>
  )
}