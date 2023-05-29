import "./styles.scss";
import { useSlickSlider, SlickEventObject } from "../../../../shared/useSlickSlider";
import { useEffect } from "react";
import { sliderConfig } from "../lib/sliderConfig";

type PropsType = {
    sliderItems: string[]
}

export function MainProductSlider({ sliderItems }: PropsType) { //TODO refuck
    const { renderSliderItems, addSlickEventListener } = useSlickSlider(".main-product-slider", sliderConfig)

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