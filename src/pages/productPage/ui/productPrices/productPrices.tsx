import ProductPriceFormat from "../../../../components/productPriceFormat/productPriceFormat";
import "./productPrices.scss";

type PropsType = {
    cartPrice: number,
    price: number
}

export default function ProductPrices({ cartPrice, price }: PropsType) {
    return <div className="product-prices">
        <div className="product-price price-with-cart">
            <span className="product-price__title">С клубной картой</span>
            <span className="product-price__price">
                {/* TODO use new ProductPriceComp */}
                <ProductPriceFormat>{cartPrice}</ProductPriceFormat>
            </span>
        </div>
        <div className="product-price price">
            <span className="product-price__title">Без клубной карты</span>
            <span className="product-price__price">
                <ProductPriceFormat>{price}</ProductPriceFormat>
            </span>
        </div>
    </div>
}