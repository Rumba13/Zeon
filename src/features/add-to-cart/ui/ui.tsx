import "./styles.scss";
import {Sprite} from "../../../shared/ui/sprite/ui";
import {observer} from "mobx-react";
import {PrimaryButton} from "../../../shared/ui/primary-button";
import {addProductToCart} from "../model/add-product-to-cart";

type PropsType = {
    id: number,
    variant: VariantType,
    className?: string
}

type VariantType = "mini" | "full";

export const AddProductToCart = observer(({variant, id, className}: PropsType) => {

    if (variant === "mini") {
        return <PrimaryButton className={className} onClick={() => addProductToCart(id)}>
            <Sprite yOffset={-876}/>
            <span className="cart-button__text">Купить</span>
        </PrimaryButton>
    } else {
        return <PrimaryButton className={className} onClick={() => addProductToCart(id)}>
            <Sprite yOffset={-876}/>
            <span className="cart-button__text">Добавить товар в корзину</span>
        </PrimaryButton>
    }
})