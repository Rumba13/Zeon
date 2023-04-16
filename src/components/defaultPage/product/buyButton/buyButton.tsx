import Sprite from "../../../sprite/sprite";
import "./buyButton.scss";

type PropsType = {
    href?: string
}

export default function BuyButton({ href }: PropsType) {
    return <a href={href} className="buy-button">
        <Sprite yOffset={-876}/>
        <span className="buy-button__text">Купить</span>
    </a>
}