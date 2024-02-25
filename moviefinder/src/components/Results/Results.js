import React from 'react'
import { MovieCard } from '../MovieCard/MovieCard';

export const Results = ({ movies }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4 mx-8">
        {movies && movies?.map((movie, index) =>
        <React.Fragment key={index}>
          <MovieCard movie={movie} />
        </React.Fragment>
        )}
      </div>
    </div>
  )
}