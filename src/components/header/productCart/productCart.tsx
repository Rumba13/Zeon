import Sprite from "../../sprite/sprite";
import "./productCart.scss";

export default function ProductCart() {
    return <div className="cart link-action">
        <Sprite yOffset={-998} />
        <a href="##" className="link-action__text">Корзина</a>
        <span className="counter">{0}</span>
    </div>
}