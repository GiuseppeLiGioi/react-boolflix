import { useGlobalContext } from "../context/GlobalContext";


const ResultSeries = () => {
    const { series, voteStar, fetchFlag } = useGlobalContext();
    //verifico prima di mappare l'array che ci sia qualcosa al suo interno, con una condizione.
    if(series.length === 0){
       return (
       <p>"Caricamento serie tv..."</p>
       )
    }

    
    return(
        <ul>
            <h1 className="title_">LE NOSTRE SERIE TV POPOLARI</h1>
            {
                series.map((serie) => ( // qua metto parentesi tonde perchè cosi ho il return implicito
                <li key={serie.id}>
                 <h3> Titolo della serie tv: {serie.name}</h3>   
                 <h4> Titolo originale della serie tv: {serie.original_name}</h4>
                 <p> Lingua della serie Tv:<img src={fetchFlag(serie.original_language)}></img></p>
                 <p> Voto della serie tv: {voteStar(serie.vote_average)}</p>
                </li> 
                ))
            }
        </ul>
        
    )
}

export default ResultSeries;