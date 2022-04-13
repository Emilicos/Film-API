import React from 'react'
import Header from './components/Header';
// import MovieCard from "./components/MovieCard";
// import netflix from "./netflix.png"
// import Axios from "axios"
// import axios from "axios"
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './Home';
import Search from './Search';
import Watchlist from './Watchlist';
// import Watchlist from './Watchlist';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/search" element = {<Search />}/>
          <Route path = "/watchlist" element = {<Watchlist />}/>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;

  // const POPULAR_API_KEY = "https://api.themoviedb.org/3/discover/movie?api_key=b1e3a2379a0ac305d8e7c437a06dcd6e&sort_by=popularity.desc"
  // const SEARCH_API_KEY = "https://api.themoviedb.org/3/search/movie?api_key=b1e3a2379a0ac305d8e7c437a06dcd6e&query="
  // const [popularMovies, setPopularMovies] = useState([])
  // const [search, setSearch] = useState('')
  // const [searchMovies, setSearchMovies] = useState([])
  // const [whatISearch, setWhatISearch] = useState('');

  // const cleanData = (data) => {
  //   const cleaningData = data.map((movie) => {
  //     if(movie.hasOwnProperty('poster_path') === false){
  //       movie['poster_path'] = "https://previews.123rf.com/images/michwich/michwich1511/michwich151100008/48033494-%E8%8B%A5%E3%81%84%E5%A5%B3%E6%80%A7%E3%81%8C%E6%96%AD%E3%82%8B%E5%BD%BC%E5%A5%B3%E3%81%AE%E8%85%95%E3%82%92%E4%BA%A4%E5%B7%AE.jpg"
  //     }

  //     if(movie.hasOwnProperty('overview') === false){
  //       movie['overview'] = "No Description Found"
  //     }

  //     if(movie.hasOwnProperty('rating') === false){
  //       movie['rating'] = '0.0'
  //     }

  //     return movie
  //  })
  //   return cleaningData
  // }
  
  // useEffect(() => {
  //   axios.get(POPULAR_API_KEY)
  //     .then((res) => {
  //       const data = res.data.results
  //       const cleanedData = cleanData(data)
  //       setPopularMovies(cleanedData)
  //     })
  // }, []);

  // // console.log(popularMovies)

  // const handleSearch = (e) => {
  //   e.preventDefault()
  //   if(search){
  //     setWhatISearch(search)
  //     axios.get(SEARCH_API_KEY + search)
  //     .then((res) => {
  //       const data = res.data.results
  //       const cleanedData = cleanData(data)
  //       setSearchMovies(cleanedData)
  //       setSearch('')
  //     })

  //   }else{
  //     setWhatISearch("N̶o̶n̶e̶")
  //     axios.get(POPULAR_API_KEY)
  //     .then((res) => {
  //       const data = res.data.results
  //       const cleanedData = cleanData(data)
  //       setSearchMovies(cleanedData)
  //     })
  //   }
  // }

  // const changeSearch = (e) => {
  //   setSearch(e.target.value)
  // }

  // const handleWishList = (title, image, rating, overview) =>{
  //   setWishList(prevArray => [...prevArray, [title, image, rating, overview]])
  // }

  // console.log(wishList)

/* <div> 
          <div className = "flex justify-between items-center h-16 font-bold z-10 w-full fixed px-8 top-0 nav-bar">
              <div>
                  <img className = "cursor-pointer" onClick = {handleSearch} src = {netflix} width = {40} height = {40} alt = "logo"/>
              </div>
              <ul className = "flex items-center">
                  <form onSubmit = {handleSearch}>
                    <input value = {search} onChange = {changeSearch} type = "text" placeholder = "Search..." className = "border-4 border-rose-400 rounded-md px-4 mx-8 text-black"/>
                  </form> 
                  <li onClick = {handleSearch} className = "mx-8 cursor-pointer"> Home </li>
                  <li className = "mx-8 cursor-pointer"> Wishlist </li>
              </ul>
          </div>

        <div className = "m-8 py-12"> 
          <div>
              <h2 className = "text-3xl font-bold"> Popular Right Now </h2>
              <div>
                  <MovieCard movies = {popularMovies}/>   
              </div>
          </div>

          <div>
              <h2 className = "text-3xl font-bold py-8"> You Search For <span className = "capitalize"> {whatISearch} </span> </h2>
              <div>
                  <MovieCard movies = {searchMovies} />
              </div>
          </div>

        </div>
        <h2> Watchlist </h2>      
        <Watchlist />

      </div> */