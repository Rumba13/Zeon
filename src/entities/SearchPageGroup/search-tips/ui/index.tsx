import "./styles.scss";
import { getSearchTipHighlightedTitle } from "../lib/getSearchTipHighlightedTitle";
import { Link } from "react-router-dom"

type PropsType = {
    items: SearchTipsType[]
    searchQuery: string
}

type SearchTipsType = {
    title: string,
    href: string,
}

export function SearchTips({ items, searchQuery }: PropsType) {

    if (searchQuery.trim() === "" || items.length === 0) {
        return <span className="search-tips"></span> //it must return classname to prevent grid crush
    }


    return <span className="search-tips">
        <span className="search-tips__title"> Возможно вы ищете:</span>

        {items.map(({ title, href }) => {
            const { partBeforeHighlight, highlightedPart, partAfterHighlight, } = getSearchTipHighlightedTitle(title, searchQuery);

            return <Link className="search-tips__item" to={href}>
                {partBeforeHighlight}
                <span className="_highlighted">{highlightedPart}</span>
                {partAfterHighlight}
            </Link>
        })}

    </span>
}