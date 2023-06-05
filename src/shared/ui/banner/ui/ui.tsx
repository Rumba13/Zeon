import { AdvertisingBannerDto } from "../../../../pages/defaultPage/libs/dtos";
import "./styles.scss";

type PropsType = { //TODO change naming to BannerDto
    banner:AdvertisingBannerDto
}

export function Banner({ banner}: PropsType) {
    return <a href={banner.href} className="banner">
        <img src={banner.img} alt="" />
    </a>
}