import "./product.scss";
import BuyButton from "./buyButton/buyButton";
import { Link } from "react-router-dom";
import { ProductType } from "../../productSelectionPage/products/productsItem/productsItem";
import ProductPriceFormat from "../../productPriceFormat/productPriceFormat";
import ShadowOnHover from "../../shadowOnHover/shadowOnHover";

type PropsType = ProductType

export default function ProductPreview({ previewImage, price, code: id, manufacturer, type, batchNumber }: PropsType) {
    const href = `/product/${id}`

    return <div className="product-preview-wrapper">
        <ShadowOnHover className="product-preview">
            <Link className="preview" to={href}>
                <img src={previewImage} alt="" className="preview__image" />
            </Link>
            <Link className="product-preview__title" to={href}>{manufacturer}{type}{batchNumber}</Link>
            <span className="product-preview__price">
                <ProductPriceFormat>{price}</ProductPriceFormat>
            </span>
            <span className="product-preview__price-hint">*цена с клубной картой</span>

            <div className="buy-button-wrapper">
                <BuyButton href="##" />
            </div>
        </ShadowOnHover>
    </div>
}