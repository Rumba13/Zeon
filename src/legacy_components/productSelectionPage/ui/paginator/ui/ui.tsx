import "./styles.scss";
import PaginatorItem from "./paginatorItem";
import { PaginatorDto } from "../../../../pages/productSelectionPage/lib/dtos";
import { PagesController } from "../lib/pagesController";
import { useParams } from "react-router-dom";

type PropsType = {
    paginator: PaginatorDto
}

export function Paginator({ paginator: { pagesCount } }: PropsType) {
    const { page } = useParams()
    const currentPage = Number(page) || 1;

    const pages = (new PagesController()).getPagesNumbers(currentPage, pagesCount)

    return <ul className="paginator">
        <PaginatorItem pagesCount={pagesCount} currentPage={currentPage} className="paginator__previous-page" pageToSet={currentPage - 1} >&lt;</PaginatorItem>

        {pages.map(page => <PaginatorItem pagesCount={pagesCount} currentPage={currentPage} pageToSet={page}>{page}</PaginatorItem>)}

        <PaginatorItem pagesCount={pagesCount} currentPage={currentPage} className="paginator__next-page" pageToSet={currentPage + 1} > &gt;</PaginatorItem>
    </ul>
}