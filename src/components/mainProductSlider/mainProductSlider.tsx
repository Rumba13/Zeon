import React from "react";
import "./mainProductSlider.scss";
import sliderImage1 from "../../images/sliderImage1.jpg"
import sliderImage2 from "../../images/sliderImage2.jpg"
import sliderImage3 from "../../images/sliderImage3.jpg"
import sliderImage4 from "../../images/sliderImage4.jpg"

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
            <img src={sliderImage1} alt="" />
        </div>
        <div className="slider__item">
            <img src={sliderImage2} alt="" />
        </div>
        <div className="slider__item">
            <img src={sliderImage3} alt="" />
        </div>
        <div className="slider__item">
            <img src={sliderImage4} alt="" />
        </div>
    </div>
}