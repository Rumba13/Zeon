import { Link } from "react-router-dom";
import "./styles.scss";

type PropsType = {
    className?: string,
    children: string | number,
    pageToSet: number,
    currentPage: number
    pagesCount: number,
}

export default function PaginatorItem({ children: value, className, pageToSet, currentPage, pagesCount }: PropsType) {

    function getLinkToSetPage(page: number) { //TODO ???
        if (typeof page === "number" && page > 0 && page <= pagesCount) {
            return `/search/${page}`;
        }
        return "";
    }

    return <li className={`paginator-item ${className ?? ""} ${currentPage === +value ? "active" : ""}`} >
        <Link className="paginator-item__link" to={getLinkToSetPage(pageToSet)} >{value}</Link>
    </li>
}