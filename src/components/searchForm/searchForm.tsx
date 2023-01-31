import Icon from "../icon/icon";
import searchIcon from "../../images/search.png";
import "./searchForm.css";


export default function searchForm() {
    return <div className="search-wrapper">
        <div className="search">
            <input  className="search__form" placeholder="Поиск по каталогу" type="text" />
            <Icon icon={searchIcon}/>
        </div>
            
    </div>
}