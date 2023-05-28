import "./paginator.scss";
import PaginatorItem from "./paginatorItem/paginatorItem";
import { usePaginator } from "./usePaginator";


export default function Paginator() {
    const { pages,currentPage } = usePaginator();

    return <ul className="paginator">
        <PaginatorItem className="paginator__previous-page">&lt;</PaginatorItem>

        {pages.map(page => <PaginatorItem isActive={currentPage == page}>{page.toString()}</PaginatorItem>)}

        <PaginatorItem className="paginator__next-page">&gt;</PaginatorItem>
    </ul>
}