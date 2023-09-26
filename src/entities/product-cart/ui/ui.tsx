import "./styles.scss";
import { Sprite } from "../../../shared/ui/sprite/ui";
import { observer } from "mobx-react";
import { useStore } from "../../../shared/lib/hooks";

export const ShoppingCart = observer(() => {
    const shoppingCart = useStore(state => state.shoppingCart);
    


    return <a href="##" className="product-action cart"> 
        <Sprite yOffset={-998} />
        <span className="product-action__text">Корзина</span>
        <span className="product-action__counter">{shoppingCart.productsCount}</span>
    </a>
})