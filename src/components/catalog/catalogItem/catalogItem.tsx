import "./catalogItem.scss";
import React, { ReactNode, useRef } from "react";
import { useCatalog } from "../useCatalog";
import Sprite from "../../sprite/sprite";

type PropsType = {
    children: ReactNode | ReactNode[]
}

export default function CatalogItem({ children: _children }: PropsType) {
    const catalogItemsRef = useRef(null);
    const { catalogLiOnClick } = useCatalog(catalogItemsRef);

    let children = undefined;

    if (Array.isArray(_children)) { //TODO relocate logic to hook
        var title = _children[0];
        children = _children.slice(1);
    }
    else {
        var title = _children;
        children = null;
    }

    return <li onClick={catalogLiOnClick} className="catalog-item-wrapper">
        <div className="catalog-item">
            <span className="catalog-item__text">{title}</span>
            <Sprite yOffset={null} />
        </div>
        <ul ref={catalogItemsRef} className="catalog-items">
            {children}
        </ul>
    </li>
}