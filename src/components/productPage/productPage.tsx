import MainProductSlider from "../mainProductSlider/mainProductSlider";
import ProductTitle from "../productTitle/productTitle";
import "./productPage.scss";
import ManufacturerInfo from "../manufacturerInfo/manufacturerInfo" 
import Rating from "../rating/rating";
import Delivery from "../delivery/delivery";
import ProductInCredit from "../productInCredit/productInCredit";
import ProductPrices from "../productPrices/productPrices";
import ProductCartOffer from "../productCartOffer/productCartOffer";
import ProductAddToCart from "../productAddToCart/productAddToCart";
import ProductAddToComparison from "../productAddToComparison/productAddToComparison";
import SubProductSlider from "../subProductSlider/subProductSlider";

export default function ProductPage() {
    return <div className="product-page">
        <div className="product-sliders">
        <MainProductSlider/>
        <SubProductSlider/>
        </div>
        <div className="product-information">
            <ProductTitle title={"lersion"} code={12}/>
            <ManufacturerInfo manufacturer="gayPornProduction" batchNumber="1231321" guaranteeInMonths={-1}/>
            <Rating/>
            <Delivery/>
            <ProductInCredit monthCreditValue={15.50}/>
            <ProductPrices price={20.10} cartPrice={19.50}/>
            <ProductCartOffer/>
            <ProductAddToCart/>
            <ProductAddToComparison/>
        </div>
    </div>
}