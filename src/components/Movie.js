import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Movie = (props) => {

  let overview, image, rating

  if(props.overview === ""){
    overview = "No Description Found"
  }else{
    overview = props.overview
  }

  if(props.image == null){
    image = "https://m.media-amazon.com/images/M/MV5BYmU2MjIzNTQtMzJjOC00YmEwLWIxMDgtNTA2YTA5ODc0YjZkXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg" 
  }else{
    image = "https://image.tmdb.org/t/p/w1280/" + props.image
  }
  
  if(props.rating === ""){
    rating = "0.0"
  }else{
    rating = props.rating
  }

  const IMAGE = image 
  
  const{ addMovieToWatchList, watchList } = useContext(GlobalContext)

  const indexInWatchList = watchList.find(i => i.id === props.id)

  const inWatchList = indexInWatchList ? true : false

  return (
    <div className = "w-72 mr-8 mt-8 text-center font-bold bg-gray-700 text-white rounded-md relative overflow-hidden cursor-pointer movie">
      <img alt = "img" src = {IMAGE} className = "max-w-full"/>
      <div className = "flex justify-between items-center text-center p-4">
        <h2 className = "text-left"> {props.title} </h2>
        <span className = "text-right bg-gray-900 p-2"> {rating}</span>
      </div>
      <div className = "text-left absolute rounded-t-md bottom-0 left-0 right-0 bg-slate-200 text-xl translate-y-full hover:translate-y-0 ease-in-out duration-300 movie-over p-4 overflow-auto max-h-full text-black">
        <h2> Description: </h2>
        <p className = "py-4 font-normal"> {overview}</p> 
        <div className = "flex justify-center">
          <button disabled = {inWatchList} onClick = {() => addMovieToWatchList(props.movie)} className = "bg-rose-400 px-6 py-2 rounded-md font-bold hover:bg-rose-300 duration-500"> Add to Wishlist </button>
        </div>
      </div>
    </div>
  )
}

export default Movie