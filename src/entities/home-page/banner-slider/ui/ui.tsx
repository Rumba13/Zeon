import "./styles.scss";
import { useEffect } from "react";
import { useSlickSlider } from "../../../../shared/lib/use-slick-slider";
import { sliderConfig } from "../lib/sliderConfig"
import { observer } from "mobx-react";
import Loading from "../../../../shared/ui/loading/ui";
import {homeSliderState} from "../model/model";

type PropsType = {}

export const BannerSlider = observer(({ }: PropsType) => {
    const { renderSliderItems } = useSlickSlider(".advertising-banner-slider", sliderConfig)

    useEffect(() => {
        homeSliderState.loadSliderItems();
    }, [])

    if (!homeSliderState.sliderItems) {
        return <Loading />
    }

    return <div className="banner-slider">{renderSliderItems(homeSliderState.sliderItems)}</div>
})