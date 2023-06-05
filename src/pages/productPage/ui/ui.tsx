import "./styles.scss";
import { useParams } from "react-router-dom";
import { setProductPageId, getProductByIdThunk } from "../model/model";
import { ProductTitle } from "../../../entities/productTitle";
import { Loading } from "../../../shared/ui/loading";
import { useEffect } from "react";
import { Rating } from "../../../features/rating";
import { useAppSelector, useAppDispatch } from "../../../shared/lib/hooks";
import { Delivery } from "../../../entities/ProductPageGroup/delivery";
import { MainProductSlider } from "../../../entities/ProductPageGroup/mainProductSlider";
import { ManufacturerInfo } from "../../../entities/ProductPageGroup/manufacturerInfo";
import { DiscountOffer } from "../../../entities/ProductPageGroup/productCartOffer";
import { ProductImporter } from "../../../entities/ProductPageGroup/productImporter";
import { ProductOnCredit } from "../../../entities/ProductPageGroup/productOnCredit";
import { ProductPrices } from "../../../entities/ProductPageGroup/productPrices";
import { ProductTabs } from "../../../entities/ProductPageGroup/productTabs";
import { SubProductSlider } from "../../../entities/ProductPageGroup/subProductSlider";
import { AddProductToCart } from "../../../features/ProductPageGroup/addProductToCart";
import { AddProductToComparison } from "../../../features/ProductPageGroup/addProductToComparison";

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
                <ProductOnCredit creditPricePerMonth={product.creditPricePerMonth} />
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