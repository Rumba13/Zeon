import "./bannerSlider.scss";
import { useEffect } from "react";
import { loadSliderItemsThunk } from "../model/model";
import { Loading } from "../../../../shared/ui//loading";
import { useSlickSlider } from "../../../../shared/lib/useSlickSlider";
import { sliderConfig } from "../lib/sliderConfig"
import { useAppDispatch, useAppSelector } from "../../../../shared/lib/hooks";
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