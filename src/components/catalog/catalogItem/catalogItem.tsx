import "./catalogItem.scss";
import { ReactNode, useRef } from "react";
import { useCatalog } from "../useCatalog";
import { Sprite } from "../../../shared/sprite";

type PropsType = {
    children: ReactNode | ReactNode[]
}

export default function CatalogItem({ children }: PropsType) {
    const catalogItemsRef = useRef(null);
    const { catalogLiOnClick, renderChildrens, title } = useCatalog(catalogItemsRef, children);

    return <li onClick={catalogLiOnClick} className="catalog-item-wrapper">
        <div className="catalog-item">
            <span className="catalog-item__text">{title}</span>
            <Sprite yOffset={null} />
        </div>
        <ul ref={catalogItemsRef} className="catalog-items">
            {renderChildrens()}
        </ul>
    </li>
}