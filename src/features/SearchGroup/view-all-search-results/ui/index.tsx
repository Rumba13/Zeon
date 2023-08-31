import "./styles.scss";
import { Icon } from "../../../../shared/ui/icon";
import SearchIcon from "../../../../images/search-icon.svg"
import { Link } from "react-router-dom";
import { MouseEventHandler } from "react";


type PropsType = {
    onClick?:Function
}


export function ViewAllSearchResults({onClick}:PropsType) {
    return <Link onClick={onClick as MouseEventHandler} className="view-all-search-results-wrapper" to="/search/1">
        <div className="view-all-search-results">
            <Icon className="view-all-search-results__icon" icon={SearchIcon} />
            <span className="view-all-search-results__title">Смотреть все результаты поиска</span>
        </div>
    </Link>
}