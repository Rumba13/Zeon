import "./styles.scss";
import { HomePageProducts } from "../../../widgets/DefaultPageGroup/products";
import { HomeBanner } from "../../../entities/home-page/banner";
import { HomePageProductSelections } from "../../../widgets/DefaultPageGroup/product-selections";
import { BannerSlider } from "../../../entities/home-page/banner-slider";

export function HomePage() {
    return <div className="default-page">
        <HomeBanner/>
        <BannerSlider />
        <HomePageProductSelections />
        <HomePageProducts />
    </div>
}