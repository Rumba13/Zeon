import "./defaultPage.scss";
import Banner from "../banner/banner";
import BannerSlider from "./bannerSlider/bannerSlider";
import ProductSelection from "../productSelection/productSelection";
import { ICONS } from "../../images/images";
import { ProductType } from "../productSelectionPage/products/productsItem/productsItem";
import Product from "./product/product";
import { DynamicAdaptive } from "../dynamicAdaptive/dynamicAdaptive";

const testProducts: ProductType[] = [
    { code: 1, previewImage: "https://clck.ru/33XVQd", price: 10000, type: "dakdjsid", batchNumber: " adsddada", manufacturer: "dasda" },
    { code: 1, previewImage: "https://clck.ru/33XVQd", price: 10000, type: "dakdjsid", batchNumber: " adsddada", manufacturer: "dasda" },
    { code: 1, previewImage: "https://clck.ru/33XVQd", price: 10000, type: "dakdjsid", batchNumber: " adsddada", manufacturer: "dasda" },
    { code: 1, previewImage: "https://clck.ru/33XVQd", price: 10000, type: "dakdjsid", batchNumber: " adsddada", manufacturer: "dasda" },
    { code: 1, previewImage: "https://clck.ru/33XVQd", price: 10000, type: "dakdjsid", batchNumber: " adsddada", manufacturer: "dasda" },
    { code: 1, previewImage: "https://clck.ru/33XVQd", price: 10000, type: "dakdjsid", batchNumber: " adsddada", manufacturer: "dasda" },
    { code: 1, previewImage: "https://clck.ru/33XVQd", price: 10000, type: "dakdjsid", batchNumber: " adsddada", manufacturer: "dasda" },
    { code: 1, previewImage: "https://clck.ru/33XVQd", price: 10000, type: "dakdjsid", batchNumber: " adsddada", manufacturer: "dasda" },

]

export default function DefaultPage() {
    return <div className="content">
        <DynamicAdaptive.Insert moveToMark="aside-content" />


        <Banner imageSrc={ICONS.autoZeon} href={"https://avtozeon.by/"} />
        <BannerSlider />
        <DynamicAdaptive.Delete at={850}>
            <div className="product-selections">
                <ProductSelection href="#" title="Техника Holt" imageSrc={ICONS.holt} />
                <ProductSelection href="#" title="Обогреватели" imageSrc={ICONS.heating} />
            </div>
        </DynamicAdaptive.Delete>

        <div className="products">{testProducts.map(product => <Product {...product} />)}</div>

    </div>

}