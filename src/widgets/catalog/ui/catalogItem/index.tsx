import "./styles.scss";
import { ReactNode, useRef } from "react";
import { useCatalog } from "../../lib/useCatalog";
import { Sprite } from "../../../../shared/ui/sprite/ui";

type PropsType = {
    children: ReactNode | ReactNode[]
}

export function CatalogItem({ children }: PropsType) {
    const catalogItemsRef = useRef(null);
    const { catalogLiClickHandler, renderChildrens, title } = useCatalog(catalogItemsRef, children);
    //@ts-ignore
    return <li onClick={catalogLiClickHandler} className="catalog-item-wrapper">
        <div className="catalog-item">
            <span className="catalog-item__text">{title}</span>
            <Sprite yOffset={null} />
        </div>
        <ul ref={catalogItemsRef} className="catalog-items">
            {renderChildrens()}
        </ul>
    </li>
}