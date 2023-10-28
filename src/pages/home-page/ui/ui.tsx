import "./styles.scss";
import { Products } from "../../../widgets/recommended-products";
import { HomeBanner } from "../../../entities/HomePageGroup/banner";
import { ProductSelections } from "../../../widgets/product-categories";
import { BannerSlider } from "../../../entities/HomePageGroup/banner-slider";

export function HomePage() {
    return <div className="home-page">
        <HomeBanner/>
        <BannerSlider />
        <ProductSelections />
        <Products />
    </div>
}