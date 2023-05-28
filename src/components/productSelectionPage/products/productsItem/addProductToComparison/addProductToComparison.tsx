import "./addProductToComparison.scss";
import ProductAddToComparison from "../../../../abstractAddProductToComparison/abstractAddProductToComparison";
import Sprite from "../../../../sprite/sprite";
type PropsType = {
    id: number
}

export default function ProductItemAddProductToComparison({ id }: PropsType) {
    return <ProductAddToComparison id={id}>
        <Sprite yOffset={-124} />
        <span className="comparison-button__text">Сравнить</span>
    </ProductAddToComparison>
}