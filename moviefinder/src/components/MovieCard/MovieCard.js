import React from 'react'

const fallbackImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'

export const MovieCard = ({ movie = {} }) => {
  const {
    id,
    overview,
    popularity,
    poster,
    released,
    title,
    genres,
    runtime
  } = movie;
  return(
    <div key={id} className="flex items-center bg-white border border-gray-200 rounded-lg flex-row hover:bg-gray-100">
      <img className="rounded h-auto max-h-96 max-w-full" src={poster || fallbackImg} alt="img" />
      <div className="flex flex-col p-4">
        <div className="flex justify-between">
          {title && <h5 className="text-2xl font-bold text-gray-900">{title}</h5>}
          {popularity && (
            <div className="my-auto">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{popularity}</span>
            </div>
          )}
        </div>
        {!!overview && <p className="mb-3 text-gray-700">{overview}</p>}
        {!!released && <p className="mb-3 text-gray-700 text-sm italic">{`Premiered: ${released}`}</p>}
        {!!runtime && <p className="mb-3 text-gray-700 text-sm italic">{`Runtime: ${runtime} minutes`}</p>}
        <div className="flex">
          {genres?.map((genre, index) => (
            <span key={index} className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-1">{genre}</span>
          ))}
        </div>
      </div>
    </div>
  )
};