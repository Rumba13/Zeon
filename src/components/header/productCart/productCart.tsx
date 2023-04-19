import Sprite from "../../sprite/sprite";
import "./productCart.scss";

export default function ProductCart() {
    return <a href="##" className="cart link-action">
        <Sprite yOffset={-998} />
        <span className="link-action__text">
            Корзина
        </span>
        <span className="counter">{0}</span>
    </a>
}