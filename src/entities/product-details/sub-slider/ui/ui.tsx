import "./styles.scss";
import { useSlickSlider } from "../../../../shared/lib/use-slick-slider";
import { sliderConfig } from "../lib/sliderConfig";
import ImageNotFoundIcon from "../../../../images/image-not-found.jpg"

type PropsType = {
    sliderItems: string[]
}

export function SubProductSlider({ sliderItems = [ImageNotFoundIcon] }: PropsType) {
    const { renderSliderItems } = useSlickSlider(".sub-product-details-card-slider", sliderConfig)

    function handleClick(index: number) {
        $(".sub-product-details-card-slider").slick('slickGoTo', index, true);
    }

    return <div className="sub-product-slider">{renderSliderItems(sliderItems, { onClick: handleClick })}</div>
}