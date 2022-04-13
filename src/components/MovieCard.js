import React from 'react'
import Movie from './Movie'

const MovieCard = (props) => {
  const arrayLength = props.movies.length
  return (
    <div>
      {arrayLength > 0 && <div className = "flex flex-wrap justify-center">
        {props.movies.map((movie, i) => {
            return <Movie key = {i} movie = {movie} id = {movie.id} overview = {movie.overview} image = {movie.poster_path} title = {movie.title} rating = {movie.vote_average}/>
        })}
      </div>}
      {arrayLength === 0 &&
          <h2 className = "text-3xl font-bold text-center text-stone-400 absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2"> Nothing to show here! </h2>
      }
    </div>
  )
}

export default MovieCard