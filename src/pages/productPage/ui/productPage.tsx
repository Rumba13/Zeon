import "./productPage.scss";
import MainProductSlider from "./mainProductSlider/mainProductSlider";
import ManufacturerInfo from "./manufacturerInfo/manufacturerInfo"
import Delivery from "./delivery/delivery";
import SubProductSlider from "./subProductSlider/subProductSlider";
import ProductTabs from "./productTabs/productTabs";
import ProductImporter from "./productImporter/productImporter";
import ProductOnCredit from "./productOnCredit/productInCredit";
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
import { Rating } from "../../../features/productPage/rating";


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
            <div className="product-sliders">{/* widget */}
                <MainProductSlider sliderItems={product.photos} />   {/* entities */}
                <SubProductSlider sliderItems={product.photos} />   {/* entities */}
            </div>
            <div className="product-information"> {/* widget */}
                <ProductTitle className="product-title__title" batch={product.batch} type={product.type} manufacturer={product.manufacturer} />
                <ManufacturerInfo manufacturer={product.manufacturer} batch={product.batch} guaranteeMonths={product.guaranteeMonths} />{/* entities */}
                <Rating /> {/* feature */}
                <Delivery />{/* entities */}
                <ProductOnCredit monthCreditValue={product.creditPriceInMonth} />{/* entities */}
                <ProductPrices price={product.price} discountPrice={product.discountPrice} />
                <DiscountOffer />
                <AddProductToCart id={product.id} />
                <AddProductToComparison id={product.id} />
            </div>

            <ProductTabs />{/* entities */}
            <ProductImporter /> {/* entities */}
        </div>
    }
}