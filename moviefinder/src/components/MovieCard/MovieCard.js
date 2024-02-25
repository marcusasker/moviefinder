import React from 'react'

const fallbackImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'

export const MovieCard = ({ movie = {} }) => {
  const { id, overview, popularity, poster, released, title } = movie;
  return(
    <li key={id}>
      <img src={poster || fallbackImg} style={{width: '60px'}} alt="img"></img>
      <h2>{title}</h2>
      <span>{popularity}</span>
      <span>({released})</span>
      <p>{overview}</p>
    </li>
  )
};