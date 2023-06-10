import "./styles.scss";
import { useParams } from "react-router-dom";
import { PaginatorDto } from "../../../../pages/searchPage/lib/dtos";
import { Pagination as AntPagination} from "antd";
import { paginationItemRenderCreator } from "./itemRender";

type PropsType = {
    paginator: PaginatorDto
}

export function Pagination({ paginator: { pagesCount } }: PropsType) {
    const { page } = useParams()
    const currentPage = Number(page) || 1;

    return <AntPagination className="pagination" pageSize={1} total={pagesCount} defaultCurrent={currentPage} itemRender={paginationItemRenderCreator(pagesCount)} />
}