import React from 'react'

const MovieCard = ({movie:{title, vote_average, poster_path, release_date,original_language}}) => {
  return (
    <div>
        <h1>{title}</h1>
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: ''} alt={title} />
        <img src="./assets/Rating.svg" alt="" />
        <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
    </div>
  )
}

export default MovieCard