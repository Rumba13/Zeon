import "./styles.scss";
import { Sprite } from "../../../shared/ui//sprite";

export function ShoppingCart() { //TODO separate abstracte classNames
    return <a href="##" className="cart product-action">
        <Sprite yOffset={-998} />
        <span className="product-action__text">Корзина</span>
        <span className="counter">{0}</span>
    </a>
}