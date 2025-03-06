import { useGlobalContext } from "../context/GlobalContext";
import SeriesCard from "./SeriesCard";


const ResultSeries = () => {
    const { series, voteStar, fetchFlag } = useGlobalContext();
    //verifico prima di mappare l'array che ci sia qualcosa al suo interno, con una condizione.
    if(series.length === 0){
       return (
       <p>"Caricamento serie tv..."</p>
       )
    }

    
    return(
        <div>
            <h1 className="title_">LE NOSTRE SERIE TV POPOLARI</h1>
            {
                series.map((serie) => ( // qua metto parentesi tonde perchè cosi ho il return implicito
                <SeriesCard key={serie.id} serie={serie} />
                ))
            }
        </div>
        
    )
}

export default ResultSeries;