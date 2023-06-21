import "./styles.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../../shared/lib/hooks";
import { Loading } from "../../../shared/ui/loading";
import { ProductTitle } from "../../../entities/productTitle";
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
import { Rating } from "../../../features/rating";
import { ProductPageStateType } from "../model/model";
import { observer } from "mobx-react";

export const ProductPage = observer(() => {
    const state = useStore<ProductPageStateType>(state => state.productPage)
    const { id: productId } = useParams();
    const { product } = state;
    
    useEffect(() => {
        productId && state.loadProduct(+productId)
    }, [state, productId])

    if (!product) {
        return <Loading />
    }

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
            <AddProductToCart variant="full" id={product.id} />
            <AddProductToComparison variant="full" id={product.id} />
        </div>
        <ProductTabs />
        <ProductImporter />
    </div>
})