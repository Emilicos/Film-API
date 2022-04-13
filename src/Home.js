import React, { useState, useEffect } from 'react'
import axios from "axios"
import MovieCard from "./components/MovieCard";

const Home = () => {
    const POPULAR_API_KEY = "https://api.themoviedb.org/3/discover/movie?api_key=b1e3a2379a0ac305d8e7c437a06dcd6e&sort_by=popularity.desc"
    const [popularMovies, setPopularMovies] = useState([])
    const cleanData = (data) => {
        const cleaningData = data.map((movie) => {
          if(movie.hasOwnProperty('poster_path') === false){
            movie['poster_path'] = "https://previews.123rf.com/images/michwich/michwich1511/michwich151100008/48033494-%E8%8B%A5%E3%81%84%E5%A5%B3%E6%80%A7%E3%81%8C%E6%96%AD%E3%82%8B%E5%BD%BC%E5%A5%B3%E3%81%AE%E8%85%95%E3%82%92%E4%BA%A4%E5%B7%AE.jpg"
          }
    
          if(movie.hasOwnProperty('overview') === false){
            movie['overview'] = "No Description Found"
          }
    
          if(movie.hasOwnProperty('rating') === false){
            movie['rating'] = '0.0'
          }
    
          return movie
       })
        return cleaningData
      }
      
      useEffect(() => {
        axios.get(POPULAR_API_KEY)
          .then((res) => {
            const data = res.data.results
            const cleanedData = cleanData(data)
            setPopularMovies(cleanedData)
          })
      }, []);

  return (
    <div className = "mx-8 my-20">
        <h2 className = "text-3xl font-bold"> Popular Right Now </h2>
        <div>
            <MovieCard movies = {popularMovies}/>   
        </div>
    </div>
  )
}

export default Home