import "./styles.scss";
import { PrimaryProductButton } from "../../../../shared/ui//primaryProductButton";
import { Sprite } from "../../../../shared/ui//sprite";

type PropsType = {
    id: number,
    variant: VariantType
}

type VariantType = "mini" | "full";

export function AddProductToCart({ variant, id }: PropsType) { //TODO Fullstate

    if (variant === "mini") {
        return <PrimaryProductButton >
            <Sprite yOffset={-876} />
            <span className="cart-button__text">Купить</span>
        </PrimaryProductButton>
    }
    else {
        return <PrimaryProductButton >
            <Sprite yOffset={-876} />
            <span className="cart-button__text">Добавить товар в корзину</span>
        </PrimaryProductButton>
    }
}