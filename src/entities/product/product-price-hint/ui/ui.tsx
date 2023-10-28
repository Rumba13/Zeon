import "./styles.scss";

type PropsType = {
    className?: string
}

export function ProductPriceHint({className}: PropsType) {
    return <span className={`product-price__hint ${className ?? ""}`}>*цена с клубной картой</span>
}