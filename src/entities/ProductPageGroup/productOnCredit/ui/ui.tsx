import { formatCredit } from "./formatCredit";
import "./styles.scss";

type PropsType = {
    creditPricePerMonth?: number
}

export function ProductOnCredit({ creditPricePerMonth }: PropsType) {
    if (!creditPricePerMonth) return <></>;

    return <div className="product-in-credit">
        <span className="product-in-credit-text">
            В кредит от <a href="##" className="credit-text__link">{formatCredit(creditPricePerMonth)}</a>
        </span>
    </div>
}