import "./product.scss";
import { MiniProductDto } from "../../../../pages/defaultPage/libs/dtos";
import { ProductMiniImg } from "../../productMiniImg";
import { BuyButton } from "../../../../features/buyButton";
import { ProductPrice } from "../../../productPrice";
import { ProductTitle } from "../../../productTitle";
import { ShadowOnHover } from "../../../../shared/shadowOnHover";

type PropsType = MiniProductDto;

export function ProductMini({ previewImg, discountPrice, id, manufacturer, type, batch }: PropsType) {
    const hrefToProduct = `/product/${id}`

    return <div className="product-mini-wrapper">
        <ShadowOnHover className="product-mini">
            <ProductMiniImg href={hrefToProduct} img={previewImg} />
            <ProductTitle className="product-mini__title" href={hrefToProduct} batch={batch} manufacturer={manufacturer} type={type}/>
            <ProductPrice className="product-mini__price" price={discountPrice} />
            <span className="product-mini__price-hint">*цена с клубной картой</span>
            <BuyButton productId={id} />
        </ShadowOnHover>
    </div>
}