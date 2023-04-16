import AddProductToCart from "../../../../abstractAddProductToCart/abstractAddProductToCart";
import Sprite from "../../../../sprite/sprite";
import "./addProductToCart.scss";

type PropsType = {
    id:number,
}

export default function ProductItemAddProductToCart({id}:PropsType) {
    return <AddProductToCart id={id}>
        <Sprite yOffset={-876}/>
        <span className="cart-button__text">Купить</span>
    </AddProductToCart>
}