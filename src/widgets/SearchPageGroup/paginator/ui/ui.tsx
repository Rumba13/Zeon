import "./styles.scss";
import PaginatorItem from "./paginatorItem";
import { PagesController } from "../lib/pagesController";
import { useParams } from "react-router-dom";
import { PaginatorDto } from "../../../../pages/searchPage/lib/dtos";

type PropsType = {
    paginator: PaginatorDto
}

export function Paginator({ paginator: { pagesCount } }: PropsType) {
    const { page } = useParams()
    const currentPage = Number(page) || 1;

    const pages = (new PagesController()).getPagesNumbers(currentPage, pagesCount)

    return <ul className="paginator">
        <PaginatorItem className="paginator__previous-page" pageToSet={currentPage - 1} pagesCount={pagesCount} currentPage={currentPage}  >&lt;</PaginatorItem>

        {pages.map(page => <PaginatorItem pagesCount={pagesCount} currentPage={currentPage} pageToSet={page}>{page}</PaginatorItem>)}

        <PaginatorItem className="paginator__next-page" pageToSet={currentPage + 1} pagesCount={pagesCount} currentPage={currentPage} > &gt;</PaginatorItem>
    </ul>
}