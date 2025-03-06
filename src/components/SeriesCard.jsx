import { useGlobalContext } from "../context/GlobalContext";
const url_img = import.meta.env.VITE_URL_IMG;





const SeriesCard = ( {serie} ) => {
    console.log(serie);
    
    const urlImg = url_img + serie.poster_path;
    
    console.log("url finale:" + urlImg)
    
    
    return(
        <div className="container_cards">
            <div className="container_card">
                <img src={urlImg}/>
            </div>

        </div>
    )
}
export default SeriesCard;