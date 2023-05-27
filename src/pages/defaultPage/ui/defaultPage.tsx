import "./defaultPage.scss";
import BannerSlider from "../../../entities/bannerSlider/ui/bannerSlider";
import { ProductSelections } from "../../../widgets/defaultPage/productSelections";
import { Products } from "../../../widgets/defaultPage/products";
import { Banner } from "../../../entities/banner";


export function DefaultPage() {
    return <div className="default-page">
        <Banner/>
        <BannerSlider />
        <ProductSelections />
        <Products />
    </div>
}