import "./styles.scss";
import { ShadowOnHover } from "../../../../shared/ui/shadowOnHover";
import { ProductPrice } from "../../../productPrice";
import { Characteristics } from "../../characteristics";
import { DeliveryDate } from "../../deliveryDate";
import { SearchProductDto } from "../../../../pages/searchPage/lib/dtos";
import { AddProductToCart } from "../../../../features/ProductPageGroup/addProductToCart";
import { ProductTitle } from "../../../productTitle";
import { ProductPriceHint } from "../../../productPriceHint";
import { AddProductToComparison } from "../../../../features/ProductPageGroup/addProductToComparison";
import { ProductImage } from "../../../DefaultPageGroup/productImage";
import { useEffect, useState } from "react";

export type PropsType = {
    productId: string,
    loadProduct: (productId: string) => Promise<SearchProductDto>
};

export type ProductCharacteristicsType = Object;

export function ProductSearchResult({ productId, loadProduct }: PropsType) {
    const [product, setProduct] = useState<SearchProductDto | undefined>();

    useEffect(() => {
        loadProduct(productId).then((product) => {
            product.deliveryDate = new Date(product.deliveryDate);

            setProduct(product);
        });
    }, [setProduct, productId])

    if (product === undefined) {
        return <></>;
    }

    const { batch, characteristics, deliveryDate, discountPrice, id, manufacturer, previewImage, price, type } = product;

    return <ShadowOnHover className="product">
        <ProductImage img={previewImage} href={`product/${id}`} />

        <div className="product-information">
            <ProductTitle className="product-information__title" batch={batch} manufacturer={manufacturer} type={type} />
            <DeliveryDate date={deliveryDate} />
            <span className="product-information__code"> Код товара: {id}</span>
            <Characteristics characteristics={characteristics} />
        </div>

        <div className="product-price">
            <ProductPrice className="product-price__price" price={price} />
            <ProductPrice className="product-price__discount-price" price={discountPrice} />
            <ProductPriceHint />
            <AddProductToCart variant="mini" id={id} />
            <AddProductToComparison variant="mini" id={id} />
        </div>
    </ShadowOnHover>
}