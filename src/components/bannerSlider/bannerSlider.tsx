import "./bannerSlider.scss";
import { ICONS } from "../../images/images";
import { useSlickSlider } from "../sliders/useSlickSlider";

export default function BannerSlider() {

    const {renderSliderItems} = useSlickSlider(".banner-slider", {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed: 3000
    })
    
    return <div className="banner-slider">{renderSliderItems([ICONS.slider1,ICONS.slider2,ICONS.slider3,ICONS.slider4])}</div>
}