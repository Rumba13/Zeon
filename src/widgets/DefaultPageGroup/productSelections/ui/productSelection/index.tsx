import "./styles.scss";
import { ProductSelectionDto } from "../../../../../pages/defaultPage/libs/dtos";

type PropsType = ProductSelectionDto;

export function ProductSelection({ href, img, title }: PropsType) {
    return <div className="product-selection">
        <a href={href} className="product-selection__title">{title}</a>
        <a href={href} className="product-selection-image">
            <img className="product-selection-image__image" src={img} alt="" />
        </a>
    </div>
}