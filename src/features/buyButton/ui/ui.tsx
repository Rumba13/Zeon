import "./styles.scss";
import { Sprite } from "../../../shared/ui//sprite";

type PropsType = {
    productId: number
}

export function BuyButton({ productId }: PropsType) { //TODO remove and use instead addProductToCart 
    return <div className="buy-button-wrapper">
        <a href="##" className="buy-button">
            <Sprite yOffset={-876} />
            <span className="buy-button__text">Купить</span>
        </a>
    </div>
}