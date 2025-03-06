import { useGlobalContext } from "../context/GlobalContext";
import MoviesCard from "./MoviesCard";


const ResultMovies = () => {
    const { movies, voteStar, fetchFlag } = useGlobalContext();
    //verifico prima di mappare l'array che ci sia qualcosa al suo interno, con una condizione.
    if(movies.length === 0){
       return (
       <p>"Caricamento film..."</p>
       )
    }
    

    
    return(
        <div>
             <h1 className="title_">I NOSTRI FILM POPOLARI</h1>
            {
                movies.map((movie) => ( // qua metto parentesi tonde perchè cosi ho il return implicito
                <MoviesCard key={movie.id} movie={movie} /> //passo movie come prop al componente MoviesCard, in modo da gestirne 

           ))}

        </div>
        
    )
}

export default ResultMovies;