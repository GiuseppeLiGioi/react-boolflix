import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";


const SearchBar = () => {

    const{query, fetchQuery, setQuery, fetchMovies, movies} = useGlobalContext();

    useEffect(() => {
        if(query.trim() !== ""){
            fetchQuery(query)
        }else{
            fetchMovies();
        }
    }, [query])


    const handleSubmit = (e) => {
       e.preventDefault()
       fetchQuery(query)

    }



    return(
        <div className="container_form">
            <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="inserisci il titolo del film"
            value={query}
            onChange={ (e) => setQuery(e.target.value) }
            >
            </input>
            <button type="submit" className="btn_searchbar">Cerca</button>

            </form>
        </div>

        
        
       
    )
}

export default SearchBar;