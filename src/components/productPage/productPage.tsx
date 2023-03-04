import "./productPage.scss";
import MainProductSlider from "../sliders/mainProductSlider/mainProductSlider";
import ProductTitle from "../productTitle/productTitle";
import ManufacturerInfo from "../manufacturerInfo/manufacturerInfo"
import Rating from "../rating/rating";
import Delivery from "../delivery/delivery";
import ProductInCredit from "../productInCredit/productInCredit";
import ProductPrices from "../productPrices/productPrices";
import ProductCartOffer from "../productCartOffer/productCartOffer";
import ProductAddToCart from "../productAddToCart/productAddToCart";
import ProductAddToComparison from "../productAddToComparison/productAddToComparison";
import SubProductSlider from "../sliders/subProductSlider/subProductSlider";
import ProductTabs from "../productTabs/productTabs";
import ProductImporter from "../productImporter/productImporter";
import { ICONS } from "../../images/images";

const sliderItems = [ICONS.slider1, ICONS.slider2, ICONS.slider3, ICONS.slider4]

const testImporterText = "Импортер на территорию Республики Беларусь: ООО «Зеон плюс», Республика Беларусь, Гомель, ул. Советская 39, оф. 14; ооо «успех про» 220100 рб г. минск ул. богдановича 143"

export default function ProductPage() {
    return <div className="product-page">
        <div className="product-sliders">
            <MainProductSlider sliderItems={sliderItems}/>
            <SubProductSlider sliderItems={sliderItems} />
        </div>
        <div className="product-information">
            <ProductTitle title={"lersion"} code={12} />
            <ManufacturerInfo manufacturer="gayPornProduction" batchNumber="1231321" guaranteeInMonths={-1} />
            <Rating />
            <Delivery />
            <ProductInCredit monthCreditValue={15.50} />
            <ProductPrices price={20.10} cartPrice={19.50} />
            <ProductCartOffer />
            <ProductAddToCart />
            <ProductAddToComparison />
        </div>
        <ProductTabs />
        <ProductImporter text={testImporterText} />
    </div>
}