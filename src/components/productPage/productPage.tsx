import "./productPage.scss";
import MainProductSlider from "./mainProductSlider/mainProductSlider";
import ProductTitle from "./productTitle/productTitle";
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
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { getProductByIdThunk, ProductPageState, setProductPageId } from "../../pages/productPage/index";
import { useParams } from "react-router-dom";
import { LoadingStatus } from "../../shared/loadingStatus";


export default function ProductPage() {
    const product = useAppSelector<ProductPageState>((state) => state.productPage);
    const dispatch = useAppDispatch();
    const { id: productIdFromUrl } = useParams();

    if (product.loadingStatus === LoadingStatus.loading) {
        if (!product.id) {
            dispatch(setProductPageId(Number(productIdFromUrl)))
        }
        else {
            dispatch(getProductByIdThunk(Number(product.id)))
        }

        return <span>Loading...</span>
    }
    else if (product.loadingStatus === LoadingStatus.idle) {
        return <div className="product-page">
            <div className="product-sliders">
                <MainProductSlider sliderItems={product.photos} />
                <SubProductSlider sliderItems={product.photos} />
            </div>
            <div className="product-information">
                <ProductTitle title={product.title} id={product.id} />  {/* TODO add to title manufacturer name and batch number */}
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
    else {
        return <span>Error</span>
    }
}