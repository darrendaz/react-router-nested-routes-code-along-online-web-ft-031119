// .src/containers/MoviesPage.js
import React from 'react';
import { Link } from 'react-router-dom'


const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movieID =>
    <div key={movieID}>
      <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    </div>
  )

  return (
    <div>
      {renderMovies}
    </div>
  )
}

export default MoviesList