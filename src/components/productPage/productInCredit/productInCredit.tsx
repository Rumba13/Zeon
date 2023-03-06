import "./productInCredit.scss";

type PropsType = {
    monthCreditValue?: number
}

function formatCredit(monthCreditValue: number) {
    return `${monthCreditValue.toFixed(2)} руб/мес`;
}

export default function ProductInCredit({ monthCreditValue }: PropsType) {
    if (!monthCreditValue) return <></>;

    return <div className="product-in-credit">
        <span className="product-in-credit-text">
            В кредит от <a href="##" className="credit-text__link">{formatCredit(monthCreditValue)}</a>
        </span>
    </div>
}