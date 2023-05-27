import "./product.scss";
import BuyButton from "../../features/buyButton/buyButton";
import { Link } from "react-router-dom";
import ProductPriceFormat from "../../components/productPriceFormat/productPriceFormat";
import { ProductType } from "../../components/productSelectionPage/products/productsItem/productsItem";
import ShadowOnHover from "../../components/shadowOnHover/shadowOnHover";
import ProductMiniPreview from "../../entities/productMiniPreview/previewImage";
import { ProductDto } from "../../pages/productPage/libs/dtos";
import { MiniProductDto } from "../../pages/defaultPage/libs/dtos";

type PropsType = MiniProductDto;



export default function ProductMini({ previewImg, discountPrice, id, manufacturer, type, batch }: PropsType) {
    const href = `/product/${id}`

    return <div className="product-mini-wrapper">
        <ShadowOnHover className="product-mini">
            <ProductMiniPreview href={href} img={previewImg} />
            <Link className="product-mini__title" to={href}>{manufacturer}{type}{batch}</Link> {/* shared entities */}
            <span className="product-mini__price"> {/* entities */}
                <ProductPriceFormat>{discountPrice}</ProductPriceFormat>
            </span>
            <span className="product-mini__price-hint">*цена с клубной картой</span>
            <BuyButton productId={id} />
        </ShadowOnHover>
    </div>
}