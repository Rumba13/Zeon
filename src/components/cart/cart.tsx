import Counter from "../counter/counter";
import "./cart.css";

export default function Cart() {
    return <div className="cart">
        <span className="cart__text">В корзине</span>
        <Counter count={0} />
    </div>
}