import React, {createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  watchList: [],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addMovieToWatchList = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie});
    }

    return(
        <GlobalContext.Provider value = {{watchList: state.watchList, addMovieToWatchList,}}>
            {props.children}
        </GlobalContext.Provider>
    )
}