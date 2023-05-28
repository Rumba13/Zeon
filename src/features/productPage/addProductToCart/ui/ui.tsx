import "./styles.scss";
import Sprite from "../../../../components/sprite/sprite";
import { PrimaryProductButton } from "../../../../shared/primaryProductButton";

type PropsType = {
    id: number
}

export function AddProductToCart({ id }: PropsType) {
    return <PrimaryProductButton >
        <Sprite yOffset={-876} />
        <span className="cart-button__text">Добавить товар в корзину</span>
    </PrimaryProductButton>
}