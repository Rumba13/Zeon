import Sprite from "../../sprite/sprite";
import "./cart.scss";

export default function Cart() {
    return <div className="cart link-action">
        <Sprite yOffset={-998} />
        <a href="##" className="link-action__text">Корзина</a>
        <span className="counter">{0}</span>
    </div>
}