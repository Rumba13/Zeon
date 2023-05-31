import "./addProductToCart.scss";
import { Sprite } from "../../../../../entities/sprite";
import { PrimaryProductButton } from "../../../../../shared/primaryProductButton";

type PropsType = {
    id:number,
}

export default function ProductItemAddProductToCart({id}:PropsType) {
    return <PrimaryProductButton>
        <Sprite yOffset={-876}/>
        <span className="cart-button__text">Купить</span>
    </PrimaryProductButton>
}