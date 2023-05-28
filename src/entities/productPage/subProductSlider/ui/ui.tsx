import "./styles.scss";
import { useSlickSlider } from "../../../../shared/useSlickSlider";
import { sliderConfig } from "../lib/sliderConfig";

type PropsType = {
    sliderItems: string[]
}

export function SubProductSlider({ sliderItems }: PropsType) {
    const { renderSliderItems } = useSlickSlider(".sub-product-slider", sliderConfig)

    const handleClickCreator = (index: number) => {
        return () => {
            $(".sub-product-slider").slick('slickGoTo', index, true);
        }
    }

    return <div className="sub-product-slider">
        {renderSliderItems(sliderItems, { handleClickCreator })}
    </div>
}