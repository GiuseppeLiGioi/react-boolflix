import { createContext, useState, useContext } from "react";
import axios from "axios";


const GlobalContext = createContext();
const api_key = import.meta.env.VITE_API_KEY;
const url = `${import.meta.env.VITE_URL}`;


const GlobalProvider = ( {children} ) => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [queryMovie, setQueryMovie] = useState("");
    const [querySeries, setQuerySeries] = useState("");

    const fetchMovies = () => {
        axios.get(url + `/movie/popular?api_key=${api_key}`)
        .then(res => setMovies(res.data.results))
        .catch((error) => console.error(error))
    }

    const fetchSeries = () => {
        axios.get(url + `/tv/popular?api_key=${api_key}`)
        .then(res => setSeries(res.data.results))
        .catch((error) => console.error(error))
    }



const fetchQueryMovie = ( query ) => {
    axios.get(url +  `/search/movie?api_key=${api_key}&query=${query}`)
    .then(res => setMovies(res.data.results))
    .catch((error) => console.error(error))
}


const fetchQuerySeries = ( query ) => {
    axios.get(url +  `/search/tv?api_key=${api_key}&query=${query}`)
    .then(res => setSeries(res.data.results))
    .catch((error) => console.error(error))
}

const value = {
    movies,
    queryMovie,
    series,
    querySeries,
    fetchMovies,
    fetchQueryMovie,
    fetchQuerySeries,
    fetchSeries, 
    setMovies, 
    setQueryMovie,
    setSeries,
    setQuerySeries
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
