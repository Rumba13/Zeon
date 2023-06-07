import "./styles.scss";
import { Sprite } from "../../../shared/ui/sprite";

export function ShoppingCart() { 
    return <a href="##" className="product-action cart">
        <Sprite yOffset={-998} />
        <span className="product-action__text">Корзина</span>
        <span className="product-action__counter">0</span>
    </a>
}