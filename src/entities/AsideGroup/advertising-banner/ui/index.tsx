import "./styles.scss";
import { useEffect, useState } from "react";
import { Banner } from "../../../../shared/ui/banner";
import { advertisingBannerService } from "../api/service";
import { BannerType } from "../../../../shared/api/types/banner-type";

type PropsType = {

}

export function AdvertisingBanner({ }: PropsType) {
    const [banner, setBanner] = useState<BannerType | undefined>();

    useEffect(() => {
        advertisingBannerService.getBanner().then(setBanner);
    }, [advertisingBannerService])

    if(banner === undefined) {
        return <></>
    }

    return <Banner banner={banner} />
}