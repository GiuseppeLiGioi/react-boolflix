import { createContext, useState, useContext } from "react";
import axios from "axios";


const GlobalContext = createContext();
const api_key = import.meta.env.VITE_API_KEY;
const url = `${import.meta.env.VITE_URL}`;


const GlobalProvider = ( {children} ) => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");

    const fetchMovies = () => {
        axios.get(url + `/movie/popular?api_key=${api_key}`)
        .then(res => setMovies(res.data.results))
    }



const fetchQuery = ( query ) => {
    axios.get(url +  `/search/movie?api_key=${api_key}&query=${query}`)
    .then(res => setMovies(res.data.results))
}

const value = {
    movies,
    query,
    fetchMovies,
    fetchQuery
} 


return (
    <GlobalContext.Provider value={value}>
    {children}
    </GlobalContext.Provider>
)

}

// imposto il custom hook
const useGlobalContext = () => useContext(GlobalContext)
export {GlobalProvider, useGlobalContext};
