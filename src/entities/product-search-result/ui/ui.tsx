import "./styles.scss";
import {AddProductToCart} from "../../../features/product/add-to-cart";
import {AddProductToComparison} from "../../../features/product/add-to-comparison";
import {ShadowOnHover} from "../../../shared/ui/shadow-on-hover";
import {ProductImage} from "../../product/product-image";
import {ProductPrice} from "../../product/product-price";
import {ProductPriceHint} from "../../product/product-price-hint";
import {ProductTitle} from "../../product/product-title";
import {Characteristics} from "../../product/characteristics";
import {DeliveryDate} from "../../product/delivery-date";
import {useEffect, useState} from "react";
import {ProductSearchResultType} from "../../../shared/api/types/product-search-result-type";
import {ProductIdType} from "../../../shared/api/types/product-id-type";

export type PropsType = {
    productId: ProductIdType,
    loadProduct: (productId: ProductIdType) => Promise<ProductSearchResultType>
};

export type ProductCharacteristicsType = Object;

export function ProductSearchResult({productId, loadProduct}: PropsType) {
    const [product, setProduct] = useState<ProductSearchResultType | undefined>();

    useEffect(() => {
        loadProduct(productId).then((product) => {
            product.deliveryDate = new Date(product.deliveryDate);

            setProduct(product);
        });
    }, [setProduct, productId]);

    if (product === undefined) {
        return <></>;
    }

    const {
        batch, characteristics, deliveryDate, discountPrice, id,
        manufacturer, previewImage, price, type
    } = product;

    return <ShadowOnHover className="product">
        <ProductImage img={previewImage} href={`product/${id}`}/>

        <div className="product-information">
            <ProductTitle className="product-information__title" batch={batch} manufacturer={manufacturer} type={type}/>
            <DeliveryDate date={deliveryDate}/>
            <span className="product-information__code"> Код товара: {id}</span>
            <Characteristics characteristics={characteristics}/>
        </div>

        <div className="product-price">
            <ProductPrice className="product-price__price" price={price}/>
            <ProductPrice className="product-price__discount-price" price={discountPrice}/>
            <ProductPriceHint/>
            <AddProductToCart variant="mini" id={id}/>
            <AddProductToComparison variant="mini" id={id}/>
        </div>
    </ShadowOnHover>
}