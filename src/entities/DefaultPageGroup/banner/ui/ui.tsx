import "./styles.scss";
import { useEffect } from "react";
import { loadAdvertisingBannerThunk } from "../model/model";
import { Loading } from "../../../../shared/ui//loading";
import { useAppDispatch, useAppSelector } from "../../../../shared/lib/hooks";
import { Banner } from "../../../../shared/ui/banner";

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