import "./styles.scss";
import { ProductPrice } from "../../../../../../../entities/productPrice";
import { SelectionProductDto } from "../../../../../../../pages/productSelectionPage/lib/dtos";
import { ShadowOnHover } from "../../../../../../../shared/ui/shadowOnHover";
import { Characteristics } from "../characteristics";
import { DeliveryDate } from "../deliveryDate";
import { AddProductToCart } from "../addProductToCart";

export type ProductType = SelectionProductDto

export type ProductCharacteristicsType = Object

export function ProductItem({ type, manufacturer, batch, code, characteristics, discountPrice, price,previewImage , deliveryDate }: ProductType) {

    return <ShadowOnHover className="product">
        <a href={`product/${code}`} className="product-preview-wrapper">
            <img className="product__preview" src={previewImage} alt="" />
        </a>
        <div className="product-information">
            <span className="product-information__title">{type} {manufacturer} {batch}</span>
            <DeliveryDate date={deliveryDate} />
            <span className="product-information__code"> Код товара: {code}</span>
            <Characteristics characteristics={characteristics} />
        </div>
        <div className="product-price">
            <ProductPrice className="product-price__price" price={price} />
            {/* TODO refuck, add DTOs */}
            <ProductPrice className="product-price__discount-price" price={discountPrice ?? 0} />


            <span className="product-price__hint">*цена с клубной картой</span>
            <AddProductToCart id={code} />
            {/* <AddProductToComparison id={code} /> */}
        </div>
    </ShadowOnHover>
}