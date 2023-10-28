import "./styles.scss";
import {Sprite} from "../../../shared/ui/sprite/ui";
import {observer} from "mobx-react";
import {shoppingCartState} from "../model";
export const ShoppingCart = observer(() => {

    return <a href="##" className="product-action cart">
        <Sprite yOffset={-998}/>
        <span className="product-action__text">Корзина</span>
        <span className="product-action__counter">{shoppingCartState.productsCount}</span>
    </a>
})