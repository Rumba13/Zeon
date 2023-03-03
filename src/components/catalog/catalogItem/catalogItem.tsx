import React, {  useRef } from "react";
import Sprite from "../../sprite/sprite";
import { useCatalog } from "../useCatalog";
import "./catalogItem.scss";

type PropsType = {
    title: string,
    children?: React.ReactNode
}

export default function CatalogItem({ title, children }: PropsType) {
    const catalogItemsRef = useRef(null)
    const {catalogLiOnClick} = useCatalog(catalogItemsRef);

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