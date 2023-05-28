import Sprite from "../../sprite/sprite";
import "./productCart.scss";

export default function ProductCart() {
    return <a href="##" className="cart product-action">
        <Sprite yOffset={-998} />
        <span className="product-action__text">
            Корзина
        </span>
        <span className="counter">{0}</span>
    </a>
}