import "./styles.scss";
import { useEffect, useState } from "react";
import { Banner } from "../../../../shared/ui/banner";
import { BannerDto } from "../../../../pages/defaultPage/libs/dtos";
import { advertisingBannerService } from "../api/service";

type PropsType = {

}

export function AdvertisingBanner({ }: PropsType) {
    const [banner, setBanner] = useState<BannerDto | undefined>();

    useEffect(() => {
        advertisingBannerService.getBanner().then(setBanner);
    }, [advertisingBannerService])

    if(banner === undefined) {
        return <></>
    }

    return <Banner banner={banner} />
}