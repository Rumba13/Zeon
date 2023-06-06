import "./styles.scss";
import { ProductPrice } from "../../../productPrice";

type PropsType = {
    discountPrice: number,
    price: number
}

export function ProductPrices({ discountPrice, price }: PropsType) {
    return <div className="product-prices">
        <div className="product-price price-with-cart">
            <span className="product-price__title">С клубной картой</span>
            <ProductPrice className="product-price__price" price={discountPrice}/>
        </div>
        <div className="product-price price">
            <span className="product-price__title">Без клубной карты</span>
            <ProductPrice className="product-price__price" price={price}/>
        </div>
    </div>
}