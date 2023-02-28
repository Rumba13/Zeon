import Banner from "../banner/banner";
import BannerSlider from "../bannerSlider/bannerSlider";
import Product, { ProductType } from "../product/product";
import ProductSelection from "../productSelection/productSelection";
import "./mainPage.css";
import { ICONS } from "../../images/images";

const products: ProductType[] = [
    { id: 1, previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "dakdjsid jaildjiadjaisdjai jdiaida diadiaiddj iadjada" },
    { id: 2, previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { id: 3, previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { id: 4, previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { id: 5, previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { id: 6, previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { id: 7, previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { id: 8, previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { id: 9, previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { id: 10, previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
]

export default function MainPage() {
    return <div className="content">
        <Banner imageSrc={ICONS.autoZeon} href={"https://avtozeon.by/"} />
        <BannerSlider />
        <ProductSelection href="#" title="Техника Holt" imageSrc={ICONS.holt} />
        <ProductSelection href="#" title="Обогреватели" imageSrc={ICONS.heating} />

        <div className="products">{products.map(product => <Product {...product} />)}</div>
    </div>
}