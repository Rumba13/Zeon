import "./styles.scss";
import { useSlickSlider, SlickEventObject } from "../../../../shared/lib/use-slick-slider";
import { useEffect } from "react";
import { sliderConfig } from "../lib/sliderConfig";
import ImageNotFoundIcon from "../../../../images/image-not-found.jpg"

type PropsType = {
    sliderItems: string[]
}

export function MainProductSlider({ sliderItems = [ImageNotFoundIcon] }: PropsType) {
    const { renderSliderItems, addSlickEventListener } = useSlickSlider(".main-product-details-card-slider", sliderConfig)

    useEffect(() => {
        addSlickEventListener("beforeChange", ({ nextSlide }: SlickEventObject) =>
            $(".sub-product-details-card-slider").slick('slickGoTo', nextSlide, true)
        )
        //TOTHINK find better way to fix slider desynchronization
        addSlickEventListener("afterChange", ({ currentSlide }: SlickEventObject) =>
            $(".sub-product-details-card-slider").slick('slickGoTo', currentSlide, true)
        )
    }, [addSlickEventListener])

    return <div className="main-product-slider">{renderSliderItems(sliderItems)}</div>
}