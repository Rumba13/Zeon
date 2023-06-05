import "./styles.scss";
import { DefaultPageProductSelections } from "../../../widgets/DefaultPageGroup/productSelections";
import { DefaultPageProducts } from "../../../widgets/DefaultPageGroup/products";
import { DefaultPageBanner } from "../../../entities/DefaultPageGroup/banner";
import { BannerSlider } from "../../../entities/DefaultPageGroup/bannerSlider";

export function DefaultPage() {
    return <div className="default-page">
        <DefaultPageBanner/>
        <BannerSlider />
        <DefaultPageProductSelections />
        <DefaultPageProducts />
    </div>
}