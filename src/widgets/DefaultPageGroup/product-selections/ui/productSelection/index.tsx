import "./styles.scss";
import {ProductCategoryType} from "../../../../../shared/api/types/product-category-type";

type PropsType = ProductCategoryType;

export function ProductSelection({ href, img, title }: PropsType) {
    return <div className="product-selection">
        <a href={href} className="product-selection__title">{title}</a>
        <a href={href} className="product-selection-image">
            <img className="product-selection-image__image" src={img} alt="" />
        </a>
    </div>
}