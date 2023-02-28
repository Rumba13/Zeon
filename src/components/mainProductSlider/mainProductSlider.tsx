import React from "react";
import { ICONS } from "../../images/images";
import "./mainProductSlider.scss";

type PropsType = {

}

export default function MainProductSlider() {
    const slickSliderRef = React.createRef<HTMLDivElement>();

    function activateSlickSlider() {
        $('.main-product-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }

    setTimeout(activateSlickSlider, 0)

    return <div ref={slickSliderRef} className="main-product-slider">
        <div className="slider__item">
            <img src={ICONS.slider1} alt="" />
        </div>
        <div className="slider__item">
            <img src={ICONS.slider2} alt="" />
        </div>
        <div className="slider__item">
            <img src={ICONS.slider3} alt="" />
        </div>
        <div className="slider__item">
            <img src={ICONS.slider4} alt="" />
        </div>
    </div>
}