import "./subProductSlider.scss";
import { useSlickSlider } from "../../../hooks/useSlickSlider";
import { useEffect } from "react";

type PropsType = {
    sliderItems: string[]
}

export default function SubProductSlider({ sliderItems }: PropsType) {
    const { renderSliderItems } = useSlickSlider(".sub-product-slider", {
        slidesToShow: 5,
        asNavFor: ".main-product-slider",
        
    })

    const handleClickCreator = (index: number) => {
        return () => {
            $(".sub-product-slider").slick('slickGoTo', index, true); 
        }
    }

    return <div className="sub-product-slider">
        {renderSliderItems(sliderItems, { handleClickCreator })}
    </div>
}