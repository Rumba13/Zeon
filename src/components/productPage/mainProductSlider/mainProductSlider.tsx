import "./mainProductSlider.scss";
import { useEffect } from "react";
import { SlickEventObject, useSlickSlider } from "../../../shared/useSlickSlider";

type PropsType = {
    sliderItems: string[]
}

export default function MainProductSlider({ sliderItems }: PropsType) {
    const { renderSliderItems, addSlickEventListener } = useSlickSlider(".main-product-slider", {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    })

    useEffect(() => {
        addSlickEventListener("beforeChange", ({ nextSlide }: SlickEventObject) =>
            $(".sub-product-slider").slick('slickGoTo', nextSlide, true)
        )
        // TODO find better way to fix slider desynchronization
        addSlickEventListener("afterChange", ({ currentSlide }: SlickEventObject) =>
            $(".sub-product-slider").slick('slickGoTo', currentSlide, true)
        )
    }, [])

    return <div className="main-product-slider">
        {renderSliderItems(sliderItems)}
    </div>
}