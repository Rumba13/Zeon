import { ReactNode, RefObject } from "react";
import { ListController } from "./listController";

const listController = new ListController();

export function useCatalog(catalogItemsRef: RefObject<HTMLElement>, childrens: ReactNode | ReactNode[]) {

    if (Array.isArray(childrens)) {
        var listTitle = childrens[0];
        var listChilds = childrens.slice(1);
    }
    else {
        var listTitle = childrens;
    }

    function catalogLiClickHandler(e: MouseEvent) {
        e.stopPropagation();

        if (!catalogItemsRef.current) {
            return null;
        }
        const currentList = catalogItemsRef.current;
        currentList.ontransitionend = listController.onListAnimationEndCreator(currentList)
        listController.toggleList(currentList);

        return false;
    }

    function renderChildrens() {
        return listChilds
    }

    return { catalogLiClickHandler, title: listTitle, renderChildrens }
}
