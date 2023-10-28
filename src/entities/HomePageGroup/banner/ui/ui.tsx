import "./styles.scss";
import { useEffect } from "react";
import { Banner } from "../../../../shared/ui/banner";
import { observer } from "mobx-react";
import Loading from "../../../../shared/ui/loading/ui";
import {homePageBannerState} from "../model/model";

type PropsType = {

}

export const HomeBanner = observer(({ }: PropsType) => {

    useEffect(() => {
        homePageBannerState.loadHomePageBanner()
    }, [homePageBannerState])

    if (!homePageBannerState.advertisingBanner) {
        return <Loading />
    }

    return <Banner banner={homePageBannerState.advertisingBanner} />
})