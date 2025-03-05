import SearchBar from "./SearchBar";

const Header = () => {
    return(
        <div className="header_div">
            <div>
            <h2 className="title_header">BOOLFLIX</h2>
            </div>
            <div>
            <SearchBar />
            </div>
            
        </div>
    )
}

export default Header;