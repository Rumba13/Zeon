import "./styles.scss";
import { Sprite } from "../../../../shared/ui/sprite";
import { useStore } from "../../../../shared/lib/hooks";
import { observer } from "mobx-react";
import { PrimaryButton } from "../../../../shared/ui/primary-button";

type PropsType = {
    id: number,
    variant: VariantType,
    className?: string
}

type VariantType = "mini" | "full";

export const AddProductToCart = observer(({ variant, id, className }: PropsType) => {
    const addProductToCart = useStore(state => state.shoppingCart.addProduct);

    if (variant === "mini") {
        return <PrimaryButton className={className} onClick={() => addProductToCart(id)}>
            <Sprite yOffset={-876} />
            <span className="cart-button__text">Купить</span>
        </PrimaryButton>
    }
    else {
        return <PrimaryButton className={className} onClick={() => addProductToCart(id)}>
            <Sprite yOffset={-876} />
            <span className="cart-button__text">Добавить товар в корзину</span>
        </PrimaryButton>
    }
})