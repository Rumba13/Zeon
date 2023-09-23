import "./styles.scss";
import {Pagination as AntPagination} from "antd";
import {paginationItemRenderCreator} from "./itemRender";

type PropsType = {
    pagesCount: number,
    currentPage: number
}

export function Pagination({pagesCount, currentPage}: PropsType) {
    return <AntPagination className="pagination" pageSize={1} total={pagesCount} defaultCurrent={currentPage}
                          itemRender={paginationItemRenderCreator(pagesCount)}/>
}