import BuyButton from "./buyButton/buyButton";
import { Link } from "react-router-dom";
import "./product.scss";

type PropsType = ProductType

export type ProductType = {
    title: string,
    previewSrc: string,
    price: number,
    id:number,
}


function formatPrice(price: number) {
    return price + " руб";
}

export default function Product({ title, previewSrc, price,id }: PropsType) {
    const href = `/product/${id}`

    return <div className="product-wrapper">
        <div className="product">
            <Link className="preview" to={href}>
                <img src={previewSrc} alt="" className="preview__image" />
            </Link>
            <Link className="product__title" to={href}>{title}</Link>
            <span className="product__price">{formatPrice(price)}</span>
            <span className="product__price-hint">*цена с клубной картой</span>

            <div className="buy-button-wrapper">
                <BuyButton href="##"/>
            </div>
        </div>
    </div>



}