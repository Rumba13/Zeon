import "./productPage.scss";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../shared/hooks";
import { setProductPageId, getProductByIdThunk } from "../model/model";
import { ProductTitle } from "../../../entities/productTitle";
import { Loading } from "../../../shared/loading";
import { useEffect } from "react";
import { ProductPrices } from "../../../entities/productPage/productPrices";
import { DiscountOffer } from "../../../entities/productPage/productCartOffer";
import { AddProductToCart } from "../../../features/productPage/addProductToCart";
import { AddProductToComparison } from "../../../features/productPage/addProductToComparison";
import { MainProductSlider } from "../../../entities/productPage/mainProductSlider";
import { SubProductSlider } from "../../../entities/productPage/subProductSlider";
import { ManufacturerInfo } from "../../../entities/productPage/manufacturerInfo";
import { Delivery } from "../../../entities/productPage/delivery";
import { ProductOnCredit } from "../../../entities/productPage/productOnCredit";
import { Rating } from "../../../features/rating";
import { ProductImporter } from "../../../entities/productPage/productImporter";
import { ProductTabs } from "../../../entities/productPage/productTabs";


export function ProductPage() {
    const product = useAppSelector((state) => state.productPage.product);
    const productId = useAppSelector((state) => state.productPage.urlId);
    const dispatch = useAppDispatch();
    const { id: productIdFromUrl } = useParams();

    useEffect(() => {
        if (!productId) {
            dispatch(setProductPageId(Number(productIdFromUrl)))
        }
        else {
            dispatch(getProductByIdThunk(productId))
        }
    }, [dispatch, getProductByIdThunk, setProductPageId, productId, productIdFromUrl])


    if (!product) {
        return <Loading />
    }
    else {
        return <div className="product-page">
            <div className="product-sliders">{/* layout */}
                <MainProductSlider sliderItems={product.photos} />
                <SubProductSlider sliderItems={product.photos} />  
            </div>
            <div className="product-information"> {/* layout */}
                <ProductTitle className="product-title__title" batch={product.batch} type={product.type} manufacturer={product.manufacturer} />
                <ManufacturerInfo manufacturer={product.manufacturer} batch={product.batch} guaranteeMonths={product.guaranteeMonths} />
                <Rating /> 
                <Delivery />
                <ProductOnCredit monthCreditValue={product.creditPriceInMonth} />
                <ProductPrices price={product.price} discountPrice={product.discountPrice} />
                <DiscountOffer />
                <AddProductToCart id={product.id} />
                <AddProductToComparison id={product.id} />
            </div>

            <ProductTabs />
            <ProductImporter />
        </div>
    }
}