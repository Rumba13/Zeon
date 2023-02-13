import Banner from "../banner/banner"
import "./content.scss"
import autoZeonBanner from "../../images/avtoZeonBanner.jpg"
import BannerSlider from "../bannerSlider/bannerSlider"
import ProductSelection from "../productSelection/productSelection"
import heatingImage from "../../images/heating.png"
import holtImage from "../../images/holt.png"
import Product, { ProductType } from "../product/product"

type PropsType = {}

const products: ProductType[] = [
    { href: "##", previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "dakdjsid jaildjiadjaisdjai jdiaida diadiaiddj iadjada" },
    { href: "##", previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { href: "##", previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { href: "##", previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { href: "##", previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { href: "##", previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { href: "##", previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { href: "##", previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { href: "##", previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { href: "##", previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },

]

export default function Content({ }: PropsType) {
    return <div className="content">
        <Banner imageSrc={autoZeonBanner} href={"https://avtozeon.by/"} />
        <BannerSlider />
        <ProductSelection href="#" title="Техника Holt" imageSrc={holtImage} />
        <ProductSelection href="#" title="Обогреватели" imageSrc={heatingImage} />

        <div className="products">{products.map(product => <Product {...product} />)}</div>
    </div>
}   