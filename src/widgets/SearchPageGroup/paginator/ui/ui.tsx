import "./styles.scss";
import { useParams } from "react-router-dom";
import { PaginatorDto } from "../../../../pages/searchPage/lib/dtos";
import { Pagination as AntPagination} from "antd";
import { paginationItemRenderCreator } from "./itemRender";

type PropsType = {
    paginator: PaginatorDto
}

export function Pagination({ paginator: { pagesCount,currentPage } }: PropsType) {
    return <AntPagination className="pagination" pageSize={1} total={pagesCount} defaultCurrent={currentPage} itemRender={paginationItemRenderCreator(pagesCount)} />
}