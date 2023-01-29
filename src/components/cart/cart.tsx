import Counter from "../counter/counter";
import Icon from "../icon/icon";
import "./cart.css";

export default function Cart() {
    return <div className="cart">
        <Icon sprite={{ xOffset: 0, yOffset: -998 }} />
        <span className="cart__text">Корзина</span>
        <Counter count={0} />
    </div>
}