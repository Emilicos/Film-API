import React from 'react'

const MovieWatchCard = (props) => {
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
          </div>
    </div>
  )
}

export default MovieWatchCard