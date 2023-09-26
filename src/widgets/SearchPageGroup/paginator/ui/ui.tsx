import "./styles.scss";
import {Pagination as AntPagination} from "antd";
import {paginationItemRenderCreator} from "./itemRender";
import Loading from "../../../../shared/ui/loading/ui";

type PropsType = {
    pagesCount: number,
    currentPage: number
}

export function Pagination({pagesCount, currentPage}: PropsType) {

    if(!(pagesCount && currentPage)) {
        return <Loading/>
    }

    return <AntPagination className="pagination" pageSize={1} total={pagesCount} defaultCurrent={currentPage}
                          itemRender={paginationItemRenderCreator(pagesCount)}/>
}