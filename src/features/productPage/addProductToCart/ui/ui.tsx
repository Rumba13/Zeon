import "./styles.scss";
import { PrimaryProductButton } from "../../../../shared/primaryProductButton";
import { Sprite } from "../../../../shared/sprite";

type PropsType = {
    id: number
}

export function AddProductToCart({ id }: PropsType) {
    return <PrimaryProductButton >
        <Sprite yOffset={-876} />
        <span className="cart-button__text">Добавить товар в корзину</span>
    </PrimaryProductButton>
}