import "./productPrices.scss";

type PropsType = {
    cartPrice: number,
    price: number
}

function formatPrice(rawPrice: number) {
    return `${rawPrice.toFixed(2)} руб`
}

export default function ProductPrices({ cartPrice, price }: PropsType) {
    return <div className="product-prices">
        <div className="product-price price-with-cart">
            <span className="product-price__title">С клубной картой</span>
            <span className="product-price__price">{formatPrice(cartPrice)}</span>
        </div>
        <div className="product-price price">
            <span className="product-price__title">Без клубной карты</span>
            <span className="product-price__price">{formatPrice(price)}</span>
        </div>
    </div>
}