import { getLinkToSetPage } from "./getLinkToSetPage";
import "./styles.scss";
import { Link } from "react-router-dom";

type PropsType = {
    className?: string,
    children: string | number,
    pageToSet: number,
    currentPage: number
    pagesCount: number,
}

export default function PaginatorItem({ children: value, className, pageToSet, currentPage, pagesCount }: PropsType) {
    return <li className={`paginator-item ${className ?? ""} ${currentPage === +value ? "active" : ""}`} >
        <Link className="paginator-item__link" to={getLinkToSetPage(pageToSet, pagesCount)} >{value}</Link>
    </li>
}