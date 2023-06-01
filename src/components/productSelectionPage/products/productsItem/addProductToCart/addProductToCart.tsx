import "./addProductToCart.scss";
import { PrimaryProductButton } from "../../../../../shared/primaryProductButton";
import { Sprite } from "../../../../../shared/sprite";

type PropsType = {
    id:number,
}

export default function ProductItemAddProductToCart({id}:PropsType) {
    return <PrimaryProductButton>
        <Sprite yOffset={-876}/>
        <span className="cart-button__text">Купить</span>
    </PrimaryProductButton>
}