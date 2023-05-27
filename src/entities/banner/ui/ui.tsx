import "./styles.scss";
import { useEffect } from "react";
import { AdvertisingBannerDto } from "../../../pages/defaultPage/libs/dtos";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks";
import { Loading } from "../../../shared/loading";
import Banner from "../../../shared/banner/banner";
import { loadAdvertisingBannerThunk } from "../model/model";

type PropsType = {

}

export function DefaultPageBanner({ }: PropsType) { //TODO abstract
    const dispatch = useAppDispatch();
    const banner = useAppSelector((state) => state.defaultPage.advertisingBanner);

    useEffect(() => {
        dispatch(loadAdvertisingBannerThunk());
    }, [dispatch, loadAdvertisingBannerThunk])


    if (!banner) {
        return <Loading />
    }

    return <Banner banner={banner}/>
}