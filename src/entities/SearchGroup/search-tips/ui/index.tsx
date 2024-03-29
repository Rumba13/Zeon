import "./styles.scss";
import {getSearchTipHighlightedPart} from "./get-search-tip-highlighted-part";
import {Link} from "react-router-dom"

type PropsType = {
    items: SearchTipsType[]
    searchQuery: string
}

type SearchTipsType = {
    title: string,
    href: string,
}

export function SearchTips({items, searchQuery}: PropsType) {

    if (searchQuery.trim() === "" || items.length === 0) {
        return <span className="search-tips"></span> //component must return classname to prevent grid crush
    }

    return <span className="search-tips">
        <span className="search-tips__title"> Возможно вы ищете:</span>

        {items.map(({title: searchTip, href}) => {
            const {
                partBeforeHighlight,
                highlightedPart,
                partAfterHighlight,
            } = getSearchTipHighlightedPart(searchTip, searchQuery);

            return <Link className="search-tips__item" to={href}>
                {partBeforeHighlight}
                <span className="_highlighted">{highlightedPart}</span>
                {partAfterHighlight}
            </Link>
        })}

    </span>
}