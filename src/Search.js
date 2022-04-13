import React, { useState } from 'react'
import axios from "axios"
import MovieCard from "./components/MovieCard";

const Search = () => {
    const SEARCH_API_KEY = "https://api.themoviedb.org/3/search/movie?api_key=b1e3a2379a0ac305d8e7c437a06dcd6e&query="

    const [search, setSearch] = useState('')
    const [searchMovies, setSearchMovies] = useState([])
    const [whatISearch, setWhatISearch] = useState('');

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

    const handleSearch = (e) => {
        e.preventDefault()
        if(search){
          setWhatISearch(search)
          axios.get(SEARCH_API_KEY + search)
          .then((res) => {
            const data = res.data.results
            const cleanedData = cleanData(data)
            setSearchMovies(cleanedData)
            setSearch('')
          })
        }
      }
    
      const changeSearch = (e) => {
        setSearch(e.target.value)
      }
      
  return (
    <div className = "mx-8 my-20">
        <h2 className = "text-3xl font-bold text-center mb-4"> Search Movies </h2>
        <div>
            <form onSubmit = {handleSearch}>
                <input value = {search} onChange = {changeSearch} type = "text" placeholder = "Search..." className = "border-2 border-blue-600 rounded-md px-4 text-black block w-full"/> 
            </form>
        </div> 
        
        {whatISearch && <div>
            <h2 className = "text-3xl font-bold py-8"> You Search For <span className = "capitalize"> {whatISearch} </span> </h2>
                <div>
                    <MovieCard movies = {searchMovies} />
                </div>
        </div>}

        {!whatISearch && 
          <h2 className = "text-3xl font-bold text-center text-stone-400 absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2"> Nothing to show here! </h2>
        }
    </div>
  )
}

export default Search