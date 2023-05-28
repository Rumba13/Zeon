import { PrimaryProductButton } from "../../../../../shared/primaryProductButton";
import Sprite from "../../../../sprite/sprite";
import "./addProductToCart.scss";

type PropsType = {
    id:number,
}

export default function ProductItemAddProductToCart({id}:PropsType) {
    return <PrimaryProductButton>
        <Sprite yOffset={-876}/>
        <span className="cart-button__text">Купить</span>
    </PrimaryProductButton>
}