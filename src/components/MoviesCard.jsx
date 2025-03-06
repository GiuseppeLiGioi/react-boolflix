import { useGlobalContext } from "../context/GlobalContext";
const url_img = import.meta.env.VITE_URL_IMG;





const MoviesCard = ( {movie} ) => {
    const urlImg = url_img + movie.poster_path;
    
    return(
        <div className="container_cards">
            <div className="container_card">
                <img src={urlImg}/>
            </div>

        </div>
    )
}

export default MoviesCard;

