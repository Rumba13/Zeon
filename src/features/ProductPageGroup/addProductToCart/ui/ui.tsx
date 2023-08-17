import "./styles.scss";
import { PrimaryProductButton } from "../../../../shared/ui//primaryProductButton";
import { Sprite } from "../../../../shared/ui//sprite";
import { useStore } from "../../../../shared/lib/hooks";
import { observer } from "mobx-react";

type PropsType = {
    id: number,
    variant: VariantType,
    className?: string
}

type VariantType = "mini" | "full";

export const AddProductToCart = observer(({ variant, id, className }: PropsType) => {
    const addProductToCart = useStore(state => state.shoppingCart.addProduct);

    if (variant === "mini") {
        return <PrimaryProductButton className={className} onClick={() => addProductToCart(id)}>
            <Sprite yOffset={-876} />
            <span className="cart-button__text">Купить</span>
        </PrimaryProductButton>
    }
    else {
        return <PrimaryProductButton className={className} onClick={() => addProductToCart(id)}>
            <Sprite yOffset={-876} />
            <span className="cart-button__text">Добавить товар в корзину</span>
        </PrimaryProductButton>
    }
})