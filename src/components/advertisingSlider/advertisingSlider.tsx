import "./advertisingSlider.scss";
import { ICONS } from "../../images/images";
import { useSlickSlider } from "../../app/hooks/useSlickSlider";

export default function AdvertisingSlider() {
    const { renderSliderItems } = useSlickSlider(".advertising-slider", {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    })

    return <div className="advertising-slider">
        {renderSliderItems([ICONS.slider1, ICONS.slider2, ICONS.slider3, ICONS.slider4])}
    </div>
}