import "./bannerSlider.scss";
import { useEffect } from "react";
import { loadSliderItemsThunk } from "../model/model";
import { useAppDispatch, useAppSelector } from "../../../../shared/hooks";
import { Loading } from "../../../../shared/loading";
import { useSlickSlider } from "../../../../shared/useSlickSlider";
import { sliderConfig } from "../lib/sliderConfig"
type PropsType = {}

export function BannerSlider({ }: PropsType) {
    const dispatch = useAppDispatch();
    const sliderItems = useAppSelector((state) => state.defaultPage.sliderItems);
    
    const { renderSliderItems } = useSlickSlider(".banner-slider", sliderConfig)
    
    useEffect(() => {
        dispatch(loadSliderItemsThunk());
    }, [dispatch, loadSliderItemsThunk])



    if (!sliderItems) {
        return <Loading />
    }

    return <div className="banner-slider">{renderSliderItems(sliderItems)}</div>
}