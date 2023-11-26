import "./styles.scss";
import {AddProductToCart} from "../../../features/add-to-cart";
import {ShadowOnHover} from "../../../shared/ui/shadow-on-hover";
import {ProductPrice} from "../../product/product-price";
import {ProductPriceHint} from "../../product/product-price-hint";
import {ProductTitle} from "../../product/product-title";
import {ProductImage} from "../../product/product-image";
import {ProductMiniType} from "../../../shared/api/types/product-mini-type";

type PropsType = ProductMiniType;

export function ProductMini({previewImg, discountPrice, productId, manufacturer, type, batch}: PropsType) {
    const hrefToProduct = `/product/${productId}`;

    return <div className="product-mini-wrapper">
        <ShadowOnHover className="product-mini">
            <ProductImage href={hrefToProduct} img={previewImg}/>
            <ProductTitle className="product-mini__title" href={hrefToProduct} batch={batch} manufacturer={manufacturer}
                          type={type}/>
            <ProductPrice className="product-mini__price" price={discountPrice}/>
            <ProductPriceHint className="product-mini__price-hint"/>
            <div className="product-mini__button-wrapper">
                <AddProductToCart className="product-mini__button" id={productId} variant="mini"/>
            </div>
        </ShadowOnHover>
    </div>
}