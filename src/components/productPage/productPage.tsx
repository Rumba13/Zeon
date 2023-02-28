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
import ProductTabs from "../productTabs/productTabs";
import sliderImage1 from "../../images/sliderImage1.jpg"
import sliderImage2 from "../../images/sliderImage2.jpg"
import sliderImage3 from "../../images/sliderImage3.jpg"
import sliderImage4 from "../../images/sliderImage4.jpg"
import UnavailableToOrder from "../unavailableToOrder/unavailableToOrder";
import ProductImporter from "../productImporter/productImporter";
import { ICONS } from "../../images/images";

const sliderItems = [ICONS.slider1, ICONS.slider2, ICONS.slider3, ICONS.slider4]

const testImporterText = "Импортер на территорию Республики Беларусь: ООО «Зеон плюс», Республика Беларусь, Гомель, ул. Советская 39, оф. 14; ооо «успех про» 220100 рб г. минск ул. богдановича 143"

export default function ProductPage() {
    return <div className="product-page">
        <div className="product-sliders">
            <MainProductSlider />
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