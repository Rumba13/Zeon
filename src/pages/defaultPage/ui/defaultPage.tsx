import "./defaultPage.scss";
import { ProductSelections } from "../../../widgets/defaultPage/productSelections";
import { Products } from "../../../widgets/defaultPage/products";
import BannerSlider from "../../../entities/defaultPage/bannerSlider/ui/bannerSlider";
import { Banner } from "../../../entities/defaultPage/banner";

export function DefaultPage() {
    return <div className="default-page">
        <Banner/>
        <BannerSlider />
        <ProductSelections />
        <Products />
    </div>
}