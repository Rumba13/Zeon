import BuyButton from "../buyButton/buyButton";
import "./product.scss";

type PropsType = {
    title: string,
    href: string,
    previewSrc: string,
    price: number
}

export type ProductType = {
    title: string,
    href: string,
    previewSrc: string,
    price: number
}


function formatPrice(price: number) {
    return price + " руб";
}

export default function Product({ title, previewSrc, href, price }: PropsType) {
    return <div className="product-wrapper">
        <div className="product">
            <a href={href} className="preview">
                <img src={previewSrc} alt="" className="preview__image" />
            </a>

            <h2 className="product__title">{title}</h2>
            <span className="product__price">{formatPrice(price)}</span>
            <span className="product__price-hint">*цена с клубной картой</span>

            <div className="buy-button-wrapper">
                <BuyButton />
            </div>
        </div>
    </div>



}