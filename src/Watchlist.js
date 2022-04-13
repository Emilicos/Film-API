import React, { useContext } from 'react'
import MovieWatchCard from './components/MovieWatchCard'
import { GlobalContext } from './context/GlobalState'

const Watchlist = () => { 
  const { watchList } = useContext(GlobalContext)

  return (
    <div className = "mx-8 my-20">
      <h2 className = "text-3xl font-bold text-center"> Watch List </h2>

      {watchList.length === 0 &&
        <h2 className = "text-3xl font-bold text-center text-stone-400 absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2"> Nothing to show here! </h2>
      }
      {watchList.length > 0 && 
        <div className = "flex flex-wrap justify-center">
          {watchList.map((movie, i) => {
              return <MovieWatchCard key = {i} movie = {movie} overview = {movie.overview} image = {movie.poster_path} title = {movie.title} rating = {movie.vote_average}/>
          })}
        </div>}
    </div>
  )
}

export default Watchlist