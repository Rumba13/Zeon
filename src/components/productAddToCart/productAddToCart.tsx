import Button from "../button/button";
import Sprite from "../sprite/sprite";
import "./productAddToCart.scss";

export default function ProductAddToCart() {
    return <Button className="cart-button">
        <Sprite yOffset={-876}/>
        <span className="cart-button__text">Добавить товар в корзину</span>
    </Button>
}