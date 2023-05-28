import "./productPage.scss";
import MainProductSlider from "./mainProductSlider/mainProductSlider";
import ManufacturerInfo from "./manufacturerInfo/manufacturerInfo"
import Rating from "./rating/rating";
import Delivery from "./delivery/delivery";
import ProductPrices from "./productPrices/productPrices";
import ProductCartOffer from "./productCartOffer/productCartOffer";
import SubProductSlider from "./subProductSlider/subProductSlider";
import ProductTabs from "./productTabs/productTabs";
import ProductImporter from "./productImporter/productImporter";
import ProductOnCredit from "./productOnCredit/productInCredit";
import AddProductToCart from "./addProductToCart/addProductToCart";
import AddProductToComparison from "./addProductToComparison/addProductToComparison";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../shared/hooks";
import { LoadingStatus } from "../../../shared/loadingStatus";
import { ProductPageState, setProductPageId, getProductByIdThunk } from "../model/model";
import { ProductTitle } from "../../../entities/productTitle";
import { Loading } from "../../../shared/loading";
import { useEffect } from "react";


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
            <div className="product-sliders">
                <MainProductSlider sliderItems={product.photos} />
                <SubProductSlider sliderItems={product.photos} />
            </div>
            <div className="product-information">
                <ProductTitle className="product-title__title" batch={product.batch} type={product.type} manufacturer={product.manufacturer} />
                <ManufacturerInfo manufacturer={product.manufacturer} batch={product.batch} guaranteeMonths={product.guaranteeMonths} />
                <Rating />
                <Delivery />
                <ProductOnCredit monthCreditValue={product.creditPriceInMonth} />
                <ProductPrices price={product.price} cartPrice={product.discountPrice} />
                <ProductCartOffer />
                <AddProductToCart id={product.id} />
                <AddProductToComparison id={product.id} />
            </div>
            <ProductTabs />
            <ProductImporter />
        </div>
    }
}