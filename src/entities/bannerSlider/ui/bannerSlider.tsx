import { useSlickSlider } from "../../../shared/useSlickSlider";
import "./bannerSlider.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks";
import { Loading } from "../../../shared/loading";
import { loadSliderItemsThunk } from "../model/model";

type PropsType = {}

export default function BannerSlider({}: PropsType) {
    const dispatch = useAppDispatch();
    const sliderItems = useAppSelector((state) => state.defaultPage.sliderItems);

    useEffect(() => {
        dispatch(loadSliderItemsThunk());
    }, [dispatch, loadSliderItemsThunk])

    const { renderSliderItems } = useSlickSlider(".banner-slider", {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    })

    if (!sliderItems) {
        return <Loading />
    }

    return <div className="banner-slider">{renderSliderItems(sliderItems)}</div>
}