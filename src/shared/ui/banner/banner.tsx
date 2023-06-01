import { AdvertisingBannerDto } from "../../../pages/defaultPage/libs/dtos";
import "./banner.scss";

type PropsType = {
    banner:AdvertisingBannerDto
}

export default function Banner({ banner}: PropsType) {
    return <a href={banner.href} className="banner">
        <img src={banner.img} alt="" />
    </a>
}