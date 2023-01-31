import Counter from "../counter/counter";
import Sprite from "../sprite/sprite";
import "./cart.css";

export default function Cart() {
    return <div className="cart">
        <Sprite yOffset={-998} />
        <span className="cart__text">Корзина</span>
        <Counter count={0} />
    </div>
}