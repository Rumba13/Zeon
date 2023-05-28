import ProductPriceFormat from "../productPriceFormat/productPriceFormat";
import "./productPrice.scss";

type PropsType = {
    price: number,
    className?:string
}

export default function ProductPrice({price,className}:PropsType) {
    return <span className={className ?? ""}>
        <ProductPriceFormat>{price}</ProductPriceFormat>
    </span>
}