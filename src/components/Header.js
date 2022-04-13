import React from 'react'
import netflix from "../netflix.png"
import { Link, } from "react-router-dom";

const Header = () => {
  return (
    <div className = "flex justify-between items-center h-16 font-bold z-10 w-full fixed px-8 top-0 nav-bar">
        <div>
          <Link to="/"> <img className = "cursor-pointer" src = {netflix} width = {40} height = {40} alt = "logo"/> </Link>
        </div>
      <ul className = "flex items-center">
        <li className = "mx-8 cursor-pointer"> 
          <Link to="/"> Home </Link>
        </li>
        <li className = "mx-8 cursor-pointer"> 
          <Link to="/search"> Search Movies </Link>
        </li>
        <li className = "mx-8 cursor-pointer"> 
          <Link to="/watchlist"> Watch List </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header