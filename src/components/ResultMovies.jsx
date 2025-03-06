import { useGlobalContext } from "../context/GlobalContext";


const ResultMovies = () => {
    const { movies, voteStar, fetchFlag } = useGlobalContext();
    //verifico prima di mappare l'array che ci sia qualcosa al suo interno, con una condizione.
    if(movies.length === 0){
       return (
       <p>"Caricamento film..."</p>
       )
    }
    

    
    return(
        <ul>
             <h1 className="title_">I NSOTRI FILM POPOLARI</h1>
            {
                movies.map((movie) => ( // qua metto parentesi tonde perchè cosi ho il return implicito
                <li key={movie.id}>
                 <h3> Titolo del film: {movie.title}</h3>   
                 <h4> Titolo originale del film: {movie.original_title}</h4>
                 <p> Lingua del film:<img src={fetchFlag(movie.original_language)}></img></p>
                 <p> Voto del film: {voteStar(movie.vote_average)}</p>
                </li> 
                ))
            }
        </ul>
        
    )
}

export default ResultMovies;