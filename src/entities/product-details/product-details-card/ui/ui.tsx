import "./styles.scss";
import {MainProductSlider} from "../../main-slider";
import {SubProductSlider} from "../../sub-slider";
import {ProductTitle} from "../../../product/product-title";
import {ManufacturerInfo} from "../../manufacturer-info";
import {Rating} from "../../../rating";
import {Delivery} from "../../delivery";
import {ProductOnCredit} from "../../product-on-credit";
import {DiscountOffer} from "../../cart-offer";
import {AddProductToCart} from "../../../../features/product/add-to-cart";
import {AddProductToComparison} from "../../../../features/product/add-to-comparison";
import {ProductTabs} from "../../tabs";
import {ProductImporter} from "../../importer";
import {ProductIdType} from "../../../../shared/api/types/product-id-type";
import {useStore} from "../../../../shared/lib/hooks";
import {useEffect, useState} from "react";
import Loading from "../../../../shared/ui/loading/ui";
import {observer} from "mobx-react";
import {ProductPageStoreType} from "../model/model";
import {Swiper} from "swiper";
import {ProductPrice} from "../../../product/product-price";

type PropsType = {
    productId: ProductIdType
}

export const ProductDetailsCard = observer(({productId}: PropsType) => {
    const state = useStore<ProductPageStoreType>(state => state.productPage)
    const {product} = state;

    const [subSlider, setSubSlider] = useState<Swiper>();
    const [mainSlider, setMainSlider] = useState<Swiper>();

    useEffect(() => {
        productId && state.loadProduct(+productId);
    }, [state, productId]);

    if (!productId) {
        throw new Error("product id isn't provided")
    }

    if (!product) {
        return <Loading/>
    }

    return <>
        <div className="product-sliders">{/* app-layout */}
            <MainProductSlider subSlider={subSlider} setMainSlider={setMainSlider} items={product.photos}/>
            <SubProductSlider mainSlider={mainSlider} setSubSlider={setSubSlider} items={product.photos}/>
        </div>
        <div className="product-information"> {/* app-layout */}
            <ProductTitle className="product-title__title" batch={product.batch} type={product.type}
                          manufacturer={product.manufacturer}/>
            <ManufacturerInfo manufacturer={product.manufacturer} batch={product.batch}
                              guaranteeMonths={product.guaranteeMonths}/>
            <Rating rating={product.rating} setRating={state.setRating}/>
            <Delivery/>
            <ProductOnCredit creditPricePerMonth={product.creditPricePerMonth}/>

            <div className="product-prices">
                <div className="product-price price-with-cart">
                    <span className="product-price__title">С клубной картой</span>
                    <ProductPrice className="product-price__price" price={product.discountPrice}/>
                </div>
                <div className="product-price price">
                    <span className="product-price__title">Без клубной карты</span>
                    <ProductPrice className="product-price__price" price={product.price}/>
                </div>
            </div>

            <DiscountOffer/>
            <AddProductToCart variant="full" id={product.id}/>
            <AddProductToComparison variant="full" id={product.id}/>
        </div>
        <ProductTabs/>
        <ProductImporter/>
    </>

})