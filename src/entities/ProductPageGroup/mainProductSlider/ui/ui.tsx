import "./styles.scss";
import { useSlickSlider, SlickEventObject } from "../../../../shared/lib/useSlickSlider";
import { useEffect } from "react";
import { sliderConfig } from "../lib/sliderConfig";
import ImageNotFoundIcon from "../../../../images/image-not-found.jpg"

type PropsType = {
    sliderItems: string[]
}

export function MainProductSlider({ sliderItems = [ImageNotFoundIcon] }: PropsType) {
    const { renderSliderItems, addSlickEventListener } = useSlickSlider(".main-product-slider", sliderConfig)

    useEffect(() => {
        addSlickEventListener("beforeChange", ({ nextSlide }: SlickEventObject) =>
            $(".sub-product-slider").slick('slickGoTo', nextSlide, true)
        )
        //TOTHINK find better way to fix slider desynchronization
        addSlickEventListener("afterChange", ({ currentSlide }: SlickEventObject) =>
            $(".sub-product-slider").slick('slickGoTo', currentSlide, true)
        )
    }, [addSlickEventListener])

    return <div className="main-product-slider">{renderSliderItems(sliderItems)}</div>
}