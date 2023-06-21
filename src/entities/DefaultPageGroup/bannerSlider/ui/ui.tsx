import "./styles.scss";
import { useEffect } from "react";
import { Loading } from "../../../../shared/ui/loading";
import { useSlickSlider } from "../../../../shared/lib/useSlickSlider";
import { sliderConfig } from "../lib/sliderConfig"
import { useStore } from "../../../../shared/lib/hooks";
import { DefaultPageStateType } from "../../../../pages/defaultPage";
import { observer } from "mobx-react";
type PropsType = {}

export const BannerSlider = observer(({ }: PropsType) => {
    const state = useStore<DefaultPageStateType>(state => state.defaultPage);
    const { renderSliderItems } = useSlickSlider(".banner-slider", sliderConfig)

    useEffect(() => {
        state.loadSliderItems()
    }, [state])

    if (!state.sliderItems) {
        return <Loading />
    }

    return <div className="banner-slider">{renderSliderItems(state.sliderItems)}</div>
})