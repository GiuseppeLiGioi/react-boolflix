import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";


const SearchBar = () => {

    const{queryMovie, querySeries, fetchQueryMovie, setQueryMovie, fetchMovies, fetchSeries, movies, fetchQuerySeries, setQuerySeries} = useGlobalContext();

//CON LO USEEFFECT LA RICERCA AVVIENE MAN MANO CHE L'UTENTE INSERISCE CARATTERI NELLA SERACHBAR.

    useEffect(() => {
        if(queryMovie.trim() !== ""){
            fetchQueryMovie(queryMovie)
        }else{
            fetchMovies();
        }
    }, [queryMovie])

    useEffect(() => {
        if(querySeries.trim() !== ""){
            fetchQuerySeries(querySeries)
        }else{
            fetchSeries();
        }
    }, [querySeries])

// CON GLI HANDLESUBMIT LA RICERCA AVVIENE SOLO DOPO AVER PREMUTO IL BOTTONE.
    const handleSubmitMovie = (e) => {
       e.preventDefault()
       fetchQueryMovie(queryMovie)

    }

    const handleSubmitSeries = (e) => {
        e.preventDefault()
        fetchQuerySeries(querySeries)
 
     }



    return(
        <div className="container_form">
            <form onSubmit={handleSubmitMovie}>
            <input
            type="text"
            placeholder="inserisci il titolo del film"
            value={queryMovie}
            onChange={ (e) => setQueryMovie(e.target.value) }
            >
            </input>
            <button type="submit" className="btn_searchbar">Cerca</button>

            </form>

            <form onSubmit={handleSubmitSeries}>
            <input
            type="text"
            placeholder="inserisci il titolo della serie tv"
            value={querySeries}
            onChange={ (e) => setQuerySeries(e.target.value) }
            >
            </input>
            <button type="submit" className="btn_searchbar">Cerca</button>

            </form>
        </div>

        
        
       
    )
}

export default SearchBar;