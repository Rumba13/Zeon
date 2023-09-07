import { PaginationProps } from "antd";
import { getLinkToSetPage } from "./getLinkToSetPage";
import { Link } from "react-router-dom";

export function paginationItemRenderCreator(pagesCount: number) {
    
    const itemRender: PaginationProps["itemRender"] = (_, type, originalElement) => {
        const page = _;
        if (type === "page") {
            return <Link to={getLinkToSetPage(page, pagesCount)}>{String(_)}</Link>
        }
        else return originalElement;
    }

    return itemRender
}