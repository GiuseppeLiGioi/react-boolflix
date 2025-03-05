import { useGlobalContext } from "../context/GlobalContext";


const ResultMovies = () => {
    const { movies } = useGlobalContext();
    //verifico prima di mappare l'array che ci sia qualcosa al suo interno, con una condizione.
    if(movies.length === 0){
       return (
       <p>"Caricamento film..."</p>
       )
    }

    
    return(
        <ul>
            {
                movies.map((movie) => ( // qua metto parentesi tonde perchè cosi ho il return implicito
                <li key={movie.id}>
                 <h3> Titolo del film: {movie.title}</h3>   
                 <h4> Titolo originale del film: {movie.original_title}</h4>
                 <p> Lingua del film: {movie.original_language}</p>
                 <p> Voto del film: {movie.vote_average}</p>
                </li> 
                ))
            }
        </ul>
        
    )
}

export default ResultMovies;