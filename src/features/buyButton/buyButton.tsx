import Sprite from "../../components/sprite/sprite";
import "./buyButton.scss";

type PropsType = {
    productId: number
}

export default function BuyButton({ productId }: PropsType) {
    return <div className="buy-button-wrapper">
        <a href="##" className="buy-button">
            <Sprite yOffset={-876} />
            <span className="buy-button__text">Купить</span>
        </a>
    </div>
}