import "./shoppingCart.scss";
import Sprite from "../../sprite/sprite";

export default function ShoppingCart() { 
    return <div className="shopping-cart product-action">
        <Sprite yOffset={-998} />
        <a href="##" className="product-action__text">Корзина</a>
        <span className="counter">{0}</span>
    </div>
}