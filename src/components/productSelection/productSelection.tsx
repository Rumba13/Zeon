import { ProductSelectionDto } from "../../pages/defaultPage/libs/dtos";
import "./productSelection.scss";

type PropsType = ProductSelectionDto;

export default function ProductSelection({ href, img, title }: PropsType) {
    // TODO refactoring
    return <div className="product-selection">
        <a href={href} className="product-selection__title">{title}</a>
        <a href={href} className="product-selection-image-wrapper">
            <img className="image-wrapper__image" src={img} alt="" />
        </a>
    </div>
}