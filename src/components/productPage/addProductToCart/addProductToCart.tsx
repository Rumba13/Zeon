import AbstractAddProductToCart from "../../abstractAddProductToCart/abstractAddProductToCart";
import Sprite from "../../sprite/sprite";
import "./addProductToCart.scss";

type PropsType = {
    id: number
}

export default function ProductPageAddProductToCart({ id }: PropsType) {
    return <AbstractAddProductToCart id={id}>
        <Sprite yOffset={-876} />
        <span className="cart-button__text">Добавить товар в корзину</span>
    </AbstractAddProductToCart>
}