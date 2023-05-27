import { useSlickSlider } from "../../../shared/useSlickSlider";
import { ICONS } from "../../../images/images";
import "./bannerSlider.scss";

type PropsType = {
    items:string[]
}

export default function BannerSlider({items}:PropsType) {
    const { renderSliderItems } = useSlickSlider(".banner-slider", {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    })

    return <div className="banner-slider">{renderSliderItems(items)}</div>
}