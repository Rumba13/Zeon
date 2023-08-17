import "./styles.scss";
import { MiniProductDto } from "../../../../pages/defaultPage/libs/dtos";
import { ProductImage } from "../../productImage";
import { ProductPrice } from "../../../productPrice";
import { ProductTitle } from "../../../productTitle";
import { ShadowOnHover } from "../../../../shared/ui//shadowOnHover";
import { ProductPriceHint } from "../../../productPriceHint";
import { AddProductToCart } from "../../../../features/ProductPageGroup/addProductToCart";

type PropsType = MiniProductDto;

export function ProductMini({ previewImg, discountPrice, id, manufacturer, type, batch }: PropsType) {
    const hrefToProduct = `/product/${id}`

    return <div className="product-mini-wrapper">
        <ShadowOnHover className="product-mini">
            <ProductImage href={hrefToProduct} img={previewImg} />
            <ProductTitle className="product-mini__title" href={hrefToProduct} batch={batch} manufacturer={manufacturer} type={type} />
            <ProductPrice className="product-mini__price" price={discountPrice} />
            <ProductPriceHint className="product-mini__price-hint" />
            <div className="product-mini__button-wrapper">
                <AddProductToCart className="product-mini__button" id={id} variant="mini" />
            </div>
        </ShadowOnHover>
    </div>
}